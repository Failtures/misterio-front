import useModal2 from "@/hooks/useModal2";
import Text from "@/components/Text/Text";
import Modal from "@/components/Modal/Modal";
import CardSelector from "../CardSelector/CardSelector";
import ModalContainer from "../ModalContainer/ModalContainer";
import { cards } from "@/cards";
import { useEffect } from "react";

const Inform = () => {
  const { isOpen, toggleModal } = useModal2();

  return (
    <Modal name="Ver informe" isOpen={isOpen} toggleModal={toggleModal}>
      <ModalContainer title="Informe">
        {Object.keys(cards).map((card_type, index) => {
          const title = {
            victims: "Víctimas",
            monsters: "Monstruos",
            rooms: "Habitaciones",
          }[card_type];
          return (
            <div key={index}>
              <Text color="primary" fontWeight="bold" fontSize="microSmall">
                {title}:
              </Text>
              <CardSelector cards={cards[card_type]} />
            </div>
          );
        })}
      </ModalContainer>
    </Modal>
  );
};

export default Inform;
