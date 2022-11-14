// Styled
import { ButtonStyled } from "./Button.styled";

// Component
const Button = ({ title = "", onSubmit }) => {
  return <ButtonStyled onClick={() => onSubmit()}>{title}</ButtonStyled>;
};

// Export
export default Button;
