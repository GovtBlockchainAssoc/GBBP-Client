"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const recompose_1 = require("recompose");
const react_toastify_1 = require("react-toastify");
const Notification_1 = __importDefault(require("../../components/Notification/Notification"));
const NotificationsView_1 = __importDefault(require("./NotificationsView"));
const positions = [react_toastify_1.toast.POSITION.TOP_LEFT, react_toastify_1.toast.POSITION.TOP_CENTER, react_toastify_1.toast.POSITION.TOP_RIGHT, react_toastify_1.toast.POSITION.BOTTOM_LEFT,
    react_toastify_1.toast.POSITION.BOTTOM_CENTER, react_toastify_1.toast.POSITION.BOTTOM_RIGHT];
exports.default = recompose_1.compose(core_1.withStyles(theme => ({})), recompose_1.withState("notificationsPosition", "setNotificationPosition", 2), recompose_1.withState("errorToastId", "setErrorToastId", null), recompose_1.withHandlers({
    sendNotification: props => (componentProps, options) => {
        return react_toastify_1.toast(react_1.default.createElement(Notification_1.default, Object.assign({}, componentProps, { className: props.classes.notificationComponent })), options);
    }
}), recompose_1.withHandlers({
    retryErrorNotification: props => () => {
        const componentProps = { type: "message", message: "Message was sent successfully!", variant: "contained", color: "success", };
        react_toastify_1.toast.update(props.errorToastId, { render: react_1.default.createElement(Notification_1.default, Object.assign({}, componentProps)), type: "success" });
        props.setErrorToastId(null);
    }
}), recompose_1.withHandlers({
    handleNotificationCall: props => notificationType => {
        let componentProps;
        if (props.errorToastId && notificationType === "error")
            return;
        switch (notificationType) {
            case "info":
                componentProps = { type: "feedback", message: "New user feedback received", variant: "contained", color: "primary" };
                break;
            case "error":
                componentProps = { type: "message", message: "Message was not sent!", variant: "contained", color: "secondary",
                    extraButton: "Resend", extraButtonClick: props.retryErrorNotification };
                break;
            default:
                componentProps = { type: "shipped", message: "The item was shipped", variant: "contained", color: "success" };
        }
        const toastId = props.sendNotification(componentProps, {
            type: notificationType,
            position: positions[props.notificationsPosition],
            progressClassName: props.classes.progress,
            onClose: notificationType === "error" && (() => props.setErrorToastId(null)),
            className: props.classes.notification
        });
        if (notificationType === "error")
            props.setErrorToastId(toastId);
    },
    changeNotificationPosition: props => positionId => { props.setNotificationPosition(positionId); }
}))(NotificationsView_1.default);
//# sourceMappingURL=NotificationsContainer.js.map