'use client'

import { useGetPostsByTagId } from '@/api/post/query.client'
import Background from '@/shared/component/ui/Background'
import { Card, CardContent } from '@/shared/component/ui/Card'
import Image from 'next/image'
import Link from 'next/link'
import { Tag } from '@/shared/component/ui/Tag'

interface TagPostContentProps {
  tagId: number
}
export default function TagPostContent({ tagId }: TagPostContentProps) {
  const { data, isLoading } = useGetPostsByTagId(tagId, 1, 10)
  if (isLoading) return <div>Loading...</div>
  return (
    <Background>
      <div className="mx-auto max-w-6xl p-6 md:p-8">
        <p className="py-10 text-center text-2xl font-bold text-textColor">
          {data?.content?.[0].tags[0]} 태그 목록
        </p>
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data &&
            data.content?.map((post) => (
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
                      <p className="text-sm text-textColor">
                        {new Date(post.publishedAt).toLocaleDateString('ko-KR')}
                      </p>
                      <h2 className="mt-2 text-xl font-semibold text-textColor">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-lg text-textColor">
                        {post.description}
                      </p>
                      <div className="mt-2 flex flex-row gap-2">
                        {post.tags &&
                          post.tags.map((tag: string) => (
                            <Tag key={tag} tag={tag} />
                          ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
        </div>
      </div>
    </Background>
  )
}
