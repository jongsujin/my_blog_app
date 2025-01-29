import BlogPostContent from './_components/BlogPostContent'

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const comments = [
    {
      author: 'Fanta Jin',
      content: '헉 안녕하세요! 아래에 글 남긴 달봄입니다.',
      date: '2024. 12. 10',
      avatarUrl: '/path/to/avatar.jpg',
    },
    {
      author: 'Fanta Jin',
      content: '헉 안녕하세요! 아래에 글 남긴 달봄입니다.',
      date: '2024. 12. 10',
      avatarUrl: '/path/to/avatar.jpg',
    },
  ]

  const resolvedParams = await params
  console.log(resolvedParams)

  return (
    <BlogPostContent postId={Number(resolvedParams.id)} comments={comments} />
  )
}
