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
const react_router_dom_1 = require("react-router-dom");
const classnames_1 = __importDefault(require("classnames"));
const styles_1 = __importDefault(require("./styles"));
const Dot_1 = __importDefault(require("../Dot"));
function doChildren(children, isSidebarOpened, classes) {
    let obj = [];
    ;
    try {
        children.map(childrenLink => {
            obj.push(react_1.default.createElement(SidebarLink, Object.assign({ key: childrenLink && childrenLink.link, location: location, isSidebarOpened: isSidebarOpened, 
                //                 classes={classes}
                nested: true, type: true, icon: childrenLink.icon, children: true }, childrenLink)));
        });
    }
    catch (e) {
        obj.push(react_1.default.createElement("h2", null, JSON.stringify(e)));
    }
    return (obj);
}
function SidebarLink({ label, link, type, icon, children, location, isSidebarOpened, nested }) {
    var classes = styles_1.default();
    // local
    var [isOpen, setIsOpen] = react_1.useState(false);
    var isLinkActive = link && (location.pathname === link || location.pathname.indexOf(link) !== -1);
    if (type === "title")
        return (react_1.default.createElement(core_1.Typography, { className: classnames_1.default(classes.linkText, classes.sectionTitle, { [classes.linkTextHidden]: !isSidebarOpened, }) }, label));
    if (type === "divider")
        return react_1.default.createElement(core_1.Divider, { className: classes.divider });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.ListItem, { button: true, component: link && react_router_dom_1.Link, to: link, onClick: (typeof (children) == "object") && toggleCollapse, className: classes.link, classes: { root: classnames_1.default(classes.linkRoot, { [classes.linkActive]: isLinkActive && !nested, [classes.linkNested]: nested, }), }, disableRipple: true },
            react_1.default.createElement(core_1.ListItemIcon, { className: classnames_1.default(classes.linkIcon, { [classes.linkIconActive]: isLinkActive, }) }, icon ? icon : react_1.default.createElement(Dot_1.default, { color: isLinkActive && "primary", size: true })),
            react_1.default.createElement(core_1.ListItemText, { classes: {
                    primary: classnames_1.default(classes.linkText, {
                        [classes.linkTextActive]: isLinkActive,
                        [classes.linkTextHidden]: !isSidebarOpened,
                    }),
                }, primary: label })),
        (typeof (children) == "object") && (react_1.default.createElement(core_1.Collapse, { in: isOpen && isSidebarOpened, timeout: "auto", unmountOnExit: true, className: classes.nestedList },
            react_1.default.createElement(core_1.List, { component: "div", disablePadding: true }, doChildren(children, isSidebarOpened, classes))))));
    function toggleCollapse(e) {
        if (isSidebarOpened) {
            e.preventDefault();
            setIsOpen(!isOpen);
        }
    }
}
exports.default = SidebarLink;
//# sourceMappingURL=SidebarLink.js.map