import DataGridPro from "./components/DataGridPro/DataGridPro";
import { rows, rowsArabic } from "./data/rows";
import { columns, columnsArabic } from "./data/columns";
import { useState } from "react";
import { Button, Grid } from "@mui/material";
import { Language } from "@mui/icons-material";
import CopyToClipboardButton from "./components/sharedui/CopyToClipboardButton/CopyToClipboardButton";

function App() {
  const [appLang, setAppLang] = useState(0);
  document.documentElement.dir = "ltr";
  const getSelectedRowsID = (listID) => {
    console.log({ listID });
  };

  return (
    <div className="App" style={{ padding: "10px" }}>
      <Grid container className="container" justifyContent={"center"}>
        <Grid item xs='12' container pb={2} px={2}>
          <CopyToClipboardButton label={'Download From'} value={'https://github.com/Eng-Lubna-Hajhussein/React_UI/tree/main/DataGridPro'} />
        </Grid>
        {appLang === 0 && (
          <Button
            variant="link"
            onClick={() => {
              setAppLang(1);
              document.documentElement.dir = "rtl";
            }}
            endIcon={<Language />}
            sx={{ fontSize: "18px" }}
          >
            عربي
          </Button>
        )}
        {appLang === 1 && (
          <Button
            variant="link"
            onClick={() => {
              setAppLang(0);
              document.documentElement.dir = "ltr";
            }}
            endIcon={<Language />}
            sx={{ fontSize: "18px", textTransform: "capitalize" }}
          >
            English
          </Button>
        )}
        <DataGridPro
          rows={appLang === 1 ? [...rowsArabic] : [...rows]}
          columns={appLang === 1 ? [...columnsArabic] : [...columns]}
          appDir={appLang === 1 ? "rtl" : "ltr"}
          appLang={appLang}
          getSelectedRowsID={getSelectedRowsID}
          draggable={true}
        />
      </Grid>
    </div>
  );
}

export default App;
