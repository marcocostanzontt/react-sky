// Styled
import { Wrapper, Table, Head, Row, Col } from "./TableWithPagination.styled";

// Components
import Pagination from "../../atoms/Pagination/Pagination";

const TableWithPagination = ({ data, page, perPage, onChange }) => {
  const end = page * perPage;
  const start = end - perPage + 1;
  const tot = Math.ceil(data.length / perPage);
  const table = data?.slice(start - 1, end + 1);

  const getColumns = () => {
    return (
      <Row>
        <Head>Title</Head>
        <Head>Description</Head>
        <Head>URL</Head>
        <Head>User Roles</Head>
      </Row>
    );
  };
  const getRows = () => {
    return table.map((res, i) => {
      return (
        <Row key={`row-${i}`}>
          <Col>{res.title}</Col>
          <Col>{res.description}</Col>
          <Col>{res.url}</Col>
          <Col>
            {res.userRoles.map((ur, j) => (
              <p key={`ur-${j}`}>{ur}</p>
            ))}
          </Col>
        </Row>
      );
    });
  };
  return (
    <Wrapper>
      <Table>
        {getColumns()}
        {getRows()}
        <Pagination
          page={page}
          start={start}
          end={end}
          tot={tot}
          onChange={onChange}
        />
      </Table>
    </Wrapper>
  );
};

// Export
export default TableWithPagination;
