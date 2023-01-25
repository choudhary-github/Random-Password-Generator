import React from "react";
import { FormControlLabel, FormGroup, Checkbox } from "@mui/material";

function CheckboxComp({ label, value, onChange, name }) {
  return (
    <FormControlLabel className="formControlLabel"
      sx={{
        letterSpacing: 1,
      }}
      control={
        <Checkbox
        name={name}
        checked={value}
        onChange={onChange}
          sx={{
            marginRight:1 ,
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
