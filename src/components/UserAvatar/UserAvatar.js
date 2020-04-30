"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
// styles
const styles_2 = __importDefault(require("./styles"));
// components
const Wrappers_1 = require("../Wrappers");
function UserAvatar(_a) {
    var { color = "primary" } = _a, props = __rest(_a, ["color"]);
    var classes = styles_2.default();
    var theme = styles_1.createMuiTheme();
    var letters = props.name.split(" ").map(word => word[0]).join("");
    return (react_1.default.createElement("div", { className: classes.avatar, style: { backgroundColor: theme.palette[color].main } },
        react_1.default.createElement(Wrappers_1.Typography, { className: classes.text, weight: true, size: true, color: true, colorBrightness: true }, letters)));
}
exports.default = UserAvatar;
//# sourceMappingURL=UserAvatar.js.map