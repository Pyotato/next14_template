import { Suspense } from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<>loading</>}>
      <div>
        this is my page layout
        {children}
      </div>
    </Suspense>
  );
}
