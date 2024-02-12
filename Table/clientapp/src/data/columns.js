export const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "firstName",
      headerName: "First name",
    },
    {
      field: "lastName",
      headerName: "Last name",
    },
    {
      field: "stack",
      headerName: "Stack",
    },
    {
      field: "position",
      headerName: "Position",
    },
    {
      field: "fullName",
      headerName: "Full name",
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  
  ];
  
  export const columnsArabic = [
    { field: "id", headerName: "رقم التعريف" },
    {
      field: "firstName",
      headerName: "الاسم الاول",
    },
    {
      field: "lastName",
      headerName: "اسم الاخير",
    },
    {
      field: "stack",
      headerName: "المهارات",
    },
      {
      field: "position",
      headerName: "الوظيفة",
    },
    {
      field: "fullName",
      headerName: "الاسم كامل",
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];
  