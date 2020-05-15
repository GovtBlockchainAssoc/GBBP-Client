import React, { useState } from "react";
var reactn = require('reactn');
var useGlobal = reactn.useGlobal;
import { withRouter } from "react-router-dom";
import { AppBar, Toolbar, IconButton, InputBase, Menu, MenuItem, Fab, Link } from "@material-ui/core";
import { 
    Menu as MenuIcon, MailOutline as MailIcon, NotificationsNone as NotificationsIcon, Person as AccountIcon,
    Search as SearchIcon, Send as SendIcon, ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import classNames from "classnames";
import Cookies from "universal-cookie";
const cookies = new Cookies();

import useStyles from "./styles";

import { Badge, Typography, Button } from "../Wrappers/Wrappers";
import Notification from "../Notification/Notification";
import GBALoginDialog from "../Login/GBALogin";
import WalletLoginDialog from "../Login/WalletLogin";
import UserAvatar from "../UserAvatar/UserAvatar";

import { useLayoutState, useLayoutDispatch, toggleSidebar, } from "../../context/LayoutContext";

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
    var classes = useStyles();
    var layoutState = useLayoutState();
    var layoutDispatch = useLayoutDispatch();
    const [userInfo, setuserInfo] = useGlobal('userInfo');
    function logout() { setuserInfo({ Id: 0 }); cookies.set('userInfo', { Id: 0 }, { path: '/' }); }

    var [mailMenu, setMailMenu] = useState(null);
    var [isMailsUnread, setIsMailsUnread] = useState(true);
    var [notificationsMenu, setNotificationsMenu] = useState(null);
    var [isNotificationsUnread, setIsNotificationsUnread] = useState(true);
    var [profileMenu, setProfileMenu] = useState(null);
    var [isSearchOpen, setSearchOpen] = useState(false);
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <IconButton color="inherit" onClick={() => toggleSidebar(layoutDispatch)}
                    className={classNames(classes.headerMenuButton, classes.headerMenuButtonCollapse)} >
                    {layoutState.isSidebarOpened ? (
                        <ArrowBackIcon classes={{ root: classNames(classes.headerIcon, classes.headerIconCollapse), }} />) :
                        (<MenuIcon classes={{ root: classNames(classes.headerIcon, classes.headerIconCollapse), }} />)}
                </IconButton>
                <Typography variant="h6" weight="medium" className={classes.logotype} size colorBrightness color>
                    Government Business Blockchain Platform </Typography>
                <div className={classes.grow} />
                {true ? null : <div className={classNames(classes.search, { [classes.searchFocused]: isSearchOpen, })} >
                    <div className={classNames(classes.searchIcon, { [classes.searchIconOpened]: isSearchOpen, })}
                        onClick={() => setSearchOpen(!isSearchOpen)} >
                        <SearchIcon classes={{ root: classes.headerIcon }} />
                    </div>
                    <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput, }} />
                </div>}
                {(userInfo == null) || userInfo.Id == 0 ? null :
                    <>
                        <IconButton color="inherit" aria-haspopup="true" aria-controls="mail-menu" className={classes.headerMenuButton}
                            onClick={e => { setNotificationsMenu(e.currentTarget); setIsNotificationsUnread(false); }} >
                            <Badge badgeContent={isNotificationsUnread ? notifications.length : null} color="warning" colorBrightness >
                                <NotificationsIcon classes={{ root: classes.headerIcon }} />
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit" aria-haspopup="true" aria-controls="mail-menu" className={classes.headerMenuButton}
                            onClick={e => { setMailMenu(e.currentTarget); setIsMailsUnread(false); }} >
                            <Badge badgeContent={isMailsUnread ? messages.length : null} color="secondary" colorBrightness >
                                <MailIcon classes={{ root: classes.headerIcon }} />
                            </Badge>
                        </IconButton>
                        <IconButton aria-haspopup="true" color="inherit" className={classes.headerMenuButton} aria-controls="profile-menu"
                            onClick={e => setProfileMenu(e.currentTarget)} >
                            <AccountIcon classes={{ root: classes.headerIcon }} />
                        </IconButton>
                        <Menu id="mail-menu" open={Boolean(mailMenu)} anchorEl={mailMenu} onClose={() => setMailMenu(null)} disableAutoFocusItem
                            MenuListProps={{ className: classes.headerMenuList }} className={classes.headerMenu} classes={{ paper: classes.profileMenu }} >
                            <div className={classes.profileMenuUser}>
                                <Typography variant="h4" weight="medium" size colorBrightness color>New Messages</Typography>
                                <Typography className={classes.profileMenuLink} component="a" color="secondary" weight size colorBrightness >
                                    {messages.length} New Messages
                                </Typography>
                            </div>
                            {messages.map(message => (
                                <MenuItem key={message.id} className={classes.messageNotification}>
                                    <div className={classes.messageNotificationSide}>
                                        <UserAvatar color={message.variant} name={message.name} />
                                        <Typography size="sm" color="text" colorBrightness="secondary" weight>{message.time}</Typography>
                                    </div>
                                    <div className={classNames(classes.messageNotificationSide, classes.messageNotificationBodySide)} >
                                        <Typography weight="medium" gutterBottom size colorBrightness color>{message.name}</Typography>
                                        <Typography color="text" colorBrightness="secondary" weight size>{message.message}</Typography>
                                    </div>
                                </MenuItem>
                            ))}
                            <Fab variant="extended" color="primary" aria-label="Add" className={classes.sendMessageButton} >
                                Send New Message <SendIcon className={classes.sendButtonIcon} />
                            </Fab>
                        </Menu>
                        <Menu id="notifications-menu" open={Boolean(notificationsMenu)} anchorEl={notificationsMenu} disableAutoFocusItem
                            onClose={() => setNotificationsMenu(null)} className={classes.headerMenu} >
                            {notifications.map(notification => (
                                <MenuItem key={notification.id} onClick={() => setNotificationsMenu(null)} className={classes.headerMenuItem} >
                                    <Notification {...notification} variant="inherit" />
                                </MenuItem>
                            ))}
                        </Menu>
                        <Menu id="profile-menu" open={Boolean(profileMenu)} anchorEl={profileMenu} disableAutoFocusItem
                            onClose={() => setProfileMenu(null)} className={classes.headerMenu} classes={{ paper: classes.profileMenu }} >
                            <div className={classes.profileMenuUser}>
                                <Typography variant="h4" weight="medium" size colorBrightness color>{userInfo.Name}</Typography>
                                <Typography className={classes.profileMenuLink} component="a" color="primary" href="https://flatlogic.com" weight size colorBrightness>
                                </Typography>
                            </div>
                            <MenuItem className={classNames(classes.profileMenuItem, classes.headerMenuItem)} >
                                <AccountIcon className={classes.profileMenuIcon} /> Profile
                            </MenuItem>
                            <MenuItem className={classNames(classes.profileMenuItem, classes.headerMenuItem)} >
                                <AccountIcon className={classes.profileMenuIcon} /> Tasks
                            </MenuItem>
                            <MenuItem className={classNames(classes.profileMenuItem, classes.headerMenuItem)} >
                                <AccountIcon className={classes.profileMenuIcon} /> Messages
                            </MenuItem>
                            <div className={classes.profileMenuUser}>
                                <Typography className={classes.profileMenuLink} color="primary" onClick={logout} weight size colorBrightness>
                                    Sign Out
                                </Typography>
                            </div>
                        </Menu>
                    </>}
                {(userInfo == null) || userInfo.Id == 0 ? <><GBALoginDialog /> &nbsp; <WalletLoginDialog /></> : null}
            </Toolbar>
        </AppBar >
    );
}

export default withRouter(Header);

