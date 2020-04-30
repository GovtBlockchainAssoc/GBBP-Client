import React from "react";
import { Grid } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";

export default function TypographyPage() {
    var classes = useStyles();

    return (
        <>
            <PageTitle title="Typography" />
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Widget title="Headings" disableWidgetMenu noBodyPadding bodyClass header>
                        <div className={classes.dashedBorder}>
                            <Typography variant="h1" className={classes.text} weight size colorBrightness color>h1. Heading</Typography>
                            <Typography variant="h2" className={classes.text} weight size colorBrightness color>h2. Heading</Typography>
                            <Typography variant="h3" className={classes.text} weight size colorBrightness color>h3. Heading</Typography>
                            <Typography variant="h4" className={classes.text} weight size colorBrightness color>h4. Heading</Typography>
                            <Typography variant="h5" className={classes.text} weight size colorBrightness color>h5. Heading</Typography>
                            <Typography variant="h6" weight size colorBrightness color>h6. Heading</Typography>
                        </div>
                    </Widget>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Widget title="Typography Colors" disableWidgetMenu noBodyPadding bodyClass header>
                        <div className={classes.dashedBorder}>
                            <Typography variant="h1" color="primary" className={classes.text} weight size colorBrightness>h1. Heading</Typography>
                            <Typography variant="h2" color="success" className={classes.text} weight size colorBrightness>h2. Heading</Typography>
                            <Typography variant="h3" color="secondary" className={classes.text} weight size colorBrightness>h3. Heading</Typography>
                            <Typography variant="h4" color="warning" className={classes.text} weight size colorBrightness>h4. Heading</Typography>
                            <Typography variant="h5" color="primary" colorBrightness="light" className={classes.text} weight size>h5. Heading</Typography>
                            <Typography variant="h6" color="info" weight size colorBrightness>h6. Heading</Typography>
                        </div>
                    </Widget>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Widget title="Basic Text Settings" disableWidgetMenu noBodyPadding bodyClass header>
                        <div className={classes.dashedBorder}>
                            <Typography className={classes.text} weight size colorBrightness color>Basic text</Typography>
                            <Typography className={classes.text} weight="light" size colorBrightness color>Basic light text</Typography>
                            <Typography className={classes.text} weight="medium" size colorBrightness color>Basic medium text</Typography>
                            <Typography className={classes.text} weight="bold" size colorBrightness color>Basic bold text</Typography>
                            <Typography className={classes.text} weight size colorBrightness color>BASIC UPPERCASE TEXT</Typography>
                            <Typography className={classes.text} weight size colorBrightness color>basic lowercase text</Typography>
                            <Typography className={classes.text} weight size colorBrightness color>Basic Capitalized Text</Typography>
                            <Typography weight size colorBrightness color><i>Basic Cursive Text</i></Typography>
                        </div>
                    </Widget>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Widget title="Text Size" disableWidgetMenu noBodyPadding bodyClass header>
                        <div className={classes.dashedBorder}>
                            <Typography className={classes.text} size="sm" weight colorBrightness color>Heading Typography SM Font Size</Typography>
                            <Typography className={classes.text} size weight colorBrightness color>Heading Typography Regular Font Size</Typography>
                            <Typography className={classes.text} size="md" weight colorBrightness color>Heading Typography MD Font Size</Typography>
                            <Typography className={classes.text} size="xl" weight colorBrightness color>Heading Typography XL Font Size</Typography>
                            <Typography className={classes.text} size="xxl" weight colorBrightness color>Heading Typography XXL Font Size</Typography>
                        </div>
                    </Widget>
                </Grid>
            </Grid>
        </>
    );
}
