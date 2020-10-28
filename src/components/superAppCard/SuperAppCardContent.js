import React from 'react'
import { List, ListItem, Grid, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SuperAppCardItem from './SuperAppCardItem';

const useStyles = makeStyles((theme) => ({
    root: {
    //   width: '100%',
    //   maxWidth: '36ch',
    //   backgroundColor: theme.palette.background.paper,
      height: '182px',
      overflow: "auto"
    //   height: '20%'
    },
  }));

export default function SuperAppCardContent(props) {

    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem>
                <Grid container>
                    <Grid item xs={12} sm={11} justify='flex-start'>
                        <Typography align='left'>
                            Most Popular App
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={1} justify='flex-end'>
                        <Typography>
                            {props.items && props.items[0]}$
                        </Typography>
                    </Grid>
                </Grid>
            </ListItem>
            <Divider></Divider>
            <ListItem>
                <Grid container>

                    <>
                        {props.items &&
                            props.items.slice(1,5).map(({ id, heading, value }) => (
                                <SuperAppCardItem key={id} heading={heading} value={value} />
                            ))
                        } 
                    </>
                </Grid>
            </ListItem>
        </List>
    )
}
