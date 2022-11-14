// Styled
import { HeadlineStyled } from "./Headline.styled";

// Component
const Headline = ({ title }) => {
  if (!title) {
    return null;
  }
  return <HeadlineStyled>{title}</HeadlineStyled>;
};

// Export
export default Headline;
