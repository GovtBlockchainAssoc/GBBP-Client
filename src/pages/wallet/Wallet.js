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
const reactn = require('reactn');
const useGlobal = reactn.useGlobal;
const core_1 = require("@material-ui/core");
const mui_datatables_1 = __importDefault(require("mui-datatables"));
const axios_1 = __importDefault(require("axios"));
const config = require('../../config');
const PageTitle_1 = __importDefault(require("../../components/PageTitle"));
const SendDialog_1 = __importDefault(require("../../components/Dialogs/SendDialog"));
function Wallet() {
    const [userInfo, setUserInfo] = useGlobal("userInfo");
    const [table1Data, setTable1Data] = react_1.useState([]);
    const [table2Data, setTable2Data] = react_1.useState([]);
    const [loaded, setLoaded] = react_1.useState(false);
    react_1.useEffect(() => {
        axios_1.default.post(config.apiUrl + '/api/user/wallet', { "MemberId": userInfo.Id }).then(res => {
            setTable1Data(res.data[0].table1);
            setTable2Data(res.data[0].table2);
            setLoaded(true);
        })
            .catch(err => { alert(err.message); setLoaded(true); });
    }, []);
    function shortenValue(value, meta, update) { return ('...' + value.slice(-6)); }
    ;
    function renderValue(value, meta, update) {
        var tokenAcct = meta.rowData[1] + "|" + meta.rowData[2] + "|" + meta.rowData[4];
        return (react_1.default.createElement(SendDialog_1.default, { tokenAcct: tokenAcct }));
    }
    ;
    var columns = [
        { name: 'options', options: { display: false, viewColumns: false, filter: false, sort: false, searchable: false, print: false, download: false } },
        { label: 'Token', name: 'Token' },
        { label: 'Chain', name: 'Chain' },
        { label: 'Balance', name: 'Balance' },
        { label: 'Address', name: 'Addr', options: { customBodyRender: shortenValue } },
        { label: '', name: '', options: { customBodyRender: renderValue } }
    ];
    var columns2 = [
        { name: 'options', options: { display: false, viewColumns: false, filter: false, sort: false, searchable: false, print: false, download: false } },
        { label: 'Token', name: 'Token' },
        { label: 'My Chain', name: 'My_Chain' },
        { label: 'My Addr', name: 'My_Addr', options: { customBodyRender: shortenValue } },
        { label: 'Amount', name: 'Amount' },
        { label: 'Balance', name: 'Balance' },
        { label: 'Memo', name: 'Memo' },
        { label: 'Their Name', name: 'Their_Name' },
        { label: 'Their Chain', name: 'Their_Chain' },
        { label: 'Their Addr', name: 'Their_Addr', options: { customBodyRender: shortenValue } },
        { label: 'Completed', name: 'Date_Time' }
    ];
    if (userInfo.StatusId < 3) {
        return (react_1.default.createElement("div", null, " You need to complete the Token Tutorial through Step 4. Send Tokens to active your wallet."));
    }
    else if (loaded) {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(PageTitle_1.default, { title: "Wallet" }),
            react_1.default.createElement(core_1.Grid, { container: true, spacing: 4 },
                react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                    react_1.default.createElement(mui_datatables_1.default, { title: "Account Balances", data: table1Data, columns: columns, options: { filterType: "checkbox", } })),
                react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                    react_1.default.createElement(mui_datatables_1.default, { title: "Transactions", data: table2Data, columns: columns2, options: { filterType: "checkbox", } })))));
    }
    else {
        return (react_1.default.createElement("div", null, " Loading... "));
    }
}
exports.default = Wallet;
;
//# sourceMappingURL=Wallet.js.map