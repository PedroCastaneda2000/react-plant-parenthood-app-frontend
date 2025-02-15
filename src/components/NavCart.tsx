import { useState } from "react";
import bagIcon from "../assets/bag-icon.svg";
import CartSidebar from "./CartSiderbar";

const NavCart = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  return (
    <section className="flex gap-4 items-center">
      <button
        onClick={() => setIsCartVisible(!isCartVisible)}
        className="w-5 h-5 cursor-pointer"
      >
        <img className="w-5 h-5" src={bagIcon} alt="cart" />
      </button>

      {isCartVisible && (
        <div
          className="fixed inset-0 bg-black/50 z-10"
          onClick={() => setIsCartVisible(false)}
        ></div>
      )}

      <aside
        className={`fixed w-[20%] min-w-[272px] py-4 px-4 right-0 top-0 pb-8 h-full border-r-2 shadow-primary-drop border-primary-stroke bg-solid-gradient z-20 
        ${isCartVisible ? "sidebar-visible" : "sidebar-hidden"}`}
      >
        <CartSidebar />
      </aside>
    </section>
  );
};

export default NavCart;
