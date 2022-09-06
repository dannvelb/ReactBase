import * as React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Typography } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
export default function DatePickerComponent({
  label,
  name,
  setFormValue,
  value,
  error,
}) {
  return (
    <div className="p-2 w-100">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label={label}
          value={value}
          onChange={(newValue) => {
            setFormValue(name, newValue, false);
          }}
          renderInput={(params) => (
            <TextField className="form-control" {...params} />
          )}
        />
      </LocalizationProvider>
      {error && (
        <Typography
          className="text-danger"
          variant="caption"
          display="block"
          gutterBottom
        >
          {error}
        </Typography>
      )}
    </div>
  );
}
