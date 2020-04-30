"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const mui_datatables_1 = __importDefault(require("mui-datatables"));
// components
const PageTitle_1 = __importDefault(require("../../components/PageTitle"));
const Widget_1 = __importDefault(require("../../components/Widget"));
const Table_1 = __importDefault(require("../../components/Table/Table"));
// data
const mock_1 = __importDefault(require("../dashboard/mock"));
const datatableData = [
    ["Joe James", "Example Inc.", "Yonkers", "NY"],
    ["John Walsh", "Example Inc.", "Hartford", "CT"],
    ["Bob Herm", "Example Inc.", "Tampa", "FL"],
    ["James Houston", "Example Inc.", "Dallas", "TX"],
    ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
    ["Kaui Ignace", "Example Inc.", "Yonkers", "NY"],
    ["Esperanza Susanne", "Example Inc.", "Hartford", "CT"],
    ["Christian Birgitte", "Example Inc.", "Tampa", "FL"],
    ["Meral Elias", "Example Inc.", "Hartford", "CT"],
    ["Deep Pau", "Example Inc.", "Yonkers", "NY"],
    ["Sebastiana Hani", "Example Inc.", "Dallas", "TX"],
    ["Marciano Oihana", "Example Inc.", "Yonkers", "NY"],
    ["Brigid Ankur", "Example Inc.", "Dallas", "TX"],
    ["Anna Siranush", "Example Inc.", "Yonkers", "NY"],
    ["Avram Sylva", "Example Inc.", "Hartford", "CT"],
    ["Serafima Babatunde", "Example Inc.", "Tampa", "FL"],
    ["Gaston Festus", "Example Inc.", "Tampa", "FL"],
];
function Tables() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(PageTitle_1.default, { title: "Tables" }),
        react_1.default.createElement(core_1.Grid, { container: true, spacing: 4 },
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                react_1.default.createElement(mui_datatables_1.default, { title: "Employee List", data: datatableData, columns: ["Name", "Company", "City", "State"], options: { filterType: "checkbox", } })),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                react_1.default.createElement(Widget_1.default, { title: "Material-UI Table", upperTitle: true, noBodyPadding: true, bodyClass: true, disableWidgetMenu: true, header: true },
                    react_1.default.createElement(Table_1.default, { data: mock_1.default.table }))))));
}
exports.default = Tables;
//# sourceMappingURL=Tables.js.map