import React from 'react'
import { Grid, Typography, Divider } from '@material-ui/core';

export default function sectionHeader(props) {
    return (
        <React.Fragment>
            <Grid container justify='space-between'>
                <Grid item>
                    <Typography variant='caption'>
                        {props.text}
                    </Typography>                  
                </Grid>
            </Grid>
            <Divider/>
        </React.Fragment>
    )
}
