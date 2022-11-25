import React from "react";
import {Box, InputLabel, Select, MenuItem} from "@mui/material";
function ConceptSelector({value, onChange, error, id, label, name}: any) {
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
        <MenuItem value={'income'}>Entretenimiento</MenuItem>
        <MenuItem value={'services'}>Servicios</MenuItem>
        <MenuItem value={'market'}>Mercado</MenuItem>
        <MenuItem value={'shopping'}>Tiendas</MenuItem>
        <MenuItem value={'others'}>Otros</MenuItem>
      </Select>
    </Box>
  );
}

export default ConceptSelector;
