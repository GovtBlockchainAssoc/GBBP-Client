"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@material-ui/core/styles");
exports.default = styles_1.makeStyles(theme => ({
    widgetWrapper: {
        display: "flex",
        minHeight: "100%",
    },
    widgetHeader: {
        padding: theme.spacing(3),
        paddingBottom: theme.spacing(1),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    widgetRoot: {
    //    boxShadow: theme.customShadows.widget,
    },
    widgetBody: {
        paddingBottom: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3),
    },
    noPadding: {
        padding: 0,
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        overflow: "hidden",
    },
    moreButton: {
        margin: -theme.spacing(1),
        padding: 0,
        width: 40,
        height: 40,
        color: theme.palette.text.hint,
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: "rgba(255, 255, 255, 0.35)",
        },
    },
}));
//# sourceMappingURL=styles.js.map