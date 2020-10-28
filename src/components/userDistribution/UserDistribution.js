import React, { useState, useEffect } from 'react'
import { Grid, Paper } from '@material-ui/core';
import SectionHeader from '../sectionHeader/sectionHeader';
import GeoChart from '../charts/GeoChart';
import AxiosConfig from "../../axiosConfig/AxiosConfig";


export default function UserDistribution() {

  const [countryData, setCountryData] = useState();
  const [loading, setloading] = useState({
      'loading': true
  });

  useEffect(() => {
      AxiosConfig.get("/user/country-data")
      .then(res =>{
          setCountryData(res.data.data)
      })
      .catch(error => {
          console.log("Error")
      } )
  
    },[])
  

    return (
        <Grid item xs ={6}>
          <Paper style={{ padding : 10}}>
              <SectionHeader text='User By Country'/>
              <Grid item style={{ padding : 10}}>
                <GeoChart data={countryData && countryData}/>
              </Grid>
          </Paper>
        </Grid>
    )
}
