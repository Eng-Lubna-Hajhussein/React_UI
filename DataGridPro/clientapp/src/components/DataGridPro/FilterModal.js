import {
  Icon,
  Grid,
  List,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Close, FilterList } from "@mui/icons-material";
import { useState } from "react";
import {
  filterOptionsEng,
  filterOptionsArb,
} from "../../appHelper/appVariables";

const FilterModal = ({
  openFilterModal,
  handleCloseFilterModal,
  appLang,
  filterAction,
  filterValue,
  handleFilter,
}) => {
  const [caseSensitive, setCaseSensitive] = useState(false);

  return (
    <Dialog
      open={openFilterModal}
      onClose={() => {
        handleCloseFilterModal();
      }}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle sx={{ height: "fit-content" }}>
        <Grid container justifyContent={"end"}>
          <Close sx={{ cursor: "pointer" }} onClick={handleCloseFilterModal} />
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Grid
          container
          py={1}
          justifyContent="center"
          alignItems={"center"}
          sx={{ height: "fit-content" }}
          alignContent={"center"}
        >
          <Grid item xs={appLang === 1?7:5} px={1}>
            <FormControl fullWidth>
              <InputLabel>Filter Options</InputLabel>
              <Select label={"Filter Options"} inputRef={filterAction}>
                {(
                  (appLang === 1 ? filterOptionsArb : filterOptionsEng) || []
                )?.map((option) => (
                  <MenuItem value={option.value}>{option.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={4} px={1}>
            <TextField
              label={appLang === 1 ? "القيمة" : "Value"}
              variant="outlined"
              fullWidth
              inputRef={filterValue}
            />
          </Grid>
          {appLang !== 1 && (
            <Grid xs={2} px={1}>
              <Button
                variant="outlined"
                color="inherit"
                sx={{ height: "50px" }}
                onClick={() => setCaseSensitive(!caseSensitive)}
              >
                {caseSensitive ? "I" : "S"}
              </Button>
            </Grid>
          )}
          <Grid xs={1} px={1}>
            <FilterList
              sx={{ cursor: "pointer" }}
              fontSize="large"
              onClick={() =>
                handleFilter(
                  caseSensitive,
                  filterAction.current.value,
                  filterValue.current.value
                )
              }
            />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default FilterModal;
