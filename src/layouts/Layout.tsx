import Footer from "../components/Footer";
import Header from "../components/Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-main-light flex min-h-screen min-w-[390px] flex-col bg-lights">
      <Header />
      <div className="container mx-auto flex-1 px-[5%] pb-24 pt-8 xl:pt-16">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
