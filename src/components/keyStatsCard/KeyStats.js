import React, { useEffect, useState } from 'react'
import { makeStyles, Grid, Paper, Typography, IconButton } from '@material-ui/core';
import DoughnutChart from '../charts/DoughnutChart';
import AxiosConfig from "../../axiosConfig/AxiosConfig";
import KeyStatItem from './KeyStatItem';

const useStyles = makeStyles(() =>({
    rightToolbar: {
      marginLeft: "auto",
      marginRight: -12
    },
  }));

export default function KeyStats() {

    const classes = useStyles();
    const [kStats, setKStats] = useState();
    const [loading, setloading] = useState({
        'loading': true
    });

    useEffect(() => {
        AxiosConfig.get("/org/stats")
        .then(res =>{
            setKStats(res.data.data)
        })
        .catch(error => {
            console.log("Error")
        } )
    
      },[])

    return (
        <Grid item container spacing = {3}>
        {kStats &&
            kStats.map(({ header, percent, value }) => (
                <KeyStatItem header={header} percent={percent} value={value} />
                // <Grid item xs ={3}>
                //     <Paper style={{ padding : 10, height: 50}} >
                //         <Grid container item alignItems="center" justify="center">
                //             <Grid item  xs={3}>
                //                 <DoughnutChart percent={percent}/>
                //             </Grid>
                //             <Grid xs={3} item container >
                //                 <Grid item xs={12}>
                //                     <Typography variant='caption'>
                //                         {header}
                //                     </Typography>
                //                 </Grid>
                //                 <Grid item xs={12}>
                //                     <Typography variant='h6'>
                //                         {value}
                //                     </Typography>
                //                 </Grid>
                //                 </Grid>
                //                 <Grid xs={6} className={classes.rightToolbar}>
                //                 <IconButton edge="end" styles={{flex:1}} >
                //                         <RefreshSharpIcon />
                //                         </IconButton>
                //                 {/* <RefreshSharpIcon  fontSize='large'/> */}
                //                 {/* </div> */}
                //                 </Grid>
                            
                //             {/* </Grid> */}
                //         </Grid>                        
                //     </Paper>
                // </Grid>
            ))}
        </Grid>

        
        
    )
}
