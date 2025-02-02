import { TagProps } from '@/types/tag'

export function Tag({ tag, id, onClick }: TagProps) {
  return (
    <div
      onClick={() => id && onClick && onClick(id)}
      className="border-borderColor inline-flex cursor-pointer items-center rounded-lg border bg-primary-gradient px-2 py-1 text-sm font-medium text-textColor transition-colors hover:border-hoverColor hover:text-hoverColor"
    >
      <span>{tag}</span>
    </div>
  )
}
