'use client'

import { useState } from 'react'
import Editor from '../../shared/component/ui/Editor'
import Background from '@/shared/component/ui/Background'
import Button from '@/shared/component/ui/Button'
import { useCreatePost } from '@/api/post/query.client'
import { createSlug } from '@/util/createSlug'

export default function WritePage() {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [tags, setTags] = useState<string[]>([])
  const [currentTag, setCurrentTag] = useState<string>('')

  const post = {
    title,
    content,
    tags,
    thumbnail: '',
    slug: createSlug(title),
    publishedAt: new Date(),
    viewCount: 0,
  }
  const { mutate: createPost } = useCreatePost(post)
  const handleClickButton = () => {
    createPost()
  }
  console.log('content', content)
  console.log('post', post)

  // 태그 추가 함수
  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentTag.trim()) {
      e.preventDefault()
      if (!tags.includes(currentTag.trim())) {
        setTags([...tags, currentTag.trim()])
      }
      setCurrentTag('')
    }
  }

  // 태그 삭제 함수
  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  // 임시저장 함수
  const handleDraft = async () => {
    try {
      // localStorage에 임시저장
      const draft = {
        title,
        content,
        tags,
        lastSaved: new Date().toISOString(),
      }
      localStorage.setItem('blogDraft', JSON.stringify(draft))
      alert('임시저장되었습니다.')
    } catch (error) {
      console.error('임시저장 실패:', error)
      alert('임시저장에 실패했습니다.')
    }
  }

  return (
    <Background>
      <div className="mx-auto h-full max-w-4xl p-6 md:p-8">
        {/* 제목 입력 */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요..."
          className="border-borderColor mb-4 w-full border bg-transparent p-2 text-textColor focus:outline-none focus:ring-2 focus:ring-hoverColor"
        />

        {/* 에디터 */}
        <Editor value={content} onChange={setContent} />

        {/* 버튼 그룹 */}
        <div className="mt-4 flex justify-end gap-4">
          {/* 태그 입력 */}
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="flex items-center rounded-full bg-primary-gradient px-4 py-1 text-sm text-textColor"
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
              className="min-w-10 bg-transparent text-textColor placeholder-textColor focus:outline-none"
            />
          </div>
          <Button content="임시저장" onClick={handleDraft} />
          <Button content="저장하기" onClick={handleClickButton} />
        </div>
      </div>
    </Background>
  )
}
