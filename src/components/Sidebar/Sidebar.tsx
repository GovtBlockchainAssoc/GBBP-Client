import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
    Home as HomeIcon, TextFields as TutorialIcon, StarRate as LeaderIcon, Toll as WalletIcon, People as DirectoryIcon, HowToVote as DAOIcon, 
    Dashboard as DashboardIcon, NotificationsNone as NotificationsIcon, Title as TypographyIcon, FilterNone as UIElementsIcon,
    InsertEmoticon as IconIcon, PieChart as ChartIcon, BorderAll as TableIcon, Help as HelpIcon, ArrowBack as ArrowBackIcon
} from "@material-ui/icons";
import { createMuiTheme } from '@material-ui/core/styles';
import classNames from "classnames";
import useStyles from "./styles";
import SidebarLink from "./components/SidebarLink/SidebarLink";

// context
import {
    useLayoutState,
    useLayoutDispatch,
    toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
    { id: 1, label: "Home", link: "/home", icon: <HomeIcon /> },
    { id: 2, label: "Token Tutorial", link: "/app/tutorial", icon: <TutorialIcon /> },
    { id: 3, label: "Leaderboard", link: "/app/leaderboard", icon: <LeaderIcon /> },
    { id: 4, label: "Your Wallet", link: "/app/wallet", icon: <WalletIcon /> },
    { id: 5, label: "GBA Directory", link: "/app/gbadirectory", icon: <DirectoryIcon /> },
    { id: 6, label: "GBA DAO", link: "/app/gbadao", icon: <DAOIcon /> },
    { id: 7, label: "Example Screens", link: "/app/examples", icon: <UIElementsIcon />,
        children: [
            { label: "Dashboard", link: "/app/examples/dashboard", icon: <DashboardIcon /> },
            { label: "Typography", link: "/app/examples/typography", icon: <TypographyIcon />, },
            { label: "Tables", link: "/app/examples/tables", icon: <TableIcon /> },
            { label: "Notifications", link: "/app/examples/notifications", icon: <NotificationsIcon />, },
            { label: "Icons", link: "/app/examples/icons", icon: <IconIcon /> },
            { label: "Charts", link: "/app/examples/charts", icon: <ChartIcon /> },
            //            { label: "Maps", link: "/app/examples/maps" },
        ],
    },
    { id: 5, type: "divider" },
    //{ id: 6, type: "title", label: "HELP" },
    //{ id: 7, label: "Library", link: "", icon: <LibraryIcon /> },
    //{ id: 8, label: "Support", link: "", icon: <SupportIcon /> },
    //{ id: 9, label: "FAQ", link: "", icon: <FAQIcon /> },
    //{ id: 10, type: "divider" },
    //{ id: 11, type: "title", label: "PROJECTS" },
    //{ id: 12, label: "My recent", link: "", icon: <Dot size="small" color="warning" />, },
    //{ id: 13, label: "Starred", link: "", icon: <Dot size="small" color="primary" />, },
    //{ id: 14, label: "Background", link: "", icon: <Dot size="small" color="secondary" />, },
];

function Sidebar({ location }) {
    var classes = useStyles();
    var theme = createMuiTheme();

    // global
    var { isSidebarOpened } = useLayoutState();
    var layoutDispatch = useLayoutDispatch();

    // local
    var [isPermanent, setPermanent] = useState(true);

    useEffect(function () {
        window.addEventListener("resize", handleWindowWidthChange);
        handleWindowWidthChange();
        return function cleanup() {
            window.removeEventListener("resize", handleWindowWidthChange);
        };
    });

    return (
        <Drawer
            variant={isPermanent ? "permanent" : "temporary"}
            className={classNames(classes.drawer, {
                [classes.drawerOpen]: isSidebarOpened,
                [classes.drawerClose]: !isSidebarOpened,
            })}
            classes={{
                paper: classNames({
                    [classes.drawerOpen]: isSidebarOpened,
                    [classes.drawerClose]: !isSidebarOpened,
                }),
            }}
            open={isSidebarOpened}
        >
            <div className={classes.toolbar} />
            <div className={classes.mobileBackButton}>
                <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
                    <ArrowBackIcon
                        classes={{
                            root: classNames(classes.headerIcon, classes.headerIconCollapse),
                        }}
                    />
                </IconButton>
            </div>
            <List className={classes.sidebarList}>
                {structure.map(link => (
                    <SidebarLink link icon label children nested={false} type
                        key={link.id}
                        location={location}
                        isSidebarOpened={isSidebarOpened}
                        {...link}
                    />
                ))}
            </List>
        </Drawer>
    )
    // ##################################################################
    function handleWindowWidthChange() {
        var windowWidth = window.innerWidth;
        var breakpointWidth = theme.breakpoints.values.md;
        var isSmallScreen = windowWidth < breakpointWidth;

        if (isSmallScreen && isPermanent) {
            setPermanent(false);
        } else if (!isSmallScreen && !isPermanent) {
            setPermanent(true);
        }
    }
}

export default withRouter(Sidebar);
