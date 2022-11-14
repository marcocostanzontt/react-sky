// Styled
import { HeaderStyled, Title, SearchbarWrapper } from "./Header.styled";

// Components
import Searchbar from "../../molecules/Searchbar/Searchbar";

const Header = ({ title, searchbar }) => {
  return (
    <>
      <HeaderStyled>
        {title && <Title>{title}</Title>}
        <SearchbarWrapper>
          <Searchbar {...searchbar} />
        </SearchbarWrapper>
      </HeaderStyled>
    </>
  );
};

// Export
export default Header;
