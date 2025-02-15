import Button from "./ui/Button";
import ColorSelection from "./ui/ColorSelection";

type Props = {
  onColorSelect: (color: string) => void;
  selectedColor: string;
};

const ProductDetails = ({ selectedColor, onColorSelect }: Props) => {
  return (
    <div className="w-full rounded-t-[3.5rem] flex flex-col justify-top items-center md:px-0 md:min-w-[360px]md:rounded-none">
      <div className="flex flex-col items-center w-full selection:max-w-96 gap-4 mb-4">
        <div className=" flex flex-col w-full items-start gap-4">
          <div className="flex flex-col items-start w-full gap-2 ">
            <h1 className="text-3xl xl:text-4xl font-normal font-serif capitalize">
              Aglaonema | Red Chinese Evergreen{" "}
            </h1>
            <p className="text-xl xl:text-2xl font-normal font-serif capitalize">
              $135 <span className="text-lg xl:text-xl"> USD</span>
            </p>
          </div>
          <hr className="text-gray-200/40 rounded-sm w-full h-[1px] bg-gray-200/40" />
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <ColorSelection
          onColorSelect={onColorSelect}
          selectedColor={selectedColor}
        />
        <Button Input="Add to bag" />
      </div>
    </div>
  );
};

export default ProductDetails;
