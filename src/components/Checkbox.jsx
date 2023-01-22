import React from "react";
import { FormControlLabel, FormGroup, Checkbox } from "@mui/material";

function CheckboxComp({ label, value, onChange, name }) {
  return (
    <FormControlLabel
      sx={{
        letterSpacing: 1,
      }}
      control={
        <Checkbox
        name={name}
        checked={value}
        onChange={onChange}
          sx={{
            "&.Mui-checked": {
              color: "success.light",
            },
          }}
        />
      }
      label={label}
    />
    // </FormGroup>
  );
}

export default CheckboxComp;
