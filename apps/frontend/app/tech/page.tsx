import Background from '@/shared/component/ui/Background'
import Item from '@/shared/component/ui/Item'


const projects = [
    {
        id: 1,
        title: "블로그 플랫폼",
        description: "React와 Node.js를 사용하여 개발한 풀스택 블로그 플랫폼입니다. 사용자 인증, 게시물 CRUD, 댓글 기능을 포함합니다.",
        image: "/placeholder.svg?height=200&width=300",
        tags: ["React", "Node.js", "MongoDB", "Express"],
        link: "https://example.com/blog-platform"
    },
    {
        id: 2,
        title: "일정 관리 앱",
        description: "React Native로 개발한 크로스 플랫폼 모바일 앱입니다. 사용자가 일정을 추가, 편집, 삭제할 수 있으며 알림 기능도 포함되어 있습니다.",
        image: "/placeholder.svg?height=200&width=300",
        tags: ["React Native", "Firebase", "Redux"],
        link: "https://example.com/schedule-app"
    },
    {
        id: 3,
        title: "데이터 시각화 대시보드",
        description: "D3.js와 Vue.js를 사용하여 개발한 대규모 데이터 시각화 대시보드입니다. 실시간 데이터 업데이트와 다양한 차트 유형을 지원합니다.",
        image: "/placeholder.svg?height=200&width=300",
        tags: ["Vue.js", "D3.js", "Node.js", "WebSocket"],
        link: "https://example.com/data-dashboard"
    },
    {
        id: 4,
        title: "전자상거래 웹사이트",
        description: "Next.js와 Stripe API를 사용하여 개발한 풀스택 전자상거래 웹사이트입니다. 제품 목록, 장바구니, 결제 기능을 포함합니다.",
        image: "/placeholder.svg?height=200&width=300",
        tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
        link: "https://example.com/ecommerce-site"
    },
    {
        id: 5,
        title: "블로그 플랫폼",
        description: "React와 Node.js를 사용하여 개발한 풀스택 블로그 플랫폼입니다. 사용자 인증, 게시물 CRUD, 댓글 기능을 포함합니다.",
        image: "/placeholder.svg?height=200&width=300",
        tags: ["React", "Node.js", "MongoDB", "Express"],
        link: "https://example.com/blog-platform"
    },
    {
        id: 6,
        title: "일정 관리 앱",
        description: "React Native로 개발한 크로스 플랫폼 모바일 앱입니다. 사용자가 일정을 추가, 편집, 삭제할 수 있으며 알림 기능도 포함되어 있습니다.",
        image: "/placeholder.svg?height=200&width=300",
        tags: ["React Native", "Firebase", "Redux"],
        link: "https://example.com/schedule-app"
    },
    {
        id: 7,
        title: "데이터 시각화 대시보드",
        description: "D3.js와 Vue.js를 사용하여 개발한 대규모 데이터 시각화 대시보드입니다. 실시간 데이터 업데이트와 다양한 차트 유형을 지원합니다.",
        image: "/placeholder.svg?height=200&width=300",
        tags: ["Vue.js", "D3.js", "Node.js", "WebSocket"],
        link: "https://example.com/data-dashboard"
    },
    {
        id: 8,
        title: "전자상거래 웹사이트",
        description: "Next.js와 Stripe API를 사용하여 개발한 풀스택 전자상거래 웹사이트입니다. 제품 목록, 장바구니, 결제 기능을 포함합니다.",
        image: "/placeholder.svg?height=200&width=300",
        tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
        link: "https://example.com/ecommerce-site"
    }
]

export default function TechPage() {
    return (
        <Background>
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-textColor text-start text-4xl font-bold mb-12">My Tech</h1>
                <div className="grid grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Item
                            key={project.id}
                            {...project}
                            buttonText="상세 게시글 보기"
                        />
                    ))}
                </div>
            </div>
        </Background>
    )
}

