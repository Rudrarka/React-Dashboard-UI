import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Dashboard from './views/dashboard/Dashboard';
import PrivateRouter from './router/PrivateRouter';
import Login from './views/login/Login';
import UserContext from './context/UserContext';


function App() {

  const [userData, setUserData] = useState({
    user: undefined
  })

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>

  );
}

export default App;
