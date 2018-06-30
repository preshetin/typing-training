import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import TrainingRoom from './TrainingRoom';
import LessonsList from './LessonsList';
import Login from './Login';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import './App.css';
import { fakeAuth } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const Profile = () => <h3>Profile</h3>;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="container">
            <Route exact path="/" component={LessonsList} />
            <Route path="/lessons/1" component={TrainingRoom} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/profile" component={Profile} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
