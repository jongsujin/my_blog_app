import { PostListDTO } from '@my-blog/types'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/shared/component/ui/Card'
import { Tag } from '@/shared/component/ui/Tag'

export default function FeaturedPost({ data }: { data: PostListDTO }) {
  return (
    <Link key={data.id} href={`/blog/${data.id}`}>
      <Card
        className={`overflow-hidden transition-transform hover:scale-[1.02]`}
      >
        <CardContent className="p-0">
          <div className="flex h-full flex-col md:flex-row">
            <div className={`w-full pr-5 md:w-1/3`}>
              <Image
                src={data.thumbnail || '/thumbnails/default.jpg'}
                alt={data.title}
                width={400}
                height={300}
                className="h-48 w-full rounded-lg object-cover"
                priority
              />
            </div>
            <div className="w-full p-8 md:w-2/3">
              <p className="text-sm text-textColor">
                {new Date(data.publishedAt).toLocaleDateString('ko-KR')}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-textColor md:text-3xl">
                {data.title}
              </h2>
              <p className="mt-2 text-lg text-textColor">{data.description}</p>
              <div className="mt-8 flex flex-row gap-2">
                {data.tags &&
                  data.tags.map((tag: string) => <Tag key={tag} tag={tag} />)}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
