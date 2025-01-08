"use client"
import { useState } from "react"

export default function CommentForm() {
    const [comment, setComment] = useState<string | null>(null);

    return (
        <div className="border border-black">
            <input type="text" placeholder="댓글을 작성해주세요" />
        </div>
    )
}