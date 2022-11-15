// Styled
import { HeaderStyled, Title, SearchbarWrapper } from "./Header.styled";

// Components
import Searchbar from "../../molecules/Searchbar/Searchbar";

const Header = ({ logo, title, searchbar }) => {
  return (
    <>
      <HeaderStyled>
        <img height={48} src={logo} alt="logo" />
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
