import { useState } from "react";
import CanvasCarousel from "./ui/CanvasCarousel";
import ColorSelect from "./ui/ColorSelect";
import QuantitySelect from "./ui/QuantitySelect";

const ProductCard = () => {
  const [currentColor, setCurrentColor] = useState<string>("emerald");
  const [currentQuantity, setCurrentQuantity] = useState<number>(1);

  const handleColorChange = (color: string) => {
    setCurrentColor(color);
  };

  const handleQuantityChange = (quantity: number) => {
    setCurrentQuantity(quantity);
  };

  return (
    <div className="flex flex-col text-black gap-4 w-full">
      <div className="object-cover w-full rounded-sm">
        <CanvasCarousel selectedColor={currentColor} />
      </div>

      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-base xl:text-lg font-serif font-medium">
            Aglaonema
          </h1>
          <p className="text-base xl:text-lg font-serif font-medium">
            $135 <span className="text-sm xl:text-base">USD</span>
          </p>
        </div>

        <div className="flex flex-row items-center justify-between w-full">
          <QuantitySelect
            currentQuantity={currentQuantity}
            onQuantityChange={handleQuantityChange}
          />

          <ColorSelect
            currentColor={currentColor}
            onColorChange={handleColorChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
