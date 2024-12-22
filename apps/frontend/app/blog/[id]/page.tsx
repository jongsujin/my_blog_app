import { Card, CardContent } from '@/app/components/ui/Card'
import { Post } from '@/types/post'
import { ChevronLeft } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"



// 실제 환경에서는 데이터베이스나 CMS에서 가져올 데이터입니다
const getPost = (id: string): Post => {
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
    `
  }
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const post = getPost((await params).id)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-4xl p-6 md:p-8">
        {/* Back Button */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center text-sm text-blue-500 hover:text-blue-600"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Blog
        </Link>

        <article className="space-y-8">
          {/* Header */}
          <Card className="overflow-hidden">
            <CardContent className={`bg-gradient-to-br ${post.gradient} p-8`}>
              <div className="space-y-4">
                <p className="text-sm text-blue-600">{post.date}</p>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
                  {post.title}
                </h1>
                <p className="text-xl text-gray-600">{post.description}</p>
              </div>
            </CardContent>
          </Card>

          {/* Featured Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <Card>
            <CardContent className="prose prose-blue max-w-none p-8 md:p-12">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600">
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between pt-8">
            <Link
              href={`/blog/${post.id - 1}`}
              className={`text-blue-500 hover:text-blue-600 ${post.id <= 1 ? 'invisible' : ''}`}
            >
              ← Previous Post
            </Link>
            <Link
              href={`/blog/${post.id + 1}`}
              className="text-blue-500 hover:text-blue-600"
            >
              Next Post →
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}

