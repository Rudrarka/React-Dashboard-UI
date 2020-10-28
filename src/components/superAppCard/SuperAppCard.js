import React, { useState, useEffect } from 'react'
import { Paper, Grid, Divider } from '@material-ui/core';
import SuperAppCardHeader from './SuperAppCardHeader'
import SuperAppCardContent from './SuperAppCardContent'
import AxiosConfig from "../../axiosConfig/AxiosConfig";


export default function SuperAppCard() {

  const [stats, setStats] = useState();
  const [loading, setloading] = useState({
      'loading': true
  });

  useEffect(() => {
    AxiosConfig.get("/org/super-app")
      .then(res =>{
          console.log(res.data.data[0])
          setStats(res.data.data)
          console.log(stats)
      })
      .catch(error => {
          console.log("Error")
      } )
  
    },[])

    return (
        <Grid item xs ={3}>
            <Paper style={{ padding : 10}}> 
              <Grid container justify='space-between' alignItems="center" justify="center">
                <Grid item >
                  <SuperAppCardHeader name={stats && stats[0]}/>
                </Grid>
                <Divider/>
                <Grid item >
                  <SuperAppCardContent items={stats && stats.slice(1,6)}/>
                </Grid>
              </Grid>
            </Paper>
        </Grid>
    )
}
