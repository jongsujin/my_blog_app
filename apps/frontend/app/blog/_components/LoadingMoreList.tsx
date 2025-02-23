import PostSkeleton from '@/shared/component/ui/Skeleton/PostSkeleton'

export default function LoadingMoreList({
  isMoreFetch,
}: {
  isMoreFetch: boolean
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {isMoreFetch && [1, 2, 3].map((i) => <PostSkeleton key={i} />)}
    </div>
  )
}
