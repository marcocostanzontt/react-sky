// Modules
import styled from "styled-components";

// Styles
export const PaginationStyled = styled.div`
  display: flex;
  flex: 1;
`;

export const PaginationItem = styled.a`
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover:not(.active) {
    background-color: #ddd;
  }
`;
