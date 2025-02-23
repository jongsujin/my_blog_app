/**
 * @description 블로그 리스트 스켈레톤 컴포넌트
 */

import Background from '../Background'
import PostSkeleton from './PostSkeleton'

export default function PostSkeletonList() {
  return (
    <Background>
      <div className="mx-auto max-w-6xl p-6 md:p-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <PostSkeleton key={i} />
          ))}
        </div>
      </div>
    </Background>
  )
}
