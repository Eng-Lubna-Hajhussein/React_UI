import React from "react";
import ExpendableButton from "./ExpendableButton";
import TableRowComponent from "./TableRow";
import useOpenController from "../../hooks/useOpenController";
import { TableCell,TableRow } from "@mui/material";

export const TableSection = ({ row, columns, rowName, index, root=false,appLang }) => {
  const { isOpen, toggle } = useOpenController(false);
  const children = Object.keys(row.children);

  return (
    <>
      <TableRow index={index}>
        <TableCell sx={{textAlign:appLang===1?"right":"left"}} className="button-td">
          <ExpendableButton
            space={row.info.hierarchy.length}
            isOpen={isOpen}
            toggle={toggle}
            appLang={appLang}
          />
        </TableCell>
        {columns.map((column, index) =>
          index === 0 ? (
            <TableCell key={index} sx={{textAlign:appLang===1?"right":"left", [`padding${appLang===0?'Left':'Right'}`]:root?4:`${row.info.hierarchy.length * 2+4}px`}}>
              <b>
                {rowName} : ({children.length})
              </b>
            </TableCell >
          ) : (
            <TableCell key={index}>{row.info[column.field]}</TableCell>
          )
        )}
      </TableRow>
      {!!(isOpen && children.length) &&
        children.map((child, index) =>
        <React.Fragment key={index}>
          {Object.keys(row.children[child].children).length ? (
            <TableSection
              row={row.children[child]}
              columns={columns}
              rowName={child}
              index={index}
              appLang={appLang}
            />
          ) : (
            <TableRowComponent
              info={row.children[child].info}
              columns={columns}
              rowName={child}
              appLang={appLang}
            />
          )}
          </React.Fragment>
        )}
    </>
  );
};

export default TableSection;
