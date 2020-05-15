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
var reactn = require('reactn');
var useGlobal = reactn.useGlobal;
const core_1 = require("@material-ui/core");
const Wrappers_1 = require("../Wrappers/Wrappers");
function TextDialog({ anchor, title, text, label, label2, btnText, label3 = '', label4 = '' }) {
    const [val, setVal] = useGlobal('val');
    const [val2, setVal2] = useGlobal('val2');
    const [open, setOpen] = react_1.useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };
    const handleSubmit = () => {
        setVal(document.getElementById("myText").value);
        if ((label3 != '' || label4 != ''))
            setVal2(document.getElementById("myText2").value);
        setOpen(false);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Wrappers_1.Button, { className: true, variant: "outlined", color: "primary", style: { marginTop: 5 }, onClick: handleClickOpen }, anchor),
        react_1.default.createElement(core_1.Dialog, { open: open, onClose: handleClose, "aria-labelledby": "form-dialog-title" },
            react_1.default.createElement(core_1.DialogTitle, { id: "form-dialog-title" }, title),
            react_1.default.createElement(core_1.DialogContent, null,
                react_1.default.createElement(core_1.DialogContentText, null, text),
                react_1.default.createElement("br", null),
                react_1.default.createElement("br", null),
                react_1.default.createElement("label", null, label),
                " \u00A0",
                react_1.default.createElement("input", { type: "text", id: "myText", name: "myText" }),
                " \u00A0 ",
                react_1.default.createElement("label", null, label2),
                react_1.default.createElement("br", null),
                react_1.default.createElement("br", null),
                (label3 != '' || label4 != '') &&
                    react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("label", null, label3),
                        " \u00A0",
                        react_1.default.createElement("input", { type: "text", id: "myText2", name: "myText2" }),
                        " \u00A0 ",
                        react_1.default.createElement("label", null, label4),
                        react_1.default.createElement("br", null),
                        react_1.default.createElement("br", null))),
            react_1.default.createElement(core_1.DialogActions, null,
                react_1.default.createElement(Wrappers_1.Button, { className: true, onClick: handleClose, color: "primary" }, "Cancel"),
                react_1.default.createElement(Wrappers_1.Button, { className: true, onClick: handleSubmit, color: "primary" }, btnText)))));
}
exports.default = TextDialog;
//# sourceMappingURL=TextDialog.js.map