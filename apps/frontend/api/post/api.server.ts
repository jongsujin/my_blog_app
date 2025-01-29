'use server'
import { API, APIError } from '../instance'
import { Post, PostInitial } from '@my-blog/types'

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

export const createPost = async (post: PostInitial) => {
  try {
    const formData = new FormData()

    // 이미지가 base64 문자열인 경우 파일로 변환
    const base64ToFile = async (base64String: string) => {
      const res = await fetch(base64String)
      const blob = await res.blob()
      return new File([blob], 'image.jpg', { type: 'image/jpeg' })
    }

    // content에서 base64 이미지 추출 및 변환
    const imgRegex = /src="data:image\/[^;]+;base64[^"]+"/g
    const matches = post.content.match(imgRegex)

    if (matches) {
      const base64String = matches[0].split('src="')[1].slice(0, -1)
      const file = await base64ToFile(base64String)
      formData.append('thumbnail', file)
    }

    // 나머지 데이터 추가
    formData.append('title', post.title)
    formData.append('content', post.content)
    formData.append('tags', JSON.stringify(post.tags))
    formData.append('slug', post.slug)

    const response = await fetch(`${API.baseURL}/api/posts`, {
      method: 'POST',
      body: formData,
    })

    return await response.json()
  } catch (error) {
    console.error('Error in createPost:', error)
    throw new APIError(500, 'Failed to create post')
  }
}
