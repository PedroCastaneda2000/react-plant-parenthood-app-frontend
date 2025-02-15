import { useState, useEffect, useRef } from "react";

const useSelect = () => {
  const [selectOpen, setSelectOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setSelectOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSelect = () => {
    setSelectOpen((prev) => !prev);
  };

  return {
    selectOpen,
    toggleSelect,
    selectRef,
  };
};

export default useSelect;
