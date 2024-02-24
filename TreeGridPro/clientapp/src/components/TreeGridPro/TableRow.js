import { TableCell, TableRow } from "@mui/material";
import React from "react";

const TableRowComponent = ({ info, columns, rowName,root=false,appLang }) => {
  console.log(appLang);
  return (
    <TableRow>
      <TableCell></TableCell>
      {columns.map((column, index) =>
      <React.Fragment key={index}>
       { index === 0 ? <TableCell 
       sx={{textAlign:appLang===1?"right":"left"
       ,[`padding${appLang===0?'Left':'Right'}`]:root?4:`${info.hierarchy.length * 2+4}px`
       }}>{rowName}</TableCell> : <TableCell >{info[column.field]}</TableCell>}
        </React.Fragment>
      )}
    </TableRow>
  );
};

export default TableRowComponent;
