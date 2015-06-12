import React from 'react';
import ReactRouter from 'react-router';
var { RouteHandler } = ReactRouter;

class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RouteHandler {...this.props} />
        );
    }
}


export default Main
