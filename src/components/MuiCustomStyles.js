import React from "react";
import { makeStyles,withStyles } from '@mui/styles';
import {Button} from "@mui/material";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, green 30%, orange 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding:'40px'
  }
});
const styles = {
    root: {
      background: "linear-gradient(45deg, green 30%, orange 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 48,
      padding: "50px 30px",
      marginTop:'10px'
    }
  };

function MuiCustomStyles({classes}) {
//   const classes = useStyles();
  return <Button className={classes.root}>Hooks React</Button>;
}
export default withStyles(styles)(MuiCustomStyles); 