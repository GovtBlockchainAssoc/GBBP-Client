"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const reactn_1 = require("reactn");
const core_1 = require("@material-ui/core");
const Wrappers_1 = require("../Wrappers/Wrappers");
const config = require('../../config');
function GBALoginDialog() {
    const [open, setOpen] = react_1.useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const handleLogin = () => {
        reactn_1.setGlobal({ rememberMe: document.getElementById("myCheck").checked });
        setOpen(false);
        if (config.localMode)
            window.location.href = './?code=XYZZY';
        else
            window.location.href = config.loginServer + 'oauth/authorize?response_type=code&client_id=' + config.clientId + '&redirect_uri=' + config.redirectUrl;
    };
    const handleClose = () => { setOpen(false); };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Wrappers_1.Button, { className: true, variant: "outlined", color: "secondary", style: { marginLeft: 24 }, onClick: handleClickOpen }, "GBA Log In"),
        react_1.default.createElement(core_1.Dialog, { open: open, onClose: handleClose, "aria-labelledby": "form-dialog-title" },
            react_1.default.createElement(core_1.DialogTitle, { id: "form-dialog-title" }, "Login"),
            react_1.default.createElement(core_1.DialogContent, null,
                react_1.default.createElement(core_1.DialogContentText, null,
                    "This login is for GBA members only.  If you are not a GBA member (or if the GBA test server is down), please use the Wallet Login instead.",
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("hr", null),
                    react_1.default.createElement("br", null),
                    "The GBBP uses Single Sign-On (currently against the GBA *test* server). To log in, click ",
                    react_1.default.createElement("a", { href: 'http://www.gbaglobal.net', target: "_blank" }, "here"),
                    " to open a new tab/window to the GBA test server, Your user name & password are identical to those on the GBA web server. Once you log in, leave the window/tab open and return here. Clear the Remember Me checkbox if you do NOT wish to stay logged in and click the LOGIN button below. ",
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("hr", null),
                    react_1.default.createElement("br", null),
                    "For security reasons, the process requires eight messages between your browser, the GBA server and the GBBP server and will take roughly ten seconds.",
                    react_1.default.createElement("br", null)),
                react_1.default.createElement("input", { type: "checkbox", id: "myCheck", name: "myCheck", defaultChecked: true }),
                react_1.default.createElement("label", null, "Remember Me")),
            react_1.default.createElement(core_1.DialogActions, null,
                react_1.default.createElement(Wrappers_1.Button, { className: true, onClick: handleClose, color: "primary" }, "Cancel"),
                react_1.default.createElement(Wrappers_1.Button, { className: true, onClick: handleLogin, color: "primary" }, "Login")))));
}
exports.default = GBALoginDialog;
//# sourceMappingURL=GBALogin.js.map