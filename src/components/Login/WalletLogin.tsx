import React, { useState } from 'react';
import { setGlobal } from 'reactn';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { Button } from "../Wrappers/Wrappers";
const config = require('../../config');
const Web3 = require('web3');
import axios from "axios";
import Cookies from "universal-cookie";
let cookies = new Cookies();

export default function WalletLoginDialog() {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => { setOpen(true); };
    async function handleLogin() {
        if (!window['ethereum']) { alert("Metamask is either not installed or disabled"); return; }
        var web3 = new Web3(window['ethereum']);
        window['ethereum'].enable();
        var accounts = await web3.eth.getAccounts();
        if (accounts.length == 0) { alert("You need be logged in to Metamask and allow the connection!"); return; };
        axios.post(config.apiUrl + '/api/user/walletLogin', { "PoAAddr": accounts[0] }).then(response => {
            cookies.set('userInfo', response.data, { path: '/', maxAge: 10000000 });
            setGlobal({ userInfo: response.data });
            window.location.href = '/';
        }).catch(() => alert("I'm sorry, I don't recognize that Ethereum address."));
        setOpen(false);
    };
    const handleClose = () => { setOpen(false); };

    return (
        <div>
            <Button className variant={"outlined"} color={"secondary"} style={{ marginLeft: 24 }} onClick={handleClickOpen}>Wallet Log In</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Wallet Login</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        If you have logged in before (or been registered manually), the GBBP can query your Metamask wallet to
                        establish your identity from your Ethereum address.  Note that this does, of course, mean that you have to
                        have installed Metamask first (<a href='https://tinyurl.com/GBAMetamask'>instructions</a>).<br /><br /><hr /><br />
                        If you have not logged in before, you will need to send your name and Ethereum Address to&nbsp;
                        <a href="mailto:mark.waser@gmail.com">Mark Waser</a> in order to be registered.<br />
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