import React from 'react'
import { Grid, Paper } from '@material-ui/core';
import SectionHeader from '../sectionHeader/sectionHeader';
import FeedContent from './FeedContent';

export default function FeedCard() {
    return (
        <Grid item xs ={3}>
            <Paper style={{ padding : 10}}>
              <SectionHeader text='FEED' />
              <FeedContent/>
            </Paper>
        </Grid>
    )
}
