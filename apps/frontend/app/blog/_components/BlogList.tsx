'use client'

import Background from '@/shared/component/ui/Background'
import LoadingMoreList from './LoadingMoreList'
import GridPostList from './GridPostList'
import FeaturedPost from './FeaturedPost'
import { useGetPostsByInfiniteScroll } from '@/api/post/query.client'
import PostSkeletonList from '@/shared/component/ui/Skeleton/PostSkeletonList'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { PostListDTO, ResponseProps } from '@my-blog/types'

export default function BlogList({
  initialData,
}: {
  initialData: ResponseProps<PostListDTO>
}) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useGetPostsByInfiniteScroll({
      initialData: {
        pages: [initialData],
        pageParams: [1],
      },
    })

  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  if (isLoading) {
    return <PostSkeletonList />
  }

  const allPosts = data?.pages.flatMap((page) => page.content) ?? []
  const featuredPost = allPosts[0]
  const remainingPosts = allPosts.slice(1)
  return (
    <Background>
      <div className="mx-auto max-w-6xl p-6 md:p-8">
        <div className="space-y-8">
          {/* Featured Post */}
          {featuredPost && <FeaturedPost data={featuredPost} />}

          {/* Grid of Posts */}
          <GridPostList data={remainingPosts} />

          {/* Loading More Indicator */}
          <div ref={ref} className="mt-8">
            <LoadingMoreList isMoreFetch={isFetchingNextPage} />
          </div>
        </div>
      </div>
    </Background>
  )
}
