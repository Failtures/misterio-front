import { Controller } from "react-hook-form";
import styled from "styled-components";
import Text from "../Text/Text";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const InputStyled = styled.input`
  ${({ theme }) => `
    height: 50px;
    width: 100%;
    padding: 0 10px;
    font-size: ${theme.fontSize[13]};
    font-family: ${theme.fontFamily};
    border: 2px solid ${theme.color.primary};
    outline: none;
    color: ${theme.color.primary};
    background-color: ${theme.backgroundColor.primary};
  `}
`;

const CustomInput = ({
  control,
  defaultValue = "",
  errors,
  isPassword = false,
  name,
  rules,
  label,
  style,
  ...rest
}) => {
  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field, fieldState }) => (
        <Container>
          <InputStyled style={style} {...field} {...rest} />
          <Text color="error" fontWeight="regular" fontSize="microSmall">
            {fieldState.error?.message}
          </Text>
        </Container>
      )}
      rules={rules}
    />
  );
};
export default CustomInput;
