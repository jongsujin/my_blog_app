"use client"
import { useState } from "react"
import Button from "../Button"

export default function CommentForm() {
    const [comment, setComment] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: 댓글 제출 로직 구현
        console.log("댓글 제출:", comment)
        setComment("")
    }

    return (
        <form onSubmit={handleSubmit} className="w-full mb-8">
            <div className="flex flex-col space-y-4">
                <input type="text" placeholder="이름" className="w-full p-2 text-textColor bg-cardColor rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500" />
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="댓글을 입력해 주세요..."
                    className="w-full h-24 p-4 text-textColor bg-cardColor rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
                />
                <div className="flex justify-end">
                    <Button content="댓글 작성" />
                </div>
            </div>
        </form>
    )
}