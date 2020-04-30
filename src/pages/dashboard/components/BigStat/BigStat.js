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
const icons_1 = require("@material-ui/icons");
const styles_1 = require("@material-ui/core/styles");
const recharts_1 = require("recharts");
const classnames_1 = __importDefault(require("classnames"));
// styles
const styles_2 = __importDefault(require("./styles"));
// components
const Widget_1 = __importDefault(require("../../../../components/Widget"));
const Wrappers_1 = require("../../../../components/Wrappers");
function BigStat(props) {
    var { product, total, color, registrations, bounce } = props;
    var classes = styles_2.default();
    var theme = styles_1.useTheme();
    // local
    var [value, setValue] = react_1.useState("daily");
    return (react_1.default.createElement(Widget_1.default, { title: true, noBodyPadding: true, bodyClass: true, disableWidgetMenu: true, header: react_1.default.createElement("div", { className: classes.title },
            react_1.default.createElement(Wrappers_1.Typography, { variant: "h5", weight: true, size: true, colorBrightness: true, color: true }, product),
            react_1.default.createElement(core_1.Select, { value: value, onChange: e => setValue(e.target.value.toString()), input: react_1.default.createElement(core_1.Input, { disableUnderline: true, classes: { input: classes.selectInput } }), className: classes.select },
                react_1.default.createElement(core_1.MenuItem, { value: "daily" }, "Daily"),
                react_1.default.createElement(core_1.MenuItem, { value: "weekly" }, "Weekly"),
                react_1.default.createElement(core_1.MenuItem, { value: "monthly" }, "Monthly"))), upperTitle: true },
        react_1.default.createElement("div", { className: classes.totalValueContainer },
            react_1.default.createElement("div", { className: classes.totalValue },
                react_1.default.createElement(Wrappers_1.Typography, { size: "xxl", color: "text", colorBrightness: "secondary", weight: true }, total[value]),
                react_1.default.createElement(Wrappers_1.Typography, { color: total.percent.profit ? "success" : "secondary", weight: true, size: true, colorBrightness: true },
                    "\u00A0",
                    total.percent.profit ? "+" : "-",
                    total.percent.value,
                    "%")),
            react_1.default.createElement(recharts_1.BarChart, { width: 150, height: 70, data: getRandomData() },
                react_1.default.createElement(recharts_1.Bar, { dataKey: "value", fill: theme.palette[color].main, radius: 10, barSize: 10 }))),
        react_1.default.createElement("div", { className: classes.bottomStatsContainer },
            react_1.default.createElement("div", { className: classnames_1.default(classes.statCell, classes.borderRight) },
                react_1.default.createElement(core_1.Grid, { container: true, alignItems: "center" },
                    react_1.default.createElement(Wrappers_1.Typography, { variant: "h6", weight: true, size: true, colorBrightness: true, color: true }, registrations[value].value),
                    react_1.default.createElement(icons_1.ArrowForward, { className: classnames_1.default(classes.profitArrow, {
                            [(!registrations[value].profit).toString()]: classes.profitArrowDanger,
                        }) })),
                react_1.default.createElement(Wrappers_1.Typography, { size: "sm", color: "text", colorBrightness: "secondary", weight: true }, "Registrations")),
            react_1.default.createElement("div", { className: classes.statCell },
                react_1.default.createElement(core_1.Grid, { container: true, alignItems: "center" },
                    react_1.default.createElement(Wrappers_1.Typography, { variant: "h6", weight: true, size: true, colorBrightness: true, color: true },
                        bounce[value].value,
                        "%"),
                    react_1.default.createElement(icons_1.ArrowForward, { className: classnames_1.default(classes.profitArrow, {
                            [(!registrations[value].profit).toString()]: classes.profitArrowDanger,
                        }) })),
                react_1.default.createElement(Wrappers_1.Typography, { size: "sm", color: "text", colorBrightness: "secondary", weight: true }, "Bounce Rate")),
            react_1.default.createElement("div", { className: classnames_1.default(classes.statCell, classes.borderRight) },
                react_1.default.createElement(core_1.Grid, { container: true, alignItems: "center" },
                    react_1.default.createElement(Wrappers_1.Typography, { variant: "h6", weight: true, size: true, colorBrightness: true, color: true }, registrations[value].value * 10),
                    react_1.default.createElement(icons_1.ArrowForward, { className: classnames_1.default(classes.profitArrow, {
                            [classes.profitArrowDanger]: !registrations[value].profit,
                        }) })),
                react_1.default.createElement(Wrappers_1.Typography, { size: "sm", color: "text", colorBrightness: "secondary", weight: true }, "Views")))));
}
exports.default = BigStat;
// #######################################################################
function getRandomData() {
    return Array(7)
        .fill(0)
        .map(() => ({ value: Math.floor(Math.random() * 10) + 1 }));
}
//# sourceMappingURL=BigStat.js.map