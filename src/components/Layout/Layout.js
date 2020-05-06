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
//import Home from "../../pages/home/Home";
const TokenTutorial_1 = __importDefault(require("../../pages/tokentut/TokenTutorial"));
//import LeaderBoard from "../../pages/leaderboard/LeaderBoard";
//import Dashboard from "../../pages/dashboard";
//import Wallet from "../../pages/wallet/Wallet";
//import GBADirectory from "../../pages/gbadirectory/GBADirectory";
//import GBADAO from "../../pages/gbadao/GBADAO";
//import Typography from "../../pages/typography/Typography";
//import Notifications from "../../pages/notifications/Notifications";
//import Tables from "../../pages/tables/Tables";
//import Icons from "../../pages/icons/icons";
//import Charts from "../../pages/charts/Charts";
const VotingDemo_1 = __importDefault(require("../../pages/voting/VotingDemo"));
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
                react_1.default.createElement(react_router_dom_1.Route, { path: "/app/tutorial", component: TokenTutorial_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/app/votingdemo", component: VotingDemo_1.default })))));
}
//<Route path="/home" component={Home} />
//<Route path="/app/leaderboard" component={LeaderBoard} />
//<Route path="/app/wallet" component={Wallet} />
//<Route path="/app/gbadirectory" component={GBADirectory} />
//<Route path="/app/gbadao" component={GBADAO} />
//<Route path="/app/examples/dashboard" component={Dashboard} />
//<Route path="/app/examples/typography" component={Typography} />
//<Route path="/app/examples/tables" component={Tables} />
//<Route path="/app/examples/notifications" component={Notifications} />
//<Route path="/app/examples/icons" component={Icons} />
//<Route path="/app/examples/charts" component={Charts} />
exports.default = react_router_dom_1.withRouter(Layout);
//# sourceMappingURL=Layout.js.map