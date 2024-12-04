import Link from 'next/link'
import { Gift } from 'lucide-react'

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Gift className="h-6 w-6 mr-2" />
          <span className="font-bold">리워드 팩토리</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            홈으로
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 리워드 팩토리. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/privacy-policy">
            웹사이트 개인정보처리방침
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/privacy-policy/app">
            앱 개인정보처리방침
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/privacy-policy/business">
            비즈니스 개인정보처리방침
          </Link>
        </nav>
      </footer>
    </div>
  )
} 