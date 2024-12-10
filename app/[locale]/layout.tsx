import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const {locale} =   await params; // 비동기 처리 불필요
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({locale});
 
  return (
    <>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
    </>
  );
}