"use strict";
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
const config = require('../../config');
const PageTitle_1 = __importDefault(require("../../components/PageTitle"));
function Home() {
    const [loaded, setLoaded] = react_1.useState(false);
    react_1.useEffect(() => { setLoaded(true); }, []);
    if (loaded) {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(PageTitle_1.default, { title: "Welcome to the Government Business Blockchain Platform (GBBP)" }),
            react_1.default.createElement(core_1.Grid, { container: true, spacing: 4 },
                react_1.default.createElement(core_1.Grid, { item: true, xs: 12 }))));
    }
    else {
        return (react_1.default.createElement("div", null, " Loading... "));
    }
}
exports.default = Home;
;
//# sourceMappingURL=Home.js.map