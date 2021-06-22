import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Buttons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        style={{ color: "white", backgroundColor: "rgb(7, 160, 255)" }}
      >
        Start a New Campaign Now
      </Button>
      <Button
        variant="contained"
        style={{ color: "white", backgroundColor: "red" }}
      >
        Pause All Running Campaigns
      </Button>
    </div>
  );
}

export default Buttons;

//export default function ContainedButtons
