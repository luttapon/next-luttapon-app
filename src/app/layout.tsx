import './globals.css';
import { Libre_Franklin } from 'next/font/google';

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={libreFranklin.className}>
      <body>{children}</body>
    </html>
  );
}