"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@material-ui/core/styles");
exports.default = styles_1.makeStyles(theme => ({
    root: {
        display: "flex",
        maxWidth: "100vw",
        overflowX: "hidden",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        width: `calc(100vw - 240px)`,
        minHeight: "100vh",
    },
    contentShift: {
        width: `calc(100vw - ${240 + theme.spacing(6)}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    fakeToolbar: Object.assign({}, theme.mixins.toolbar),
}));
//# sourceMappingURL=styles.js.map