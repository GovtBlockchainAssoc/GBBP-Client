import React from "react";
import { Route, Switch, withRouter, } from "react-router-dom";
import classnames from "classnames";

import useStyles from "./styles";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

import Home from "../../pages/home/Home";
import TokenTut from "../../pages/tokentut/TokenTutorial";
import LeaderBoard from "../../pages/leaderboard/LeaderBoard";
import Dashboard from "../../pages/dashboard";
import Wallet from "../../pages/wallet/Wallet";
import GBADirectory from "../../pages/gbadirectory/GBADirectory";
import GBADAO from "../../pages/gbadao/GBADAO";
import Typography from "../../pages/typography/Typography";
import Notifications from "../../pages/notifications/Notifications";
import Tables from "../../pages/tables/Tables";
import Icons from "../../pages/icons/icons";
import Charts from "../../pages/charts/Charts";

import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
    var classes = useStyles();
    var layoutState = useLayoutState();

    return (
        <div className={classes.root}>
            <Header history={props.history} />
            <Sidebar />
            <div className={classnames(classes.content, { [classes.contentShift]: layoutState.isSidebarOpened, })} >
                <div className={classes.fakeToolbar} />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/app/tutorial" component={TokenTut} />
                    <Route path="/app/leaderboard" component={LeaderBoard} />
                    <Route path="/app/wallet" component={Wallet} />
                    <Route path="/app/gbadirectory" component={GBADirectory} />
                    <Route path="/app/gbadao" component={GBADAO} />
                    <Route path="/app/examples/dashboard" component={Dashboard} />
                    <Route path="/app/examples/typography" component={Typography} />
                    <Route path="/app/examples/tables" component={Tables} />
                    <Route path="/app/examples/notifications" component={Notifications} />
                    <Route path="/app/examples/icons" component={Icons} />
                    <Route path="/app/examples/charts" component={Charts} />
                </Switch>
            </div>
        </div>
    );
}

//<Route path="/app/examples/dashboard" component={Dashboard} />
//<Route path="/app/examples/typography" component={Typography} />
//<Route path="/app/examples/tables" component={Tables} />
//<Route path="/app/examples/notifications" component={Notifications} />
//<Route exact path="/app/examples" />
//<Route path="/app/examples/icons" component={Icons} />
//<Route path="/app/examples/charts" component={Charts} />

export default withRouter(Layout);
