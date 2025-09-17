import { Grid, Column } from "@carbon/react";

export default function Home() {
    return (
        <Grid className="landing-page" fullWidth>
            <Column lg={16} md={8} sm={4} className="landing-page__banner">
                1
            </Column>
            <Column lg={16} md={8} sm={4} className="landing-page__r2">
                <Grid className="tabs-group-content">
                    <Column lg={7} md={4} sm={4} className="landing-page__tab-content">
                        7/16
                    </Column>
                    <Column lg={{ offset: 8, span: 8 }} md={4} sm={4}>
                        8/16
                    </Column>
                </Grid>
            </Column>
            <Column lg={16} md={8} sm={4} className="landing-page__r3">
                <Grid>
                    <Column lg={4} md={4} sm={4}>
                        1/4
                    </Column>
                    <Column lg={4} md={4} sm={4}>
                        1/4
                    </Column>
                    <Column lg={4} md={4} sm={4}>
                        1/4
                    </Column>
                    <Column lg={4} md={4} sm={4}>
                        1/4
                    </Column>
                </Grid>
            </Column>
        </Grid>
    );
}