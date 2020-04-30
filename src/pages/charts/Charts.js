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
const Widget_1 = __importDefault(require("../../components/Widget/Widget"));
const ApexLineChart_1 = __importDefault(require("./components/ApexLineChart"));
const ApexHeatmap_1 = __importDefault(require("./components/ApexHeatmap"));
const PageTitle_1 = __importDefault(require("../../components/PageTitle/PageTitle"));
const lineChartData = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400, },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210, },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290, },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000, },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181, },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500, },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100, },
];
const pieChartData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
];
function Charts(props) {
    var theme = styles_1.useTheme();
    var [activeIndex, setActiveIndexId] = react_1.useState(0);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(PageTitle_1.default, { title: "Charts Page - Data Display", button: "Latest Reports" }),
        react_1.default.createElement(core_1.Grid, { container: true, spacing: 4 },
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, md: 6 },
                react_1.default.createElement(Widget_1.default, { title: "Apex Line Chart", upperTitle: true, noBodyPadding: true, bodyClass: true, disableWidgetMenu: true, header: true },
                    react_1.default.createElement(ApexLineChart_1.default, null))),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, md: 6 },
                react_1.default.createElement(Widget_1.default, { title: "Apex Heatmap", upperTitle: true, noBodyPadding: true, bodyClass: true, disableWidgetMenu: true, header: true },
                    react_1.default.createElement(ApexHeatmap_1.default, null))),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, md: 8 },
                react_1.default.createElement(Widget_1.default, { title: "Simple Line Chart", noBodyPadding: true, upperTitle: true, bodyClass: true, disableWidgetMenu: true, header: true },
                    react_1.default.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: 350 },
                        react_1.default.createElement(recharts_1.LineChart, { width: 500, height: 300, data: lineChartData, margin: { top: 5, right: 30, left: 20, bottom: 5, } },
                            react_1.default.createElement(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }),
                            react_1.default.createElement(recharts_1.XAxis, { dataKey: "name" }),
                            react_1.default.createElement(recharts_1.YAxis, null),
                            react_1.default.createElement(recharts_1.Tooltip, null),
                            react_1.default.createElement(recharts_1.Legend, null),
                            react_1.default.createElement(recharts_1.Line, { type: "monotone", dataKey: "pv", stroke: theme.palette.primary.main, activeDot: { r: 8 } }),
                            react_1.default.createElement(recharts_1.Line, { type: "monotone", dataKey: "uv", stroke: theme.palette.secondary.main }))))),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, md: 4 },
                react_1.default.createElement(Widget_1.default, { title: "Pie Chart with Tooltips", noBodyPadding: true, upperTitle: true, bodyClass: true, disableWidgetMenu: true, header: true },
                    react_1.default.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: 300 },
                        react_1.default.createElement(recharts_1.PieChart, { width: 200, height: 300 },
                            react_1.default.createElement(recharts_1.Pie, { activeIndex: activeIndex, activeShape: renderActiveShape, data: pieChartData, cx: 200, cy: 150, dataKey: "value", innerRadius: 60, outerRadius: 80, fill: theme.palette.primary.main, onMouseEnter: (e, id) => setActiveIndexId(id) }))))))));
}
exports.default = Charts;
// ################################################################
function renderActiveShape(props) {
    var RADIAN = Math.PI / 180;
    var { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value, } = props;
    var sin = Math.sin(-RADIAN * midAngle);
    var cos = Math.cos(-RADIAN * midAngle);
    var sx = cx + (outerRadius + 10) * cos;
    var sy = cy + (outerRadius + 10) * sin;
    var mx = cx + (outerRadius + 30) * cos;
    var my = cy + (outerRadius + 30) * sin;
    var ex = mx + (cos >= 0 ? 1 : -1) * 22;
    var ey = my;
    var textAnchor = cos >= 0 ? "start" : "end";
    return (react_1.default.createElement("g", null,
        react_1.default.createElement("text", { x: cx, y: cy, dy: 8, textAnchor: "middle", fill: fill }, payload.name),
        react_1.default.createElement(recharts_1.Sector, { cx: cx, cy: cy, innerRadius: innerRadius, outerRadius: outerRadius, startAngle: startAngle, endAngle: endAngle, fill: fill }),
        react_1.default.createElement(recharts_1.Sector, { cx: cx, cy: cy, startAngle: startAngle, endAngle: endAngle, innerRadius: outerRadius + 6, outerRadius: outerRadius + 10, fill: fill }),
        react_1.default.createElement("path", { d: `M${sx},${sy}L${mx},${my}L${ex},${ey}`, stroke: fill, fill: "none" }),
        react_1.default.createElement("circle", { cx: ex, cy: ey, r: 2, fill: fill, stroke: "none" }),
        react_1.default.createElement("text", { x: ex + (cos >= 0 ? 1 : -1) * 12, y: ey, textAnchor: textAnchor, fill: "#333" }, `PV ${value}`),
        react_1.default.createElement("text", { x: ex + (cos >= 0 ? 1 : -1) * 12, y: ey, dy: 18, textAnchor: textAnchor, fill: "#999" }, `(Rate ${(percent * 100).toFixed(2)}%)`)));
}
//# sourceMappingURL=Charts.js.map