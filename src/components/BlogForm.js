import React, { useState } from "react"

const BlogForm = ({ createBlog }) => {
    const [newTitle, setNewTitle] = useState('')
    const [newAuthor, setNewAuthor] = useState('')
    const [newUrl, setNewUrl] = useState('')
    const addBlog = async (event) => {
        event.preventDefault()
        createBlog({
          title: newTitle,
          author: newAuthor,
          url: newUrl
                })
    
        setNewTitle('')
        setNewAuthor('')
        setNewUrl('')
    
          }
    return (
    <form onSubmit={addBlog}>
      <h2>Create new blog</h2>
      <p>
      title:
      <input
        type="text"
        value={newTitle}
        name="blog"
        onChange={({ target }) => setNewTitle(target.value)}
      />
      </p>
      <p>
      author:
      <input
        type="text"
        value={newAuthor}
        name="blog"
        onChange={({ target }) => setNewAuthor(target.value)}
      />
      </p>
      <p>
      url:
      <input
        type="text"
        value={newUrl}
        name="blog"
        onChange={({ target }) => setNewUrl(target.value)}
      />
      </p>
      <button type="submit">create</button>
    </form>  
  )
}
export default BlogForm