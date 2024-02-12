import { ArrowDownward, ArrowUpward, FilterList, NoAccounts, Sort } from "@mui/icons-material";
import {  Grid, TableCell, Typography } from "@mui/material";

const TableColumn = ({
  field,
  headerName,
  handleSortUp,
  handleSortDown,
  sortUpFields,
  handleOPenHideModal,
  handleOpenFilterModal,
  handleSetFilterField,
  handleDragStart,
  handleDragEnd,
  handleDragEnter,
  index,
  draggable,
}) => {
  return (
    <TableCell
      draggable={draggable}
      onDragStart={draggable ? (_) => handleDragStart(index) : undefined}
      onDragEnter={draggable ? (_) => handleDragEnter(index) : undefined}
      onDragEnd={draggable ? handleDragEnd : undefined}
      className={draggable?"draggable":"non_draggable"}
      sx={{
        border: "1px solid #c4c4c4",
        fontSize: "15px",
        fontWeight: 800,
        cursor:"move"
      }}
      align="center"
    >
      <Grid container justify="center">
        <Grid item xs="2">
          {sortUpFields.includes(field) ? (
            <ArrowUpward
            sx={{ cursor: "pointer" }}
            fontSize="small"
              onClick={() => handleSortUp(field)}
            />
          ) : (
            <ArrowDownward
            sx={{ cursor: "pointer" }}
            fontSize="small"
              onClick={() => handleSortDown(field)}
            />
          )}
        </Grid>
        <Grid item xs="6">
          {headerName}
        </Grid>
        <Grid item xs="2">
          <FilterList
            sx={{ cursor: "pointer" }}
            fontSize="small"
            onClick={() => {
              handleSetFilterField(field);
              handleOpenFilterModal();
            }}
          />
        </Grid>
        <Grid item xs="2">
          <NoAccounts
           sx={{ cursor: "pointer" }}
           fontSize="small"
           onClick={() => handleOPenHideModal()}
          />
        </Grid>
      </Grid>
    </TableCell>
  );
};

export default TableColumn;
