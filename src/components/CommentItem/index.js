// Write your code here
import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import './index.css'

class CommentItem extends Component {
  likeComment = () => {
    const {likedComment} = this.props
    const {data} = this.props
    const {id} = data
    likedComment(id)
  }

  deleteComment = () => {
    const {deleteComment} = this.props
    const {data} = this.props
    const {id} = data
    deleteComment(id)
  }

  render() {
    const {data} = this.props
    const {name, comment, isLiked} = data
    console.log(isLiked)
    return (
      <li>
        <div className="d-flex flex-row align-items-center">
          <h1 className="m-3 circle">{name.slice(0, 1)}</h1>

          <p className="m-3">{name}</p>
          <p className="m-3"> {formatDistanceToNow(new Date())}</p>
        </div>
        <div>
          <p className="m-3">{comment}</p>
        </div>

        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex flex-row mr-3 ml-3">
            {isLiked ? (
              <img
                className="m-3"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
                alt="liked"
              />
            ) : (
              <img
                className="m-3"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
                alt="like"
              />
            )}
            <button
              type="button"
              onClick={this.likeComment}
              className="btn btn-light"
            >
              Like
            </button>
          </div>
          <div>
            <button
              className="delete-button"
              data-testid="delete"
              type="button"
              onClick={this.deleteComment}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
                alt="delete"
              />
            </button>
          </div>
        </div>
        <hr />
      </li>
    )
  }
}

export default CommentItem
