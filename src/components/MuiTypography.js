import React from "react";
import { Typography } from "@mui/material";

function MuiTypography() {
  return (
    <div>
      <Typography variant="h1">Hello from Heading 1</Typography>
      <Typography variant="h2">Hello from Heading 2</Typography>
      <Typography variant="h3">Hello from Heading 3</Typography>
      <Typography variant="h4">Hello from Heading 4</Typography>
      <Typography variant="h5">Hello from Heading 5</Typography>
      {/* gutterBottom to give margin */}
      <Typography variant="h6" gutterBottom>
        Hello from Heading 6
      </Typography>
      {/* h6 with low font weight and size */}
      <Typography variant="subtitle1">Hello from subtitle1</Typography>
      <Typography variant="subtitle2">Hello from subtitle2</Typography>
      {/* paragraphs */}
      <Typography variant="body1">
        loremipmsum loremipmsum loremipmsum loremipmsumloremipmsum loremipmsum
        loremipmsum loremipmsum loremipmsum
      </Typography>
      <Typography variant="body2">
        loremipmsum loremipmsum loremipmsum loremipmsumloremipmsum loremipmsum
        loremipmsum loremipmsum loremipmsum
      </Typography>
    </div>
  );
}

export default MuiTypography;
