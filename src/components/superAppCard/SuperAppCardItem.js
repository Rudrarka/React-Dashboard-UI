import React from 'react'
import { Grid, Typography } from '@material-ui/core';

export default function SuperAppCardItem(props) {
    return (
        <Grid container item xs={12} sm={4} justify='space-between'>
            <Grid item xs={12}>
                <Typography variant='caption'>
                    {props.heading}
                </Typography>
            </Grid>
            <Grid item sx={12}>
                <Typography variant='h6'>
                    {props.value}
                </Typography>
            </Grid>
        </Grid>
    )
}
