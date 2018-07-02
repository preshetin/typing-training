import React from 'react';
import { api } from './api';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    api.get('/Users/1').then(res => this.setState({ user: res.data }));
  }

  render() {
    if (this.state.user === null) {
      return "Loading...";
    } else {
      return <h1>{this.state.user.email}</h1>;
    }
  }
}

export default Profile;
