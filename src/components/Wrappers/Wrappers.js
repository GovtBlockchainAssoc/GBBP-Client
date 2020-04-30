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
const core_1 = require("@material-ui/core");
const styles_1 = require("@material-ui/core/styles");
const classnames_1 = __importDefault(require("classnames"));
// styles
var useStyles = styles_1.makeStyles(theme => ({ badge: { fontWeight: 600, height: 16, minWidth: 16, }, }));
function Badge(_a) {
    var { children, colorBrightness, color } = _a, props = __rest(_a, ["children", "colorBrightness", "color"]);
    var classes = useStyles();
    var theme = styles_1.createMuiTheme();
    var Styled = createStyled({ badge: { backgroundColor: getColor(color, theme, colorBrightness), }, }, {});
    return (react_1.default.createElement(Styled, null, styledProps => (react_1.default.createElement(core_1.Badge, Object.assign({ classes: { badge: classnames_1.default(classes.badge, styledProps.classes.badge), } }, props), children))));
}
exports.Badge = Badge;
function Typography(_a) {
    var { children, weight, size, colorBrightness, color } = _a, props = __rest(_a, ["children", "weight", "size", "colorBrightness", "color"]);
    var theme = styles_1.createMuiTheme();
    return (react_1.default.createElement(core_1.Typography, Object.assign({ style: {
            color: getColor(color, theme, colorBrightness),
            fontWeight: getFontWeight(weight),
            fontSize: getFontSize(size, props.variant, theme),
        } }, props), children));
}
exports.Typography = Typography;
function Button(_a) {
    var { children, color, className } = _a, props = __rest(_a, ["children", "color", "className"]);
    var theme = styles_1.createMuiTheme();
    var Styled = createStyled({
        root: { color: getColor(color, theme), },
        contained: {
            backgroundColor: getColor(color, theme),
            //      boxShadow: theme.customShadows.widget,
            color: `${color ? "white" : theme.palette.text.primary} !important`,
            "&:hover": {
                backgroundColor: getColor(color, theme, "light"),
            },
            "&:active": {
            //        boxShadow: theme.customShadows.widgetWide,
            },
        },
        outlined: {
            color: getColor(color, theme),
            borderColor: getColor(color, theme),
        },
        select: {
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
        },
    }, {});
    return (react_1.default.createElement(Styled, null, ({ classes }) => (react_1.default.createElement(core_1.Button, Object.assign({ classes: { contained: classes.contained, root: classes.root, outlined: classes.outlined, } }, props, { className: classnames_1.default({ [classes.select]: props.select, }, className) }), children))));
}
exports.Button = Button;
// ########################################################################
function getColor(color, theme, brightness = "main") {
    if (typeof (brightness) != "string")
        brightness = "main";
    if (color && theme.palette[color] && theme.palette[color][brightness]) {
        return theme.palette[color][brightness];
    }
}
function getFontWeight(style) {
    switch (style) {
        case "light": return 300;
        case "medium": return 500;
        case "bold": return 600;
        default: return 400;
    }
}
function getFontSize(size, variant = "", theme) {
    var multiplier;
    switch (size) {
        case "xsm":
            multiplier = 0.4;
            break;
        case "sm":
            multiplier = 0.8;
            break;
        case "md":
            multiplier = 1.5;
            break;
        case "xl":
            multiplier = 2;
            break;
        case "xxl":
            multiplier = 3;
            break;
        default:
            multiplier = 1;
            break;
    }
    var defaultSize = variant && theme.typography[variant]
        ? theme.typography[variant].fontSize
        : theme.typography.fontSize + "px";
    return `calc(${defaultSize} * ${multiplier})`;
}
function createStyled(styles, options) {
    var Styled = function (props) {
        const { children } = props, other = __rest(props, ["children"]);
        return children(other);
    };
    return core_1.withStyles(styles, options)(Styled);
}
//# sourceMappingURL=Wrappers.js.map