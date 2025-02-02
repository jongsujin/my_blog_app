'use server'
import { API, APIError } from '../instance'
import { Post } from '@my-blog/types'

export const getPosts = async (page: number, limit: number) => {
  try {
    const response = await fetch(
      `${API.baseURL}/api/posts?page=${page}&limit=${limit}`,
      {
        method: 'GET',
        headers: API.headers,
      },
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error in getPosts:', error)
    throw new APIError(500, 'Failed to fetch posts')
  }
}

export const getPostById = async (id: number) => {
  try {
    const response = await fetch(`${API.baseURL}/api/posts/${id}`, {
      method: 'GET',
      headers: API.headers,
    })
    const data: Post = await response.json()
    return data
  } catch (error) {
    console.error('Error in getPostById:', error)
    throw new APIError(500, 'Failed to fetch post')
  }
}

export const getPostsByTagId = async (
  id: number,
  page: number,
  limit: number,
) => {
  try {
    const response = await fetch(
      `${API.baseURL}/api/tags/${id}?page=${page}&limit=${limit}`,
      {
        method: 'GET',
        headers: API.headers,
      },
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error in getPostsByTagId:', error)
    throw new APIError(500, 'Failed to fetch posts by tag id')
  }
}
