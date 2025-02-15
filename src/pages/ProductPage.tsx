import { useState } from "react";
import ProductDetails from "../components/ProductDetails";
import CanvasSelection from "../components/ui/CanvasSelection";
import ProductSlider from "../components/ProductSlider";
import Accordion from "../components/ui/Accordion";
import { accordionItems } from "../config/accordion-options-config";
import Recommendations from "../components/Recommendations";

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState("emerald");

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex flex-col gap-6 md:grid md:grid-cols-[minmax(0,3fr)_2fr] md:gap-y-12">
      <div className="md:grid-row-1">
        <ProductSlider selectedColor={selectedColor} />
        <div className="hidden flex-col gap-4 md:flex md:mt-4 md:gap-6">
          <CanvasSelection onColorSelect={handleColorSelect} />
          <hr className="text-gray-200/40 rounded-sm w-full h-[1px] bg-gray-200/40" />
          <Recommendations display="hidden" mdDisplay="flex" />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <ProductDetails
          onColorSelect={handleColorSelect}
          selectedColor={selectedColor}
        />
        <Accordion items={accordionItems} />
      </div>
      <div className="block md:hidden">
        <Recommendations display="flex" mdDisplay="hidden" />
      </div>
    </div>
  );
};

export default ProductPage;
