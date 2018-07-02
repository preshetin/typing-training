import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import TrainingRoom from './TrainingRoom';
import LessonsList from './LessonsList';
import Login from './Login';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Profile from './Profile';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null
    }
  }

  handleAuthenticate = (userId) => {
    this.setState({ userId });
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.setState({ userId: null });
    
  }

  render() {
    return (
      <Router>
        <div>
          <Route render={ (props) => <Header userId={this.state.userId} onLogout={this.handleLogout}/> } />
          <div className="container">
            <Route exact path="/" component={LessonsList} />
            <Route path="/lessons/1" component={TrainingRoom} />
            <Route path="/login" render={ (props) => <Login {...props} onAuthenticate={this.handleAuthenticate} /> } />
            { this.state.userId && <Route path="/profile" component={Profile} /> }
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
