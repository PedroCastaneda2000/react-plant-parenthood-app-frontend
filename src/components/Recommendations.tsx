import { recommendationsArray } from "../config/product-options-config";

type Props = {
  display: string;
  mdDisplay: string;
};

const Recommendations = ({ display, mdDisplay }: Props) => {
  return (
    <div
      className={` ${display} md:${mdDisplay} flex-col gap-6 justify-center items-center md:items-start w-full p-0`}
    >
      <h1 className="text-xl xl:text-2xl font-serif font-normal">
        Similar in origin and care
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {recommendationsArray.map((product) => (
          <div key={product.id} className="flex flex-col items-center gap-2">
            <img
              className="object-cover h-96 w-full rounded "
              src={product.image}
              alt={`${product.name} Canvas`}
            />
            <div className="w-full px-3 flex justify-between items-center">
              <h1 className="text-lg xl:text-xl font-serif font-medium capitalize">
                {product.name}
              </h1>
              <p className="text-lg xl:text-xl font-serif font-medium">
                ${product.price}{" "}
                <span className="text-base xl:text-lg">USD</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
