"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@material-ui/core/styles");
const drawerWidth = 240;
exports.default = styles_1.makeStyles(theme => ({
    headerIcon: {
        margintop: 0
    },
    headerIconCollapse: {
        margintop: 0
    },
    sidebarList: {
        margintop: 0
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 40,
        [theme.breakpoints.down("sm")]: {
            width: drawerWidth,
        },
    },
    toolbar: Object.assign(Object.assign({}, theme.mixins.toolbar), { [theme.breakpoints.down("sm")]: {
            display: "none",
        } }),
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    /* sidebarList: {
      marginTop: theme.spacing(6),
    }, */
    mobileBackButton: {
        marginTop: theme.spacing(0.5),
        marginLeft: theme.spacing(3),
        [theme.breakpoints.only("sm")]: {
            marginTop: theme.spacing(0.625),
        },
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
}));
//# sourceMappingURL=styles.js.map