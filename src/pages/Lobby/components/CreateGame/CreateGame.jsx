import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLobbyContext } from "@/contexts/LobbyContext/LobbyContext";
import CustomInput from "@/components/CustomInput/CustomInput";
import Text from "@/components/Text/Text";
import CustomButton from "@/components/CustomButton/CustomButton";
import { Container } from "./CreateGame.styled";
import { getPlayerName } from "@/redux/user/utils";

const CreateGame = () => {
  const navigate = useNavigate();
  const { sendMessage } = useLobbyContext();
  const player_name = getPlayerName();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { lobby_name } = data;

    sendMessage({
      action: "lobby_create",
      player_name,
      lobby_name,
    });

    navigate(`/lobby/${lobby_name}`);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Text color="primary" fontWeight="bold" fontSize="medium" style={{ marginBottom: "20px" }}>
        Crear partida
      </Text>
      <CustomInput
        control={control}
        errors={errors}
        name="lobby_name"
        rules={{
          required: "Campo obligatorio",
          maxLength: { value: 15, message: "El nombre debe ser menor a 10 caracteres" },
        }}
        placeholder="Nombre de la partida..."
      />
      <CustomButton name="Crear" style={{ height: "65px", marginTop: "10px" }} />
    </Container>
  );
};
export default CreateGame;
