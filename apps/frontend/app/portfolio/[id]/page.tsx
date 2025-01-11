import Background from "@/shared/component/ui/Background";
import Button from "@/shared/component/ui/Button";

export default function PortfolioPostPage() {
    return (
        <Background>
            <div className="text-textColor p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl font-bold mb-6 pb-2 border-b border-accent">포트폴리오 프로젝트</h1>

                    <div className="bg-cardColor aspect-video mb-8 rounded-lg shadow-lg"></div>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-accent">프로젝트 소개</h2>
                            <p className="text-lg border border-borderColor p-4 rounded-lg">여기에 프로젝트 소개 내용을 작성하세요.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-accent">기술 스택</h2>
                            <ul className="list-disc list-inside space-y-2">
                                {/* 기술 스택 아이콘으로 보여줄 예정 */}
                                <li>React</li>
                                <li>Next.js</li>
                                <li>Tailwind CSS</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-accent">주요 기능</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>반응형 디자인</li>
                                <li>다크 모드 지원</li>
                                <li>SEO 최적화</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-accent">트러블 슈팅</h2>
                            <p className="text-lg border border-borderColor p-4 rounded-lg">주요 트러블 슈팅 사례와 해결 방법을 설명하세요.</p>
                        </section>



                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-accent">역할</h2>
                            <p className="text-lg">프로젝트에서 맡은 역할과 책임을 설명하세요.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-accent">성과 및 학습</h2>
                            <p className="text-lg">프로젝트를 통해 얻은 성과와 학습 내용을 설명하세요.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-accent">링크</h2>
                            <div className="flex space-x-4">
                                <Button content="GitHub" />
                                <Button content="Website" />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Background>
    );
}