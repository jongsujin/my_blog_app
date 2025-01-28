import { getPostById } from '@/api/post/api.server'
import Background from '@/shared/component/ui/Background'
import { Card, CardContent } from '@/shared/component/ui/Card'
import CommentForm from '@/shared/component/ui/Comment/CommentForm'
import CommentResponse from '@/shared/component/ui/Comment/CommentResponse'
import { Tag } from '@/shared/component/ui/Tag'
import { ChevronLeft } from 'lucide-react'
import Link from "next/link"





export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const comments = [
    {
      author: "Fanta Jin",
      content: "헉 안녕하세요! 아래에 글 남긴 달봄입니다.",
      date: "2024. 12. 10",
      avatarUrl: "/path/to/avatar.jpg"
    },
    {
      author: "Fanta Jin",
      content: "헉 안녕하세요! 아래에 글 남긴 달봄입니다.",
      date: "2024. 12. 10",
      avatarUrl: "/path/to/avatar.jpg"
    },
  
  ]

  const resolvedParams = await params;
  console.log(resolvedParams)

  const postData = await getPostById(Number(resolvedParams.id));
  console.log(postData)
  return (
    <Background>
      <div className="mx-auto max-w-4xl p-6 md:p-8">
        {/* Back Button */}
        <Link
          href="/blog"
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
                <p className="text-sm text-textColor"> {new Date(postData.publishedAt).toLocaleDateString("ko-KR")}</p>
                <h1 className="text-3xl font-bold tracking-tight text-textColor md:text-4xl lg:text-5xl">
                  {postData.title}
                </h1>
                {/* <p className="text-xl text-textColor">{post.description}</p> */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {postData && postData.tags && postData.tags.map((tag: string) => (
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
            <CardContent className="prose prose-textColor max-w-none p-8 md:p-12">
              {postData.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-textColor">
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between pt-8">
            <Link
              href={`/blog/${postData.id - 1}`}
              className={`text-textColor hover:text-hoverColor ${postData.id <= 1 ? 'invisible' : ''}`}
            >
              ← 이전 글
            </Link>
            <Link
              href={`/blog/${postData.id + 1}`}
              className="text-textColor hover:text-hoverColor"
            >
              다음 글 →
            </Link>
          </div>
        </article>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-textColor mb-6">댓글</h2>
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

