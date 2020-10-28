import React, { useState, useContext } from 'react'
import GoogleLogin from 'react-google-login';
import UserContext from '../../context/UserContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Grid } from '@material-ui/core';



export default function Login() {

    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    var responseGoogle = response =>{
        setUserData({
            user:response.data
        })
        history.push('/dashboard');
        console.log(response.profileObj);
    }

    return (
        <Grid container alignItems="center" justify="center" style={{ padding: 300 , backgroundColor: '#e0dede96' }}>
                <GoogleLogin
                clientId="290283445408-s34c6255od5g5keu5u9d9q7r5oc5bp25.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}     />
        </Grid>
    )
}
