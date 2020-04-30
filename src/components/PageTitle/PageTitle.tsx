import React from "react";
import { Button } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import { Typography } from "../Wrappers";
import { light } from "@material-ui/core/styles/createPalette";

export default function PageTitle(props) {
  var classes = useStyles();

  return (
    <div className={classes.pageTitleContainer}>
      <Typography className={classes.typo} variant="h1" size="xsm" color colorBrightness weight={light}>
        {props.title}
      </Typography>
      {props.button && (
        <Button
          classes={{ root: classes.button }}
          variant="contained"
          size="large"
          color="secondary"
        >
          {props.button}
        </Button>
      )}
    </div>
  );
}
