import React from "react";
import { createMuiTheme } from '@material-ui/core/styles';

// styles
import useStyles from "./styles";

// components
import { Typography } from "../Wrappers";

export default function UserAvatar({ color = "primary", ...props }) {
  var classes = useStyles();
  var theme = createMuiTheme();
  var letters = props.name.split(" ").map(word => word[0]).join("");
  return (
    <div className={classes.avatar} style={{ backgroundColor: theme.palette[color].main }} >
          <Typography className={classes.text} weight size color colorBrightness>{letters}</Typography>
    </div>
  );
}
