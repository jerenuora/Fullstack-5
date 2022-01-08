import React, { useState } from 'react'

const Blog = ({ blog }) => {
  const [showFullInfo, setShowFullInfo] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 2,
    marginBottom: 5
  }
  if (showFullInfo) {
    return (
      <div style={blogStyle}>
        <div> 
          {blog.title} {blog.author}
          <button onClick={()=> setShowFullInfo(false)}>hide</button>
          <div>
          {blog.url}
          </div>
          <div>
          likes {blog.likes} <button >like</button>
          </div>
          <div>
          {blog.user.username}
          </div>
        </div>

    </div>
  )} else { 
    return (
    <div style={blogStyle}>
      <div> 
        {blog.title} {blog.author}
      <button onClick={()=> setShowFullInfo(true)}>view</button>
      </div>

  </div>
)

}
}

export default Blog