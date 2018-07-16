import React from 'react';
import { Redirect } from 'react-router-dom';

class Profile extends React.Component {

  render() {
    if (! this.props.authUser) {
      return <Redirect to='/' />
    } else {
      return <h1>{this.props.authUser.email}</h1>;
    }
  }
}

export default Profile;
