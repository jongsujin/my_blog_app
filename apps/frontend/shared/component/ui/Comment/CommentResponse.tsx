import Image from 'next/image'

interface CommentResponseProps {
  author: string
  content: string
  date: string
  avatarUrl?: string
}

export default function CommentResponse({
  author,
  content,
  date,
  avatarUrl,
}: CommentResponseProps) {
  return (
    <div className="mb-4 flex space-x-4 rounded-lg bg-cardColor p-4">
      <div className="flex-shrink-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={author}
              className="h-10 w-10 rounded-full"
              width={40}
              height={40}
            />
          ) : (
            <span className="text-lg text-white">{author[0]}</span>
          )}
        </div>
      </div>
      <div className="flex-grow">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-medium text-textColor">{author}</span>
          <span className="text-sm text-gray-400">{date}</span>
        </div>
        <p className="text-textColor">{content}</p>
      </div>
    </div>
  )
}
