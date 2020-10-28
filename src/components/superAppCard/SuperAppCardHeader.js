import React from 'react'
import { Icon, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import logo from '../../images/logo.png'

const useStyles = makeStyles({
    imageIcon: {
      height: '100%'
    },
    iconRoot: {
      textAlign: 'center'
    }
  });

export default function SuperAppCardHeader(props) {

    const classes = useStyles();

    return (
        <Grid container style={{padding:50}} alignItems="center" justify="center">
            <Grid item xs={6} >
                <Icon classes={{root: classes.iconRoot}}>
                    <img className={classes.imageIcon} src={logo}/>
                </Icon>
                </Grid>
            <Grid item xs={6} >
                <Typography variant='h6'>
                    {props.name}
                </Typography>
            </Grid>  
        </Grid>
    )
}
