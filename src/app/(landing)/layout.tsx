//  Imports
// ===========================================================


// Components
import ScrollTop from '@/components/common/ScrollTop';

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
      <div className="fixed top-0 left-0 w-full border-t border-[#00000010] dark:border-[#ffffff10]" />
      <Header />
      {children}
      <Footer />
      <ScrollTop />
    </>
  )
}
