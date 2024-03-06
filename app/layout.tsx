//import styles globales
import '@/app/ui/global.css';
import { inter, poppins, lusitana } from '@/app/ui/fonts';

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>{children}</body>
    </html>
  );
}
