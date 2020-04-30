import React, { useState } from 'react';
var reactn = require('reactn');
var useGlobal = reactn.useGlobal;
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { Button } from "../Wrappers/Wrappers";

export default function TextDialog({ anchor, title, text, label, label2, subText  }) {
    const [val, setVal] = useGlobal('val');
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };
    const handleSubmit = () => { setVal((document.getElementById("myText") as HTMLInputElement).value); setOpen(false); };

    return (
        <>
            <Button className variant={"outlined"} color={"primary"} style={{ marginTop: 5 }} onClick={handleClickOpen}>{anchor}</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{text}</DialogContentText>
                    <label>{label}</label> &nbsp;<input type="text" id="myText" name="myText" /> &nbsp; <label>{label2}</label>
                </DialogContent>
                <DialogActions>
                    <Button className onClick={handleClose} color="primary">Cancel</Button>
                    <Button className onClick={handleSubmit} color="primary">{subText}</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}