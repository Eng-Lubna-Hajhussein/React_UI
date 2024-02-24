import TableSection from "./TableSection";
import { orderTree } from "./../../appHelper/appFunctions";
import TableRowComponent from "./TableRow";
import React, { useMemo } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  Container,
} from "@mui/material";

const TableComponent = ({ rows, columns,appDir,appLang }) => {
  rows = useMemo(() => orderTree(rows), [rows]);

  return (
    <Container dir={appDir}>
    <Table>
      <TableHead>
        <TableCell></TableCell>
        {columns.map((column) => (
          <TableCell key={column.field}>{column.headerName}</TableCell>
        ))}
      </TableHead>
      <TableBody>
        {Object.keys(rows).map((row, index) => (
          <React.Fragment key={index}>
            {Object.keys(rows[row].children).length ? (
              <TableSection
                appLang={appLang}
                root={true}
                row={rows[row]}
                rowName={row}
                columns={columns}
                index={index}
              />
            ) : (
              <TableRowComponent
                appLang={appLang}
                root={true}
                info={rows[row].info}
                columns={columns}
                rowName={row}
              />
            )}
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
    </Container>
  );
};

export default TableComponent;
