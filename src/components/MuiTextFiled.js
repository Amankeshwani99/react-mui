import React from "react";
import { TextField, Stack, InputAdornment } from "@mui/material";

const MuiTextFiled = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={4} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack spacing={4} direction="row">
        <TextField label="Name" variant="outlined" required />
        <TextField label="Name" variant="outlined" disabled />
        <TextField
          label="Name"
          variant="outlined"
          helperText="it is important to fill this"
        />
        <TextField label="value" variant="outlined" type="number" />
        <TextField
          label="Amount"
          InputProps={{
            endAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="weight"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextFiled;
