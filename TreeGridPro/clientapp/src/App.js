import TreeGridPro from "./components/TreeGridPro/TreeGridPro";
import { rows, rowsArabic } from "./data/rows";
import { columns, columnsArabic } from "./data/columns";
import {
  Container,
  Button,
  Grid,
} from "@mui/material";
import { useState } from "react";
import CopyToClipboardButton from "./components/sharedui/CopyToClipboardButton/CopyToClipboardButton";
import { Language } from "@mui/icons-material";

function App() {
  const [appLang, setAppLang] = useState(0);
  document.documentElement.dir = "ltr";
  return (
    <div className="app" style={{ padding: "10px" }}>
       <Grid item xs='12' container pb={2} px={2}>
          <CopyToClipboardButton label={'Download From'} value={'https://github.com/Eng-Lubna-Hajhussein/React_UI/tree/main/TreeGridPro'} />
        </Grid>
        <Grid item xs='12' container justifyContent={'center'} pb={2} px={2}>
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
        </Grid>
      <Container>
        <TreeGridPro
          rows={appLang === 1 ? [...rowsArabic] : [...rows]}
          columns={appLang === 1 ? [...columnsArabic] : [...columns]}
          appDir={appLang === 1 ? "rtl" : "ltr"}
          appLang={appLang}
        />
      </Container>
    </div>
  );
}

export default App;
