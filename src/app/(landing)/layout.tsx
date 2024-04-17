//  Imports
// ===========================================================

// Containers
import Header from '@/containers/Header';
import Footer from '@/containers/Footer';
import Info from '@/containers/Info';


//  Layout
// ===========================================================

export default function Layout({
  children,
} : {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[-1] border-t border-[#00000010] dark:border-[#ffffff10]" />
      <Header />
      {children}
      <Footer />
    </>
  )
}
