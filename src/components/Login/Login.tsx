import React, { useState } from 'react';
import { setGlobal } from 'reactn';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { Button } from "../Wrappers/Wrappers";
const config = require('../../config');

export default function LoginDialog() {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const handleLogin = () => {
        setGlobal({ rememberMe: (document.getElementById("myCheck") as HTMLInputElement).checked });
        setOpen(false);
        if (config.localMode) window.location.href = './?code=XYZZY';
        else window.location.href = config.loginServer + 'oauth/authorize?response_type=code&client_id=' + config.clientId + '&redirect_uri=' + config.redirectUrl;
    };
    const handleClose = () => { setOpen(false); };

    return (
        <div>
            <Button className variant={"outlined"} color={"secondary"} style={{ marginLeft: 24 }} onClick={handleClickOpen}>Log In</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        The GBBP uses Single Sign-On (currently against the GBA *test* server).
                        To log in, click <a href='http://www.gbaglobal.net' target="_blank">here</a> to
                        open a new tab/window to the GBA test server, 
                        Your user name & password are identical to those on the GBA web server.
                        Once you log in, leave the window/tab open and return here.
                        Clear the Remember Me checkbox if you do NOT wish to stay logged in and
                        click the LOGIN button below. <br /><br /><hr /><br />
                        For security reasons, the process requires eight messages between your browser,
                        the GBA server and the GBBP server and will take roughly ten seconds.<br />
                    </DialogContentText>
                    <input type="checkbox" id="myCheck" name="myCheck" defaultChecked={true} />
                    <label>Remember Me</label>
                </DialogContent>
                <DialogActions>
                    <Button className onClick={handleClose} color="primary">Cancel</Button>
                    <Button className onClick={handleLogin} color="primary">Login</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}