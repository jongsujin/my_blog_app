import { PostListDTO } from '@my-blog/types'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/shared/component/ui/Card'
import { Tag } from '@/shared/component/ui/Tag'

export default function GridPostList({ data }: { data: PostListDTO[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((post) => (
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
                <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
                <p className="mt-2 text-lg">{post.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {post.tags?.map((tag: string) => <Tag key={tag} tag={tag} />)}
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
