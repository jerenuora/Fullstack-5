import axios from 'axios'
import Blog from '../components/Blog'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request.data
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = async (id, blog) => {
  const config = {
    headers: { Authorization: token },
  }
  const changedBlog = { ...blog, likes: blog.likes + 1 }
  const response = await axios.put(`${baseUrl}/${id}`, changedBlog, config)
  return response.data
}

export default { getAll, create, update, setToken }