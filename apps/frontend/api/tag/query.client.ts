import { ResponseProps, Tag } from '@my-blog/types'
import { useQuery } from '@tanstack/react-query'
import { getTags } from './api.server'

export const useGetTags = () => {
  return useQuery<ResponseProps<Tag>>({
    queryKey: ['tags'],
    queryFn: () => getTags(),
  })
}
