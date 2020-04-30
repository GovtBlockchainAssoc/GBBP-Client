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
const classnames_1 = __importDefault(require("classnames"));
const react_toastify_1 = require("react-toastify");
const react_syntax_highlighter_1 = __importDefault(require("react-syntax-highlighter"));
const hljs_1 = require("react-syntax-highlighter/dist/esm/styles/hljs");
const tinycolor2_1 = __importDefault(require("tinycolor2"));
require("react-toastify/dist/ReactToastify.css");
const Widget_1 = __importDefault(require("../../components/Widget"));
const PageTitle_1 = __importDefault(require("../../components/PageTitle"));
const Notification_1 = __importDefault(require("../../components/Notification/Notification"));
const Wrappers_1 = require("../../components/Wrappers");
const CloseButton = ({ closeToast, className }) => (react_1.default.createElement(icons_1.Close, { className: className, onClick: closeToast }));
const NotificationsPage = (_a) => {
    var { classes } = _a, props = __rest(_a, ["classes"]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(PageTitle_1.default, { title: "Notifications" }),
        react_1.default.createElement(core_1.Grid, { container: true },
            react_1.default.createElement(react_toastify_1.ToastContainer, { className: classes.toastsContainer, progressClassName: classes.notificationProgress, closeButton: react_1.default.createElement(CloseButton, { closeToast: true, className: classes.notificationCloseButton }), closeOnClick: false }),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, md: 6, lg: 4 },
                react_1.default.createElement(Widget_1.default, { title: "Layout Options", disableWidgetMenu: true, noBodyPadding: true, bodyClass: true, header: true },
                    react_1.default.createElement(Wrappers_1.Typography, { weight: true, size: true, colorBrightness: true, color: true }, "There are few position options available for notifications. Click any of them to change notifications position:"),
                    react_1.default.createElement("div", { className: classes.layoutContainer },
                        react_1.default.createElement("div", { className: classes.layoutButtonsRow },
                            react_1.default.createElement("button", { onClick: () => props.changeNotificationPosition(0), className: classnames_1.default(classes.layoutButton, { [classes.layoutButtonActive]: props.notificationsPosition === 0 }) }),
                            react_1.default.createElement("button", { onClick: () => props.changeNotificationPosition(1), className: classnames_1.default(classes.layoutButton, { [classes.layoutButtonActive]: props.notificationsPosition === 1 }) }),
                            react_1.default.createElement("button", { onClick: () => props.changeNotificationPosition(2), className: classnames_1.default(classes.layoutButton, { [classes.layoutButtonActive]: props.notificationsPosition === 2 }) })),
                        react_1.default.createElement(Wrappers_1.Typography, { className: classes.layoutText, size: "md", weight: true, colorBrightness: true, color: true }, "Click any position"),
                        react_1.default.createElement("div", { className: classes.layoutButtonsRow },
                            react_1.default.createElement("button", { onClick: () => props.changeNotificationPosition(3), className: classnames_1.default(classes.layoutButton, { [classes.layoutButtonActive]: props.notificationsPosition === 3 }) }),
                            react_1.default.createElement("button", { onClick: () => props.changeNotificationPosition(4), className: classnames_1.default(classes.layoutButton, { [classes.layoutButtonActive]: props.notificationsPosition === 4 }) }),
                            react_1.default.createElement("button", { onClick: () => props.changeNotificationPosition(5), className: classnames_1.default(classes.layoutButton, { [classes.layoutButtonActive]: props.notificationsPosition === 5 }) }))))),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, md: 6, lg: 4 },
                react_1.default.createElement(Widget_1.default, { title: "Notifications Types", disableWidgetMenu: true, noBodyPadding: true, bodyClass: true, header: true },
                    react_1.default.createElement(Wrappers_1.Typography, { weight: true, size: true, colorBrightness: true, color: true }, "Different types of notifications for lost of use cases. Custom classes are also supported."),
                    react_1.default.createElement("div", { className: classes.buttonsContainer },
                        react_1.default.createElement(Wrappers_1.Button, { color: true, variant: "contained", colortheme: "primary", onClick: () => props.handleNotificationCall('info'), className: classnames_1.default(classes.notificationCallButton) }, "Info Message"),
                        react_1.default.createElement(Wrappers_1.Button, { color: true, variant: "contained", colortheme: "warning", onClick: () => props.handleNotificationCall('error'), className: classnames_1.default(classes.notificationCallButton) }, "Error + Retry Message"),
                        react_1.default.createElement(Wrappers_1.Button, { color: true, variant: "contained", colortheme: "success", onClick: () => props.handleNotificationCall('success'), className: classnames_1.default(classes.notificationCallButton) }, "Success Message")))),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, md: 6, lg: 4 },
                react_1.default.createElement(Widget_1.default, { title: "Usage", disableWidgetMenu: true, noBodyPadding: true, bodyClass: true, header: true },
                    react_1.default.createElement(Wrappers_1.Typography, { weight: true, size: true, colorBrightness: true, color: true },
                        "Notifications are created with the help of ",
                        react_1.default.createElement("a", { href: "https://github.com/fkhadra/react-toastify" }, "react-toastify")),
                    react_1.default.createElement("div", { className: classes.codeContainer },
                        react_1.default.createElement(react_syntax_highlighter_1.default, { className: classes.codeComponent, language: 'javascript', style: hljs_1.docco }, `
                            // import needed components, functions and styles
                            import { ToastContainer, toast } from 'react-toastify';
                            import 'react-toastify/dist/ReactToastify.css';

                            const Page = () => { 
                                <div><ToastContainer /><button onClick={() => toast('Toast Message')}>show notification</button></div>
                            };
                        `),
                        react_1.default.createElement(Wrappers_1.Typography, { variant: "caption", weight: true, size: true, colorBrightness: true, color: true }, "For more API information refer to the library documentation")))),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, md: 6, lg: 4 },
                react_1.default.createElement(Widget_1.default, { title: "Notification Types Examples", disableWidgetMenu: true, noBodyPadding: true, bodyClass: true, header: true },
                    react_1.default.createElement(Notification_1.default, { className: classes.notificationItem, shadowless: true, type: "message", message: "Thanks for Checking out Messenger", variant: "contained", color: "secondary" }),
                    react_1.default.createElement(Notification_1.default, { className: classes.notificationItem, shadowless: true, type: "feedback", message: "New user feedback received", variant: "contained", color: "primary" }),
                    react_1.default.createElement(Notification_1.default, { className: classes.notificationItem, shadowless: true, type: "customer", message: "New customer is registered", variant: "contained", color: "success" }),
                    react_1.default.createElement(Notification_1.default, { className: classes.notificationItem, shadowless: true, type: "shipped", message: "The order was shipped", variant: "contained", color: "warning" }),
                    react_1.default.createElement(Notification_1.default, { className: classes.notificationItem, shadowless: true, type: "delivered", message: "The order was delivered", variant: "contained", color: "primary" }),
                    react_1.default.createElement(Notification_1.default, { className: classes.notificationItem, shadowless: true, type: "defence", message: "5 Defence alerts", variant: "contained", color: "info" }))),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, md: 6, lg: 4 },
                react_1.default.createElement(Widget_1.default, { title: "Notification Types Examples", disableWidgetMenu: true, noBodyPadding: true, bodyClass: true, header: true },
                    react_1.default.createElement(Notification_1.default, { variant: true, className: classes.notificationItem, type: "report", message: "New report has been received", color: "secondary" }),
                    react_1.default.createElement(Notification_1.default, { variant: true, className: classes.notificationItem, type: "feedback", message: "New user feedback received", color: "primary" }),
                    react_1.default.createElement(Notification_1.default, { variant: true, className: classes.notificationItem, type: "shipped", message: "The item was shipped", color: "success" }),
                    react_1.default.createElement(Notification_1.default, { variant: true, className: classes.notificationItem, type: "message", message: "The new message from user @nahawaii", color: "warning" }),
                    react_1.default.createElement(Notification_1.default, { variant: true, className: classes.notificationItem, type: "upload", message: "Your file is ready to upload", color: "primary" }),
                    react_1.default.createElement(Notification_1.default, { variant: true, className: classes.notificationItem, type: "disc", message: "The disc is full", color: "info" }))),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, md: 6, lg: 4 },
                react_1.default.createElement(Widget_1.default, { title: "Notification Types Examples", disableWidgetMenu: true, noBodyPadding: true, bodyClass: true, header: true },
                    react_1.default.createElement(Notification_1.default, { className: classes.notificationItem, type: "report", message: "New report has been received", variant: "rounded", color: "secondary" }),
                    react_1.default.createElement(Notification_1.default, { className: classes.notificationItem, type: "feedback", message: "New user feedback received", variant: "rounded", color: "primary" }),
                    react_1.default.createElement(Notification_1.default, { className: classes.notificationItem, type: "shipped", message: "The item was shipped", variant: "rounded", color: "success" }),
                    react_1.default.createElement(Notification_1.default, { className: classes.notificationItem, type: "message", message: "The new message from user @nahawaii", variant: "rounded", color: "warning" }),
                    react_1.default.createElement(Notification_1.default, { className: classes.notificationItem, type: "upload", message: "Your file is ready to upload", variant: "rounded", color: "primary" }),
                    react_1.default.createElement(Notification_1.default, { className: classes.notificationItem, type: "disc", message: "The disc is full", variant: "rounded", color: "info" }))))));
};
const styles = (theme) => ({
    layoutContainer: {
        height: 200,
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing.unit * 2,
        border: '1px dashed',
        borderColor: theme.palette.primary.main,
    },
    layoutText: { color: tinycolor2_1.default(theme.palette.background.light).darken().toHexString(), },
    layoutButtonsRow: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    layoutButton: {
        backgroundColor: theme.palette.background.light,
        width: 125,
        height: 50,
        outline: 'none',
        border: 'none',
    },
    layoutButtonActive: { backgroundColor: tinycolor2_1.default(theme.palette.background.light).darken().toHexString(), },
    buttonsContainer: {
        display: 'flex',
        // flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: theme.spacing.unit * 2,
    },
    notificationCallButton: {
        color: 'white',
        marginBottom: theme.spacing.unit,
    },
    codeContainer: {
        display: 'flex',
        // flexDirection: 'column',
        marginTop: theme.spacing.unit * 2,
    },
    codeComponent: { flexGrow: 1, },
    notificationItem: { marginTop: theme.spacing.unit * 2, },
    notificationCloseButton: {
        // position: 'absolute',
        right: theme.spacing.unit * 2,
    },
    toastsContainer: {
        width: 400,
        marginTop: theme.spacing.unit * 6,
        right: 0,
    }
});
exports.default = core_1.withStyles(styles, { withTheme: true })(NotificationsPage);
//# sourceMappingURL=NotificationsView.js.map