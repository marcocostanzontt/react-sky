// Styled
import { PaginationStyled, PaginationItem } from "./Pagination.styled";

// Component
const Pagination = ({ page, start, end, tot, onChange }) => {
  const getItems = () => {
    const items = [];
    for (let i = 1; i <= tot; i++) {
      items.push(
        <PaginationItem
          key={`pagination-item-${i}`}
          style={page === i ? { backgroundColor: "navy", color: "white" } : {}}
          onClick={() => onChange(i)}
        >
          {i}
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <PaginationStyled>
      {page !== start && (
        <PaginationItem onClick={() => onChange(1)}>&laquo;</PaginationItem>
      )}
      {getItems()}
      {tot !== 0 && page !== tot && (
        <PaginationItem onClick={() => onChange(tot)}>&raquo;</PaginationItem>
      )}
    </PaginationStyled>
  );
};

// Export
export default Pagination;
