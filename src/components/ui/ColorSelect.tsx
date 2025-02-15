import dropdownSmIcon from "../../assets/dropdown-arrow-icon.svg";
import useSelect from "../../hooks/useSelect";
import { colorMap } from "../../config/product-options-config";

type Props = {
  currentColor: string;
  onColorChange: (color: string) => void;
};

const ColorSelect = ({ currentColor, onColorChange }: Props) => {
  const { selectOpen, toggleSelect, selectRef } = useSelect();

  const handleColorChange = (color: string) => {
    onColorChange(color);
    toggleSelect();
  };

  return (
    <div className="flex flex-col gap-2 relative">
      <p className="text-sm xl:text-base font-inter capitalize italic">Color</p>
      <div ref={selectRef}>
        <button
          className="bg-primary-white rounded shadow-primary-drop border border-primary-stroke w-full h-11 px-3 flex justify-between items-center cursor-pointer gap-3"
          onClick={toggleSelect}
        >
          <div className="flex justify-between items-center gap-3">
            <div className="flex justify-center items-center h-7 w-7 rounded-full shadow-clicked-stroke">
              <div
                className="h-5 w-5 rounded-full"
                style={{ backgroundColor: colorMap[currentColor] }}
              ></div>
            </div>
            <span className="text-sm capitalize font-inter">
              {currentColor.charAt(0).toUpperCase() + currentColor.slice(1)}
            </span>
          </div>
          <img src={dropdownSmIcon} alt="Dropdown Icon" />
        </button>
        {selectOpen && (
          <div className="absolute top-full mt-2 bg-white shadow-primary-drop border border-primary-stroke rounded w-full z-10">
            {Object.keys(colorMap).map((color) => (
              <button
                key={color}
                className="flex items-center gap-2 p-2 w-full text-left hover:bg-lightgray cursor-pointer"
                onClick={() => handleColorChange(color)}
              >
                <div className="flex justify-center items-center h-7 w-7 rounded-full shadow-clicked-stroke">
                  <div
                    className="h-5 w-5 rounded-full"
                    style={{ backgroundColor: colorMap[color] }}
                  ></div>
                </div>
                <span className="text-sm capitalize font-inter">
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorSelect;
