import React from 'react'
import { Chart } from "react-google-charts";


export default function GeoChart(props) {
    return (
        <Chart
            chartType="GeoChart"
            data={props.data}

            options={{
                backgroundColor: '#dbdddf',
                datalessRegionColor: '#07a2a2',
                defaultColor: '#07a2a2',
            }}
            mapsApiKey="AIzaSyAL51P_Rf-S9JgaWKe01a2gHx7ZZOjepCE"
            rootProps={{ 'data-testid': '1' }}
            />
    )
}
