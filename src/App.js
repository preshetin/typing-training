import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import TrainingRoom from './TrainingRoom';
import Api from './api';
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
      userId: null,
      //user: { email: "preshetin@gmail.com" }
    }

  }

  handleAuthenticate = (authData) => {
    let st = JSON.parse(JSON.stringify(this.state));
    st.userId = authData.userId;
    st.auth = authData;
    this.setState(st);
    this.getUserInfo(authData.id, authData.userId);
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    let st = JSON.parse(JSON.stringify(this.state));
    st.user = null;
    st.auth = null;
    st.userId = null;
    this.setState(st);
    
  }
  componentDidMount() {
    if ( ! localStorage.getItem('token')) {
      return;
    }
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    this.getUserInfo(token, userId);
  }

  getUserInfo(token, userId) {
    const api = new Api(token, userId);
    api.getUser().then(res => {
      let st = JSON.parse(JSON.stringify(this.state));
      st.user = res.data;
      st.userId = res.data.id;
      st.auth = { id: token, userId };
      this.setState(st);
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <div>
          <Route render={ (props) => <Header userId={this.state.userId} user={this.state.user} onLogout={this.handleLogout}/> } />
          <div className="container">
            <Route exact path="/" component={LessonsList} />
            <Route path="/lessons/:lessonId" component={TrainingRoom} />
            <Route path="/login" render={ (props) => <Login {...props} onAuthenticate={this.handleAuthenticate} /> } />
            <Route path="/profile" render={ (props) => <Profile {...props} auth={this.state.auth} /> } />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
