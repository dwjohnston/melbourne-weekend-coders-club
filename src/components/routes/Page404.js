import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const Page404 = ({ classes }) => {
    return (
        <main className={classes.root}>
            Page404
    </main>
    );
};

const styles = {
    root: {},
};

export default withStyles(styles)(
    Page404
);
