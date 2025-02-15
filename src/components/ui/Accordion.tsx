import { useState } from "react";
import { AccordionItem } from "../../types";
import dropdownSmIcon from "../../assets/dropdown-arrow-icon.svg";

type Props = {
  items: AccordionItem[];
};

const Accordion = ({ items }: Props) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index) ? [] : [index]
    );
  };

  return (
    <div className="flex flex-col gap-4 pb-2">
      {items.map(({ id, title, content }) => (
        <div
          key={id}
          id="accordionSection"
          className="bg-white rounded border border-primary-stroke shadow-sm w-full py-6 px-3 flex flex-col gap-4 "
        >
          <button
            aria-expanded={openIndexes.includes(id)}
            onClick={() => toggleAccordion(id)}
            className="flex justify-between w-full items-center cursor-pointer"
          >
            <h1 className="text-xl xl:text-2xl font-serif font-medium capitalize">
              {title}
            </h1>
            <img
              className={`w-6 h-8 transform transition-transform duration-500 ${
                openIndexes.includes(id) ? "rotate-180" : "rotate-0"
              }`}
              src={dropdownSmIcon}
              alt="Dropdown Icon"
            />
          </button>

          <div
            id="accordionContent"
            className={`accordion-style ${
              openIndexes.includes(id) ? "open" : ""
            }`}
            aria-hidden={!openIndexes.includes(id)}
          >
            <div className="flex flex-col gap-4">{content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
