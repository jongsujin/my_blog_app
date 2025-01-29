import { PostInitial, PostListDTO, ResponseProps } from '@my-blog/types'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createPost, getPostById, getPosts } from './api.server'

// 게시글 전체 조회
export const useGetPosts = (page: number, limit: number) => {
  return useQuery<ResponseProps<PostListDTO>>({
    queryKey: ['posts'],
    queryFn: () => getPosts(page, limit),
  })
}

// 게시글 상세 조회
export const useGetPostById = (id: number) => {
  return useQuery<PostListDTO>({
    queryKey: ['post', id],
    queryFn: () => getPostById(id),
  })
}

// 게시글 생성
export const useCreatePost = (post: PostInitial) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: () => createPost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      alert('게시글 생성 완료')
    },
    onError: () => {
      alert('게시글 생성 실패')
    },
  })
}
