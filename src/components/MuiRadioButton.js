import React from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

const MuiRadioButton = () => {
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-label"> Years Of Experience</FormLabel>
        <RadioGroup name="job-experience" row>
          <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="2-5" value="2-5" />
          <FormControlLabel control={<Radio />} label="5-10" value="5-10" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
