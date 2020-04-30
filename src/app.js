"use strict";
// To learn about recursion, see the bottom of this file
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
require('font-awesome/css/font-awesome.css');
const React = __importStar(require("react"));
const reactn = require('reactn');
const useGlobal = reactn.useGlobal;
const react_dom_1 = __importDefault(require("react-dom"));
const react_router_dom_1 = require("react-router-dom");
const history_1 = require("history");
const history = history_1.createHashHistory();
const styles_1 = require("@material-ui/core/styles");
const core_1 = require("@material-ui/core");
const axios_1 = __importDefault(require("axios"));
const universal_cookie_1 = __importDefault(require("universal-cookie"));
let cookies = new universal_cookie_1.default();
const config = require('./config');
const themes_1 = __importDefault(require("./themes"));
const Layout_1 = __importDefault(require("./components/Layout/Layout"));
const LayoutContext_1 = require("./context/LayoutContext");
function App() {
    const [userInfo, setUserInfo] = useGlobal("userInfo");
    const [activeStep, setActiveStep] = useGlobal('activeStep');
    var cUser = cookies.get('userInfo') ? cookies.get('userInfo') : { Id: 0, StatusId: 0 };
    // alert(JSON.stringify(cUser) + " - " + JSON.stringify(userInfo) + " - " + new URLSearchParams(window.location.search).get('code'));
    if (cUser != undefined && (userInfo == undefined || cUser.Id != userInfo.Id)) {
        setUserInfo(cUser);
        setActiveStep(cUser.StatusId + 1);
    }
    let code = new URLSearchParams(window.location.search).get('code');
    if (code != null) {
        axios_1.default.post(config.apiUrl + '/api/user/login', { "code": code }).then((response) => {
            cookies.set('userInfo', response.data, { path: '/', maxAge: 10000000 });
            setUserInfo(response.data);
            window.location.href = '/';
        }, (error) => { alert("Login post ERROR: " + error); });
        return (React.createElement("div", null));
    }
    return (React.createElement(LayoutContext_1.LayoutProvider, null,
        React.createElement(styles_1.ThemeProvider, { theme: themes_1.default.default },
            React.createElement(core_1.CssBaseline, null),
            React.createElement(react_router_dom_1.Router, { history: history },
                React.createElement(react_router_dom_1.Switch, null,
                    React.createElement(react_router_dom_1.Route, { exact: true, path: "/", render: () => React.createElement(react_router_dom_1.Redirect, { to: "/app/tutorial" }) }),
                    React.createElement(react_router_dom_1.Route, { exact: true, path: "/app", render: () => React.createElement(react_router_dom_1.Redirect, { to: "/app/tutorial" }) }),
                    React.createElement(react_router_dom_1.Route, { component: Layout_1.default }))))));
}
;
react_dom_1.default.render(React.createElement(App, null), document.getElementById('root'));
// To learn about recursion, see the top of this file
//# sourceMappingURL=app.js.map