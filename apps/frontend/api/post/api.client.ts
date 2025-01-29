import { API, APIError } from '../instance'
import { PostInitial } from '@my-blog/types'

export const createPost = async (post: PostInitial) => {
  try {
    const response = await fetch(`${API.baseURL}/api/posts`, {
      method: 'POST',
      headers: API.headers,
      body: JSON.stringify(post),
    })

    if (!response.ok) {
      throw new Error('Failed to create post')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error in createPost:', error)
    throw new APIError(500, 'Failed to create post')
  }
}
