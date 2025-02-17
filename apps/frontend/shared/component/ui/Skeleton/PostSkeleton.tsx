'use client'

import { Card, CardContent } from '../Card'

export default function PostSkeleton() {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col p-0">
        <div className="animate-pulse">
          <div className="h-40 w-full rounded-lg bg-gray-700"></div>
          <div className="p-6">
            <div className="mb-4 h-4 w-1/4 rounded bg-gray-700"></div>
            <div className="mb-4 h-6 w-3/4 rounded bg-gray-700"></div>
            <div className="mb-4 h-4 w-full rounded bg-gray-700"></div>
            <div className="flex gap-2">
              <div className="h-6 w-16 rounded bg-gray-700"></div>
              <div className="h-6 w-16 rounded bg-gray-700"></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
