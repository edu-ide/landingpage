import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Gift, Smartphone, Users } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Gift className="h-6 w-6 mr-2" />
          <span className="font-bold">리워드 팩토리</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            기능
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            사용 방법
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero 섹션 - 중앙 정렬 수정 */}
        <section className="w-full min-h-[calc(100vh-3.5rem)] flex items-center justify-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  리워드 팩토리에 오신 것을 환영합니다
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  당신의 일상을 보상으로 가득 채우세요. 쇼핑하고, 미션을 완료하고, 리워드를 받아가세요!
                </p>
              </div>
              <div className="space-x-4">
                <Button>앱 다운로드</Button>
                <Button variant="outline">더 알아보기</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features 섹션 */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">주요 기능</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Smartphone className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-center">간편한 적립</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    일상 속 다양한 활동으로 포인트를 쉽게 적립하세요.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Gift className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-center">다양한 리워드</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    적립한 포인트로 다양한 상품과 서비스를 이용하세요.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Users className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-center">친구와 함께</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    친구를 초대하고 함께 미션을 수행하며 더 많은 리워드를 받으세요.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How it works 섹션 */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            {/* 기존 내용... */}
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            {/* 기존 내용... */}
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 리워드 팩토리. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/terms-of-service">
            이용약관
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/privacy-policy">
            개인정보처리방침
          </Link>
        </nav>
      </footer>
    </div>
  )
}

