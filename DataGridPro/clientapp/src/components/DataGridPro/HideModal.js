import { Close } from "@mui/icons-material";
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};

const HideModal = ({
  openHideModal,
  handleCloseHideModal,
  columns,
  handleUnHiddenFields,
  unHiddenFields,
  appLang,
}) => {
  const [checkedColumns, setCheckedColumns] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    const hiddenColumns = typeof value === "string" ? value.split(",") : value;
    setCheckedColumns(hiddenColumns);
    handleUnHiddenFields(hiddenColumns);
  };

  return (
    <Dialog
      open={openHideModal}
      onClose={handleCloseHideModal}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle sx={{ height: "fit-content" }}>
        <Grid container justifyContent={"end"}>
          <Close sx={{ cursor: "pointer" }} onClick={handleCloseHideModal} />
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs="12">
            <FormControl sx={{ m: 1, width: "100%" }}>
              <InputLabel>
                {appLang === 1 ? "اخفي الاعمدة" : "Hide Fields"}
              </InputLabel>
              <Select
                multiple
                defaultValue={checkedColumns}
                onChange={handleChange}
                input={
                  <OutlinedInput
                    label={appLang === 1 ? "اخفي الاعمدة" : "Hide Fields"}
                  />
                }
                renderValue={(selected) => selected.join(", ")}
                label={appLang === 1 ? "اخفي الاعمدة" : "Hide Fields"}
                MenuProps={MenuProps}
              >
                {columns.map((column) => (
                  <MenuItem key={column.field} value={column.field}>
                    <Checkbox
                      checked={checkedColumns.indexOf(column.field) > -1}
                    />
                    <ListItemText primary={column.headerName} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default HideModal;
