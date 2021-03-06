import React, { Component } from 'react'
import { connect } from 'react-redux'

class CommentList extends Component {
  render() {
    return (
      <div>
        <h4>Comments</h4>
        <ul>{this.renderComments()}</ul>
      </div>
    )
  }

  renderComments() {
    return this.props.comments.map((comment, i) => <li key={i}>{comment}</li>)
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
})

export default connect(mapStateToProps)(CommentList)
