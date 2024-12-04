import { Gift, Smartphone, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

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
