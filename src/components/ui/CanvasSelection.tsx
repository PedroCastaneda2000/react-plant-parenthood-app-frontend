import { colorToCanvasMap } from "../../config/product-options-config";

type Props = {
  onColorSelect: (color: string) => void;
};

const CanvasSelection = ({ onColorSelect }: Props) => {
  return (
    <div className="hidden md:flex gap-4">
      {Object.entries(colorToCanvasMap).map(([color, src]) => (
        <button
          key={color}
          onClick={() => onColorSelect(color)}
          className={`opacity-75 hover:opacity-100 focus:opacity-100 transition duration-300 cursor-pointer `}
          aria-label={`Select ${color} color`}
        >
          <img
            className="w-[180px] max-h-[192px] object-cover rounded-sm"
            src={src}
            alt={`${color} Canvas`}
          />
        </button>
      ))}
    </div>
  );
};

export default CanvasSelection;
