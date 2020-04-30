"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tinycolor2_1 = __importDefault(require("tinycolor2"));
const primary = "#536DFE";
const secondary = "#FF5C93";
const warning = "#FFC260";
const success = "#3CD4A0";
const info = "#9013FE";
const lightenRate = 7.5;
const darkenRate = 15;
exports.default = {
    palette: {
        primary: {
            main: primary,
            light: tinycolor2_1.default(primary)
                .lighten(lightenRate)
                .toHexString(),
            dark: tinycolor2_1.default(primary)
                .darken(darkenRate)
                .toHexString(),
        },
        secondary: {
            main: secondary,
            light: tinycolor2_1.default(secondary)
                .lighten(lightenRate)
                .toHexString(),
            dark: tinycolor2_1.default(secondary)
                .darken(darkenRate)
                .toHexString(),
            contrastText: "#FFFFFF",
        },
        warning: {
            main: warning,
            light: tinycolor2_1.default(warning)
                .lighten(lightenRate)
                .toHexString(),
            dark: tinycolor2_1.default(warning)
                .darken(darkenRate)
                .toHexString(),
        },
        success: {
            main: success,
            light: tinycolor2_1.default(success)
                .lighten(lightenRate)
                .toHexString(),
            dark: tinycolor2_1.default(success)
                .darken(darkenRate)
                .toHexString(),
        },
        info: {
            main: info,
            light: tinycolor2_1.default(info)
                .lighten(lightenRate)
                .toHexString(),
            dark: tinycolor2_1.default(info)
                .darken(darkenRate)
                .toHexString(),
        },
        text: {
            primary: "#4A4A4A",
            secondary: "#6E6E6E",
            hint: "#B9B9B9",
        },
        background: {
            default: "#F6F7FF",
            light: "#F3F5FF",
        },
    },
    customShadows: {
        widget: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
        widgetDark: "0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
        widgetWide: "0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    },
    overrides: {
        MuiBackdrop: {
            root: {
                backgroundColor: "#4A4A4A1A",
            },
        },
        MuiMenu: {
            paper: {
                boxShadow: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
            },
        },
        MuiSelect: {
            icon: {
                color: "#B9B9B9",
            },
        },
        MuiListItem: {
            root: {
                "&$selected": {
                    backgroundColor: "#F3F5FF !important",
                    "&:focus": {
                        backgroundColor: "#F3F5FF",
                    },
                },
            },
            button: {
                "&:hover, &:focus": {
                    backgroundColor: "#F3F5FF",
                },
            },
        },
        MuiTouchRipple: {
            child: {
                backgroundColor: "white",
            },
        },
        MuiTableRow: {
            root: {
                height: 56,
            },
        },
        MuiTableCell: {
            root: {
                borderBottom: "1px solid rgba(224, 224, 224, .5)",
            },
            head: {
                fontSize: "0.95rem",
            },
            body: {
                fontSize: "0.95rem",
            },
        },
    },
};
//# sourceMappingURL=default.js.map