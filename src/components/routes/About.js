import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const About = ({ classes }) => {
    return (
        <main className={classes.root}>
            About
    </main>
    );
};

const styles = {
    root: {},
};

export default withStyles(styles)(
    About
);
