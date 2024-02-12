import React, { useRef, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Grid,
} from "@mui/material";
import TableRowComponent from "./TableRow";
import TableColumn from "./TableColumn";
import FilterModal from "./FilterModal";
import HideModal from "./HideModal";
import useTable from "../../hooks/useTable";

const TableComponent = ({
  rows,
  columns,
  appLang,
  appDir,
  getSelectedRowsID,
  draggable,
}) => {
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [openHideModal, setOpenHideModal] = useState(false);
  const filterValue = useRef("");
  const filterAction = useRef("");
  const {
    handleDragEnd,
    handleDragEnter,
    handleDragStart,
    handleFilter,
    handleRowSelected,
    handleRowsSelected,
    handleSetFilterField,
    handleSortDown,
    handleSortUp,
    handleUnHiddenFields,
    manageTable,
  } = useTable({ rows, columns, appLang, getSelectedRowsID });
  const { columnsInfo, rowsInfo, selectedRows, unHiddenFields, sortUpFields } =
    manageTable;

  const handleOpenFilterModal = () => {
    setOpenFilterModal(true);
  };

  const handleOPenHideModal = () => {
    setOpenHideModal(true);
  };

  const handleCloseFilterModal = () => {
    setOpenFilterModal(false);
  };

  const handleCloseHideModal = () => {
    setOpenHideModal(false);
  };

  return (
    <Grid dir={appDir} container p={2}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              className="column"
              sx={{
                border: "1px solid #c4c4c4",
                fontSize: "15px",
                fontWeight: 800,
              }}
            >
              <input
                type="checkbox"
                onChange={(e) => handleRowsSelected(e.target.checked)}
              />
            </TableCell>
            {columnsInfo.map(({ field, headerName }, index) => (
              <React.Fragment key={headerName}>
                {unHiddenFields.includes(field) ? (
                  <TableColumn
                    field={field}
                    headerName={headerName}
                    sortUpFields={sortUpFields}
                    handleSortUp={handleSortUp}
                    handleSortDown={handleSortDown}
                    handleOPenHideModal={handleOPenHideModal}
                    handleOpenFilterModal={handleOpenFilterModal}
                    handleSetFilterField={handleSetFilterField}
                    handleDragStart={handleDragStart}
                    handleDragEnd={handleDragEnd}
                    handleDragEnter={handleDragEnter}
                    index={index}
                    draggable={draggable}
                  />
                ) : (
                  ""
                )}
              </React.Fragment>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsInfo.map((row, index) => (
            <React.Fragment key={index}>
              <TableRowComponent
                row={row}
                appLang={appLang}
                columns={columnsInfo}
                unHiddenFields={unHiddenFields}
                handleRowSelected={handleRowSelected}
                selectedRows={selectedRows}
              />
            </React.Fragment>
          ))}
          <TableRow>
            <TableCell colSpan={columns.length + 1}   sx={{
          border: "1px solid #c4c4c4",
          fontSize: "15px",
          fontWeight: 400,
        }}>
              {selectedRows.length
                ? `${selectedRows.length} ` +
                  (appLang === 1 ? "صفوف محددة" : "rows selected")
                : ""}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <FilterModal
        openFilterModal={openFilterModal}
        handleCloseFilterModal={handleCloseFilterModal}
        appLang={appLang}
        filterAction={filterAction}
        filterValue={filterValue}
        handleFilter={handleFilter}
      />
      <HideModal
        openHideModal={openHideModal}
        handleCloseHideModal={handleCloseHideModal}
        columns={columnsInfo}
        appLang={appLang}
        unHiddenFields={unHiddenFields}
        handleUnHiddenFields={handleUnHiddenFields}
      />
    </Grid>
  );
};

export default TableComponent;
