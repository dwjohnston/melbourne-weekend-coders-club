import React, { Component } from 'react';
import Helmet from 'react-helmet';

import './app.styl';

import UniversalComponent from './components/UniversalComponent';
import { Typography, Card, withStyles } from '@material-ui/core';

/**
 * The `App` component is the entry point for the react app.
 * It is rendered on the client as well as on the server.
 *
 * You can start developing your react app here.
 */
class App extends Component {
    render() {

        const { classes } = this.props;
        return (
            <div>
                <Helmet>
                    <title>App Component | React Universal</title>
                </Helmet>



                <Card elevation={24} className={classes.card}>
                    <Typography color="primary" variant="h1"> Hello world! </Typography>
                    <UniversalComponent name="getting-started" />

                </Card>

            </div>
        );
    }
}

const styles = theme => ({
    root: {

    },

    card: {
        padding: 20,
    }
})

export default withStyles(styles)(App); 
