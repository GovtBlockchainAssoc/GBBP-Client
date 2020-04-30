"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const default_1 = __importDefault(require("./default"));
const core_1 = require("@material-ui/core");
const overrides = {
    typography: {
        h1: {
            fontSize: "3rem",
        },
        h2: {
            fontSize: "2rem",
        },
        h3: {
            fontSize: "1.64rem",
        },
        h4: {
            fontSize: "1.5rem",
        },
        h5: {
            fontSize: "1.285rem",
        },
        h6: {
            fontSize: "1.142rem",
        },
    },
};
exports.default = {
    default: core_1.createMuiTheme(Object.assign(Object.assign({}, default_1.default), overrides)),
};
//# sourceMappingURL=index.js.map