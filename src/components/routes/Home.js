import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const Home = ({ classes }) => {
    return (
        <main className={classes.root}>
            Home
    </main>
    );
};

const styles = {
    root: {},
};

export default withStyles(styles)(
    Home
);
