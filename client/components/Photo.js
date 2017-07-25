import React from 'react'
import { Link } from 'react-router'

const Photo = React.createClass({
  render() {
    const { post, i, comments } = this.props
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            {post.caption}
          </Link>
        </div>
      </figure>
    )
  }
})

export default Photo