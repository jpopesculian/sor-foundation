import React from 'react';

import ReactRouter from 'react-router';
var { Route, DefaultRoute, Redirect } = ReactRouter;

import Main from './Main';
import Home from './pages/Home';
import AuthLogin from './pages/auth/Login';
import AuthRegister from './pages/auth/Register';

import App from './pages/App';

let routes = (
    <Route name="main" path='/' handler={Main}>
      <DefaultRoute name="home" handler={Home} />
      <Route name="auth.login" path='login' handler={AuthLogin} />
      <Route name="auth.register" path='register' handler={AuthRegister} />
      <Route name="app" path='app' handler={App}>
        {/* App Routes */}
      </Route>
    </Route>
);

export default routes;
