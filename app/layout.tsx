import '@/app/ui/global.css'
import { inter } from './ui/fonts';
import { rancho } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rancho.className}`}>{children}</body>
    </html>
  );
}
