import Background from '@/shared/component/ui/Background'
import { Card, CardContent } from '../../shared/component/ui/Card'
import Profile from './_component/Profile'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <Background>
      <div className="mx-auto max-w-4xl p-6 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="mb-8 text-4xl font-bold text-textColor">
            About My Blog
          </h1>
          <Profile />
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="w-full md:w-1/3">
                <Image
                  src="/profile/profile_image.jpg"
                  alt="My Profile"
                  width={256}
                  height={256}
                  className="h-64 w-64 rounded-full"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="mb-4 text-2xl font-semibold text-textColor">
                  Our Mission
                </h2>
                <p className="mb-4 text-textColor">
                  안녕하세요. 나무와 같이 단단한 개발자가 되고 싶은 프론트엔드
                  개발자 진종수입니다. 늘 배움과 성장을 추구하며 사람들의 고충을
                  기술적으로 개선하는데 관심이 많습니다.
                </p>
                <p className="text-textColor">
                  프론트엔드뿐만 아니라 전반적인 개발 프로세스에 대해 관심이
                  많습니다. 프론트엔드, Node.js를 사용한 백엔드 업무를 경험하며
                  더 많은 사람들에게 도움이 되는 서비스를 제공하고 싶습니다.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="mb-4 text-2xl font-semibold text-textColor">
              What I do
            </h2>
            <ul className="list-inside list-disc space-y-2 text-textColor">
              <li>Frontend Developer : React, Next.js, TypeScript</li>
              <li>Backend Developer: Node.js Express, MySQL</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Background>
  )
}
