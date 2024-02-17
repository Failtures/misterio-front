import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Text from "@/components/Text/Text";
import CustomInput from "@/components/CustomInput/CustomInput";
import CustomButton from "@/components/CustomButton/CustomButton";
import { Container, Bottom } from "./Login.styled";
import { useDispatch } from "react-redux";
import { login } from "@/redux/user/slice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { player_name } = data;
    dispatch(login(player_name));
    navigate("/lobby");
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Text color="primary" fontSize="small" fontWeight="bold">
        Para comenzar a jugar, por favor, ingresa tu nickname.
      </Text>
      <Bottom>
        <CustomInput
          control={control}
          errors={errors}
          name="player_name"
          rules={{
            required: "Campo obligatorio",
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: "Solo admite letras y numeros",
            },
            minLength: {
              value: 3,
              message: "La longitud debe ser mayor a 3",
            },
            maxLength: {
              value: 10,
              message: "La longitud debe ser menor a 10",
            },
          }}
          style={{ width: "300px" }}
          placeholder="Ingresa tu nickname..."
        />
        <CustomButton name="Jugar" style={{ width: "200px" }} />
      </Bottom>
    </Container>
  );
};
export default Login;
