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
const reactn_1 = require("reactn");
const core_1 = require("@material-ui/core");
const Wrappers_1 = require("../Wrappers/Wrappers");
const config = require('../../config');
const Web3 = require('web3');
const axios_1 = __importDefault(require("axios"));
const universal_cookie_1 = __importDefault(require("universal-cookie"));
let cookies = new universal_cookie_1.default();
function WalletLoginDialog() {
    const [open, setOpen] = react_1.useState(false);
    const handleClickOpen = () => { setOpen(true); };
    function handleLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!window['ethereum']) {
                alert("Metamask is either not installed or disabled");
                return;
            }
            var web3 = new Web3(window['ethereum']);
            window['ethereum'].enable();
            var accounts = yield web3.eth.getAccounts();
            if (accounts.length == 0) {
                alert("You need be logged in to Metamask and allow the connection!");
                return;
            }
            ;
            axios_1.default.post(config.apiUrl + '/api/user/walletLogin', { "PoAAddr": accounts[0] }).then(response => {
                cookies.set('userInfo', response.data, { path: '/', maxAge: 10000000 });
                reactn_1.setGlobal({ userInfo: response.data });
                window.location.href = '/';
            }).catch(() => alert("I'm sorry, I don't recognize that Ethereum address."));
            setOpen(false);
        });
    }
    ;
    const handleClose = () => { setOpen(false); };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Wrappers_1.Button, { className: true, variant: "outlined", color: "secondary", style: { marginLeft: 24 }, onClick: handleClickOpen }, "Wallet Log In"),
        react_1.default.createElement(core_1.Dialog, { open: open, onClose: handleClose, "aria-labelledby": "form-dialog-title" },
            react_1.default.createElement(core_1.DialogTitle, { id: "form-dialog-title" }, "Wallet Login"),
            react_1.default.createElement(core_1.DialogContent, null,
                react_1.default.createElement(core_1.DialogContentText, null,
                    "If you have logged in before (or been registered manually), the GBBP can query your Metamask wallet to establish your identity from your Ethereum address.  Note that this does, of course, mean that you have to have installed Metamask first (",
                    react_1.default.createElement("a", { href: 'https://tinyurl.com/GBAMetamask' }, "instructions"),
                    ").",
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("hr", null),
                    react_1.default.createElement("br", null),
                    "If you have not logged in before, you will need to send your name and Ethereum Address to\u00A0",
                    react_1.default.createElement("a", { href: "mailto:mark.waser@gmail.com" }, "Mark Waser"),
                    " in order to be registered.",
                    react_1.default.createElement("br", null)),
                react_1.default.createElement("input", { type: "checkbox", id: "myCheck", name: "myCheck", defaultChecked: true }),
                react_1.default.createElement("label", null, "Remember Me")),
            react_1.default.createElement(core_1.DialogActions, null,
                react_1.default.createElement(Wrappers_1.Button, { className: true, onClick: handleClose, color: "primary" }, "Cancel"),
                react_1.default.createElement(Wrappers_1.Button, { className: true, onClick: handleLogin, color: "primary" }, "Login")))));
}
exports.default = WalletLoginDialog;
//# sourceMappingURL=WalletLogin.js.map