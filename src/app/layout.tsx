import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sportic',
  description: 'Sportic is easy sport',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
