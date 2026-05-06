import type { Metadata } from 'next';
import { Playfair_Display, Noto_Serif_KR } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-playfair',
});

const notoSerifKr = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-noto-serif-kr',
});

export const metadata: Metadata = {
  title: 'MUSAI STUDIO — Sound. Localization. Entertainment.',
  description:
    '게임과 영상, 그리고 모든 이야기를 위한 사운드. 30년의 장인정신, MUSAI 스튜디오.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${playfair.variable} ${notoSerifKr.variable}`}>
      <body className="bg-bg text-ink">{children}</body>
    </html>
  );
}
