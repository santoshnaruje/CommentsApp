import {Component} from 'react'
import {v4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

class Comments extends Component {
  state = {comments: [], name: '', comment: ''}

  changeName = e => {
    this.setState({name: e.target.value})
  }

  changeComment = e => {
    this.setState({comment: e.target.value})
  }

  likedComment = id => {
    console.log(id)
    const {comments} = this.state
    this.setState({
      comments: comments.map(eachComment =>
        eachComment.id === id
          ? {...eachComment, isLiked: !eachComment.isLiked}
          : eachComment,
      ),
    })
  }

  deleteComment = id => {
    console.log(id)
    const {comments} = this.state
    this.setState({
      comments: comments.filter(eachComment => eachComment.id !== id),
    })
  }

  updateValue = e => {
    e.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: v4(),
      name,
      comment,
      isLiked: 'false',
    }
    this.setState(state => ({
      comments: [...state.comments, newComment],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {name, comment, comments} = this.state
    return (
      <div className="container">
        <h1>Comments</h1>
        <div className="row">
          <p className="mt-3 mb-3">Say Something about 4.0 technologies</p>
          <form className="col-12 col-md-6">
            <div className="mb-3">
              <input
                onChange={this.changeName}
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Your Name"
                value={name}
              />
            </div>
            <div className="mb-3">
              <textarea
                onChange={this.changeComment}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your Comment"
                value={comment}
              />
            </div>
            <button
              type="submit"
              onClick={this.updateValue}
              className="btn btn-primary btn-lg"
            >
              Add Comment
            </button>
          </form>
          <div className=" mr-3 col-12 col-md-6 image">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              alt="comments"
            />
          </div>
        </div>
        <hr />
        <h5>
          <span className="badge bg-primary">{comments.length}</span> &nbsp;
          Comments
        </h5>
        <ul>
          {comments.map(eachComment => (
            <CommentItem
              data={eachComment}
              key={eachComment.id}
              deleteComment={this.deleteComment}
              likedComment={this.likedComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
