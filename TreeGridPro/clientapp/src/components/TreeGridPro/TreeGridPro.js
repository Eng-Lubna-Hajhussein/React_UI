import { Container } from "@mui/material";
import Table from "./Table";

const TreeGridPro = ({ rows, columns, appDir, appLang }) => {
  return (
    <Container>
      <Table columns={columns} rows={rows} appDir={appDir} appLang={appLang} />
    </Container>
  );
};

export default TreeGridPro;
