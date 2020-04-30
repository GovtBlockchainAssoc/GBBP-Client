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
const react_router_dom_1 = require("react-router-dom");
const core_1 = require("@material-ui/core");
const icons_1 = require("@material-ui/icons");
const styles_1 = require("@material-ui/core/styles");
const classnames_1 = __importDefault(require("classnames"));
const styles_2 = __importDefault(require("./styles"));
const SidebarLink_1 = __importDefault(require("./components/SidebarLink/SidebarLink"));
// context
const LayoutContext_1 = require("../../context/LayoutContext");
const structure = [
    { id: 1, label: "Home", link: "/home", icon: react_1.default.createElement(icons_1.Home, null) },
    { id: 2, label: "Token Tutorial", link: "/app/tutorial", icon: react_1.default.createElement(icons_1.TextFields, null) },
    { id: 3, label: "Leaderboard", link: "/app/leaderboard", icon: react_1.default.createElement(icons_1.StarRate, null) },
    { id: 4, label: "Your Wallet", link: "/app/wallet", icon: react_1.default.createElement(icons_1.Toll, null) },
    { id: 5, label: "GBA Directory", link: "/app/gbadirectory", icon: react_1.default.createElement(icons_1.People, null) },
    { id: 6, label: "GBA DAO", link: "/app/gbadao", icon: react_1.default.createElement(icons_1.HowToVote, null) },
    { id: 7, label: "Example Screens", link: "/app/examples", icon: react_1.default.createElement(icons_1.FilterNone, null),
        children: [
            { label: "Dashboard", link: "/app/examples/dashboard", icon: react_1.default.createElement(icons_1.Dashboard, null) },
            { label: "Typography", link: "/app/examples/typography", icon: react_1.default.createElement(icons_1.Title, null), },
            { label: "Tables", link: "/app/examples/tables", icon: react_1.default.createElement(icons_1.BorderAll, null) },
            { label: "Notifications", link: "/app/examples/notifications", icon: react_1.default.createElement(icons_1.NotificationsNone, null), },
            { label: "Icons", link: "/app/examples/icons", icon: react_1.default.createElement(icons_1.InsertEmoticon, null) },
            { label: "Charts", link: "/app/examples/charts", icon: react_1.default.createElement(icons_1.PieChart, null) },
        ],
    },
    { id: 5, type: "divider" },
];
function Sidebar({ location }) {
    var classes = styles_2.default();
    var theme = styles_1.createMuiTheme();
    // global
    var { isSidebarOpened } = LayoutContext_1.useLayoutState();
    var layoutDispatch = LayoutContext_1.useLayoutDispatch();
    // local
    var [isPermanent, setPermanent] = react_1.useState(true);
    react_1.useEffect(function () {
        window.addEventListener("resize", handleWindowWidthChange);
        handleWindowWidthChange();
        return function cleanup() {
            window.removeEventListener("resize", handleWindowWidthChange);
        };
    });
    return (react_1.default.createElement(core_1.Drawer, { variant: isPermanent ? "permanent" : "temporary", className: classnames_1.default(classes.drawer, {
            [classes.drawerOpen]: isSidebarOpened,
            [classes.drawerClose]: !isSidebarOpened,
        }), classes: {
            paper: classnames_1.default({
                [classes.drawerOpen]: isSidebarOpened,
                [classes.drawerClose]: !isSidebarOpened,
            }),
        }, open: isSidebarOpened },
        react_1.default.createElement("div", { className: classes.toolbar }),
        react_1.default.createElement("div", { className: classes.mobileBackButton },
            react_1.default.createElement(core_1.IconButton, { onClick: () => LayoutContext_1.toggleSidebar(layoutDispatch) },
                react_1.default.createElement(icons_1.ArrowBack, { classes: {
                        root: classnames_1.default(classes.headerIcon, classes.headerIconCollapse),
                    } }))),
        react_1.default.createElement(core_1.List, { className: classes.sidebarList }, structure.map(link => (react_1.default.createElement(SidebarLink_1.default, Object.assign({ link: true, icon: true, label: true, children: true, nested: false, type: true, key: link.id, location: location, isSidebarOpened: isSidebarOpened }, link)))))));
    // ##################################################################
    function handleWindowWidthChange() {
        var windowWidth = window.innerWidth;
        var breakpointWidth = theme.breakpoints.values.md;
        var isSmallScreen = windowWidth < breakpointWidth;
        if (isSmallScreen && isPermanent) {
            setPermanent(false);
        }
        else if (!isSmallScreen && !isPermanent) {
            setPermanent(true);
        }
    }
}
exports.default = react_router_dom_1.withRouter(Sidebar);
//# sourceMappingURL=Sidebar.js.map