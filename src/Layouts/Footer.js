import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Footer extends React.Component {
  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={8}>
        <Typography color="inherit">
            Typing Training
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Footer;
