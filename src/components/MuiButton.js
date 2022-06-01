import React, { useState } from "react";
import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MuiButton = () => {
  // for exclusive in toggle bitton
  const [format, setFormat] = useState(null);
  const [formats, setFormats] = useState([]);
  const handleFormatChange = (_event, updatedFormat) => {
    setFormat(updatedFormat);
  };
  console.log("here is the updated format", format);
  return (
    <Stack spacing={4}>
      <Stack spacing={4} direction="row">
        {/* these are html button element we can convert them into anchor by giving href property */}
        <Button variant="text">Text Button</Button>
        <Button variant="contained" href="https://google.com">
          contained Button
        </Button>
        <Button variant="outlined">outlined Button</Button>
      </Stack>
      {/* colors */}
      <Stack spacing={4} direction="row">
        <Button variant="contained" color="primary">
          primary Button
        </Button>
        <Button variant="contained" color="secondary">
          secondry Button
        </Button>
        <Button variant="contained" color="warning">
          warning Button
        </Button>
        <Button variant="contained" color="success">
          success Button
        </Button>
        <Button variant="contained" color="info">
          info Button
        </Button>
      </Stack>

      {/* button sizes */}
      <Stack display="block" spacing={4} direction="row">
        <Button variant="contained" size="small">
          small Button
        </Button>
        <Button variant="contained" size="medium">
          medium Button
        </Button>
        <Button variant="contained" size="large">
          large Button
        </Button>
      </Stack>
      <Stack spacing={4} direction="row">
        {/* elevation and ripple to disable for shadow and click shadow on the button */}
        <Button variant="contained" startIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableRipple>
          Send
        </Button>
        <IconButton size="large" color="secondary">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row" spacing={4}>
        <ButtonGroup
          variant="contained"
          size="large"
          color="success"
          orientation="vertical"
        >
          <Button onClick={() => alert("left clicked")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack spacing={4} direction="row">
        {/* exclusive means we can select only one toggle action */}
        <ToggleButtonGroup
          onChange={handleFormatChange}
          value={format}
          exclusive
        >
          <ToggleButton value="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
