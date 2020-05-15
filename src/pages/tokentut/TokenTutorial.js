"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
var reactn = require('reactn');
var useGlobal = reactn.useGlobal;
const styles_1 = require("@material-ui/core/styles");
const core_1 = require("@material-ui/core");
const icons_1 = require("@material-ui/icons");
const axios_1 = __importDefault(require("axios"));
const universal_cookie_1 = __importDefault(require("universal-cookie"));
let cookies = new universal_cookie_1.default();
const config = require('../../config');
const TextDialog_1 = __importDefault(require("../../components/Dialogs/TextDialog"));
const Web3 = require('web3');
let web3;
const gbaToken = __importStar(require("../../../build/contracts/GBAToken.json"));
// const playAddress = '0xBbA9FA3f6A4f15982bb8fEd0f0041B50b7123225';
const useStyles = styles_1.makeStyles(theme => ({
    root: { width: '100%', },
    button: { marginTop: theme.spacing(1), marginRight: theme.spacing(1), },
    actionsContainer: { marginBottom: theme.spacing(2), },
    resetContainer: { padding: theme.spacing(3), },
    message: { marginTop: 20 },
    help: { color: '#0000FF', },
}));
const steps = ['Log In', 'Install MetaMask', 'Check Your Tokens', 'Send Tokens', 'Get a Steem and/or Hive Account', 'Send From Your Wallet',
    'Get Sokol Ether', 'Send to & from Sokol', 'Send to & from Steem/Hive', 'Send from Steem/Hive to Sokol & back', 'Get a Reward Token'];
function VerticalLinearStepper() {
    const classes = useStyles();
    const [val, setVal] = useGlobal('val');
    const [val2, setVal2] = useGlobal('val2');
    const [userInfo, setUserInfo] = useGlobal('userInfo');
    const [activeStep, updateActiveStep] = useGlobal('activeStep');
    const setActiveStep = (val) => { updateActiveStep(val); updateSubstep(val * 10); };
    const [substep, updateSubstep] = react_1.useState(0);
    const setSubstep = (val) => { if (val != substep)
        updateSubstep(val); };
    var PoAAddr = userInfo.PoAAddr;
    if (userInfo.Id == 0 && activeStep != 0)
        setActiveStep(0);
    let stepText = {};
    let substeps = {
        0: ["", react_1.default.createElement("div", null, " Please click on the red Log In button in the upper right corner and log in")],
        1: [react_1.default.createElement("div", null,
                "You are now on the leaderboard, ",
                react_1.default.createElement("b", null,
                    userInfo.Name ? userInfo.Name.substr(0, userInfo.Name.indexOf(" ")) : '',
                    ". "),
                "  Check it out ",
                react_1.default.createElement(react_router_dom_1.Link, { to: '/app/leaderboard' }, "here!")), ""],
        10: ["", react_1.default.createElement("div", null,
                "Follow ",
                react_1.default.createElement("a", { href: 'https://tinyurl.com/GBAMetamask' }, "these instructions"),
                " to install a MetaMask wallet in your browser")],
        11: ["", react_1.default.createElement("div", null, "You need to switch to the GBBP network (http://etht5zt7j-dns-reg1.eastus2.cloudapp.azure.com:8540) in Metamask!")],
        12: ["", react_1.default.createElement("div", null, "You need be logged in to Metamask and allow the connection!")],
        13: [react_1.default.createElement("div", null, "Okay! Your MetaMask installation is looking good."), ""],
        20: ["", react_1.default.createElement("div", null,
                "How many PLAY tokens do you have at address ",
                config.playToken.address,
                "?")],
        21: ["", react_1.default.createElement("div", null,
                val,
                " is not correct.  Try again (don't forget the decimal portion).")],
        22: [react_1.default.createElement("div", null, "Excellent! Send a PLAY token and your wallet screen will be activated"), ""],
        30: ["", react_1.default.createElement("div", null, "Use Metamask to send yourself a token")],
        31: ["", react_1.default.createElement("div", null, "I'm sorry.  I don't see a record of you sending a token.  It may take a minute or two to register though . . . . "), ""],
        32: [react_1.default.createElement("div", null, "Excellent! Your wallet screen will be activated when you click next."), ""],
        40: ["", react_1.default.createElement("div", null,
                "Sign up for the Hive blockchain (and, optionally, Steem). ",
                react_1.default.createElement("a", { target: '_blank', href: 'https://signup.hive.io/' }, "Hive"),
                " ",
                react_1.default.createElement("a", { target: '_blank', href: 'https://signup.steemit.com/' }, "Steem"))],
        41: ["", react_1.default.createElement("div", null, "What user name(s) did you select?"), ""],
        42: ["", react_1.default.createElement("div", null, "I'm sorry.  That Hive username does not appear to be valid."), ""],
        43: ["", react_1.default.createElement("div", null, "I'm sorry.  That Steem username does not appear to be valid."), ""],
        44: [react_1.default.createElement("div", null, "Excellent! If you blog, a number of GBA-related accounts will upvote you for money (coming May 15th)"), ""],
        50: ["", react_1.default.createElement("div", null, "Let's connect to Sokol and get some Ether")],
        51: ["", react_1.default.createElement("div", null, "I'm sorry.  I don't see any Sokol ether in your wallet."), ""],
        52: [react_1.default.createElement("div", null, "Excellent! You'll need that Sokol ether shortly."), ""],
        60: ["", react_1.default.createElement("div", null, "Use your wallet to send some Play tokens to Sokol ")],
        61: ["", react_1.default.createElement("div", null, "I'm sorry.  I don't see any Play tokens in your Sokol wallet."), ""],
        62: ["", react_1.default.createElement("div", null, "Great! Now use your wallet to send them back now.")],
        63: ["", react_1.default.createElement("div", null, "I'm sorry.  I don't see any transfers for you from Sokol."), ""],
        64: [react_1.default.createElement("div", null, "Fantastic!  Sending tokens across blockchains isn't so hard, is it?"), ""],
        70: ["", react_1.default.createElement("div", null, "Use your wallet to send some Play tokens to Hive and/or Steem. ")],
        71: ["", react_1.default.createElement("div", null, "I'm sorry.  I don't see any Play tokens in your Hive or Steem wallets."), ""],
        72: ["", react_1.default.createElement("div", null, "Excellent! Let's send them back now.")],
        73: ["", react_1.default.createElement("div", null, "I'm sorry.  I don't see any transfers for you from Hive or Steem."), ""],
        74: [react_1.default.createElement("div", null, "Great!  Even non-Ethereum blockchains can send and receive GBA tokens."), ""],
        80: ["", react_1.default.createElement("div", null, "It's time send some tokens from Hive and/or Steem to Sokol. ")],
        81: ["", react_1.default.createElement("div", null, "I'm sorry.  I don't see any Hive/Steem to Sokol transfers for you."), ""],
        82: ["", react_1.default.createElement("div", null, "Excellent! Let's send them back now.")],
        83: ["", react_1.default.createElement("div", null, "I'm sorry.  I don't see any Sokol to Hive/Steem transfers for you."), ""],
        84: [react_1.default.createElement("div", null, "Congratulations!  Click Next to receive a GBA reward token."), ""],
        90: [react_1.default.createElement("div", null, "You've completed the tutorial and been sent a GBA reward token."), ""]
    };
    let helpMsg = {
        40: [`Steem is a blockchain that pays you for blogging launched in 2016.  Hive is a fork of Steem after a hostile takeover by Justin Sun.
Hive is likely more hospitable and has doubled in value since the split thus making blogging on it worth twice as much.`],
    };
    const checkWeb3 = (cb) => __awaiter(this, void 0, void 0, function* () {
        web3 = new Web3(window['ethereum']);
        window['ethereum'].enable();
        var id = yield web3.eth.net.getId();
        if (id != 103098097)
            setSubstep(11);
        else {
            var accounts = yield web3.eth.getAccounts();
            if (accounts.length == 0)
                setSubstep(12);
            else {
                PoAAddr = accounts[0];
                cb();
            }
        }
        ;
    });
    function getStepContent(retry = false) {
        if (substep < activeStep * 10)
            setSubstep(activeStep * 10);
        switch (activeStep) {
            case 0:
                if (userInfo.Id > 0)
                    setSubstep(1);
                else
                    setSubstep(0);
                break;
            case 1:
                if (!window['ethereum']) {
                    return;
                }
                checkWeb3(() => { setSubstep(13); });
                break;
            case 2:
                if (val == undefined || val == '')
                    return;
                checkWeb3(() => {
                    const contr = new web3.eth.Contract(gbaToken.abi, config.playToken.address, { data: gbaToken.bytecode });
                    contr.methods.balanceOf(PoAAddr).call((err, bal) => {
                        if (err)
                            alert("balanceOf ERROR: " + err);
                        else if (Math.round(val * 100) != bal) {
                            setSubstep(21);
                        }
                        else {
                            setSubstep(22);
                            setVal('');
                        }
                    });
                });
                break;
            case 3:
                axios_1.default.post(config.apiUrl + '/api/user/wallet', { "MemberId": userInfo.Id }).then(res => {
                    if (res.data.length > 0)
                        setSubstep(32);
                    else if (retry)
                        setSubstep(31);
                });
                break;
            case 4:
                if (substep == 40 && !retry)
                    return;
                if (retry) {
                    setSubstep(41);
                    return;
                }
                if (val == undefined || val == '')
                    return;
                alert('https://hive.blog/@' + val);
                if (substep < 43)
                    axios_1.default.get('https://steemit.com/@' + val).then(() => { alert("hive good"); setSubstep(43); })
                        .catch((error) => { alert("hive bad"); alert(error); setSubstep(42); });
                if (substep < 43)
                    return;
                if (val2 == undefined || val2 == '') {
                    setSubstep(44);
                    return;
                }
                axios_1.default.get('https://steemit.com/@' + val2).then(() => { alert("steem good"); setSubstep(44); })
                    .catch(function (error) { alert("steem bad"); });
                break;
        }
    }
    const handleNext = () => {
        if (!activeStep) {
            setActiveStep(1);
            return;
        }
        ;
        if (activeStep > userInfo.StatusId)
            axios_1.default.post(config.apiUrl + '/api/user/tokenTut', { "GBAId": userInfo.GBAId, "step": activeStep, "PoAAddr": PoAAddr }).then((response) => {
                // alert("updated " + JSON.stringify(response.data));
                cookies.set('userInfo', response.data, { path: '/', maxAge: 10000000 });
                setUserInfo(response.data);
            }, (error) => { alert("Token tutorial post ERROR: " + error); });
        setActiveStep(activeStep + 1);
    };
    const handleBack = () => { setActiveStep(activeStep - 1); };
    const handleRetry = () => { var oldStep = activeStep; getStepContent(true); if (activeStep > oldStep)
        updateSubstep(activeStep * 10); };
    const handleReset = () => { setActiveStep(0); };
    const help = () => { alert(helpMsg[substep]); };
    // alert(substep);
    return (react_1.default.createElement("div", { className: classes.root },
        getStepContent(),
        react_1.default.createElement(core_1.Stepper, { activeStep: activeStep, orientation: "vertical" }, steps.map((label, index) => (react_1.default.createElement(core_1.Step, { key: label },
            react_1.default.createElement(core_1.StepLabel, null, label),
            react_1.default.createElement(core_1.StepContent, null,
                react_1.default.createElement("table", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("td", null, activeStep === index ? react_1.default.createElement(core_1.Typography, { className: classes.message },
                            substeps[substep][0],
                            substeps[substep][1],
                            " \u00A0 ") : null),
                        react_1.default.createElement("td", null, ([40].includes(substep)) && react_1.default.createElement(icons_1.Help, { className: classes.help, onClick: help })))),
                react_1.default.createElement("div", { className: classes.actionsContainer },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement(core_1.Button, { disabled: activeStep === 0, onClick: handleBack, className: classes.button }, "Back"),
                        react_1.default.createElement(core_1.Button, { disabled: substeps[substep][0] == "", variant: "contained", color: "primary", onClick: handleNext, className: classes.button }, activeStep === steps.length - 1 ? 'Finish' : 'Next'),
                        substeps[substep][0] == "" && !([20, 21, 41, 42, 43].includes(substep)) &&
                            react_1.default.createElement(core_1.Button, { variant: "contained", color: "primary", onClick: handleRetry, className: classes.button }, " Ready "),
                        [20, 21].includes(substep) &&
                            react_1.default.createElement(TextDialog_1.default, { anchor: 'Answer', title: 'PLAY Tokens', text: "Don't forget the decimal part!", label: true, label2: 'tokens', btnText: 'Submit' }),
                        [41, 42].includes(substep) &&
                            react_1.default.createElement(TextDialog_1.default, { anchor: 'Answer', title: 'Steem/Hive Account Name(s)', text: 'Please enter at least one.', label: '  \u00A0 \u00A0Hive:', label2: '(required)', btnText: 'Submit', label3: 'Steem:', label4: '(optional)' })))))))),
        activeStep === steps.length && (react_1.default.createElement(core_1.Paper, { square: true, elevation: 0, className: classes.resetContainer },
            react_1.default.createElement(core_1.Typography, null, "All steps completed - you're finished"),
            react_1.default.createElement(core_1.Button, { onClick: handleReset, className: classes.button }, "Reset")))));
}
exports.default = VerticalLinearStepper;
//# sourceMappingURL=TokenTutorial.js.map