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
const mui_datatables_1 = __importDefault(require("mui-datatables"));
const axios_1 = __importDefault(require("axios"));
const config = require('../../config');
const PageTitle_1 = __importDefault(require("../../components/PageTitle"));
function GBADir() {
    const [tableData, setTableData] = react_1.useState([]);
    const [loaded, setLoaded] = react_1.useState(false);
    react_1.useEffect(() => {
        axios_1.default.get(config.apiUrl + '/api/user/gbaDirectory').then(res => { setTableData(res.data); setLoaded(true); })
            .catch(err => { alert(err.message); setLoaded(true); });
    }, []);
    if (loaded) {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(PageTitle_1.default, { title: "GBA Directory" }),
            react_1.default.createElement(core_1.Grid, { container: true, spacing: 4 },
                react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                    react_1.default.createElement(mui_datatables_1.default, { title: "Member List", data: tableData, columns: ["Name", "Email", "Registered", "Status"], options: { filterType: "checkbox", } })))));
    }
    else {
        return (react_1.default.createElement("div", null, " Loading... "));
    }
}
exports.default = GBADir;
;
//# sourceMappingURL=GBADirectory.js.map