import Background from '@/shared/component/ui/Background'
import { Card, CardContent } from '@/shared/component/ui/Card'
import CommentForm from '@/shared/component/ui/Comment/CommentForm'
import CommentResponse from '@/shared/component/ui/Comment/CommentResponse'
import { Tag } from '@/shared/component/ui/Tag'
import { Post } from '@/types/post'
import { ChevronLeft } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"



// 실제 환경에서는 데이터베이스나 CMS에서 가져올 데이터입니다
export const getPost = (id: string): Post => {
  return {
    id: parseInt(id),
    title: "Understanding UI Design Principles",
    date: "March 15, 2024",
    description: "Learn the fundamental principles that guide effective user interface design and create better experiences.",
    gradient: "from-blue-200 via-blue-100 to-white",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      Design is not just about making things look pretty – it's about solving problems and creating intuitive, 
      enjoyable experiences for users. In this comprehensive guide, we'll explore the fundamental principles 
      that every UI designer should know and understand.

      Good design is about more than just aesthetics. It's about understanding your users, their needs, 
      and how they interact with your product. When we talk about UI design principles, we're really 
      talking about the guidelines that help us create interfaces that are both beautiful and functional.

      Here are some key principles we'll explore:

      1. Hierarchy
      Visual hierarchy is about organizing elements by importance. This helps users understand your interface 
      at a glance and know where to focus their attention.

      2. Consistency
      Consistent design creates familiarity and helps users navigate your interface more efficiently. This 
      includes consistent use of colors, typography, spacing, and interaction patterns.

      3. Feedback
      Good interfaces provide clear feedback for user actions. This could be visual, auditory, or haptic 
      feedback that lets users know their action has been recognized.

      4. Simplicity
      Keep your designs as simple as possible while still achieving their goals. Remove unnecessary elements 
      and make sure every component serves a purpose.
    `,
    tags: ["Frontend", "Backend", "JavaScript"]
  }
}

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
    // ... 더 많은 댓글들
  ]

  const post = getPost((await params).id)
  const resolvedParams = await params;
  console.log(resolvedParams)
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
                <p className="text-sm text-textColor">{post.date}</p>
                <h1 className="text-3xl font-bold tracking-tight text-textColor md:text-4xl lg:text-5xl">
                  {post.title}
                </h1>
                <p className="text-xl text-textColor">{post.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {post.tags.map((tag) => (
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
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-textColor">
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between pt-8">
            <Link
              href={`/blog/${post.id - 1}`}
              className={`text-textColor hover:text-hoverColor ${post.id <= 1 ? 'invisible' : ''}`}
            >
              ← Previous Post
            </Link>
            <Link
              href={`/blog/${post.id + 1}`}
              className="text-textColor hover:text-hoverColor"
            >
              Next Post →
            </Link>
          </div>
        </article>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-textColor mb-6">Comments</h2>
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

