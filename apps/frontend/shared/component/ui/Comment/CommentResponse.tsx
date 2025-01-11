interface CommentResponseProps {
    author: string
    content: string
    date: string
    avatarUrl?: string
}

export default function CommentResponse({ author, content, date, avatarUrl }: CommentResponseProps) {
    return (
        <div className="flex space-x-4 p-4 bg-cardColor rounded-lg mb-4">
            <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                    {avatarUrl ? (
                        <img src={avatarUrl} alt={author} className="w-10 h-10 rounded-full" />
                    ) : (
                        <span className="text-white text-lg">{author[0]}</span>
                    )}
                </div>
            </div>
            <div className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-textColor">{author}</span>
                    <span className="text-sm text-gray-400">{date}</span>
                </div>
                <p className="text-textColor">{content}</p>
            </div>
        </div>
    )
}