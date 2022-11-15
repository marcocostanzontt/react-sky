// Styled
import { TableStyled, Head, Row, Col } from "./Table.styled";

// Utils
import { toCamelCase } from "../../../utils/index";

const Table = ({ data, columns }) => {
  // get table heading data
  const getHeads = () => {
    return columns.map((data, i) => (
      <Head key={`head-${i}`}>{toCamelCase(data)}</Head>
    ));
  };

  const getColumns = (row) => {
    return columns.map((field, j) => {
      if (Array.isArray(row[field])) {
        return row[field].lenght ? (
          row[field].map((item, j) => (
            <Col key={`col-${j}`}>
              <p key={`item-${j}`}>{item}</p>
            </Col>
          ))
        ) : (
          <Col key={`col-${j}`}>
            <p>N/A</p>
          </Col>
        );
      }
      return <Col key={`col-${j}`}>{row[field]}</Col>;
    });
  };

  const getRows = () => {
    return data.map((row, i) => {
      return <Row key={`row-${i}`}>{getColumns(row)}</Row>;
    });
  };

  return (
    <TableStyled>
      <thead>
        <Row> {getHeads()}</Row>
      </thead>
      <tbody>{getRows()}</tbody>
    </TableStyled>
  );
};

// Export
export default Table;
