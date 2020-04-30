"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
// components
const Wrappers_1 = require("../Wrappers");
const states = {
    sent: "success",
    pending: "warning",
    declined: "secondary",
};
function TableComponent({ data }) {
    var keys = Object.keys(data[0]).map(i => i.toUpperCase());
    keys.shift(); // delete "id" key
    return (react_1.default.createElement(core_1.Table, { className: "mb-0" },
        react_1.default.createElement(core_1.TableHead, null,
            react_1.default.createElement(core_1.TableRow, null, keys.map(key => (react_1.default.createElement(core_1.TableCell, { key: key }, key))))),
        react_1.default.createElement(core_1.TableBody, null, data.map(({ id, name, email, product, price, date, city, status }) => (react_1.default.createElement(core_1.TableRow, { key: id },
            react_1.default.createElement(core_1.TableCell, { className: "pl-3 fw-normal" }, name),
            react_1.default.createElement(core_1.TableCell, null, email),
            react_1.default.createElement(core_1.TableCell, null, product),
            react_1.default.createElement(core_1.TableCell, null, price),
            react_1.default.createElement(core_1.TableCell, null, date),
            react_1.default.createElement(core_1.TableCell, null, city),
            react_1.default.createElement(core_1.TableCell, null,
                react_1.default.createElement(Wrappers_1.Button, { color: states[status.toLowerCase()], size: "small", className: "px-2", variant: "contained" }, status))))))));
}
exports.default = TableComponent;
//# sourceMappingURL=Table.js.map