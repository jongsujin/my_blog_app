import { PostInitial, PostListDTO, ResponseProps } from '@my-blog/types'
import {
  InfiniteData,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import { getPostById, getPosts, getPostsByTagId } from './api.server'
import { createPost } from './api.client'
import { useRouter } from 'next/navigation'

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

// 게시글 생성성
export const useCreatePost = (post: PostInitial) => {
  const router = useRouter()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: () => createPost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      alert('게시글 생성 완료')
      router.push('/')
    },
    onError: () => {
      alert('게시글 생성 실패')
    },
  })
}

// 태그 아이디 기반 게시글 조회
export const useGetPostsByTagId = (id: number, page: number, limit: number) => {
  return useQuery<ResponseProps<PostListDTO>>({
    queryKey: ['posts', id],
    queryFn: () => getPostsByTagId(id, page, limit),
  })
}

// 게시글 무한 스크롤 조회
export const useGetPostsByInfiniteScroll = (options?: {
  initialData?: InfiniteData<ResponseProps<PostListDTO>>
}) => {
  return useInfiniteQuery({
    queryKey: ['posts', 'infinite'],
    queryFn: ({ pageParam = 1 }) => getPosts(pageParam as number, 3),
    getNextPageParam: (lastPage: ResponseProps<PostListDTO>) => {
      if (!lastPage?.content) return undefined
      return lastPage.hasNextPage ? (lastPage.page as number) + 1 : undefined
    },
    initialPageParam: 1,
    initialData: options?.initialData,
  })
}
