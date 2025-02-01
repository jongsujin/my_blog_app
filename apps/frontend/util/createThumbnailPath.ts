export const createThumbnailPath = (tag: string | undefined) => {
  if (!tag) return '/thumbnails/default.jpg'
  return `/thumbnails/${tag}.jpg`
}
