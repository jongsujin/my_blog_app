import { API } from '@/api/instance'
import { Quill } from 'react-quill-new'

export async function imageHandler(this: { quill: Quill }) {
  const input = document.createElement('input')
  input.setAttribute('type', 'file')
  input.setAttribute('accept', 'image/*')
  input.click()

  input.onchange = async () => {
    const file = input.files?.[0]
    if (file) {
      const formData = new FormData()
      formData.append('file', file)

      try {
        const response = await fetch(`${API.baseURL}/api/upload`, {
          method: 'POST',
          body: formData,
        })
        const data = await response.json()

        // 전체 URL 생성 (백엔드 서버 URL + 이미지 경로)
        const imageUrl = `${API.baseURL}${data.imageUrl}`

        // 현재 커서 위치에 이미지 삽입
        const range = this.quill.getSelection(true)
        this.quill.insertEmbed(range.index, 'image', imageUrl)
        this.quill.setSelection(range.index + 1)
      } catch (error) {
        console.error('Error:', error)
      }
    }
  }
}
