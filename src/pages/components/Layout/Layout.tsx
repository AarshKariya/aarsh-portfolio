import { useRouter } from "next/router";
import Footer from "../Footer/Footer";
import NavigationBar from "../NavigationBar/NavigationBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const showFooter = ["/testimonials", "/about", "/contact"].includes(
    router.pathname
  );

  return (
    <div className="flex flex-col min-h-screen justify-between bg-[#FEFBF6]">
      <NavigationBar />
      <main className="flex-grow">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
