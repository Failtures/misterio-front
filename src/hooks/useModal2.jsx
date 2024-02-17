import { useState } from "react";

const useModal2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (state) => {
    setIsOpen(state);
  };

  return {
    isOpen,
    toggleModal,
  };
};
export default useModal2;
