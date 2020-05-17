import React, { useEffect, useState } from "react";
const reactn = require('reactn');
const useGlobal = reactn.useGlobal;
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import axios from "axios";
const config = require('../../config');
import PageTitle from "../../components/PageTitle";
import SendDialog from "../../components/Dialogs/SendDialog";

export default function Wallet() {
    const [userInfo, setUserInfo] = useGlobal("userInfo");
    const [table1Data, setTable1Data] = useState([]);
    const [table2Data, setTable2Data] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.post(config.apiUrl + '/api/user/wallet', { "MemberId": userInfo.Id }).then(res => {
            setTable1Data(res.data[0].table1); setTable2Data(res.data[0].table2); setLoaded(true);
        })
            .catch(err => { alert(err.message); setLoaded(true) })
    }, []);

    function shortenValue(value, meta, update) { return ('...' + value.slice(-6)) };
    function renderValue(value, meta, update) {
        var tokenAcct = meta.rowData[1] + "|" + meta.rowData[2] + "|" + meta.rowData[4];
        return (<SendDialog tokenAcct={tokenAcct} />)
    };


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
        return (<div> You need to complete the Token Tutorial through Step 4. Send Tokens to active your wallet.</div>);
    } else if (loaded) {
        return (<>
            <PageTitle title="Wallet" />
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <MUIDataTable title="Account Balances" data={table1Data} columns={columns} options={{ filterType: "checkbox", }} />
                </Grid>
                <Grid item xs={12}>
                    <MUIDataTable title="Transactions" data={table2Data} columns={columns2} options={{ filterType: "checkbox", }} />
                </Grid>
            </Grid>
        </>);
    } else { return (<div> Loading... </div>); }
};
