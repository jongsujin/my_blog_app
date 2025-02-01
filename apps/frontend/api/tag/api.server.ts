export const getTags = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tags`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error in getTags:', error)
    throw error
  }
}
