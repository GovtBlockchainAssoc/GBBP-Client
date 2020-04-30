"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
// styles
const styles_1 = __importDefault(require("./styles"));
// components
const PageTitle_1 = __importDefault(require("../../components/PageTitle"));
const Widget_1 = __importDefault(require("../../components/Widget"));
const Wrappers_1 = require("../../components/Wrappers");
function TypographyPage() {
    var classes = styles_1.default();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(PageTitle_1.default, { title: "Typography" }),
        react_1.default.createElement(core_1.Grid, { container: true, spacing: 4 },
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, md: 6 },
                react_1.default.createElement(Widget_1.default, { title: "Headings", disableWidgetMenu: true, noBodyPadding: true, bodyClass: true, header: true },
                    react_1.default.createElement("div", { className: classes.dashedBorder },
                        react_1.default.createElement(Wrappers_1.Typography, { variant: "h1", className: classes.text, weight: true, size: true, colorBrightness: true, color: true }, "h1. Heading"),
                        react_1.default.createElement(Wrappers_1.Typography, { variant: "h2", className: classes.text, weight: true, size: true, colorBrightness: true, color: true }, "h2. Heading"),
                        react_1.default.createElement(Wrappers_1.Typography, { variant: "h3", className: classes.text, weight: true, size: true, colorBrightness: true, color: true }, "h3. Heading"),
                        react_1.default.createElement(Wrappers_1.Typography, { variant: "h4", className: classes.text, weight: true, size: true, colorBrightness: true, color: true }, "h4. Heading"),
                        react_1.default.createElement(Wrappers_1.Typography, { variant: "h5", className: classes.text, weight: true, size: true, colorBrightness: true, color: true }, "h5. Heading"),
                        react_1.default.createElement(Wrappers_1.Typography, { variant: "h6", weight: true, size: true, colorBrightness: true, color: true }, "h6. Heading")))),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, md: 6 },
                react_1.default.createElement(Widget_1.default, { title: "Typography Colors", disableWidgetMenu: true, noBodyPadding: true, bodyClass: true, header: true },
                    react_1.default.createElement("div", { className: classes.dashedBorder },
                        react_1.default.createElement(Wrappers_1.Typography, { variant: "h1", color: "primary", className: classes.text, weight: true, size: true, colorBrightness: true }, "h1. Heading"),
                        react_1.default.createElement(Wrappers_1.Typography, { variant: "h2", color: "success", className: classes.text, weight: true, size: true, colorBrightness: true }, "h2. Heading"),
                        react_1.default.createElement(Wrappers_1.Typography, { variant: "h3", color: "secondary", className: classes.text, weight: true, size: true, colorBrightness: true }, "h3. Heading"),
                        react_1.default.createElement(Wrappers_1.Typography, { variant: "h4", color: "warning", className: classes.text, weight: true, size: true, colorBrightness: true }, "h4. Heading"),
                        react_1.default.createElement(Wrappers_1.Typography, { variant: "h5", color: "primary", colorBrightness: "light", className: classes.text, weight: true, size: true }, "h5. Heading"),
                        react_1.default.createElement(Wrappers_1.Typography, { variant: "h6", color: "info", weight: true, size: true, colorBrightness: true }, "h6. Heading")))),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, md: 6 },
                react_1.default.createElement(Widget_1.default, { title: "Basic Text Settings", disableWidgetMenu: true, noBodyPadding: true, bodyClass: true, header: true },
                    react_1.default.createElement("div", { className: classes.dashedBorder },
                        react_1.default.createElement(Wrappers_1.Typography, { className: classes.text, weight: true, size: true, colorBrightness: true, color: true }, "Basic text"),
                        react_1.default.createElement(Wrappers_1.Typography, { className: classes.text, weight: "light", size: true, colorBrightness: true, color: true }, "Basic light text"),
                        react_1.default.createElement(Wrappers_1.Typography, { className: classes.text, weight: "medium", size: true, colorBrightness: true, color: true }, "Basic medium text"),
                        react_1.default.createElement(Wrappers_1.Typography, { className: classes.text, weight: "bold", size: true, colorBrightness: true, color: true }, "Basic bold text"),
                        react_1.default.createElement(Wrappers_1.Typography, { className: classes.text, weight: true, size: true, colorBrightness: true, color: true }, "BASIC UPPERCASE TEXT"),
                        react_1.default.createElement(Wrappers_1.Typography, { className: classes.text, weight: true, size: true, colorBrightness: true, color: true }, "basic lowercase text"),
                        react_1.default.createElement(Wrappers_1.Typography, { className: classes.text, weight: true, size: true, colorBrightness: true, color: true }, "Basic Capitalized Text"),
                        react_1.default.createElement(Wrappers_1.Typography, { weight: true, size: true, colorBrightness: true, color: true },
                            react_1.default.createElement("i", null, "Basic Cursive Text"))))),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, md: 6 },
                react_1.default.createElement(Widget_1.default, { title: "Text Size", disableWidgetMenu: true, noBodyPadding: true, bodyClass: true, header: true },
                    react_1.default.createElement("div", { className: classes.dashedBorder },
                        react_1.default.createElement(Wrappers_1.Typography, { className: classes.text, size: "sm", weight: true, colorBrightness: true, color: true }, "Heading Typography SM Font Size"),
                        react_1.default.createElement(Wrappers_1.Typography, { className: classes.text, size: true, weight: true, colorBrightness: true, color: true }, "Heading Typography Regular Font Size"),
                        react_1.default.createElement(Wrappers_1.Typography, { className: classes.text, size: "md", weight: true, colorBrightness: true, color: true }, "Heading Typography MD Font Size"),
                        react_1.default.createElement(Wrappers_1.Typography, { className: classes.text, size: "xl", weight: true, colorBrightness: true, color: true }, "Heading Typography XL Font Size"),
                        react_1.default.createElement(Wrappers_1.Typography, { className: classes.text, size: "xxl", weight: true, colorBrightness: true, color: true }, "Heading Typography XXL Font Size")))))));
}
exports.default = TypographyPage;
//# sourceMappingURL=Typography.js.map