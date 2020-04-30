"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@material-ui/core/styles");
exports.default = styles_1.makeStyles(theme => ({
    pageTitleContainer: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(5),
    },
    typo: {
        color: theme.palette.text.hint,
    },
    button: {
        //    boxShadow: theme.customShadows.widget,
        textTransform: "none",
        "&:active": {
        //      boxShadow: theme.customShadows.widgetWide,
        },
    },
}));
//# sourceMappingURL=styles.js.map