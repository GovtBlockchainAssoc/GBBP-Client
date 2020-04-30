import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
const config = require('../../config');
import PageTitle from "../../components/PageTitle";

export default function Home() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => { setLoaded(true); }, []);

    if (loaded) {
        return (<>
            <PageTitle title="Welcome to the Government Business Blockchain Platform (GBBP)" />
            <Grid container spacing={4}>
                <Grid item xs={12}>
                </Grid>
            </Grid>
        </>);
    } else { return (<div> Loading... </div>); }
};
