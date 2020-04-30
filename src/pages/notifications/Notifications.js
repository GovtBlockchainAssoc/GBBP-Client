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
const icons_1 = require("@material-ui/icons");
const react_toastify_1 = require("react-toastify");
const react_syntax_highlighter_1 = __importDefault(require("react-syntax-highlighter"));
const hljs_1 = require("react-syntax-highlighter/dist/esm/styles/hljs");
const classnames_1 = __importDefault(require("classnames"));
// styles
require("react-toastify/dist/ReactToastify.css");
const styles_1 = __importDefault(require("./styles"));
// components
const Widget_1 = __importDefault(require("../../components/Widget/Widget"));
const PageTitle_1 = __importDefault(require("../../components/PageTitle/PageTitle"));
const Notification_1 = __importDefault(require("../../components/Notification/Notification"));
const Wrappers_1 = require("../../components/Wrappers/Wrappers");
const positions = [react_toastify_1.toast.POSITION.TOP_LEFT, react_toastify_1.toast.POSITION.TOP_CENTER, react_toastify_1.toast.POSITION.TOP_RIGHT, react_toastify_1.toast.POSITION.BOTTOM_LEFT,
    react_toastify_1.toast.POSITION.BOTTOM_CENTER, react_toastify_1.toast.POSITION.BOTTOM_RIGHT,];
function NotificationsPage(props) {
    var classes = styles_1.default();
    var [notificationsPosition, setNotificationPosition] = react_1.useState(2);
    var [errorToastId, setErrorToastId] = react_1.useState(null);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(PageTitle_1.default, { title: "Notifications" }),
        react_1.default.createElement(core_1.Grid, { container: true, spacing: 8 },
            react_1.default.createElement(react_toastify_1.ToastContainer, { className: classes.toastsContainer, progressClassName: classes.notificationProgress, closeOnClick: false, closeButton: react_1.default.createElement(CloseButton, { closeToast: true, className: classes.notificationCloseButton }) }),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, md: 6, lg: 4 },
                react_1.default.createElement(Widget_1.default, { title: "Layout Options", disableWidgetMenu: true, noBodyPadding: true, bodyClass: true, header: true },
                    react_1.default.createElement(Wrappers_1.Typography, { weight: true, size: true, colorBrightness: true, color: true }, "There are few position options available for notifications. Click any of them to change notifications position:"),
                    react_1.default.createElement("div", { className: classes.layoutContainer },
                        react_1.default.createElement("div", { className: classes.layoutButtonsRow },
                            react_1.default.createElement("button", { onClick: () => changeNotificationPosition(0), className: classnames_1.default(classes.layoutButton, { [classes.layoutButtonActive]: notificationsPosition === 0, }) }),
                            react_1.default.createElement("button", { onClick: () => changeNotificationPosition(1), className: classnames_1.default(classes.layoutButton, { [classes.layoutButtonActive]: notificationsPosition === 1, }) }),
                            react_1.default.createElement("button", { onClick: () => changeNotificationPosition(2), className: classnames_1.default(classes.layoutButton, { [classes.layoutButtonActive]: notificationsPosition === 2, }) })),
                        react_1.default.createElement(Wrappers_1.Typography, { className: classes.layoutText, size: "md", weight: true, colorBrightness: true, color: true }, "Click any position"),
                        react_1.default.createElement("div", { className: classes.layoutButtonsRow },
                            react_1.default.createElement("button", { onClick: () => changeNotificationPosition(3), className: classnames_1.default(classes.layoutButton, { [classes.layoutButtonActive]: notificationsPosition === 3, }) }),
                            react_1.default.createElement("button", { onClick: () => changeNotificationPosition(4), className: classnames_1.default(classes.layoutButton, { [classes.layoutButtonActive]: notificationsPosition === 4, }) }),
                            react_1.default.createElement("button", { onClick: () => changeNotificationPosition(5), className: classnames_1.default(classes.layoutButton, { [classes.layoutButtonActive]: notificationsPosition === 5, }) }))))),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, md: 6, lg: 4 },
                react_1.default.createElement(Widget_1.default, { title: "Notifications Types", disableWidgetMenu: true, noBodyPadding: true, bodyClass: true, header: true },
                    react_1.default.createElement(Wrappers_1.Typography, { weight: true, size: true, colorBrightness: true, color: true }, "Different types of notifications for lost of use cases. Custom classes are also supported."),
                    react_1.default.createElement("div", { className: classes.buttonsContainer },
                        react_1.default.createElement(Wrappers_1.Button, { variant: "contained", color: "primary", onClick: () => handleNotificationCall("info"), className: classnames_1.default(classes.notificationCallButton) }, "Info Message"),
                        react_1.default.createElement(Wrappers_1.Button, { variant: "contained", color: "secondary", onClick: () => handleNotificationCall("error"), className: classnames_1.default(classes.notificationCallButton) }, "Error + Retry Message"),
                        react_1.default.createElement(Wrappers_1.Button, { variant: "contained", color: "success", onClick: () => handleNotificationCall("success"), className: classnames_1.default(classes.notificationCallButton) }, "Success Message")))),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, md: 6, lg: 4 },
                react_1.default.createElement(Widget_1.default, { title: "Usage", disableWidgetMenu: true, noBodyPadding: true, bodyClass: true, header: true },
                    react_1.default.createElement(Wrappers_1.Typography, { weight: true, size: true, colorBrightness: true, color: true },
                        "Notifications are created with the help of",
                        " ",
                        react_1.default.createElement("a", { href: "https://github.com/fkhadra/react-toastify" }, "react-toastify")),
                    react_1.default.createElement("div", { className: classes.codeContainer },
                        react_1.default.createElement(react_syntax_highlighter_1.default, { className: classes.codeComponent, language: "javascript", style: hljs_1.docco }, `
                                // import needed components, functions and styles
                                import { ToastContainer, toast } from 'react-toastify';
                                import 'react-toastify/dist/ReactToastify.css';

                                const Page = () => {
                                   <div>
                                       <ToastContainer />
                                       <button onClick={() => toast('Toast Message')}>show notification</button>
                                    </div>
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
                    react_1.default.createElement(Notification_1.default, { className: classes.notificationItem, type: "report", message: "New report has been received", color: "secondary", variant: true }),
                    react_1.default.createElement(Notification_1.default, { className: classes.notificationItem, type: "feedback", message: "New user feedback received", color: "primary", variant: true }),
                    react_1.default.createElement(Notification_1.default, { className: classes.notificationItem, type: "shipped", message: "The item was shipped", color: "success", variant: true }),
                    react_1.default.createElement(Notification_1.default, { className: classes.notificationItem, type: "message", message: "The new message from user @nahawaii", color: "warning", variant: true }),
                    react_1.default.createElement(Notification_1.default, { className: classes.notificationItem, type: "upload", message: "Your file is ready to upload", color: "primary", variant: true }),
                    react_1.default.createElement(Notification_1.default, { className: classes.notificationItem, type: "disc", message: "The disc is full", color: "info", variant: true }))),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, md: 6, lg: 4 },
                react_1.default.createElement(Widget_1.default, { title: "Notification Types Examples", disableWidgetMenu: true, noBodyPadding: true, bodyClass: true, header: true },
                    react_1.default.createElement(Notification_1.default, { className: classes.notificationItem, type: "report", message: "New report has been received", variant: "rounded", color: "secondary" }),
                    react_1.default.createElement(Notification_1.default, { className: classes.notificationItem, type: "feedback", message: "New user feedback received", variant: "rounded", color: "primary" }),
                    react_1.default.createElement(Notification_1.default, { className: classes.notificationItem, type: "shipped", message: "The item was shipped", variant: "rounded", color: "success" }),
                    react_1.default.createElement(Notification_1.default, { className: classes.notificationItem, type: "message", message: "The new message from user @nahawaii", variant: "rounded", color: "warning" }),
                    react_1.default.createElement(Notification_1.default, { className: classes.notificationItem, type: "upload", message: "Your file is ready to upload", variant: "rounded", color: "primary" }),
                    react_1.default.createElement(Notification_1.default, { className: classes.notificationItem, type: "disc", message: "The disc is full", variant: "rounded", color: "info" }))))));
    // #############################################################
    function sendNotification(componentProps, options) {
        return react_toastify_1.toast(react_1.default.createElement(Notification_1.default, Object.assign({}, componentProps, { className: classes.notificationComponent })), options);
    }
    function retryErrorNotification() {
        var componentProps = { type: "message", message: "Message was sent successfully!", variant: "contained", color: "success", };
        react_toastify_1.toast.update(errorToastId, { render: react_1.default.createElement(Notification_1.default, Object.assign({}, componentProps)), type: "success", });
        setErrorToastId(null);
    }
    function handleNotificationCall(notificationType) {
        var componentProps;
        if (errorToastId && notificationType === "error")
            return;
        switch (notificationType) {
            case "info":
                componentProps = { type: "feedback", message: "New user feedback received", variant: "contained", color: "primary", };
                break;
            case "error":
                componentProps = {
                    type: "message", message: "Message was not sent!", variant: "contained", color: "secondary",
                    extraButton: "Resend", extraButtonClick: retryErrorNotification,
                };
                break;
            default:
                componentProps = { type: "shipped", message: "The item was shipped", variant: "contained", color: "success", };
        }
        var toastId = sendNotification(componentProps, {
            type: notificationType, position: positions[notificationsPosition],
            progressClassName: classes.progress, onClose: notificationType === "error" && (() => setErrorToastId(null)),
            className: classes.notification,
        });
        if (notificationType === "error")
            setErrorToastId(toastId);
    }
    function changeNotificationPosition(positionId) {
        setNotificationPosition(positionId);
    }
}
exports.default = NotificationsPage;
// #############################################################
function CloseButton({ closeToast, className }) {
    return react_1.default.createElement(icons_1.Close, { className: className, onClick: closeToast });
}
//# sourceMappingURL=Notifications.js.map