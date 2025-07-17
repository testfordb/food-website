import './globals.css';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata = {
  title: 'Omnifood — Never cook again!',
  description: 'Omnifood is a AI powered food subscription that will make you eat healthy again, 365 days per year, It\'s tailored to your personal tastes and nutritional needs.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={rubik.className}>
      <body>{children}</body>
    </html>
  );
}