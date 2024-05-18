import { ReactNode } from 'react';
import { Footer } from 'layouts';

type Props = {
  children: ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export { MainLayout };
