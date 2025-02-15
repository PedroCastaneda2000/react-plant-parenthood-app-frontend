import MainNav from "./NavMain";
import NavCart from "./NavCart";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 border-opacity-10 bg-light">
      <div className="container mx-auto flex h-16 items-center justify-between px-[5%]">
        <MainNav />
        <h1 className="text-black font-serif font-medium text-xl uppercase">
          plant parenthood
        </h1>

        <NavCart />
      </div>
    </header>
  );
};

export default Header;
