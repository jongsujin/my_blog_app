import TagPostContent from './_components/TagPostContent'

export default async function TagDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = await params
  return <TagPostContent tagId={Number(resolvedParams.id)} />
}
