'use client'

import { useGetTags } from '@/api/tag/query.client'
import Background from '@/shared/component/ui/Background'
import { Tag } from '@/shared/component/ui/Tag'
import { useRouter } from 'next/navigation'

export default function TagPage() {
  const { data, isLoading } = useGetTags()
  const router = useRouter()

  if (isLoading) return <div>Loading...</div>
  if (!data) return <div>No data</div>
  console.log(data)

  const handleTagClick = (id: number) => {
    router.push(`/tag/${id}`)
  }

  return (
    <Background>
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-3xl font-bold text-textColor">
          태그 목록
        </h1>
        <div className="mx-auto grid max-w-2xl grid-cols-3 justify-items-center gap-4">
          {data &&
            data.map((tag) => (
              <div
                key={tag.id}
                className="transform transition-transform duration-200 hover:scale-110"
              >
                <Tag tag={tag.name} id={tag.id} onClick={handleTagClick} />
              </div>
            ))}
        </div>
      </div>
    </Background>
  )
}
