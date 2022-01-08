import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Blog from './Blog'

test('Blog renders title, author, not url, likes', () => {
  const blog = {
    title: 'A title',
    author: 'An author',
    url: 'www.url.com',
    likes: 12
  }
  // const mockUpdate = jest.fn()
  // const mockDelete = jest.fn()

  const component = render(
    <Blog blog={blog} />
  )
  expect(component.container).toHaveTextContent(
    'A title'
  )
  expect(component.container).toHaveTextContent(
    'An author'
  )
  expect(component.container).not.toHaveTextContent(
    'www.url.com'
  )
  expect(component.container).not.toHaveTextContent(
    12
  )
})
