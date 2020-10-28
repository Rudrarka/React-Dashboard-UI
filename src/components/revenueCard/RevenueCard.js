import React from 'react'
import { Grid, Paper } from '@material-ui/core';
import SectionHeader from '../sectionHeader/sectionHeader';
import LineGraph from '../charts/LineGraph';

export default function RevenueCard() {
    return (
        <Grid item xs = {6}>
            <Paper style={{ padding : 10}}>
              <SectionHeader text='REVENUE'/>
              <LineGraph />              
            </Paper>
        </Grid>
    )
}
