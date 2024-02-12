import Table from "./Table";

const DataGridPro = ({ rows, columns, appLang, appDir, getSelectedRowsID,draggable }) => {
  return (
    <Table
      columns={columns}
      rows={rows}
      appLang={appLang}
      appDir={appDir}
      getSelectedRowsID={getSelectedRowsID}
      draggable={draggable}
    />
  );
};

export default DataGridPro;
