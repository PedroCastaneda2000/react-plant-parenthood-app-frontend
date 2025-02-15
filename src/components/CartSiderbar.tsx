import ProductCard from "./ProductCard";

const CartSidebar = () => {
  return (
    <aside className="flex flex-col h-full justify-between">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center ">
          <h1 className="text-black text-lg xl:text-xl font-semibold font-serif capitalize">
            Your Cart{" "}
            <span className="text-base xl:text-lg font-serif">(1)</span>
          </h1>
        </div>
        <hr className="text-gray-200/40 rounded-sm w-full h-[1px] bg-gray-200/40" />
        <div className="flex flex-col gap-8">
          <ProductCard />
        </div>
      </div>
    </aside>
  );
};

export default CartSidebar;
