import CanvasCarousel from "./ui/CanvasCarousel";

type Props = {
  selectedColor: string;
};

const ProductSlider = ({ selectedColor }: Props) => {
  return (
    <div className="w-full">
      <CanvasCarousel selectedColor={selectedColor} />
    </div>
  );
};

export default ProductSlider;
