import CustomButton from "../CustomButton/CustomButton";
import { Container } from "./Modal.styled";
import { useRef, useEffect } from "react";

const Modal = ({ name, children, isOpen, toggleModal }) => {
  const modalRef = useRef();

  const handleOpenModal = () => {
    if (!isOpen) {
      toggleModal(true);
    }
  };

  useEffect(() => {
    const handleClickInsideModal = (e) => {
      if (isOpen && modalRef.current && e.target === modalRef.current) {
        toggleModal(false);
      }
    };

    if (isOpen && modalRef.current) {
      modalRef.current.onclick = handleClickInsideModal;
    }

    return () => {
      if (modalRef.current) {
        modalRef.current.onclick = null;
      }
    };
  }, [isOpen, toggleModal]);

  return (
    <>
      {isOpen && (
        <Container ref={modalRef} className="modal-content">
          {children}
        </Container>
      )}
      <CustomButton name={name} onClick={handleOpenModal} />
    </>
  );
};

export default Modal;
