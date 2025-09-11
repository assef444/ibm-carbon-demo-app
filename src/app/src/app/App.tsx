import { Theme, Button, Grid, Column } from '@carbon/react'
import { Bee } from '@carbon/icons-react'

export default function App() {
    return (
        <Theme theme="g10">
            <Grid>
                <Column sm={4} md={8} lg={16}>
                    <h1>IBM Carbon Demo App</h1>
                    <Button kind="primary" renderIcon={Bee}>Hello Carbon!</Button>
                </Column>
            </Grid>
        </Theme>
    )
}