import React, { useState } from "react";
import { TextField, MenuItem, Box } from "@mui/material";

const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const handleCountriesChange = (event) => {
    let value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  console.log("here is the selectde country", countries);
  return (
    <Box width="250px">
      <TextField
        select
        fullWidth
        label="Select Country"
        onChange={handleCountryChange}
        value={country}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
        <MenuItem value="PAK">Pakistan</MenuItem>
      </TextField>
      <h1>Multi select box</h1>
      <TextField
        select
        fullWidth
        label="Select Country"
        onChange={handleCountriesChange}
        value={countries}
        SelectProps={{ multiple: true }}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
        <MenuItem value="PAK">Pakistan</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
