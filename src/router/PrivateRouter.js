import React, {useContext} from 'react'
import UserContext from "../context/UserContext";
import { Route } from "react-router-dom";
import Dashboard from '../views/dashboard/Dashboard'
import Login from '../views/login/Login';


export default function PrivateRouter({ component, ...options }) {

    // const { userData } = useContext(UserContext);

    // const finalComponent = userData.user ? component : Login;

    // return <Route {...options} component={finalComponent} />
    return <Route {...options} component={component} />
}
