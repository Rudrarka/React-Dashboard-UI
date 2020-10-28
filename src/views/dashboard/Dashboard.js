import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import KeyStats from '../../components/keyStatsCard/KeyStats';
import AcquisitionChannel from '../../components/acquisitionChannelCard/AcquisitionChannel';
import UserDistribution from '../../components/userDistribution/UserDistribution';
import RevenueCard from '../../components/revenueCard/RevenueCard';
import SuperAppCard from '../../components/superAppCard/SuperAppCard';
import FeedCard from '../../components/feedCard/FeedCard';

export default function Dashboard() {
    return (
        <Grid container direction="column" spacing={3} style={{  padding: 10 , backgroundColor: '#e0dede96' }} >
          <Grid item container>
            <Grid item xs={6}>
                <Typography variant='h6'>
                DASHBOARD
                </Typography>
                {/* <Header></Header> */}
            </Grid>
            <Grid item xs={6} justify='flex-end' alignItems='flex-end'>
                <Typography variant='h6'>
                </Typography>
                {/* <Header></Header> */}
            </Grid>
            {/* <Header></Header> */}
            </Grid>
              <Grid item container spacing = {3}>
              <KeyStats /> 
              <AcquisitionChannel />
                <UserDistribution />
                <RevenueCard />
                <SuperAppCard/>
                <FeedCard />
            </Grid>      
          </Grid>
    )
}
