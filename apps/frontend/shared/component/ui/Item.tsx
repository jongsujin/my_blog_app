/**
 * 포트폴리오 및 게시글 아이템
 */

import { Card, CardContent } from "@/shared/component/ui/Card";
import { Tag } from "@/shared/component/ui/Tag";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

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
        <Card key={id}>
            {/* <Image
                src={image}
                alt={title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
            /> */}
            <div className="w-full aspect-video bg-textColor" /> {/* 이미지 임시 */}
            <CardContent>
                <h2 className="text-xl text-textColor font-semibold mb-2">{title}</h2>
                <p className="text-body text-textColor mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <Tag key={index} tag={tag} />
                    ))}
                </div>
                <div className="flex justify-end">
                    <Link
                        href={link}

                    >
                        <Button content={buttonText} />
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}