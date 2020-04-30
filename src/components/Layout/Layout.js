"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const classnames_1 = __importDefault(require("classnames"));
const styles_1 = __importDefault(require("./styles"));
const Header_1 = __importDefault(require("../Header/Header"));
const Sidebar_1 = __importDefault(require("../Sidebar/Sidebar"));
const Home_1 = __importDefault(require("../../pages/home/Home"));
const TokenTutorial_1 = __importDefault(require("../../pages/tokentut/TokenTutorial"));
const LeaderBoard_1 = __importDefault(require("../../pages/leaderboard/LeaderBoard"));
const dashboard_1 = __importDefault(require("../../pages/dashboard"));
const Wallet_1 = __importDefault(require("../../pages/wallet/Wallet"));
const GBADirectory_1 = __importDefault(require("../../pages/gbadirectory/GBADirectory"));
const GBADAO_1 = __importDefault(require("../../pages/gbadao/GBADAO"));
const Typography_1 = __importDefault(require("../../pages/typography/Typography"));
const Notifications_1 = __importDefault(require("../../pages/notifications/Notifications"));
const Tables_1 = __importDefault(require("../../pages/tables/Tables"));
const icons_1 = __importDefault(require("../../pages/icons/icons"));
const Charts_1 = __importDefault(require("../../pages/charts/Charts"));
const LayoutContext_1 = require("../../context/LayoutContext");
function Layout(props) {
    var classes = styles_1.default();
    var layoutState = LayoutContext_1.useLayoutState();
    return (react_1.default.createElement("div", { className: classes.root },
        react_1.default.createElement(Header_1.default, { history: props.history }),
        react_1.default.createElement(Sidebar_1.default, null),
        react_1.default.createElement("div", { className: classnames_1.default(classes.content, { [classes.contentShift]: layoutState.isSidebarOpened, }) },
            react_1.default.createElement("div", { className: classes.fakeToolbar }),
            react_1.default.createElement(react_router_dom_1.Switch, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/home", component: Home_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/app/tutorial", component: TokenTutorial_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/app/leaderboard", component: LeaderBoard_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/app/wallet", component: Wallet_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/app/gbadirectory", component: GBADirectory_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/app/gbadao", component: GBADAO_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/app/examples/dashboard", component: dashboard_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/app/examples/typography", component: Typography_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/app/examples/tables", component: Tables_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/app/examples/notifications", component: Notifications_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/app/examples/icons", component: icons_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/app/examples/charts", component: Charts_1.default })))));
}
//<Route path="/app/examples/dashboard" component={Dashboard} />
//<Route path="/app/examples/typography" component={Typography} />
//<Route path="/app/examples/tables" component={Tables} />
//<Route path="/app/examples/notifications" component={Notifications} />
//<Route exact path="/app/examples" />
//<Route path="/app/examples/icons" component={Icons} />
//<Route path="/app/examples/charts" component={Charts} />
exports.default = react_router_dom_1.withRouter(Layout);
//# sourceMappingURL=Layout.js.map