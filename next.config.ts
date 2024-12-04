import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
    // !! WARN !!
    // TypeScript 타입 체크를 비활성화합니다.
    ignoreBuildErrors: true,
  },
};
 
export default withNextIntl(nextConfig);