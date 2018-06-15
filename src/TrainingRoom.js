import React from 'react';
import PropTypes from 'prop-types';
import TrainingScene from './TrainingScene';
import Keyboard from './Keyboard';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function TrainingRoom(props) {
  const { classes } = props;  

  return (
    <div>
      <Grid container justify="center" style={{ margin: "20px" }} spacing={24}>
        <Grid item xs={8}>  
          <Card style={{ paddingBottom: "30px" }}>
            <CardContent>
              <TrainingScene />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Keyboard />
        </Grid>
      </Grid>
    </div>
  );
}

TrainingRoom.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default TrainingRoom;
