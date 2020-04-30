import React, { useState } from "react";
import { Grid, LinearProgress, Select, OutlinedInput, MenuItem, } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles"; 
import { ResponsiveContainer, ComposedChart, AreaChart, LineChart, Line, Area, PieChart, Pie, Cell, YAxis, XAxis, } from "recharts";

import useStyles from "./styles";

import mock from "./mock";
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import Table from "../../components/Table/Table";
import BigStat from "./components/BigStat/BigStat";

const mainChartData = getMainChartData();
const PieChartData = [
    { name: "Group A", value: 400, color: "primary" },
    { name: "Group B", value: 300, color: "secondary" },
    { name: "Group C", value: 300, color: "warning" },
    { name: "Group D", value: 200, color: "success" },
];

export default function Dashboard(props) {
    var classes = useStyles();
    var theme = useTheme();

    var [mainChartState, setMainChartState] = useState("monthly");

    return (
        <>
            <PageTitle title="Dashboard" button="Latest Reports" />
            <Grid container spacing={4}>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Widget noBodyPadding disableWidgetMenu header title="Visits Today" upperTitle bodyClass={classes.fullHeightBody} className={classes.card} >
                        <div className={classes.visitsNumberContainer}>
                            <Typography size="xl" weight="medium" colorBrightness color>12, 678</Typography>
                            <LineChart width={55} height={30} data={[{ value: 10 }, { value: 15 }, { value: 10 }, { value: 17 }, { value: 18 },]} >
                                <Line type="natural" dataKey="value" stroke={theme.palette.success.main} strokeWidth={2} dot={false} />
                            </LineChart>
                        </div>
                        <Grid container direction="row" justify="space-between" alignItems="center" >
                            <Grid item>
                                <Typography color="text" colorBrightness="secondary" weight size>Registrations</Typography>
                                <Typography color colorBrightness weight size="md">860</Typography>
                            </Grid>
                            <Grid item>
                                <Typography color="text" colorBrightness="secondary" weight size>Sign Out</Typography>
                                <Typography color colorBrightness weight size="md">32</Typography>
                            </Grid>
                            <Grid item>
                                <Typography color="text" colorBrightness="secondary" weight size>Rate</Typography>
                                <Typography color colorBrightness weight size="md">3.25%</Typography>
                            </Grid>
                        </Grid>
                    </Widget>
                </Grid>
                <Grid item lg={3} md={8} sm={6} xs={12}>
                    <Widget title="App Performance" upperTitle className={classes.card} bodyClass={classes.fullHeightBody}
                        noBodyPadding disableWidgetMenu header>
                        <div className={classes.performanceLegendWrapper}>
                            <div className={classes.legendElement}>
                                <Dot color="warning" size />
                                <Typography color="text" colorBrightness="secondary" className={classes.legendElementText} weight size>
                                    Integration</Typography>
                            </div>
                            <div className={classes.legendElement}>
                                <Dot color="primary" size />
                                <Typography color="text" colorBrightness="secondary" className={classes.legendElementText} weight size>
                                    SDK</Typography>
                            </div>
                        </div>
                        <div className={classes.progressSection}>
                            <Typography size="md" color="text" colorBrightness="secondary" className={classes.progressSectionTitle} weight>
                                Integration</Typography>
                            <LinearProgress variant="determinate" value={30} classes={{ barColorPrimary: classes.progressBar }} className={classes.progress} />
                        </div>
                        <div>
                            <Typography size="md" color="text" colorBrightness="secondary" className={classes.progressSectionTitle} weight>
                                SDK </Typography>
                            <LinearProgress variant="determinate" value={55} classes={{ barColorPrimary: classes.progressBar }} className={classes.progress} />
                        </div>
                    </Widget>
                </Grid>
                <Grid item lg={3} md={8} sm={6} xs={12}>
                    <Widget title="Server Overview" upperTitle className={classes.card} bodyClass={classes.fullHeightBody}
                        noBodyPadding disableWidgetMenu header>
                        <div className={classes.serverOverviewElement}>
                            <Typography color="text" colorBrightness="secondary" className={classes.serverOverviewElementText} weight size>
                                60% / 37°С / 3.3 Ghz</Typography>
                            <div className={classes.serverOverviewElementChartWrapper}>
                                <ResponsiveContainer height={50} width="99%">
                                    <AreaChart data={getRandomData(10, 0, 10)}>
                                        <Area type="natural" dataKey="value" stroke={theme.palette.secondary.main} fill={theme.palette.secondary.light}
                                            strokeWidth={2} fillOpacity="0.25" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className={classes.serverOverviewElement}>
                            <Typography color="text" colorBrightness="secondary" className={classes.serverOverviewElementText} weight size>
                                54% / 31°С / 3.3 Ghz</Typography>
                            <div className={classes.serverOverviewElementChartWrapper}>
                                <ResponsiveContainer height={50} width="99%">
                                    <AreaChart data={getRandomData(10, 0, 10)}>
                                        <Area type="natural" dataKey="value" stroke={theme.palette.primary.main} fill={theme.palette.primary.light}
                                            strokeWidth={2} fillOpacity="0.25" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className={classes.serverOverviewElement}>
                            <Typography color="text" colorBrightness="secondary" className={classes.serverOverviewElementText} weight size>
                                57% / 21°С / 3.3 Ghz</Typography>
                            <div className={classes.serverOverviewElementChartWrapper}>
                                <ResponsiveContainer height={50} width="99%">
                                    <AreaChart data={getRandomData(10, 0, 10)}>
                                        <Area type="natural" dataKey="value" stroke={theme.palette.warning.main} fill={theme.palette.warning.light}
                                            strokeWidth={2} fillOpacity="0.25" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </Widget>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Widget title="Revenue Breakdown" upperTitle className={classes.card} noBodyPadding bodyClass disableWidgetMenu header>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <ResponsiveContainer width="100%" height={144}>
                                    <PieChart margin={{ left: theme.spacing(2) }}>
                                        <Pie data={PieChartData} innerRadius={45} outerRadius={60} dataKey="value" >
                                            {PieChartData.map((entry, index) => ( <Cell key={`cell-${index}`} fill={theme.palette[entry.color].main} /> ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                            </Grid>
                            <Grid item xs={6}>
                                <div className={classes.pieChartLegendWrapper}>
                                    {PieChartData.map(({ name, value, color }, index) => (
                                        <div key={color} className={classes.legendItemContainer}>
                                            <Dot color={color} size />
                                            <Typography style={{ whiteSpace: "nowrap" }} weight size colorBrightness color> &nbsp;{name}&nbsp; </Typography>
                                            <Typography color="text" colorBrightness="secondary" weight size> &nbsp;{value} </Typography>
                                        </div>
                                    ))}
                                </div>
                            </Grid>
                        </Grid>
                    </Widget>
                </Grid>
                <Grid item xs={12}>
                    <Widget bodyClass={classes.mainChartBody} title noBodyPadding disableWidgetMenu
                        header={
                            <div className={classes.mainChartHeader}>
                                <Typography variant="h5" color="text" colorBrightness="secondary" weight size >Daily Line Chart</Typography>
                                <div className={classes.mainChartHeaderLabels}>
                                    <div className={classes.mainChartHeaderLabel}>
                                        <Dot color="warning" size />
                                        <Typography className={classes.mainChartLegentElement} weight size colorBrightness color>Tablet</Typography>
                                    </div>
                                    <div className={classes.mainChartHeaderLabel}>
                                        <Dot color="primary" size />
                                        <Typography className={classes.mainChartLegentElement} weight size colorBrightness color>Mobile</Typography>
                                    </div>
                                    <div className={classes.mainChartHeaderLabel}>
                                        <Dot color="primary" size />
                                        <Typography className={classes.mainChartLegentElement} weight size colorBrightness color>Desktop</Typography>
                                    </div>
                                </div>
                                <Select value={mainChartState} onChange={e => setMainChartState(e.target.value.toString())}
                                    input={ <OutlinedInput labelWidth={0}
                                            classes={{ notchedOutline: classes.mainChartSelectRoot, input: classes.mainChartSelect, }} /> } autoWidth>
                                    <MenuItem value="daily">Daily</MenuItem>
                                    <MenuItem value="weekly">Weekly</MenuItem>
                                    <MenuItem value="monthly">Monthly</MenuItem>
                                </Select>
                            </div> } >
                        <ResponsiveContainer width="100%" minWidth={500} height={350}>
                            <ComposedChart margin={{ top: 0, right: -15, left: -15, bottom: 0 }} data={mainChartData} >
                                <YAxis ticks={[0, 2500, 5000, 7500]} tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
                                    stroke={theme.palette.text.hint + "80"} tickLine={false} />
                                <XAxis tickFormatter={i => i + 1} tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
                                    stroke={theme.palette.text.hint + "80"} tickLine={false} />
                                <Area type="natural" dataKey="desktop" strokeWidth={0} activeDot={false} />
                                <Line type="natural" dataKey="mobile" stroke={theme.palette.primary.main} strokeWidth={2} dot={false} activeDot={false} />
                                <Line type="linear" dataKey="tablet" stroke={theme.palette.warning.main} strokeWidth={2}
                                    dot={{ stroke: theme.palette.warning.dark, strokeWidth: 2, fill: theme.palette.warning.main, }} />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </Widget>
                </Grid>
                {mock.bigStat.map(stat => ( <Grid item md={4} sm={6} xs={12} key={stat.product}> <BigStat {...stat} /> </Grid> ))}
                <Grid item xs={12}>
                    <Widget title="Support Requests" upperTitle noBodyPadding bodyClass={classes.tableWidget} disableWidgetMenu header >
                        <Table data={mock.table} />
                    </Widget>
                </Grid>
            </Grid>
        </>
    );
}

// #######################################################################
function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
    var array = new Array(length).fill(0);
    let lastValue;

    return array.map((item, index) => {
        let randomValue = Math.floor(Math.random() * multiplier + 1);
        while ( randomValue <= min || randomValue >= max || (lastValue && randomValue - lastValue > maxDiff) )
            randomValue = Math.floor(Math.random() * multiplier + 1);
        lastValue = randomValue;
        return { value: randomValue };
    });
}

function getMainChartData() {
    var resultArray = [];
    var tablet = getRandomData(31, 3500, 6500, 7500, 1000);
    var desktop = getRandomData(31, 1500, 7500, 7500, 1500);
    var mobile = getRandomData(31, 1500, 7500, 7500, 1500);

    for (let i = 0; i < tablet.length; i++) {
        resultArray.push({ tablet: tablet[i].value, desktop: desktop[i].value, mobile: mobile[i].value, });
    }
    return resultArray;
}
