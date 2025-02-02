/**
 * 포트폴리오 및 게시글 아이템
 */

import { Card, CardContent } from '@/shared/component/ui/Card'
import Link from 'next/link'
import Button from './Button'

interface ItemProps {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  buttonText?: string
  category?: string
}

export default function Item({
  id,
  title,
  description,
  link,
  buttonText = '프로젝트 보기', // 기본값 설정
}: ItemProps) {
  return (
    <Card key={id}>
      {/* <Image
                src={image}
                alt={title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
            /> */}
      <div className="aspect-video w-full bg-textColor" /> {/* 이미지 임시 */}
      <CardContent>
        <h2 className="mb-2 text-xl font-semibold text-textColor">{title}</h2>
        <p className="text-body mb-4 text-textColor">{description}</p>
        {/* <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </div> */}
        <div className="flex justify-end">
          <Link href={link}>
            <Button content={buttonText} />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
