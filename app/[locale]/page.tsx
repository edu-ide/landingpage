import { Gift, Smartphone, Users, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { Notice } from '@/types/notice';

// 최근 공지사항 데이터
const recentNotices: Notice[] = [
  {
    id: 1,
    title: '리워드팩토리 서비스 오픈',
    content: '리워드팩토리 서비스가 정식 오픈했습니다.',
    date: '2024-03-19',
    important: true,
    category: '공지'
  },
  {
    id: 2,
    title: '3월 이벤트 안내',
    content: '3월 한달 간 신규 가입 회원에게 특별 포인트를 지급합니다.',
    date: '2024-03-15',
    category: '이벤트'
  },
  {
    id: 3,
    title: '앱 업데이트 안내',
    content: '새로운 기능이 추가된 버전이 출시되었습니다.',
    date: '2024-03-10',
    category: '안내'
  }
];

export default function LandingPage({params}: {params: {locale: string}}) {
  setRequestLocale(params.locale);
  const t = useTranslations();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Gift className="h-6 w-6 mr-2" />
          <span className="font-bold">{t('title')}</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            {t('nav.features')}
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            {t('nav.howItWorks')}
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full min-h-[calc(100vh-3.5rem)] flex items-center justify-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  {t('hero.title')}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {t('hero.description')}
                </p>
              </div>
              <div className="space-x-4">
                <Button>{t('buttons.downloadApp')}</Button>
                <Button variant="outline">{t('buttons.learnMore')}</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              {t('features.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Smartphone className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-center">{t('features.card1.title')}</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    {t('features.card1.description')}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Gift className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-center">{t('features.card2.title')}</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    {t('features.card2.description')}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Users className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-center">{t('features.card3.title')}</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    {t('features.card3.description')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">공지사항</h2>
                  <Link 
                    href="/notice" 
                    className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
                  >
                    더보기 
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="space-y-4">
                    {/* 최근 공지사항 3개 표시 */}
                    {recentNotices.slice(0, 3).map((notice) => (
                      <div key={notice.id} className="border-b last:border-0 pb-4 last:pb-0">
                        <div className="flex items-center gap-2 mb-1">
                          {notice.important && (
                            <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded">
                              중요
                            </span>
                          )}
                          <span className="text-sm text-gray-400">{notice.date}</span>
                        </div>
                        <h3 className="font-medium">{notice.title}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">제휴 문의</h2>
                  <Link 
                    href="/partnership" 
                    className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
                  >
                    자세히 보기
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="text-center space-y-4">
                    <Gift className="w-12 h-12 mx-auto text-primary" />
                    <h3 className="text-xl font-semibold">
                      리워드팩토리와 함께 성장하세요
                    </h3>
                    <p className="text-gray-600">
                      광고 및 제휴 문의를 통해 새로운 비즈니스 기회를 만나보세요.
                    </p>
                    <Link
                      href="/partnership"
                      className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      제휴 문의하기
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">{t('footer.copyright')}</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/terms-of-service">
            {t('footer.terms')}
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/privacy-policy">
            {t('footer.privacy')}
          </Link>
        </nav>
      </footer>
    </div>
  );
}
