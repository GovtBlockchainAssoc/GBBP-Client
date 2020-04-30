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
const classnames_1 = __importDefault(require("classnames"));
// styles
const styles_1 = __importDefault(require("./styles"));
function Widget(_a) {
    var { children, title, noBodyPadding, bodyClass, disableWidgetMenu, header } = _a, props = __rest(_a, ["children", "title", "noBodyPadding", "bodyClass", "disableWidgetMenu", "header"]);
    var classes = styles_1.default();
    // local
    var [moreButtonRef, setMoreButtonRef] = react_1.useState(null);
    var [isMoreMenuOpen, setMoreMenuOpen] = react_1.useState(false);
    return (react_1.default.createElement("div", { className: classes.widgetWrapper },
        react_1.default.createElement(core_1.Paper, { className: classes.paper, classes: { root: classes.widgetRoot } },
            react_1.default.createElement("div", { className: classes.widgetHeader }, typeof (header) == "object" ? (header) : (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(core_1.Typography, { variant: "h5", color: "textSecondary" }, title),
                !(disableWidgetMenu == "object") && (react_1.default.createElement(core_1.IconButton, { color: "primary", classes: { root: classes.moreButton }, "aria-owns": "widget-menu", "aria-haspopup": "true", onClick: () => setMoreMenuOpen(true), buttonRef: setMoreButtonRef },
                    react_1.default.createElement(icons_1.MoreVert, null)))))),
            react_1.default.createElement("div", { className: classnames_1.default(classes.widgetBody, { [bodyClass]: bodyClass, }) }, children)),
        react_1.default.createElement(core_1.Menu, { id: "widget-menu", open: isMoreMenuOpen, anchorEl: moreButtonRef, onClose: () => setMoreMenuOpen(false), disableAutoFocusItem: true },
            react_1.default.createElement(core_1.MenuItem, null,
                react_1.default.createElement(core_1.Typography, null, "Edit")),
            react_1.default.createElement(core_1.MenuItem, null,
                react_1.default.createElement(core_1.Typography, null, "Copy")),
            react_1.default.createElement(core_1.MenuItem, null,
                react_1.default.createElement(core_1.Typography, null, "Delete")),
            react_1.default.createElement(core_1.MenuItem, null,
                react_1.default.createElement(core_1.Typography, null, "Print")))));
}
exports.default = Widget;
//# sourceMappingURL=Widget.js.map