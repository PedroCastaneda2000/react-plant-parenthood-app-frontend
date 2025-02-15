import { colorMap } from "../../config/product-options-config";

type Props = {
  selectedColor: string;
  onColorSelect: (color: string) => void;
};

const ColorSelection = ({ selectedColor, onColorSelect }: Props) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="text-16 xl:text-lg capitalize font-inter">
        <p>
          color: <span className="font-semibold italic">{selectedColor}</span>
        </p>
      </div>
      <div className="flex gap-4">
        {Object.keys(colorMap).map((color) => (
          <button
            key={color}
            onClick={() => onColorSelect(color)}
            className="flex justify-center items-center h-12 w-12 rounded-full hover:shadow-hover-stroke focus:shadow-clicked-stroke transition duration-300 cursor-pointer"
            aria-label={`Select ${color} color`}
          >
            <div
              className="h-10 w-10 rounded-full"
              style={{ backgroundColor: colorMap[color] }}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelection;
