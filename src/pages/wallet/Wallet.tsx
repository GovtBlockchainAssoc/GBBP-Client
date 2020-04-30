import React, { useEffect, useState } from "react";
const reactn = require('reactn');
const useGlobal = reactn.useGlobal;
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import axios from "axios";
const config = require('../../config');
import PageTitle from "../../components/PageTitle";

export default function Wallet() {
    const [userInfo, setUserInfo] = useGlobal("userInfo");
    const [tableData, setTableData] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.post(config.apiUrl + '/api/user/wallet', { "MemberId": userInfo.Id }).then(res => { setTableData(res.data); setLoaded(true); })
            .catch(err => { alert(err.message); setLoaded(true) })
    }, []);

    if (userInfo.StatusId < 3) {
        return (<div> You need to complete the Token Tutorial through Step 4. Send Tokens to active your wallet.</div>);
    } else if (loaded) {
        return (<>
            <PageTitle title="Wallet" />
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <MUIDataTable title="Transactions" data={tableData} columns={["Token", "Amount", "Memo", "Name", "Chain", "Addr", "DTS"]}
                        options={{ filterType: "checkbox", }} />
                </Grid>
            </Grid>
        </>);
    } else { return (<div> Loading... </div>); }
};
