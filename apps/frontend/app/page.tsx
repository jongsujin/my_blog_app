import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "./components/ui/Card"


export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Understanding UI Design Principles",
      date: "March 15, 2024",
      description: "Learn the fundamental principles that guide effective user interface design and create better experiences.",
      gradient: "from-yellow-200 via-orange-200 to-red-200",
      image: "/placeholder.svg?height=200&width=300",
      featured: true
    },
    {
      id: 2,
      title: "Choosing the Right Images for Web Design",
      date: "March 14, 2024",
      description: "Tips for selecting and optimizing images that enhance your web design.",
      gradient: "from-blue-200 via-indigo-200 to-purple-200",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 3,
      title: "Creating Professional Headers",
      date: "February 28, 2024",
      description: "Learn how to design headers that make a strong first impression.",
      gradient: "from-pink-200 via-rose-200 to-red-200",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 4,
      title: "Design Inspiration Sources",
      date: "February 24, 2024",
      description: "Discover the best resources for design inspiration and creative ideas.",
      gradient: "from-purple-200 via-violet-200 to-indigo-200",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 5,
      title: "Getting Started with UI Design",
      date: "February 22, 2024",
      description: "A beginner's guide to starting your journey in UI design.",
      gradient: "from-green-200 via-emerald-200 to-teal-200",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 6,
      title: "Common Questions About UI/UX",
      date: "February 20, 2024",
      description: "Answers to frequently asked questions about UI/UX design.",
      gradient: "from-yellow-100 via-amber-200 to-orange-200",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 7,
      title: "From Developer to Designer",
      date: "February 18, 2024",
      description: "The journey of transitioning from development to design.",
      gradient: "from-blue-100 via-cyan-200 to-teal-200",
      image: "/placeholder.svg?height=200&width=300"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Content Section */}
      <div className="mx-auto max-w-7xl p-6 md:p-8">
        <div className="space-y-8">
          {/* Featured Post */}
          {posts.filter(post => post.featured).map(post => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
                <CardContent className={`bg-gradient-to-br ${post.gradient} p-8`}>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/3">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={300}
                        height={200}
                        className="rounded-lg object-cover w-full h-48"
                      />
                    </div>
                    <div className="w-full md:w-2/3">
                      <p className="text-sm text-gray-700/70">{post.date}</p>
                      <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                        {post.title}
                      </h2>
                      <p className="mt-4 text-gray-800/90">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}

          {/* Grid of Posts */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.filter(post => !post.featured).map(post => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
                  <CardContent className={`bg-gradient-to-br ${post.gradient} p-6`}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full h-40 mb-4"
                    />
                    <p className="text-sm text-gray-700/70">{post.date}</p>
                    <h2 className="mt-2 text-xl font-semibold text-gray-900">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-800/90">
                      {post.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

