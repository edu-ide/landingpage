import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Head from "next/head";
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "리워드 팩토리",
  description: "매장과 고객을 연결하는 새로운 방법",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {locale: string};
})
{
  const { locale } = await params;
  setRequestLocale(locale);
    
  return (
    <html lang={locale}>
      <body>
        {children}
      </body>
    </html>
  );
}
