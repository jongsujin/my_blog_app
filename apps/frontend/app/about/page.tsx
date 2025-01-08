import Background from "@/shared/component/ui/Background"
import { Card, CardContent } from "../../shared/component/ui/Card"

export default function AboutPage() {
    return (
        <Background>
            <div className="mx-auto max-w-4xl p-6 md:p-8">
                <h1 className="mb-8 text-4xl font-bold text-blue-300">About My Blog</h1>

                <Card className="mb-8 bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200">
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
                                <div className="w-64 h-64 bg-gray-200 rounded-full" />
                            </div>
                            <div className="w-full md:w-2/3">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                                <p className="text-gray-600 mb-4">
                                    Welcome to our blog! We're passionate about sharing knowledge and insights on UI design,
                                    web development, and creative processes. Our goal is to inspire and educate designers
                                    and developers at all stages of their careers.
                                </p>
                                <p className="text-gray-600">
                                    Whether you're just starting out or you're a seasoned professional, we hope you'll find
                                    valuable information and inspiration in our articles.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gray-50">
                    <CardContent className="p-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Cover</h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
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

