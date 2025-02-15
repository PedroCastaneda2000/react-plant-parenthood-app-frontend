import { AccordionItem } from "../types";
import waterIcon from "../assets/water-icon.svg";
import sunIcon from "../assets/sun-icon.svg";
import windIcon from "../assets/wind-icon.svg";

export const accordionItems: AccordionItem[] = [
  {
    id: 1,
    title: "Aglaonema Bio",
    content: (
      <>
        <p className="text-sm xl:text-base font-inter font-normal">
          Aglaonema 'Tropical Charm' isn't just a feast for the eyes—it's a
          beginner's best friend and an air-purifying powerhouse. With its
          mesmerizing foliage boasting shades of pink, green, and red, this
          plant brings a burst of positivity to any room. Perfect for those new
          to gardening, 'Tropical Charm' thrives with minimal care and forgives
          occasional lapses in watering or light exposure. Plus, it's
          pet-friendly, ensuring the safety of your furry friends. As a bonus,
          it excels at purifying indoor air, making your environment not just
          beautiful, but healthier too. Embrace the beauty and benefits of
          Aglaonema 'Tropical Charm' in your home or office and experience the
          joy of caring for a truly beginner-friendly, pet-friendly, and
          air-purifying plant.
        </p>
        <div className="flex flex-col gap-1">
          <h4 className="text-xl xl:text-2xl font-serif font-semibold capitalize">
            Botanical Name
          </h4>
          <p className="text-sm xl:text-base font-inter font-normal italic">
            Aglaonema 'Siam'
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-xl xl:text-2xl font-serif font-semibold">
            Common Name(s)
          </h4>
          <p className="text-sm xl:text-base font-inter font-normal italic">
            Red Chinese Evergreen, Siam Aglaonema, Siam Aurora, Aglaonema
            Firecracker, Siam Aurora Red Aglaonema, Siam
          </p>
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: "What's Included",
    content: (
      <div className="flex flex-col gap-4 max-h-[1000px] overflow-y-auto">
        <p className="text-sm xl:text-base font-inter font-normal">
          <span className="font-semibold capitalize">Sizing Overview: </span>
          Your new botanical companion stands approximately 40cm tall, including
          the height of its stylish 13cm x 13.5cm green ridged ceramic pot and
          its 14.5cm dia. saucer.
        </p>
        <p className="text-sm xl:text-base font-inter font-normal">
          <span className="font-semibold capitalize">Handy Care Tips: </span>
          We've got you covered with super low maintenance care tips to ensure
          your plant thrives in its new home.
        </p>
        <p className="text-sm xl:text-base font-inter font-normal">
          <span className="font-semibold capitalize">
            Eco-Friendly Packaging:{" "}
          </span>
          Your plant will be delivered right to your doorstep in 100% recyclable
          and compostable packaging, with the pot included for your convenience.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Details & Care",
    content: (
      <div className="flex flex-col gap-4 max-h-[1000px] overflow-y-auto">
        <div className="flex flex-row items-center gap-6">
          <img className="w-5 h-5" src={waterIcon} alt="Water Icon" />
          <div className="flex flex-col justify-center">
            <span className="font-inter font-medium capitalize text-sm xl:text-base">
              Monthly Hydration{" "}
            </span>
            <p className="text-sm xl:text-base font-inter font-normal">
              Lorem ipsum dolor sit amet consectetur. Id blandit sem consectetur
              sit faucibus vitae.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center  gap-6">
          <img className="w-5 h-5" src={sunIcon} alt="Sun Icon" />
          <div className="flex flex-col justify-center">
            <span className="font-inter font-medium capitalize text-sm xl:text-base">
              Low indirect Light{" "}
            </span>
            <p className="text-sm xl:text-base font-inter font-normal">
              Lorem ipsum dolor sit amet consectetur. Id blandit sem consectetur
              sit faucibus vitae.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-6">
          <img className="w-5 h-5" src={windIcon} alt="Wind Icon" />
          <div className="flex flex-col justify-center">
            <span className="font-inter font-medium capitalize text-sm xl:text-base">
              Botanical Air Purifier{" "}
            </span>
            <p className="text-sm xl:text-base font-inter font-normal">
              Lorem ipsum dolor sit amet consectetur. Id blandit sem consectetur
              sit faucibus vitae.
            </p>
          </div>
        </div>
      </div>
    ),
  },
];
