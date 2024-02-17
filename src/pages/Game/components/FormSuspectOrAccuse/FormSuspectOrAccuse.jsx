import { useForm, Controller } from "react-hook-form";
import Text from "@/components/Text/Text";
import { cards } from "@/cards";
import CardSelector from "../CardSelector/CardSelector";
import CustomButtom from "@/components/CustomButton/CustomButton";
import { Container, Header, SelectorContainer } from "./FormSuspectOrAccuse.styled";

const FormSuspectOrAccuse = () => {
  const { control, handleSubmit, setValue, reset } = useForm();

  const onSubmit = (data) => {
    console.log("DATA:", data);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Header>
        <Text color="primary" fontWeight="bold" fontSize="medium">
          Sospechar
        </Text>
        <Text color="primary" fontWeight="regular" fontSize="small">
          Selecciona una carta de Monstruo, Víctima y Vestíbulo.
        </Text>
      </Header>

      <SelectorContainer>
        {Object.keys(cards).map((type, index) => (
          <Controller
            key={index}
            control={control}
            name={type}
            rules={{ required: "Por favor, selecciona una opción" }}
            render={({ fieldState, field: { name, value } }) => (
              <>
                <CardSelector cards={{ ...cards[type] }} field_name={name} setValue={setValue} value={value} />
                <Text color="error" fontWeight="regular" fontSize="microSmall">
                  {fieldState.error?.message}
                </Text>
              </>
            )}
          />
        ))}
      </SelectorContainer>

      <CustomButtom name="Confirmar" style={{ margin: "auto" }} />
    </Container>
  );
};

export default FormSuspectOrAccuse;
