/**
 * 포트폴리오 및 게시글 아이템
 */

import { Card, CardContent } from "@/shared/component/ui/Card";
import { Tag } from "@/shared/component/ui/Tag";
import Link from "next/link";
import Image from "next/image";

interface ItemProps {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    buttonText?: string;
    category?: string;
}

export default function Item({
    id,
    title,
    description,
    image,
    tags,
    link,
    buttonText = "프로젝트 보기" // 기본값 설정
}: ItemProps) {
    return (
        <Card key={id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Image
                src={image}
                alt={title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <Tag key={index} tag={tag} />
                    ))}
                </div>
                <Link
                    href={link}
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                >
                    {buttonText}
                </Link>
            </CardContent>
        </Card>
    )
}