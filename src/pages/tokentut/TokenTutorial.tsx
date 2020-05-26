import React, { useState } from 'react';
import { Link } from "react-router-dom";
var reactn = require('reactn');
var useGlobal = reactn.useGlobal;
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, StepContent, Button, Paper, Typography, Box } from '@material-ui/core';
import { Help as HelpIcon } from "@material-ui/icons";
import axios from "axios";
import Cookies from "universal-cookie";
let cookies = new Cookies();
const config = require('../../config');
import TextDialog from "../../components/Dialogs/TextDialog";

const Web3 = require('web3');
let web3;
import * as  gbaToken from '../../../build/contracts/GBAToken.json';
// const playAddress = '0xBbA9FA3f6A4f15982bb8fEd0f0041B50b7123225';

const useStyles = makeStyles(theme => ({
    root: { width: '100%', },
    button: { marginTop: theme.spacing(1), marginRight: theme.spacing(1), },
    actionsContainer: { marginBottom: theme.spacing(2), },
    resetContainer: { padding: theme.spacing(3), },
    message: { marginTop: 20 },
    help: { color: '#0000FF', },
}));

const steps = ['Log In', 'Install MetaMask', 'Check Your Tokens', 'Send Tokens', 'Get a Hive Account', 'Send to & from Hive',
    'Get Sokol Ether', 'Send to & from Sokol', 'Send from Hive to Sokol & back', 'Get a Reward Token'];

export default function VerticalLinearStepper() {
    const classes = useStyles();
    const [val, setVal] = useGlobal('val');
    const [val2, setVal2] = useGlobal('val2');
    const [userInfo, setUserInfo] = useGlobal('userInfo');
    const [activeStep, updateActiveStep] = useGlobal('activeStep');
    const setActiveStep = (val) => { updateActiveStep(val); updateSubstep(val * 10); }
    const [substep, updateSubstep] = useState(0);
    const setSubstep = (val) => { if (val != substep) updateSubstep(val); }
    var Address = userInfo.PoAAddr;
    if (userInfo.Id == 0 && activeStep != 0) setActiveStep(0);

    let stepText = {
    }

    let substeps = {
        0: ["", < div > Please click on the red Log In button in the upper right corner and log in</div>],
        1: [<div>You are now on the leaderboard, <b>{userInfo.Name ? userInfo.Name.substr(0, userInfo.Name.indexOf(" ")) : ''}. </b>  Check it out <Link to='/app/leaderboard'>here!</Link></div>, ""],
        10: ["", <div>Follow <a href='https://tinyurl.com/GBAMetamask'>these instructions</a> to install a MetaMask wallet in your browser</div>],
        11: ["", <div>You need to switch to the GBBP network (http://etht5zt7j-dns-reg1.eastus2.cloudapp.azure.com:8540) in Metamask!</div>],
        12: ["", <div>You need be logged in to Metamask and allow the connection!</div>],
        13: [<div>Okay! Your MetaMask installation is looking good.</div>, ""],
        20: ["", <div>How many PLAY tokens do you have at address {config.token['PLAY'].address}?</div>],
        21: ["", <div>{val} is not correct.  Try again (don't forget the decimal portion).</div>],
        22: [<div>Excellent! Send a PLAY token and your wallet screen will be activated</div>, ""],
        30: ["", <div>Use Metamask to send yourself a token</div>],
        31: ["", <div>I'm sorry.  I don't see a record of you sending a token.  It may take a minute or two to register though . . . . </div>, ""],
        32: [<div>Excellent! Your wallet screen will be activated when you click next.</div>, ""],
        40: ["", <div>Sign up for the Hive blockchain (and, optionally, Steem). <a target='_blank' href='https://signup.hive.io/'>Hive</a> <a target='_blank' href='https://signup.steemit.com/'>Steem</a></div>],
        41: ["", <div>What user name(s) did you register?  In the future, this could also be done from Your Wallet.</div>, ""],
        42: ["", <div>I'm sorry.  That Hive username does not appear to be valid.</div>, ""],
        43: ["", <div>I'm sorry.  That Steem username does not appear to be valid.</div>, ""],
        44: [<div>Excellent! If you blog, a number of GBA-related accounts will upvote you for money (coming May 15th)</div>, ""],
        50: ["", <div>Use your wallet to send some Play tokens to Hive and/or Steem. </div>],
        51: ["", <div>I'm sorry.  I don't see any Play tokens in your Hive or Steem wallets.</div>, ""],
        52: ["", <div>Excellent! Let's send them back now.</div>],
        53: ["", <div>I'm sorry.  I don't see any transfers for you from Hive or Steem.</div>, ""],
        54: [<div>Great!  Even non-Ethereum blockchains can send and receive GBA tokens.</div>, ""],
        60: ["", <div>Let's connect to Sokol and get some Ether</div>],
        61: ["", <div>I'm sorry.  I don't see any Sokol ether in your wallet.</div>, ""],
        62: [<div>Excellent! You'll need that Sokol ether shortly.</div>, ""],
        70: ["", <div>Use your wallet to send some Play tokens to Sokol </div>],
        71: ["", <div>I'm sorry.  I don't see any Play tokens in your Sokol wallet.</div>, ""],
        72: ["", <div>Great! Now use your wallet to send them back now.</div>],
        73: ["", <div>I'm sorry.  I don't see any transfers for you from Sokol.</div>, ""],
        74: [<div>Fantastic!  Sending tokens across blockchains isn't so hard, is it?</div>, ""],
        80: ["", <div>It's time send some tokens from Hive and/or Steem to Sokol. </div>],
        81: ["", <div>I'm sorry.  I don't see any Hive/Steem to Sokol transfers for you.</div>, ""],
        82: ["", <div>Excellent! Let's send them back now.</div>],
        83: ["", <div>I'm sorry.  I don't see any Sokol to Hive/Steem transfers for you.</div>, ""],
        84: [<div>Congratulations!  Click Next to receive a GBA reward token.</div>, ""],
        90: [<div>You've completed the tutorial and been sent a GBA reward token.</div>, ""]
    }

    let helpMsg = {
        40: [`Steem is a blockchain that pays you for blogging launched in 2016.  Hive is a fork of Steem after a hostile takeover by Justin Sun.
Hive is likely more hospitable and has doubled in value since the split thus making blogging on it worth twice as much.`],
    }

    const checkWeb3 = async (cb) => {
        web3 = new Web3(window['ethereum']);
        window['ethereum'].enable();
        var id = await web3.eth.net.getId();
        if (id != 103098097) setSubstep(11);
        else {
            var accounts = await web3.eth.getAccounts();
            if (accounts.length == 0) setSubstep(12);
            else { Address = accounts[0]; cb(); }
        };
    }

    function getStepContent(retry = false) {
        if (substep < activeStep * 10) setSubstep(activeStep * 10);
        switch (activeStep) {
            case 0:
                if (userInfo.Id > 0) setSubstep(1); else setSubstep(0);
                break;
            case 1:
                if (!window['ethereum']) { return; }
                checkWeb3(() => { setSubstep(13); });
                break;
            case 2:
                if (val == undefined || val == '') return;
                checkWeb3(() => {
                    const contr = new web3.eth.Contract(gbaToken.abi, config.token['PLAY'].address, { data: gbaToken.bytecode })
                    contr.methods.balanceOf(Address).call((err, bal) => {
                        if (err) alert("balanceOf ERROR: " + err);
                        else if (Math.round(val * 100) != bal) { setSubstep(21); } else { setSubstep(22); setVal(''); }
                    });
                });
                break;
            case 3:
                axios.post(config.apiUrl + '/api/user/wallet', { "MemberId": userInfo.Id }).then(res => {
                    if (res.data.length > 0) setSubstep(32); else if (retry) setSubstep(31);
                });
                break;
            case 4:
                if (substep == 40 && !retry) return;
                if (retry) { setSubstep(41); return; }
                if (val == undefined || val == '') return;
                if (substep < 43) {
                    var hive = require("@hiveio/hive-js");
                    hive.api.setOptions({ url: config.hiveUrl });
                    hive.config.set('alternative_api_endpoints', config.hiveAlts);
                    hive.api.getAccounts([val], function (err, result) {
                        if (result.length) {
                            axios.post(config.apiUrl + '/api/user/update', {
                                "GBAId": userInfo.GBAId, "step": activeStep, "Address": val, "BChain": 2
                            })
                            setSubstep(43);
                        } else setSubstep(42);
                    });
                }
                if (substep < 43) return;
                if (val2 == undefined || val2 == '') { setSubstep(44); return; }
                var steem = require("steem");
                steem.api.setOptions({ url: config.steemUrl });
                steem.api.getAccounts([val2], function (err, result) {
                    axios.post(config.apiUrl + '/api/user/update', {
                        "GBAId": userInfo.GBAId, "step": activeStep, "Address": val2, "BChain": 3
                    })
                    if (result.length) {
                        setSubstep(44);
                    }
                });
                break;
        }
    }

    const handleNext = () => {
        if (!activeStep) { setActiveStep(1); return; };
        if (activeStep > userInfo.StatusId)
            axios.post(config.apiUrl + '/api/user/tokenTut', {
                "GBAId": userInfo.GBAId, "step": activeStep, "Address": Address, "BChain": 1
            }).then((response) => {
                // alert("updated " + JSON.stringify(response.data));
                cookies.set('userInfo', response.data, { path: '/', maxAge: 10000000 })
                setUserInfo(response.data);
            }, (error) => { alert("Token tutorial post ERROR: " + error); });
        setActiveStep(activeStep + 1);
    };
    const handleBack = () => { setActiveStep(activeStep - 1); };
    const handleRetry = () => { var oldStep = activeStep; getStepContent(true); if (activeStep > oldStep) updateSubstep(activeStep * 10); };
    const handleReset = () => { setActiveStep(0); };
    const help = () => { alert(helpMsg[substep]); }
    // alert(substep);

    return (
        <div className={classes.root}>
            {getStepContent()}
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <table><tr><td>{activeStep === index ? <Typography className={classes.message}>{substeps[substep][0]}{substeps[substep][1]} &nbsp; </Typography> : null}</td>
                                <td>{([40].includes(substep)) && <HelpIcon className={classes.help} onClick={help} />}</td></tr></table>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button} >Back</Button>
                                    <Button disabled={substeps[substep][0] == ""} variant="contained" color="primary" onClick={handleNext} className={classes.button} >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                    {substeps[substep][0] == "" && !([20, 21, 41, 42, 43].includes(substep)) &&
                                        <Button variant="contained" color="primary" onClick={handleRetry} className={classes.button} > Ready </Button>}
                                    {[20, 21].includes(substep) &&
                                        <TextDialog anchor='Answer' title='PLAY Tokens' text="Don't forget the decimal part!" label label2='tokens' btnText='Submit' />}
                                    {[41, 42].includes(substep) &&
                                        <TextDialog anchor='Answer' title='Steem/Hive Account Name(s)' text='Please enter at least one.' label='  &nbsp; &nbsp;Hive:' label2='(required)' btnText='Submit' label3='Steem:' label4='(optional)' />}
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} className={classes.button}>Reset</Button>
                </Paper>
            )}
        </div>
    );
}
