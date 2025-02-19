'use client'

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '../shared/component/ui/Card'
import Background from '@/shared/component/ui/Background'
import { useGetPostsByInfiniteScroll } from '@/api/post/query.client'
import { Tag } from '@/shared/component/ui/Tag'
import PostSkeleton from '@/shared/component/ui/Skeleton/PostSkeleton'

export default function BlogPage() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useGetPostsByInfiniteScroll()

  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  if (isLoading) {
    return (
      <Background>
        <div className="mx-auto max-w-6xl p-6 md:p-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <PostSkeleton key={i} />
            ))}
          </div>
        </div>
      </Background>
    )
  }

  const allPosts = data?.pages.flatMap((page) => page.content) ?? []
  const featuredPost = allPosts[0]
  const remainingPosts = allPosts.slice(1)

  return (
    <Background>
      <div className="mx-auto max-w-6xl p-6 md:p-8">
        <div className="space-y-8">
          {/* Featured Post */}
          {featuredPost && (
            <Link key={featuredPost.id} href={`/blog/${featuredPost.id}`}>
              <Card
                className={`overflow-hidden transition-transform hover:scale-[1.02]`}
              >
                <CardContent className="p-0">
                  <div className="flex h-full flex-col md:flex-row">
                    <div className={`w-full pr-5 md:w-1/3`}>
                      <Image
                        src={
                          featuredPost.thumbnail || '/thumbnails/default.jpg'
                        }
                        alt={featuredPost.title}
                        width={400}
                        height={300}
                        className="h-48 w-full rounded-lg object-cover"
                        priority
                      />
                    </div>
                    <div className="w-full p-8 md:w-2/3">
                      <p className="text-sm text-textColor">
                        {new Date(featuredPost.publishedAt).toLocaleDateString(
                          'ko-KR',
                        )}
                      </p>
                      <h2 className="mt-2 text-2xl font-bold text-textColor md:text-3xl">
                        {featuredPost.title}
                      </h2>
                      <p className="mt-2 text-lg text-textColor">
                        {featuredPost.description}
                      </p>
                      <div className="mt-8 flex flex-row gap-2">
                        {featuredPost.tags &&
                          featuredPost.tags.map((tag: string) => (
                            <Tag key={tag} tag={tag} />
                          ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )}

          {/* Grid of Posts */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="h-full transition-transform hover:scale-[1.02]">
                  <CardContent className="flex h-full flex-col p-0">
                    <div className="mb-2">
                      <Image
                        src={post.thumbnail || '/thumbnails/default.jpg'}
                        alt={post.title}
                        width={400}
                        height={300}
                        className="h-40 w-full rounded-lg object-cover"
                        priority
                      />
                    </div>
                    <div className="p-6 text-textColor">
                      <p className="text-sm">
                        {new Date(post.publishedAt).toLocaleDateString('ko-KR')}
                      </p>
                      <h2 className="mt-2 text-xl font-semibold">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-lg">{post.description}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {post.tags?.map((tag: string) => (
                          <Tag key={tag} tag={tag} />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Loading More Indicator */}
          <div ref={ref} className="mt-8">
            {isFetchingNextPage && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <PostSkeleton key={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Background>
  )
}
