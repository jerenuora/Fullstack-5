import React, { useState } from 'react'

const Blog = ({ blog, updateBlog }) => {
  const [showFullInfo, setShowFullInfo] = useState(false)

  const updateLike = async (event) => {
    event.preventDefault()
    updateBlog(blog.id,blog)
  }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 2,
    marginBottom: 5
  }
  if (showFullInfo) {
    console.log(blog.user)
    return (
      <div style={blogStyle}>
        <div> 
          {blog.title} {blog.author}
          <button onClick={()=> setShowFullInfo(false)}>hide</button>
          <div>
          {blog.url}
          </div>
          <div>
          likes {blog.likes} <button onClick={updateLike}>like</button>
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