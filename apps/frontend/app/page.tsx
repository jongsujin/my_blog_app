import { getPosts } from '@/api/post/api.server'
import BlogList from './blog/_components/BlogList'

export const dynamic = 'force-dynamic'

export default async function BlogPage() {
  // 초기 데이터 가져옴
  const initialData = await getPosts(1, 3)
  return <BlogList initialData={initialData} />
}
