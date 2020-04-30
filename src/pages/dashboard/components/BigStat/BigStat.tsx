import React, { useState } from "react";
import { Grid, Select, MenuItem, Input } from "@material-ui/core";
import { ArrowForward as ArrowForwardIcon } from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";
import { BarChart, Bar } from "recharts";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Widget from "../../../../components/Widget";
import { Typography } from "../../../../components/Wrappers";

export default function BigStat(props) {
  var { product, total, color, registrations, bounce } = props;
  var classes = useStyles();
  var theme = useTheme();

  // local
  var [value, setValue] = useState("daily");

  return (
    <Widget title noBodyPadding bodyClass disableWidgetMenu
      header={
        <div className={classes.title}>
          <Typography variant="h5" weight size colorBrightness color>{product}</Typography>

          <Select
            value={value}
            onChange={e => setValue(e.target.value.toString())}
            input={
              <Input
                disableUnderline
                classes={{ input: classes.selectInput }}
              />
            }
            className={classes.select}
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
          </Select>
        </div>
      }
      upperTitle
    >
      <div className={classes.totalValueContainer}>
        <div className={classes.totalValue}>
          <Typography size="xxl" color="text" colorBrightness="secondary" weight>
            {total[value]}
          </Typography>
                  <Typography color={total.percent.profit ? "success" : "secondary"} weight size colorBrightness>
            &nbsp;{total.percent.profit ? "+" : "-"}
            {total.percent.value}%
          </Typography>
        </div>
        <BarChart width={150} height={70} data={getRandomData()}>
          <Bar
            dataKey="value"
            fill={theme.palette[color].main}
            radius={10}
            barSize={10}
          />
        </BarChart>
      </div>
      <div className={classes.bottomStatsContainer}>
        <div className={classnames(classes.statCell, classes.borderRight)}>
          <Grid container alignItems="center">
                      <Typography variant="h6" weight size colorBrightness color>{registrations[value].value}</Typography>
            <ArrowForwardIcon
              className={classnames(classes.profitArrow, {
                [(!registrations[value].profit).toString()]: classes.profitArrowDanger,
              })}
            />
          </Grid>
          <Typography size="sm" color="text" colorBrightness="secondary" weight>
            Registrations
          </Typography>
        </div>
        <div className={classes.statCell}>
          <Grid container alignItems="center">
                      <Typography variant="h6" weight size colorBrightness color>{bounce[value].value}%</Typography>
            <ArrowForwardIcon
              className={classnames(classes.profitArrow, {
                [(!registrations[value].profit).toString()]: classes.profitArrowDanger,
              })}
            />
          </Grid>
          <Typography size="sm" color="text" colorBrightness="secondary" weight>
            Bounce Rate
          </Typography>
        </div>
        <div className={classnames(classes.statCell, classes.borderRight)}>
          <Grid container alignItems="center">
                      <Typography variant="h6" weight size colorBrightness color>
              {registrations[value].value * 10}
            </Typography>
            <ArrowForwardIcon
              className={classnames(classes.profitArrow, {
                [classes.profitArrowDanger]: !registrations[value].profit,
              })}
            />
          </Grid>
          <Typography size="sm" color="text" colorBrightness="secondary" weight>
            Views
          </Typography>
        </div>
      </div>
    </Widget>
  );
}

// #######################################################################

function getRandomData() {
  return Array(7)
    .fill(0)
    .map(() => ({ value: Math.floor(Math.random() * 10) + 1 }));
}
