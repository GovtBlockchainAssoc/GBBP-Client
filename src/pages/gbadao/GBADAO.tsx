import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
const config = require('../../config');
import PageTitle from "../../components/PageTitle";

export default function GBADAO() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => { setLoaded(true); }, []);

    if (loaded) {
        return (<>
            <PageTitle title="Welcome to the Government Blockchain Association DAO" />
            <Grid container spacing={4}>
                <Grid item xs={12}>
                </Grid>
            </Grid>
        </>);
    } else { return (<div> Loading... </div>); }
};
