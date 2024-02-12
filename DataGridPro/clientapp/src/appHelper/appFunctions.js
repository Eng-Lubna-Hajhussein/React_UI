import { columns } from "../data/columns";

export const manageRows = {
  sortASC: (field, rows) =>
    [...rows].sort((a, b) => (a[field] > b[field] ? 1 : -1)),
  sortDESC: (field, rows) =>
    [...rows].sort((a, b) => (a[field] < b[field] ? 1 : -1)),
  filterContain: (field, value, rows, i) =>
    [...rows].filter((row) =>
      i
      ? `${row[field]}`.toLowerCase().includes(`${value}`.toLowerCase())
      : `${row[field]}`.includes(`${value}`)
    ),
  filterEqual: (field, value, rows, i) =>
    [...rows].filter((row) =>
      i
      ? `${row[field]}`.toLowerCase() === `${value}`.toLowerCase()
      : `${row[field]}` === `${value}`
    ),
  filterStartWith: (field, value, rows, i) =>
    [...rows].filter((row) =>
      i
        ? new RegExp(`^${value}`, "i").test(`${row[field]}`)
        : new RegExp(`^${value}`).test(`${row[field]}`)
    ),
  filterEndWith: (field, value, rows, i) =>
    [...rows].filter((row) =>
      i
        ? new RegExp(`${value}$`, "i").test(`${row[field]}`)
        : new RegExp(`${value}$`).test(`${row[field]}`)
    ),
  isEmpty: (field, rows) => [...rows].filter((row) => !row[field]),
  isNotEmpty: (field, rows) => [...rows].filter((row) => !!row[field]),
};

export const getRowsID = (rows) => {
  return [...rows].map((row) => row.id);
};

export const getFields = () => {
  return [...columns].map((column) => column.field);
};
