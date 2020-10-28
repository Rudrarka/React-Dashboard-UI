import React from 'react'
import { Grid, Paper, Typography, IconButton, makeStyles } from '@material-ui/core';
import DoughnutChart from '../charts/DoughnutChart';
import RefreshSharpIcon from '@material-ui/icons/RefreshSharp';

const useStyles = makeStyles(() =>({
    rightToolbar: {
      marginLeft: "auto",
      marginRight: -12
    },
  }));

export default function KeyStatItem(props) {

    const classes = useStyles();

    return (
        <Grid item xs ={3}>
        <Paper style={{ padding : 10, height: 50}} >
            <Grid container item alignItems="center" justify="center">
                <Grid item  xs={3}>
                    <DoughnutChart percent={props.percent}/>
                </Grid>
                <Grid xs={3} item container >
                    <Grid item xs={12}>
                        <Typography variant='caption'>
                            {props.header}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6'>
                            {props.value}
                        </Typography>
                    </Grid>
                    </Grid>
                    <Grid xs={6} className={classes.rightToolbar}>
                    <IconButton edge="end" styles={{flex:1}} >
                            <RefreshSharpIcon />
                            </IconButton>
                    {/* <RefreshSharpIcon  fontSize='large'/> */}
                    {/* </div> */}
                    </Grid>
                
                {/* </Grid> */}
            </Grid>                        
        </Paper>
    </Grid>
    )
}
