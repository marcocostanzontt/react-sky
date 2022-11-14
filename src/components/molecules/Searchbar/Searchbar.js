// Styled
import {
  SearchbarStyled,
  InputWrapper,
  ButtonWrapper,
} from "./Searchbar.styled";

// Components
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";

const Searchbar = ({ input, button }) => {
  return (
    <SearchbarStyled>
      <InputWrapper>
        <Input {...input} />
      </InputWrapper>
      <ButtonWrapper>
        <Button {...button} />
      </ButtonWrapper>
    </SearchbarStyled>
  );
};

// Export
export default Searchbar;
