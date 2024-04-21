//  Imports
// ===========================================================

// Components
import ScrollToTop from '@/components/common/ScrollToTop';

// Containers
import Header from './_components/Header';
import Footer from './_components/Footer';


//  Layout
// ===========================================================

export default function Layout({
  children,
} : {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full border-t border-[#707070a0]" />
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  )
}
