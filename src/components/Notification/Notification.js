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
const icons_1 = require("@material-ui/icons");
const styles_1 = require("@material-ui/core/styles");
const classnames_1 = __importDefault(require("classnames"));
const tinycolor2_1 = __importDefault(require("tinycolor2"));
// styles
const styles_2 = __importDefault(require("./styles"));
// components
const Wrappers_1 = require("../Wrappers");
const typesIcons = {
    "e-commerce": react_1.default.createElement(icons_1.ShoppingCart, null),
    notification: react_1.default.createElement(icons_1.NotificationsNone, null),
    offer: react_1.default.createElement(icons_1.LocalOffer, null),
    info: react_1.default.createElement(icons_1.ThumbUp, null),
    message: react_1.default.createElement(icons_1.Email, null),
    feedback: react_1.default.createElement(icons_1.SmsFailed, null),
    customer: react_1.default.createElement(icons_1.AccountBox, null),
    shipped: react_1.default.createElement(icons_1.Done, null),
    delivered: react_1.default.createElement(icons_1.BusinessCenter, null),
    defence: react_1.default.createElement(icons_1.Error, null),
    report: react_1.default.createElement(icons_1.Report, null),
    upload: react_1.default.createElement(icons_1.Publish, null),
    disc: react_1.default.createElement(icons_1.DiscFull, null),
};
function Notification(_a) {
    var { variant } = _a, props = __rest(_a, ["variant"]);
    var classes = styles_2.default();
    var theme = styles_1.createMuiTheme();
    const icon = getIconByType(props.type);
    const iconWithStyles = react_1.default.cloneElement(icon, {
        classes: {
            root: classes.notificationIconContainer,
        },
        style: {
            color: variant !== "contained" &&
                theme.palette[props.color] &&
                theme.palette[props.color].main,
        },
    });
    return (react_1.default.createElement("div", { className: classnames_1.default(classes.notificationContainer, props.className, {
            [classes.notificationContained]: variant === "contained",
            [classes.notificationContainedShadowless]: props.shadowless,
        }), style: {
            backgroundColor: variant === "contained" &&
                theme.palette[props.color] &&
                theme.palette[props.color].main,
        } },
        react_1.default.createElement("div", { className: classnames_1.default(classes.notificationIconContainer, {
                [classes.notificationIconContainerContained]: variant === "contained",
                [classes.notificationIconContainerRounded]: variant === "rounded",
            }), style: {
                backgroundColor: variant === "rounded" &&
                    theme.palette[props.color] &&
                    tinycolor2_1.default(theme.palette[props.color].main)
                        .setAlpha(0.15)
                        .toRgbString(),
            } }, iconWithStyles),
        react_1.default.createElement("div", { className: classes.messageContainer },
            react_1.default.createElement(Wrappers_1.Typography, { weight: true, colorBrightness: true, color: true, className: classnames_1.default({
                    [classes.containedTypography]: variant === "contained",
                }), variant: props.typographyVariant, size: variant !== "contained" && !props.typographyVariant && "md" }, props.message),
            props.extraButton && props.extraButtonClick && (react_1.default.createElement(core_1.Button, { onClick: props.extraButtonClick, disableRipple: true, className: classes.extraButton }, props.extraButton)))));
}
exports.default = Notification;
// ####################################################################
function getIconByType(type = "offer") {
    return typesIcons[type];
}
//# sourceMappingURL=Notification.js.map