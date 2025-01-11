"use client"

import { useState } from "react"
import Editor from "../../shared/component/ui/Editor"
import Background from "@/shared/component/ui/Background"
import Button from "@/shared/component/ui/Button"

export default function WritePage() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [tags, setTags] = useState<string[]>([])
    const [currentTag, setCurrentTag] = useState("")

    // 태그 추가 함수
    const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && currentTag.trim()) {
            e.preventDefault()
            if (!tags.includes(currentTag.trim())) {
                setTags([...tags, currentTag.trim()])
            }
            setCurrentTag("")
        }
    }

    // 태그 삭제 함수
    const removeTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove))
    }

    // 임시저장 함수
    const handleDraft = async () => {
        try {
            // localStorage에 임시저장
            const draft = {
                title,
                content,
                tags,
                lastSaved: new Date().toISOString()
            }
            localStorage.setItem('blogDraft', JSON.stringify(draft))
            alert('임시저장되었습니다.')
        } catch (error) {
            console.error('임시저장 실패:', error)
            alert('임시저장에 실패했습니다.')
        }
    }

    // 게시글 저장 함수
    const handlePublish = async () => {
        try {
            if (!title.trim()) {
                alert('제목을 입력해주세요.')
                return
            }
            if (!content.trim()) {
                alert('내용을 입력해주세요.')
                return
            }

            // API 호출 로직 추가 예정
            console.log('게시글 저장:', { title, content, tags })
            alert('게시글이 저장되었습니다.')

            // 저장 성공 후 임시저장 데이터 삭제
            localStorage.removeItem('blogDraft')
        } catch (error) {
            console.error('저장 실패:', error)
            alert('저장에 실패했습니다.')
        }
    }

    return (
        <Background>
            <div className="mx-auto max-w-4xl h-full p-6 md:p-8">
                {/* 제목 입력 */}
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="제목을 입력하세요..."
                    className="w-full border border-borderColor p-2 mb-4 bg-transparent text-textColor focus:outline-none focus:ring-2 focus:ring-hoverColor"
                />



                {/* 에디터 */}
                <Editor value={content} onChange={setContent} />

                {/* 버튼 그룹 */}
                <div className="flex justify-end gap-4 mt-4">
                    {/* 태그 입력 */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-primary-gradient text-textColor px-4 py-1 rounded-full text-sm flex items-center"
                            >
                                #{tag}
                                <button
                                    onClick={() => removeTag(tag)}
                                    className="ml-1 text-textColor hover:text-hoverColor"
                                >
                                    ×
                                </button>
                            </span>
                        ))}
                        <input
                            type="text"
                            value={currentTag}
                            onChange={(e) => setCurrentTag(e.target.value)}
                            onKeyPress={handleAddTag}
                            placeholder="Tag.."
                            className="bg-transparent text-textColor placeholder-textColor focus:outline-none min-w-10 "
                        />
                    </div>
                    <Button content="임시저장" />
                    <Button content="저장하기" />
                </div>
            </div>
        </Background>
    )
}