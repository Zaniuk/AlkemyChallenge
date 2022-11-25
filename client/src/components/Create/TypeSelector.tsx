import React from "react";
import { Box } from "@mui/material";
import {InputLabel, MenuItem, Select} from "@mui/material";
function TypeSelector({value, onChange, error, id, label, name}: any) {
  return (
    <Box>
      <InputLabel id="concept-selectior">{label}</InputLabel>
      <Select
        labelId="concept-selectior"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        error={error}
      >
        <MenuItem value={'income'}>Ingreso</MenuItem>
        <MenuItem value={'outcome'}>Egreso</MenuItem>
      </Select>
    </Box>
  );
}

export default TypeSelector;
