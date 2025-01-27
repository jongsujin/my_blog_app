import Background from "@/shared/component/ui/Background"
import { Card, CardContent } from "../../shared/component/ui/Card"

export default function AboutPage() {
    return (
        <Background>
            <div className="mx-auto max-w-4xl p-6 md:p-8">
                <div className="flex justify-between items-center">
                    <h1 className="mb-8 text-4xl font-bold text-textColor">About My Blog</h1>
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-textColor rounded-full cursor-pointer" /> {/* 깃허브 */}
                        <div className="w-8 h-8 bg-textColor rounded-full cursor-pointer" /> {/* 링크드인 */}
                        <div className="w-8 h-8 bg-textColor rounded-full cursor-pointer" /> {/* 이메일 */}
                    </div>
                </div>

                <Card className="mb-8">
                    <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-full md:w-1/3">
                                {/* <Image
                                    src="/placeholder.svg?height=300&width=300"
                                    alt="Blog Team"
                                    width={300}
                                    height={300}
                                    className="rounded-full"
                                /> */}
                                <div className="w-64 h-64 bg-textColor rounded-full" />
                            </div>
                            <div className="w-full md:w-2/3">
                                <h2 className="text-2xl font-semibold text-textColor mb-4">Our Mission</h2>
                                <p className="text-textColor mb-4">
                                우리 블로그에 오신 것을 환영합니다! 우리는 UI 디자인에 대한 지식과 통찰력을 공유하는 데 열정을 갖고 있습니다.
                                    웹 개발 및 창의적인 프로세스. 우리의 목표는 디자이너에게 영감을 주고 교육하는 것입니다.
                                    경력의 모든 단계에 있는 개발자들입니다.
                                </p>
                                <p className="text-textColor">
                                  
이제 막 시작하는 분이든 노련한 전문가이든 관계없이 다음을 찾으실 수 있기를 바랍니다.

                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-8">
                        <h2 className="text-2xl font-semibold text-textColor mb-4">What I do</h2>
                        <ul className="list-disc list-inside text-textColor space-y-2">
                            <li>UI/UX Design Principles</li>
                            <li>Web Development Best Practices</li>
                            <li>Creative Process and Workflow Tips</li>
                            <li>Industry Trends and Insights</li>
                            <li>Tool Reviews and Recommendations</li>
                        </ul>
                    </CardContent>
                </Card>
            </div >
        </Background >
    )
}

