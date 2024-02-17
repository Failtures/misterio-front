import Modal from "@/components/Modal/Modal";
import FormSuspectOrAccuse from "../FormSuspectOrAccuse/FormSuspectOrAccuse";
import useModal2 from "../../../../hooks/useModal2";

const SuspectOrAccuse = () => {
  const { isOpen, toggleModal } = useModal2();

  return (
    <Modal name="Sospechar" isOpen={isOpen} toggleModal={toggleModal}>
      <FormSuspectOrAccuse />
    </Modal>
  );
};
export default SuspectOrAccuse;
