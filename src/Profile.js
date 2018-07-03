import React from 'react';
import { Redirect } from 'react-router-dom';
import Api from './api';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    if (! this.props.auth) {
      return;
    }
    const api = new Api(this.props.auth.id, this.props.auth.userId);
    api.getUser().then(res => this.setState({ user: res.data }));
  }

  render() {
    if (! this.props.auth) {
      return <Redirect to='/' />
    }
     
    if ( ! this.state.user) {
      return "Loading...";
    } else {
      return <h1>{this.state.user.email}</h1>;
    }
  }
}

export default Profile;
