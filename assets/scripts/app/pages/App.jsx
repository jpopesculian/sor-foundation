import React from 'react';

import ReactRouter from 'react-router';
var { RouteHandler } = ReactRouter;
import router from 'app/router';

import Authentication from 'app/services/Authentication'

class App extends React.Component {

    constructor(props) {
      super(props)
    }

    render() {
      return (
        <div id="app-container">
          <RouteHandler {...this.props} />
        </div>
      );
    }

    static willTransitionTo(transition, params, query, callback) {
      Authentication.who()
        .then((user) => {
            params.user = user
            callback()
        }, (error) => {
            transition.redirectTo('auth.login')
            callback(error)
        });
    }
}

export default App
