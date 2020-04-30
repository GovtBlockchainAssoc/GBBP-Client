"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_apexcharts_1 = __importDefault(require("react-apexcharts"));
const styles_1 = require("@material-ui/core/styles");
const series = [
    { name: "series1", data: [31, 40, 28, 51, 42, 109, 100], },
    { name: "series2", data: [11, 32, 45, 32, 34, 52, 41], },
];
function ApexLineChart() {
    var theme = styles_1.useTheme();
    return (react_1.default.createElement(react_apexcharts_1.default, { options: themeOptions(theme), series: series, type: "area", height: 350 }));
}
exports.default = ApexLineChart;
// ############################################################
function themeOptions(theme) {
    return {
        dataLabels: { enabled: false, },
        stroke: { curve: "smooth", },
        xaxis: {
            type: "datetime",
            categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00",
                "2018-09-19T05:30:00", "2018-09-19T06:30:00",],
        },
        tooltip: { x: { format: "dd/MM/yy HH:mm", }, },
        fill: { colors: [theme.palette.primary.light, theme.palette.success.light], },
        colors: [theme.palette.primary.main, theme.palette.success.main],
        chart: { toolbar: { show: false, }, },
        legend: { show: false, },
    };
}
//# sourceMappingURL=ApexLineChart.js.map