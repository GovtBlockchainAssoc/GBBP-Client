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
var reactn = require('reactn');
var useGlobal = reactn.useGlobal;
const react_router_dom_1 = require("react-router-dom");
const core_1 = require("@material-ui/core");
const icons_1 = require("@material-ui/icons");
const classnames_1 = __importDefault(require("classnames"));
const universal_cookie_1 = __importDefault(require("universal-cookie"));
const cookies = new universal_cookie_1.default();
const styles_1 = __importDefault(require("./styles"));
const Wrappers_1 = require("../Wrappers/Wrappers");
const Notification_1 = __importDefault(require("../Notification/Notification"));
const Login_1 = __importDefault(require("../Login/Login"));
const UserAvatar_1 = __importDefault(require("../UserAvatar/UserAvatar"));
const LayoutContext_1 = require("../../context/LayoutContext");
const messages = [
    { id: 0, variant: "warning", name: "Jane Hew", message: "Hey! How is it going?", time: "9:32", },
    { id: 1, variant: "success", name: "Lloyd Brown", message: "Check out my new Dashboard", time: "9:18", },
    { id: 2, variant: "primary", name: "Mark Winstein", message: "I want rearrange the appointment", time: "9:15", },
    { id: 3, variant: "secondary", name: "Liana Dutti", message: "Good news from sale department", time: "9:09", },
];
const notifications = [
    { id: 0, color: "warning", message: "Check out this awesome ticket" },
    { id: 1, color: "success", type: "info", message: "What is the best way to get ...", },
    { id: 2, color: "secondary", type: "notification", message: "This is just a simple notification", },
    { id: 3, color: "primary", type: "e-commerce", message: "12 new orders has arrived today", },
];
function Header(props) {
    var classes = styles_1.default();
    var layoutState = LayoutContext_1.useLayoutState();
    var layoutDispatch = LayoutContext_1.useLayoutDispatch();
    const [userInfo, setuserInfo] = useGlobal('userInfo');
    function logout() { setuserInfo({ Id: 0 }); cookies.set('userInfo', { Id: 0 }, { path: '/' }); }
    var [mailMenu, setMailMenu] = react_1.useState(null);
    var [isMailsUnread, setIsMailsUnread] = react_1.useState(true);
    var [notificationsMenu, setNotificationsMenu] = react_1.useState(null);
    var [isNotificationsUnread, setIsNotificationsUnread] = react_1.useState(true);
    var [profileMenu, setProfileMenu] = react_1.useState(null);
    var [isSearchOpen, setSearchOpen] = react_1.useState(false);
    return (react_1.default.createElement(core_1.AppBar, { position: "fixed", className: classes.appBar },
        react_1.default.createElement(core_1.Toolbar, { className: classes.toolbar },
            react_1.default.createElement(core_1.IconButton, { color: "inherit", onClick: () => LayoutContext_1.toggleSidebar(layoutDispatch), className: classnames_1.default(classes.headerMenuButton, classes.headerMenuButtonCollapse) }, layoutState.isSidebarOpened ? (react_1.default.createElement(icons_1.ArrowBack, { classes: { root: classnames_1.default(classes.headerIcon, classes.headerIconCollapse), } })) :
                (react_1.default.createElement(icons_1.Menu, { classes: { root: classnames_1.default(classes.headerIcon, classes.headerIconCollapse), } }))),
            react_1.default.createElement(Wrappers_1.Typography, { variant: "h6", weight: "medium", className: classes.logotype, size: true, colorBrightness: true, color: true }, "Government Business Blockchain Platform "),
            react_1.default.createElement("div", { className: classes.grow }),
            true ? null : react_1.default.createElement("div", { className: classnames_1.default(classes.search, { [classes.searchFocused]: isSearchOpen, }) },
                react_1.default.createElement("div", { className: classnames_1.default(classes.searchIcon, { [classes.searchIconOpened]: isSearchOpen, }), onClick: () => setSearchOpen(!isSearchOpen) },
                    react_1.default.createElement(icons_1.Search, { classes: { root: classes.headerIcon } })),
                react_1.default.createElement(core_1.InputBase, { placeholder: "Search\u2026", classes: { root: classes.inputRoot, input: classes.inputInput, } })),
            (userInfo == null) || userInfo.Id == 0 ? null :
                react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(core_1.IconButton, { color: "inherit", "aria-haspopup": "true", "aria-controls": "mail-menu", className: classes.headerMenuButton, onClick: e => { setNotificationsMenu(e.currentTarget); setIsNotificationsUnread(false); } },
                        react_1.default.createElement(Wrappers_1.Badge, { badgeContent: isNotificationsUnread ? notifications.length : null, color: "warning", colorBrightness: true },
                            react_1.default.createElement(icons_1.NotificationsNone, { classes: { root: classes.headerIcon } }))),
                    react_1.default.createElement(core_1.IconButton, { color: "inherit", "aria-haspopup": "true", "aria-controls": "mail-menu", className: classes.headerMenuButton, onClick: e => { setMailMenu(e.currentTarget); setIsMailsUnread(false); } },
                        react_1.default.createElement(Wrappers_1.Badge, { badgeContent: isMailsUnread ? messages.length : null, color: "secondary", colorBrightness: true },
                            react_1.default.createElement(icons_1.MailOutline, { classes: { root: classes.headerIcon } }))),
                    react_1.default.createElement(core_1.IconButton, { "aria-haspopup": "true", color: "inherit", className: classes.headerMenuButton, "aria-controls": "profile-menu", onClick: e => setProfileMenu(e.currentTarget) },
                        react_1.default.createElement(icons_1.Person, { classes: { root: classes.headerIcon } })),
                    react_1.default.createElement(core_1.Menu, { id: "mail-menu", open: Boolean(mailMenu), anchorEl: mailMenu, onClose: () => setMailMenu(null), disableAutoFocusItem: true, MenuListProps: { className: classes.headerMenuList }, className: classes.headerMenu, classes: { paper: classes.profileMenu } },
                        react_1.default.createElement("div", { className: classes.profileMenuUser },
                            react_1.default.createElement(Wrappers_1.Typography, { variant: "h4", weight: "medium", size: true, colorBrightness: true, color: true }, "New Messages"),
                            react_1.default.createElement(Wrappers_1.Typography, { className: classes.profileMenuLink, component: "a", color: "secondary", weight: true, size: true, colorBrightness: true },
                                messages.length,
                                " New Messages")),
                        messages.map(message => (react_1.default.createElement(core_1.MenuItem, { key: message.id, className: classes.messageNotification },
                            react_1.default.createElement("div", { className: classes.messageNotificationSide },
                                react_1.default.createElement(UserAvatar_1.default, { color: message.variant, name: message.name }),
                                react_1.default.createElement(Wrappers_1.Typography, { size: "sm", color: "text", colorBrightness: "secondary", weight: true }, message.time)),
                            react_1.default.createElement("div", { className: classnames_1.default(classes.messageNotificationSide, classes.messageNotificationBodySide) },
                                react_1.default.createElement(Wrappers_1.Typography, { weight: "medium", gutterBottom: true, size: true, colorBrightness: true, color: true }, message.name),
                                react_1.default.createElement(Wrappers_1.Typography, { color: "text", colorBrightness: "secondary", weight: true, size: true }, message.message))))),
                        react_1.default.createElement(core_1.Fab, { variant: "extended", color: "primary", "aria-label": "Add", className: classes.sendMessageButton },
                            "Send New Message ",
                            react_1.default.createElement(icons_1.Send, { className: classes.sendButtonIcon }))),
                    react_1.default.createElement(core_1.Menu, { id: "notifications-menu", open: Boolean(notificationsMenu), anchorEl: notificationsMenu, disableAutoFocusItem: true, onClose: () => setNotificationsMenu(null), className: classes.headerMenu }, notifications.map(notification => (react_1.default.createElement(core_1.MenuItem, { key: notification.id, onClick: () => setNotificationsMenu(null), className: classes.headerMenuItem },
                        react_1.default.createElement(Notification_1.default, Object.assign({}, notification, { variant: "inherit" })))))),
                    react_1.default.createElement(core_1.Menu, { id: "profile-menu", open: Boolean(profileMenu), anchorEl: profileMenu, disableAutoFocusItem: true, onClose: () => setProfileMenu(null), className: classes.headerMenu, classes: { paper: classes.profileMenu } },
                        react_1.default.createElement("div", { className: classes.profileMenuUser },
                            react_1.default.createElement(Wrappers_1.Typography, { variant: "h4", weight: "medium", size: true, colorBrightness: true, color: true }, userInfo.Name),
                            react_1.default.createElement(Wrappers_1.Typography, { className: classes.profileMenuLink, component: "a", color: "primary", href: "https://flatlogic.com", weight: true, size: true, colorBrightness: true })),
                        react_1.default.createElement(core_1.MenuItem, { className: classnames_1.default(classes.profileMenuItem, classes.headerMenuItem) },
                            react_1.default.createElement(icons_1.Person, { className: classes.profileMenuIcon }),
                            " Profile"),
                        react_1.default.createElement(core_1.MenuItem, { className: classnames_1.default(classes.profileMenuItem, classes.headerMenuItem) },
                            react_1.default.createElement(icons_1.Person, { className: classes.profileMenuIcon }),
                            " Tasks"),
                        react_1.default.createElement(core_1.MenuItem, { className: classnames_1.default(classes.profileMenuItem, classes.headerMenuItem) },
                            react_1.default.createElement(icons_1.Person, { className: classes.profileMenuIcon }),
                            " Messages"),
                        react_1.default.createElement("div", { className: classes.profileMenuUser },
                            react_1.default.createElement(Wrappers_1.Typography, { className: classes.profileMenuLink, color: "primary", onClick: logout, weight: true, size: true, colorBrightness: true }, "Sign Out")))),
            (userInfo == null) || userInfo.Id == 0 ? react_1.default.createElement(Login_1.default, null) : null)));
}
exports.default = react_router_dom_1.withRouter(Header);
//# sourceMappingURL=Header.js.map