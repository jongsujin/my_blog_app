'use client'

import { useGetPostById } from '@/api/post/query.client'
import Background from '@/shared/component/ui/Background'
import { Card, CardContent } from '@/shared/component/ui/Card'
import CommentForm from '@/shared/component/ui/Comment/CommentForm'
import CommentResponse from '@/shared/component/ui/Comment/CommentResponse'
import { Tag } from '@/shared/component/ui/Tag'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

interface CommentProps {
  author: string
  content: string
  date: string
  avatarUrl: string
}
export default function BlogPostContent({
  postId,
  comments,
}: {
  postId: number
  comments: CommentProps[]
}) {
  const { data: postData } = useGetPostById(postId)
  console.log('postData', postData)
  return (
    <Background>
      <div className="mx-auto max-w-4xl p-6 md:p-8">
        {/* Back Button */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-sm text-textColor hover:text-hoverColor"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Blog
        </Link>

        <article className="space-y-8">
          {/* Header */}
          <Card>
            <CardContent className="p-8">
              <div className="space-y-4">
                <p className="text-sm text-textColor">
                  {postData &&
                    new Date(postData.publishedAt).toLocaleDateString('ko-KR')}
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-textColor md:text-4xl lg:text-5xl">
                  {postData?.title}
                </h1>
                <p className="text-xl text-textColor">
                  {postData?.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {postData &&
                    postData.tags &&
                    postData.tags.map((tag: string) => (
                      <Tag key={tag} tag={tag} />
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Featured Image */}
          {/* <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div> */}

          {/* Content */}
          <Card>
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg prose-stone max-w-none dark:prose-invert">
                <div
                  dangerouslySetInnerHTML={{ __html: postData?.content || '' }}
                  className="text-textColor [&_.ql-code-block]:rounded-md [&_.ql-code-block]:bg-gray-400 [&_.ql-code-block]:p-4 [&_.ql-code-block]:font-mono [&_.ql-code-block]:text-textColor [&_.ql-indent-1]:ml-4"
                />
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between pt-8">
            <Link
              href={`/blog/${postData?.id ? postData.id - 1 : ''}`}
              className={`text-textColor hover:text-hoverColor ${postData?.id ? (postData.id <= 1 ? 'invisible' : '') : ''}`}
            >
              ← 이전 글
            </Link>
            <Link
              href={`/blog/${postData?.id ? postData.id + 1 : ''}`}
              className="text-textColor hover:text-hoverColor"
            >
              다음 글 →
            </Link>
          </div>
        </article>
        <div className="mt-8">
          <h2 className="mb-6 text-2xl font-bold text-textColor">댓글</h2>
          <CommentForm />

          <div className="space-y-4">
            {comments.map((comment, index) => (
              <CommentResponse
                key={index}
                author={comment.author}
                content={comment.content}
                date={comment.date}
                avatarUrl={comment.avatarUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </Background>
  )
}
