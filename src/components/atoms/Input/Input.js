// Styled
import { InputStyled } from "./Input.styled";

// Component
const Input = ({ value = "", onChange, onSubmit }) => {
  return (
    <InputStyled
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => e?.code === "Enter" && onSubmit()}
    />
  );
};

// Export
export default Input;
