"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const classnames_1 = __importDefault(require("classnames"));
var useStyles = styles_1.makeStyles(theme => ({
    dotBase: {
        width: 8,
        height: 8,
        backgroundColor: theme.palette.text.hint,
        borderRadius: "50%",
        transition: theme.transitions.create("background-color"),
    },
    dotSmall: {
        width: 5,
        height: 5
    },
    dotLarge: {
        width: 11,
        height: 11,
    },
}));
function Dot({ size, color }) {
    var classes = useStyles();
    var theme = styles_1.createMuiTheme();
    return (react_1.default.createElement("div", { className: classnames_1.default(classes.dotBase, {
            [classes.dotLarge]: size === "large",
            [classes.dotSmall]: size === "small",
        }), style: {
            backgroundColor: color && theme.palette[color] && theme.palette[color].main,
        } }));
}
exports.default = Dot;
//# sourceMappingURL=Dot.js.map