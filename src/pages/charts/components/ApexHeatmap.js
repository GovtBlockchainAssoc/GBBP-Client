"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const react_apexcharts_1 = __importDefault(require("react-apexcharts"));
const series = [
    { name: "Metric1", data: generateData(18, { min: 0, max: 90, }), },
    { name: "Metric2", data: generateData(18, { min: 0, max: 90, }), },
    { name: "Metric3", data: generateData(18, { min: 0, max: 90, }), },
    { name: "Metric4", data: generateData(18, { min: 0, max: 90, }), },
    { name: "Metric5", data: generateData(18, { min: 0, max: 90, }), },
    { name: "Metric6", data: generateData(18, { min: 0, max: 90, }), },
    { name: "Metric7", data: generateData(18, { min: 0, max: 90, }), },
    { name: "Metric8", data: generateData(18, { min: 0, max: 90, }), },
    { name: "Metric9", data: generateData(18, { min: 0, max: 90, }), },
];
function ApexLineChart() {
    var theme = styles_1.useTheme();
    return (react_1.default.createElement(react_apexcharts_1.default, { options: themeOptions(theme), series: series, type: "heatmap", height: 350 }));
}
exports.default = ApexLineChart;
// ##################################################################
function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = "w" + (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        series.push({ x: x, y: y, });
        i++;
    }
    return series;
}
function themeOptions(theme) {
    return {
        chart: { toolbar: { show: false, }, },
        dataLabels: { enabled: false, },
        colors: [theme.palette.primary.main],
    };
}
//# sourceMappingURL=ApexHeatmap.js.map