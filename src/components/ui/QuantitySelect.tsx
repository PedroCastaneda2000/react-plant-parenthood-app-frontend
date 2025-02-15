import dropdownSmIcon from "../../assets/dropdown-arrow-icon.svg";
import useSelect from "../../hooks/useSelect";

type Props = {
  currentQuantity: number;
  onQuantityChange: (quantity: number) => void;
};

const QuantitySelect = ({ currentQuantity, onQuantityChange }: Props) => {
  const { selectOpen, toggleSelect, selectRef } = useSelect();

  return (
    <div className="flex flex-col gap-2 relative">
      <p className="text-sm xl:text-base font-inter capitalize italic">
        Quantity
      </p>
      <div ref={selectRef}>
        <button
          className="bg-primary-white rounded shadow-primary-drop border border-primary-stroke w-full h-11 px-3 flex gap-3 justify-between items-center cursor-pointer"
          onClick={toggleSelect}
        >
          <span className="text-sm font-inter">{currentQuantity}</span>
          <img src={dropdownSmIcon} alt="Dropdown Icon" />
        </button>
        {selectOpen && (
          <div className="absolute top-full mt-2 bg-white shadow-primary-drop border border-primary-stroke rounded w-full z-10 ">
            {[1, 2, 3, 4, 5].map((quantity) => (
              <button
                key={quantity}
                className="flex justify-between items-center gap-2 p-2 w-full text-left hover:bg-lightgray cursor-pointer"
                onClick={() => {
                  onQuantityChange(quantity);
                  toggleSelect();
                }}
              >
                <span className="text-sm capitalize font-inter">
                  {quantity}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuantitySelect;
