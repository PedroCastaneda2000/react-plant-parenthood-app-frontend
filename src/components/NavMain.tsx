import { useState } from "react";
import menuIcon from "../assets/menu-icon.svg";
import Button from "./ui/Button";

const NavMain = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <div className="flex gap-4 items-center">
      <button
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
        className="w-5 h-5 cursor-pointer"
      >
        <img className="w-5 h-5" src={menuIcon} alt="menu" />
      </button>

      {isSidebarVisible && (
        <div
          className="fixed inset-0 bg-black/50 z-10"
          onClick={() => setIsSidebarVisible(false)}
        ></div>
      )}

      <aside
        className={`fixed left-0 top-0 w-[20%] min-w-[272px] py-4 px-4 h-full border-r-2 shadow-primary-drop border-primary-stroke bg-solid-gradient z-20 flex flex-col gap-4
        ${isSidebarVisible ? "left-sidebar-visible" : "left-sidebar-hidden"}`}
      >
        <span className="text-sm xl:text-base text-color-light font-serif font-medium">
          Welcome to Plant Parenthood!
        </span>

        <hr className="text-gray-400/40 rounded-sm w-full h-[1px] bg-gray-200/40" />
        <ul className="text-color-light flex flex-col gap-4">
          <li className="text-sm xl:text-base font-inter text-color-light h-auto justify-start rounded-none p-0 font-light hover:underline hover:underline-offset-4 cursor-pointer">
            Collection
          </li>
          <li className="text-sm xl:text-base font-inter text-color-light h-auto justify-start rounded-none p-0 font-light hover:underline hover:underline-offset-4 cursor-pointer">
            Tropical
          </li>
          <li className="text-sm xl:text-base font-inter text-color-light h-auto justify-start rounded-none p-0 font-light hover:underline hover:underline-offset-4 cursor-pointer">
            Woodlands
          </li>
          <li className="text-sm xl:text-base font-inter text-color-light h-auto justify-start rounded-none p-0 font-light hover:underline hover:underline-offset-4 cursor-pointer">
            Highlands
          </li>
        </ul>
        <hr className="text-gray-400/40 rounded-sm w-full h-[1px] bg-gray-200/40" />
        <div className="mt-2">
          <Button Input="Sign In" />
        </div>
      </aside>
    </div>
  );
};

export default NavMain;
