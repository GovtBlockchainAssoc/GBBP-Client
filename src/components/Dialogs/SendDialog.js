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
const core_1 = require("@material-ui/core");
const Wrappers_1 = require("../Wrappers/Wrappers");
const styles_1 = require("@material-ui/core/styles");
const useStyles = styles_1.makeStyles(theme => ({
    rightAlign: { textAlign: 'right', verticalAlign: 'top' },
}));
const config = require('../../config');
const Web3 = require('web3');
const universal_cookie_1 = __importDefault(require("universal-cookie"));
let cookies = new universal_cookie_1.default();
function sendDialog(props) {
    var acctInfo = props.tokenAcct.split("|");
    const [open, setOpen] = react_1.useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const classes = useStyles();
    function handleSend() {
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
            // blockchain code
            alert("Still implementing sexy new SEND TOKENS implementation.  Please check back Monday.");
            setOpen(false);
        });
    }
    ;
    const handleClose = () => { setOpen(false); };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Wrappers_1.Button, { className: true, variant: "outlined", color: "secondary", style: { marginLeft: 24 }, onClick: handleClickOpen }, "Send Tokens"),
        react_1.default.createElement(core_1.Dialog, { open: open, onClose: handleClose, "aria-labelledby": "form-dialog-title" },
            react_1.default.createElement(core_1.DialogTitle, { id: "form-dialog-title" }, "Send Tokens"),
            react_1.default.createElement(core_1.DialogContent, null,
                react_1.default.createElement(core_1.DialogContentText, null,
                    "Send ",
                    acctInfo[0],
                    " tokens from ",
                    acctInfo[1],
                    ": ...",
                    acctInfo[2].slice(-6),
                    " to"),
                react_1.default.createElement("table", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("td", { className: classes.rightAlign },
                            react_1.default.createElement("label", null, "Blockchain: ")),
                        react_1.default.createElement("td", null,
                            react_1.default.createElement("select", { id: "blockchain" },
                                react_1.default.createElement("option", { value: "GBA Hub" }, "GBA Hub"),
                                react_1.default.createElement("option", { value: "Hive" }, "Hive"),
                                react_1.default.createElement("option", { value: "Steem" }, "Steem"),
                                react_1.default.createElement("option", { value: "Sokol", disabled: true }, "Sokol"),
                                react_1.default.createElement("option", { value: "Ethereum", disabled: true }, "Ethereum"),
                                react_1.default.createElement("option", { value: "Telos", disabled: true }, "Telos")),
                            react_1.default.createElement("br", null),
                            react_1.default.createElement("br", null))),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("td", { className: classes.rightAlign },
                            react_1.default.createElement("label", null, "Address: ")),
                        react_1.default.createElement("td", null,
                            react_1.default.createElement("input", { type: "text", id: "addr" }),
                            react_1.default.createElement("br", null),
                            react_1.default.createElement("br", null))),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("td", { className: classes.rightAlign },
                            react_1.default.createElement("label", null, "Amount: ")),
                        react_1.default.createElement("td", null,
                            react_1.default.createElement("input", { type: "text", id: "amount" }),
                            react_1.default.createElement("br", null),
                            react_1.default.createElement("br", null))),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("td", { className: classes.rightAlign },
                            react_1.default.createElement("label", null, "Memo: ")),
                        react_1.default.createElement("td", null,
                            react_1.default.createElement("input", { type: "text", id: "memo" }))))),
            react_1.default.createElement(core_1.DialogActions, null,
                react_1.default.createElement(Wrappers_1.Button, { className: true, onClick: handleClose, color: "primary" }, "Cancel"),
                react_1.default.createElement(Wrappers_1.Button, { className: true, onClick: handleSend, color: "primary" }, "Send")))));
}
exports.default = sendDialog;
//# sourceMappingURL=SendDialog.js.map