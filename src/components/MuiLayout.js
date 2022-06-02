import React from "react";
import { Box, Stack, Divider, Grid } from "@mui/material";
// stack is used to manage layout in 1-D  either along the vertival or horizontal axis.
// spacing={2}  1=8px so 2 would be 8*2=16px
const MuiLayout = () => {
  return (
    <>
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider flexItem orientation="vertical" />}
      >
        {/* //   by default it is div */}
        <Box
          sx={{
            backgroundColor: "primary.main",
            width: "100px",
            height: "100px",
            padding: "16px",
            color: "white",
            "&:over": {
              backgroundColor: "primary.light",
            },
          }}
        >
          MuiLayout
        </Box>
        <Box
          sx={{
            backgroundColor: "primary.main",
            width: "100px",
            height: "100px",
            padding: "16px",
            color: "white",
            "&:over": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Box with div tag
        </Box>
        <Box component="span">Box with span tag</Box>
      </Stack>
      <Grid container columnSpacing={1} rowSpacing={2}>
        <Grid item sm={12} md={6}>
          <Box sx={{backgroundColor:"blue"}}>Hello from item 1</Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <Box sx={{backgroundColor:"blue"}}>Hello from item 2</Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <Box sx={{backgroundColor:"blue"}}>Hello from item 3</Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <Box sx={{backgroundColor:"blue"}}>Hello from item 4</Box>
        </Grid>
      </Grid>
    </>
  );
};

export default MuiLayout;
