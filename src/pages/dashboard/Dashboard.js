"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const core_1 = require("@material-ui/core");
const styles_1 = require("@material-ui/core/styles");
const recharts_1 = require("recharts");
const styles_2 = __importDefault(require("./styles"));
const mock_1 = __importDefault(require("./mock"));
const Widget_1 = __importDefault(require("../../components/Widget"));
const PageTitle_1 = __importDefault(require("../../components/PageTitle"));
const Wrappers_1 = require("../../components/Wrappers");
const Dot_1 = __importDefault(require("../../components/Sidebar/components/Dot"));
const Table_1 = __importDefault(require("../../components/Table/Table"));
const BigStat_1 = __importDefault(require("./components/BigStat/BigStat"));
const mainChartData = getMainChartData();
const PieChartData = [
    { name: "Group A", value: 400, color: "primary" },
    { name: "Group B", value: 300, color: "secondary" },
    { name: "Group C", value: 300, color: "warning" },
    { name: "Group D", value: 200, color: "success" },
];
function Dashboard(props) {
    var classes = styles_2.default();
    var theme = styles_1.useTheme();
    var [mainChartState, setMainChartState] = react_1.useState("monthly");
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(PageTitle_1.default, { title: "Dashboard", button: "Latest Reports" }),
        react_1.default.createElement(core_1.Grid, { container: true, spacing: 4 },
            react_1.default.createElement(core_1.Grid, { item: true, lg: 3, md: 4, sm: 6, xs: 12 },
                react_1.default.createElement(Widget_1.default, { noBodyPadding: true, disableWidgetMenu: true, header: true, title: "Visits Today", upperTitle: true, bodyClass: classes.fullHeightBody, className: classes.card },
                    react_1.default.createElement("div", { className: classes.visitsNumberContainer },
                        react_1.default.createElement(Wrappers_1.Typography, { size: "xl", weight: "medium", colorBrightness: true, color: true }, "12, 678"),
                        react_1.default.createElement(recharts_1.LineChart, { width: 55, height: 30, data: [{ value: 10 }, { value: 15 }, { value: 10 }, { value: 17 }, { value: 18 },] },
                            react_1.default.createElement(recharts_1.Line, { type: "natural", dataKey: "value", stroke: theme.palette.success.main, strokeWidth: 2, dot: false }))),
                    react_1.default.createElement(core_1.Grid, { container: true, direction: "row", justify: "space-between", alignItems: "center" },
                        react_1.default.createElement(core_1.Grid, { item: true },
                            react_1.default.createElement(Wrappers_1.Typography, { color: "text", colorBrightness: "secondary", weight: true, size: true }, "Registrations"),
                            react_1.default.createElement(Wrappers_1.Typography, { color: true, colorBrightness: true, weight: true, size: "md" }, "860")),
                        react_1.default.createElement(core_1.Grid, { item: true },
                            react_1.default.createElement(Wrappers_1.Typography, { color: "text", colorBrightness: "secondary", weight: true, size: true }, "Sign Out"),
                            react_1.default.createElement(Wrappers_1.Typography, { color: true, colorBrightness: true, weight: true, size: "md" }, "32")),
                        react_1.default.createElement(core_1.Grid, { item: true },
                            react_1.default.createElement(Wrappers_1.Typography, { color: "text", colorBrightness: "secondary", weight: true, size: true }, "Rate"),
                            react_1.default.createElement(Wrappers_1.Typography, { color: true, colorBrightness: true, weight: true, size: "md" }, "3.25%"))))),
            react_1.default.createElement(core_1.Grid, { item: true, lg: 3, md: 8, sm: 6, xs: 12 },
                react_1.default.createElement(Widget_1.default, { title: "App Performance", upperTitle: true, className: classes.card, bodyClass: classes.fullHeightBody, noBodyPadding: true, disableWidgetMenu: true, header: true },
                    react_1.default.createElement("div", { className: classes.performanceLegendWrapper },
                        react_1.default.createElement("div", { className: classes.legendElement },
                            react_1.default.createElement(Dot_1.default, { color: "warning", size: true }),
                            react_1.default.createElement(Wrappers_1.Typography, { color: "text", colorBrightness: "secondary", className: classes.legendElementText, weight: true, size: true }, "Integration")),
                        react_1.default.createElement("div", { className: classes.legendElement },
                            react_1.default.createElement(Dot_1.default, { color: "primary", size: true }),
                            react_1.default.createElement(Wrappers_1.Typography, { color: "text", colorBrightness: "secondary", className: classes.legendElementText, weight: true, size: true }, "SDK"))),
                    react_1.default.createElement("div", { className: classes.progressSection },
                        react_1.default.createElement(Wrappers_1.Typography, { size: "md", color: "text", colorBrightness: "secondary", className: classes.progressSectionTitle, weight: true }, "Integration"),
                        react_1.default.createElement(core_1.LinearProgress, { variant: "determinate", value: 30, classes: { barColorPrimary: classes.progressBar }, className: classes.progress })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement(Wrappers_1.Typography, { size: "md", color: "text", colorBrightness: "secondary", className: classes.progressSectionTitle, weight: true }, "SDK "),
                        react_1.default.createElement(core_1.LinearProgress, { variant: "determinate", value: 55, classes: { barColorPrimary: classes.progressBar }, className: classes.progress })))),
            react_1.default.createElement(core_1.Grid, { item: true, lg: 3, md: 8, sm: 6, xs: 12 },
                react_1.default.createElement(Widget_1.default, { title: "Server Overview", upperTitle: true, className: classes.card, bodyClass: classes.fullHeightBody, noBodyPadding: true, disableWidgetMenu: true, header: true },
                    react_1.default.createElement("div", { className: classes.serverOverviewElement },
                        react_1.default.createElement(Wrappers_1.Typography, { color: "text", colorBrightness: "secondary", className: classes.serverOverviewElementText, weight: true, size: true }, "60% / 37\u00B0\u0421 / 3.3 Ghz"),
                        react_1.default.createElement("div", { className: classes.serverOverviewElementChartWrapper },
                            react_1.default.createElement(recharts_1.ResponsiveContainer, { height: 50, width: "99%" },
                                react_1.default.createElement(recharts_1.AreaChart, { data: getRandomData(10, 0, 10) },
                                    react_1.default.createElement(recharts_1.Area, { type: "natural", dataKey: "value", stroke: theme.palette.secondary.main, fill: theme.palette.secondary.light, strokeWidth: 2, fillOpacity: "0.25" }))))),
                    react_1.default.createElement("div", { className: classes.serverOverviewElement },
                        react_1.default.createElement(Wrappers_1.Typography, { color: "text", colorBrightness: "secondary", className: classes.serverOverviewElementText, weight: true, size: true }, "54% / 31\u00B0\u0421 / 3.3 Ghz"),
                        react_1.default.createElement("div", { className: classes.serverOverviewElementChartWrapper },
                            react_1.default.createElement(recharts_1.ResponsiveContainer, { height: 50, width: "99%" },
                                react_1.default.createElement(recharts_1.AreaChart, { data: getRandomData(10, 0, 10) },
                                    react_1.default.createElement(recharts_1.Area, { type: "natural", dataKey: "value", stroke: theme.palette.primary.main, fill: theme.palette.primary.light, strokeWidth: 2, fillOpacity: "0.25" }))))),
                    react_1.default.createElement("div", { className: classes.serverOverviewElement },
                        react_1.default.createElement(Wrappers_1.Typography, { color: "text", colorBrightness: "secondary", className: classes.serverOverviewElementText, weight: true, size: true }, "57% / 21\u00B0\u0421 / 3.3 Ghz"),
                        react_1.default.createElement("div", { className: classes.serverOverviewElementChartWrapper },
                            react_1.default.createElement(recharts_1.ResponsiveContainer, { height: 50, width: "99%" },
                                react_1.default.createElement(recharts_1.AreaChart, { data: getRandomData(10, 0, 10) },
                                    react_1.default.createElement(recharts_1.Area, { type: "natural", dataKey: "value", stroke: theme.palette.warning.main, fill: theme.palette.warning.light, strokeWidth: 2, fillOpacity: "0.25" }))))))),
            react_1.default.createElement(core_1.Grid, { item: true, lg: 3, md: 4, sm: 6, xs: 12 },
                react_1.default.createElement(Widget_1.default, { title: "Revenue Breakdown", upperTitle: true, className: classes.card, noBodyPadding: true, bodyClass: true, disableWidgetMenu: true, header: true },
                    react_1.default.createElement(core_1.Grid, { container: true, spacing: 2 },
                        react_1.default.createElement(core_1.Grid, { item: true, xs: 6 },
                            react_1.default.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: 144 },
                                react_1.default.createElement(recharts_1.PieChart, { margin: { left: theme.spacing(2) } },
                                    react_1.default.createElement(recharts_1.Pie, { data: PieChartData, innerRadius: 45, outerRadius: 60, dataKey: "value" }, PieChartData.map((entry, index) => (react_1.default.createElement(recharts_1.Cell, { key: `cell-${index}`, fill: theme.palette[entry.color].main }))))))),
                        react_1.default.createElement(core_1.Grid, { item: true, xs: 6 },
                            react_1.default.createElement("div", { className: classes.pieChartLegendWrapper }, PieChartData.map(({ name, value, color }, index) => (react_1.default.createElement("div", { key: color, className: classes.legendItemContainer },
                                react_1.default.createElement(Dot_1.default, { color: color, size: true }),
                                react_1.default.createElement(Wrappers_1.Typography, { style: { whiteSpace: "nowrap" }, weight: true, size: true, colorBrightness: true, color: true },
                                    " \u00A0",
                                    name,
                                    "\u00A0 "),
                                react_1.default.createElement(Wrappers_1.Typography, { color: "text", colorBrightness: "secondary", weight: true, size: true },
                                    " \u00A0",
                                    value,
                                    " "))))))))),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                react_1.default.createElement(Widget_1.default, { bodyClass: classes.mainChartBody, title: true, noBodyPadding: true, disableWidgetMenu: true, header: react_1.default.createElement("div", { className: classes.mainChartHeader },
                        react_1.default.createElement(Wrappers_1.Typography, { variant: "h5", color: "text", colorBrightness: "secondary", weight: true, size: true }, "Daily Line Chart"),
                        react_1.default.createElement("div", { className: classes.mainChartHeaderLabels },
                            react_1.default.createElement("div", { className: classes.mainChartHeaderLabel },
                                react_1.default.createElement(Dot_1.default, { color: "warning", size: true }),
                                react_1.default.createElement(Wrappers_1.Typography, { className: classes.mainChartLegentElement, weight: true, size: true, colorBrightness: true, color: true }, "Tablet")),
                            react_1.default.createElement("div", { className: classes.mainChartHeaderLabel },
                                react_1.default.createElement(Dot_1.default, { color: "primary", size: true }),
                                react_1.default.createElement(Wrappers_1.Typography, { className: classes.mainChartLegentElement, weight: true, size: true, colorBrightness: true, color: true }, "Mobile")),
                            react_1.default.createElement("div", { className: classes.mainChartHeaderLabel },
                                react_1.default.createElement(Dot_1.default, { color: "primary", size: true }),
                                react_1.default.createElement(Wrappers_1.Typography, { className: classes.mainChartLegentElement, weight: true, size: true, colorBrightness: true, color: true }, "Desktop"))),
                        react_1.default.createElement(core_1.Select, { value: mainChartState, onChange: e => setMainChartState(e.target.value.toString()), input: react_1.default.createElement(core_1.OutlinedInput, { labelWidth: 0, classes: { notchedOutline: classes.mainChartSelectRoot, input: classes.mainChartSelect, } }), autoWidth: true },
                            react_1.default.createElement(core_1.MenuItem, { value: "daily" }, "Daily"),
                            react_1.default.createElement(core_1.MenuItem, { value: "weekly" }, "Weekly"),
                            react_1.default.createElement(core_1.MenuItem, { value: "monthly" }, "Monthly"))) },
                    react_1.default.createElement(recharts_1.ResponsiveContainer, { width: "100%", minWidth: 500, height: 350 },
                        react_1.default.createElement(recharts_1.ComposedChart, { margin: { top: 0, right: -15, left: -15, bottom: 0 }, data: mainChartData },
                            react_1.default.createElement(recharts_1.YAxis, { ticks: [0, 2500, 5000, 7500], tick: { fill: theme.palette.text.hint + "80", fontSize: 14 }, stroke: theme.palette.text.hint + "80", tickLine: false }),
                            react_1.default.createElement(recharts_1.XAxis, { tickFormatter: i => i + 1, tick: { fill: theme.palette.text.hint + "80", fontSize: 14 }, stroke: theme.palette.text.hint + "80", tickLine: false }),
                            react_1.default.createElement(recharts_1.Area, { type: "natural", dataKey: "desktop", strokeWidth: 0, activeDot: false }),
                            react_1.default.createElement(recharts_1.Line, { type: "natural", dataKey: "mobile", stroke: theme.palette.primary.main, strokeWidth: 2, dot: false, activeDot: false }),
                            react_1.default.createElement(recharts_1.Line, { type: "linear", dataKey: "tablet", stroke: theme.palette.warning.main, strokeWidth: 2, dot: { stroke: theme.palette.warning.dark, strokeWidth: 2, fill: theme.palette.warning.main, } }))))),
            mock_1.default.bigStat.map(stat => (react_1.default.createElement(core_1.Grid, { item: true, md: 4, sm: 6, xs: 12, key: stat.product },
                " ",
                react_1.default.createElement(BigStat_1.default, Object.assign({}, stat)),
                " "))),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                react_1.default.createElement(Widget_1.default, { title: "Support Requests", upperTitle: true, noBodyPadding: true, bodyClass: classes.tableWidget, disableWidgetMenu: true, header: true },
                    react_1.default.createElement(Table_1.default, { data: mock_1.default.table }))))));
}
exports.default = Dashboard;
// #######################################################################
function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
    var array = new Array(length).fill(0);
    let lastValue;
    return array.map((item, index) => {
        let randomValue = Math.floor(Math.random() * multiplier + 1);
        while (randomValue <= min || randomValue >= max || (lastValue && randomValue - lastValue > maxDiff))
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
//# sourceMappingURL=Dashboard.js.map