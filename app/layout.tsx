import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Head from "next/head";
const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {locale: string};
})
{
  const { locale } = await params;
    
  return (
    <html lang={locale}>
      <body>
        {children}
      </body>
    </html>
  );
}
