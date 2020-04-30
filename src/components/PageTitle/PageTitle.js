"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
// styles
const styles_1 = __importDefault(require("./styles"));
// components
const Wrappers_1 = require("../Wrappers");
const createPalette_1 = require("@material-ui/core/styles/createPalette");
function PageTitle(props) {
    var classes = styles_1.default();
    return (react_1.default.createElement("div", { className: classes.pageTitleContainer },
        react_1.default.createElement(Wrappers_1.Typography, { className: classes.typo, variant: "h1", size: "xsm", color: true, colorBrightness: true, weight: createPalette_1.light }, props.title),
        props.button && (react_1.default.createElement(core_1.Button, { classes: { root: classes.button }, variant: "contained", size: "large", color: "secondary" }, props.button))));
}
exports.default = PageTitle;
//# sourceMappingURL=PageTitle.js.map