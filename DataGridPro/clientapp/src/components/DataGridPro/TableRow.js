import React from "react";
import { TableRow, TableCell, Typography } from "@mui/material";

const TableRowComponent = ({
  row,
  columns,
  handleRowSelected,
  selectedRows,
  unHiddenFields,
  appLang
}) => {
  return (
    <TableRow>
      <TableCell
        sx={{
          border: "1px solid #c4c4c4",
          fontSize: "15px",
          fontWeight: 800,
        }}
      >
        <input
          type="checkbox"
          checked={selectedRows.includes(row.id)}
          onChange={() => {
            handleRowSelected(row.id);
          }}
        />
      </TableCell>
      {columns.map((column, index) => (
        <React.Fragment key={index}>
          {unHiddenFields.includes(column.field) ? (
            column.valueGetter ? (
              <TableCell
                sx={{
                  border: "1px solid #c4c4c4",
                  fontWeight: 500,
                  color: "#555",
                  textTransform: "capitalize",
                }}
                align={appLang===1?'right':'left'}
              >
                {column.valueGetter({ row: row })}
              </TableCell>
            ) : (
              <TableCell
                sx={{
                  border: "1px solid #c4c4c4",
                  fontWeight: 500,
                  color: "#555",
                  textTransform: "capitalize",
                }}
                align={appLang===1?'right':'left'}
              >
                {row[column.field]}
              </TableCell>
            )
          ) : (
            ""
          )}
        </React.Fragment>
      ))}
    </TableRow>
  );
};

export default TableRowComponent;
