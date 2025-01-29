import { Quill } from 'react-quill-new'

const handleImageUpload = async (file: File) => {
  const formData = new FormData()
  formData.append('file', file)

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/upload`,
      {
        method: 'POST',
        body: formData,
      },
    )
    const data = await response.json()
    return data.imageUrl
  } catch (error) {
    console.error('Error uploading image:', error)
    return null
  }
}

export async function imageHandler(this: { quill: Quill }) {
  const input = document.createElement('input')
  input.setAttribute('type', 'file')
  input.setAttribute('accept', 'image/*')
  input.click()

  input.onchange = async () => {
    const file = input.files?.[0]
    if (file) {
      const imageUrl = await handleImageUpload(file)
      if (imageUrl) {
        this.quill.insertEmbed(
          this.quill.getSelection()?.index || 0,
          'image',
          imageUrl,
        )
      }
    }
  }
}
