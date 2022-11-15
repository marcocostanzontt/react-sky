// Styled
import { Wrapper } from "./TableWithPagination.styled";

// Components
import Table from "../../atoms/Table/Table";
import Pagination from "../../atoms/Pagination/Pagination";

const TableWithPagination = ({ data, page, perPage, onChange }) => {
  const end = page * perPage;
  const start = end - perPage + 1;
  const tot = Math.ceil(data.length / perPage);
  const table = data?.slice(start - 1, end + 1);

  // get table columns
  const columns = table?.length ? Object.keys(table[0]) : [];

  return (
    <Wrapper>
      <Table data={table} columns={columns} />
      <Pagination
        page={page}
        start={start}
        end={end}
        tot={tot}
        onChange={onChange}
      />
    </Wrapper>
  );
};

// Export
export default TableWithPagination;
