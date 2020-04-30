import React, { useState } from "react";
import { Collapse, Divider, List, ListItem, ListItemIcon, ListItemText, Typography, } from "@material-ui/core";
import { Inbox as InboxIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";
import classnames from "classnames";
import useStyles from "./styles";
import Dot from "../Dot";

interface CLink {
    label: string;
    link: string;
    icon: any;
}

function doChildren(children: CLink[], isSidebarOpened, classes): JSX.Element[] {
    let obj: JSX.Element[] = [];;
    try {
        children.map(childrenLink => {
            obj.push(<SidebarLink
                key={childrenLink && childrenLink.link}
                location={location}
                isSidebarOpened={isSidebarOpened}
                //                 classes={classes}
                nested
                type
                icon={childrenLink.icon}
                children
                {...childrenLink}
            />)
        })
    } catch (e) {
        obj.push(<h2>{JSON.stringify(e)}</h2>)
    }
    return (obj);
}

export default function SidebarLink({ label, link, type, icon, children, location, isSidebarOpened, nested }) {
    var classes = useStyles();

    // local
    var [isOpen, setIsOpen] = useState(false);
    var isLinkActive = link && (location.pathname === link || location.pathname.indexOf(link) !== -1);

    if (type === "title")
        return (
            <Typography className={classnames(classes.linkText, classes.sectionTitle, { [classes.linkTextHidden]: !isSidebarOpened, })} >
                {label}
            </Typography>
        );

    if (type === "divider") return <Divider className={classes.divider} />;

    return (
        <>
            <ListItem button component={link && Link} to={link} onClick={(typeof (children) == "object") && toggleCollapse } className = { classes.link }
                classes = {{ root: classnames(classes.linkRoot, { [classes.linkActive]: isLinkActive && !nested, [classes.linkNested]: nested, }), }}
                disableRipple
            >
                <ListItemIcon className={classnames(classes.linkIcon, { [classes.linkIconActive]: isLinkActive, })} >
                    {icon ? icon : <Dot color={isLinkActive && "primary"} size />}
                </ListItemIcon>
                <ListItemText
                    classes={{
                        primary: classnames(classes.linkText, {
                            [classes.linkTextActive]: isLinkActive,
                            [classes.linkTextHidden]: !isSidebarOpened,
                        }),
                    }}
                    primary={label}
                />
            </ListItem >
            { (typeof (children) == "object") && (
                <Collapse in={isOpen && isSidebarOpened} timeout="auto" unmountOnExit className={classes.nestedList} >
                    <List component="div" disablePadding>
                        {doChildren(children, isSidebarOpened, classes)}
                    </List>
                </Collapse>
            )}
        </>
    )

    function toggleCollapse(e) {
        if (isSidebarOpened) {
            e.preventDefault();
            setIsOpen(!isOpen);
        }
    }
}
