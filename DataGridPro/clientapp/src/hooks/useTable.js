import { useCallback, useEffect, useState, useRef } from "react";
import { getFields, getRowsID, manageRows } from "../appHelper/appFunctions";
const {
  filterContain,
  filterEndWith,
  filterEqual,
  filterStartWith,
  isEmpty,
  isNotEmpty,
  sortASC,
  sortDESC,
} = manageRows;

const useTable = ({ rows, columns, appLang, getSelectedRowsID }) => {
  const fields = useCallback(getFields([...columns]), [columns]);
  const [manageTable, setManageTable] = useState({
    columnsInfo: [...columns],
    rowsInfo: [...rows],
    selectedRows: [],
    unHiddenFields: [...fields],
    filterField: "",
    sortUpFields: [...fields],
  });

  useEffect(() => {
    getSelectedRowsID(manageTable.selectedRows);
  }, [manageTable.selectedRows]);

  useEffect(() => {
    manageTable.rowsInfo = [...rows];
    manageTable.columnsInfo = [...columns];
    manageTable.sortUpFields = [...fields];
    setManageTable({ ...manageTable });
  }, [appLang, columns, rows]);

  const handleRowsSelected = (checked) => {
    checked
      ? (manageTable.selectedRows = getRowsID(manageTable.rowsInfo))
      : (manageTable.selectedRows = []);
    setManageTable({ ...manageTable });
  };

  const handleUnHiddenFields = (hiddenFields) => {
    manageTable.unHiddenFields = fields.filter(
      (field) => !hiddenFields.includes(field)
    );
    setManageTable({ ...manageTable });
  };

  const handleRowSelected = (rowID) => {
    const rowIDIndex = manageTable.selectedRows.indexOf(rowID);
    rowIDIndex === -1
      ? manageTable.selectedRows.push(rowID)
      : manageTable.selectedRows.splice(rowIDIndex, 1);
    setManageTable({ ...manageTable });
  };

  const handleSortUp = (field) => {
    manageTable.sortUpFields.splice(manageTable.sortUpFields.indexOf(field), 1);
    manageTable.rowsInfo = sortASC(field, rows);
    setManageTable({ ...manageTable });
  };

  const handleSortDown = (field) => {
    manageTable.sortUpFields.push(field);
    manageTable.rowsInfo = sortDESC(field, rows);
    setManageTable({ ...manageTable });
  };

  const handleSetFilterField = (field) => {
    manageTable.filterField = field;
    setManageTable({ ...manageTable });
  };

  const handleFilter = (caseSensitive, action, value) => {
    const { filterField } = manageTable;
    switch (action) {
      case "contain":
        manageTable.rowsInfo = filterContain(
          filterField,
          value,
          rows,
          !caseSensitive
        );
        break;
      case "equal":
        manageTable.rowsInfo = filterEqual(
          filterField,
          value,
          rows,
          !caseSensitive
        );
        break;
      case "startWith":
        manageTable.rowsInfo = filterStartWith(
          filterField,
          value,
          rows,
          !caseSensitive
        );
        break;
      case "endWith":
        manageTable.rowsInfo = filterEndWith(
          filterField,
          value,
          rows,
          !caseSensitive
        );
        break;
      case "isEmpty":
        manageTable.rowsInfo = isEmpty(filterField, rows);
        break;
      case "isNotEmpty":
        manageTable.rowsInfo = isNotEmpty(filterField, rows);
    }
    setManageTable({ ...manageTable });
  };

  let columnDrag = useRef();
  let columnDragOver = useRef();

  const handleDragStart = (index) => {
    columnDrag.current = index;
  };

  const handleDragEnter = (index) => {
    columnDragOver.current = index;
    setManageTable({ ...manageTable });
  };

  const handleDragEnd = () => {
    const column_main = manageTable.columnsInfo[columnDrag.current];
    manageTable.columnsInfo.splice(columnDrag.current, 1);
    manageTable.columnsInfo.splice(columnDragOver.current, 0, column_main);
    columnDrag.current = null;
    columnDragOver.current = null;
    setManageTable({ ...manageTable });
  };

  return {
    handleFilter,
    handleRowSelected,
    handleRowsSelected,
    handleSetFilterField,
    handleSortDown,
    handleSortUp,
    handleUnHiddenFields,
    handleDragStart,
    handleDragEnter,
    handleDragEnd,
    manageTable,
  };
};

export default useTable;
