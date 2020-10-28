import React from 'react'
import { Grid, Paper } from '@material-ui/core';
import DoughnutChart from '../charts/DoughnutChart';
import SectionHeader from '../sectionHeader/sectionHeader';


export default function AcquisitionChannel() {
    return (
        <Grid item xs ={6}>
        <Paper style={{ padding : 10}}>
        <SectionHeader text='ACQUISITION CHANNELS' />
          <Grid container >
            <Grid item xs={5}>
              <DoughnutChart />
            </Grid>
            <Grid item xs={7}>            
            </Grid>
          </Grid>
        </Paper>
        </Grid>
    )
}
