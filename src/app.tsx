// To learn about recursion, see the bottom of this file

require('font-awesome/css/font-awesome.css');
import * as React from "react";
const reactn = require('reactn');
const useGlobal = reactn.useGlobal;
import ReactDOM from "react-dom";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createHashHistory } from 'history';
const history = createHashHistory();

import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import axios from "axios";
import Cookies from "universal-cookie";
let cookies = new Cookies();
const config = require('./config');

import Themes from "./themes";
import Layout from "./components/Layout/Layout";
import { LayoutProvider } from "./context/LayoutContext";

function App() {
    const [userInfo, setUserInfo] = useGlobal("userInfo");
    const [activeStep, setActiveStep] = useGlobal('activeStep');
    var cUser = cookies.get('userInfo') ? cookies.get('userInfo') : { Id: 0, StatusId: 0 };
    // alert(JSON.stringify(cUser) + " - " + JSON.stringify(userInfo) + " - " + new URLSearchParams(window.location.search).get('code'));
    if (cUser != undefined && (userInfo == undefined || cUser.Id != userInfo.Id)) { setUserInfo(cUser); setActiveStep(cUser.StatusId + 1);  }
    let code = new URLSearchParams(window.location.search).get('code');
    if (code != null) {
        axios.post(config.apiUrl + '/api/user/login', { "code": code }).then((response) => {
            cookies.set('userInfo', response.data, { path: '/', maxAge: 10000000 });
            setUserInfo(response.data);
            window.location.href='/';
        }, (error) => { alert("Login post ERROR: " + error); });
        return (<div />);
    }
    return (
        <LayoutProvider>
            <ThemeProvider theme={Themes.default}>
                <CssBaseline />
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/app/tutorial" />} />
                        <Route exact path="/app" render={() => <Redirect to="/app/tutorial" />} />
                        <Route component={Layout} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </LayoutProvider>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));

// To learn about recursion, see the top of this file