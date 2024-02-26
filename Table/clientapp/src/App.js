import React from "react";
import "./App.css";
import Table from "./components/Table/Table";
import TableHead from "./components/Table/TableHead";
import TableRow from "./components/Table/TableRow";
import TableCell from "./components/Table/TableCell";
import TableBody from "./components/Table/TableBody";
import { rows } from "./data/rows";
import { columns } from "./data/columns";

function App() {
  return (
    <div className="table-wrapper">
      
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                sx={{
                  border: "1px solid #c4c4c4",
                  fontSize: "15px",
                  fontWeight: 800,
                  cursor: "move",
                }}
              >
                {column.headerName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              sx={{
                border: "1px solid #c4c4c4",
                fontSize: "15px",
                fontWeight: 800,
              }}
            >
              <React.Fragment key={index}>
                {columns.map((column, index) => (
                  <React.Fragment key={column.field}>
                    {column.valueGetter ? (
                      <TableCell
                        sx={{
                          border: "1px solid #c4c4c4",
                          fontWeight: 500,
                          color: "#555",
                          textTransform: "capitalize",
                        }}
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
                      >
                        {row[column.field]}
                      </TableCell>
                    )}
                  </React.Fragment>
                ))}
              </React.Fragment>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default App;
