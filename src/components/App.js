import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LessonRoom from './LessonRoom';
import Api from '../api';
import LessonsList from './LessonsList';
import Lesson from './Lesson';
import Login from './Login';
import Header from './Layouts/Header';
import IsLoggedInAlert from './IsLoggedInAlert';
import Footer from './Layouts/Footer';
import Profile from './Profile';
import './App.css';

library.add(faCheckCircle);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      //user: { email: "preshetin@gmail.com" }
      lessons: [],
      lessonLogs: [],
      isLoggedIn: false
    }

  }

  handleAuthenticate = (authData) => {
    let st = JSON.parse(JSON.stringify(this.state));
    st.userId = authData.userId;
    st.auth = authData;
    st.isLoggedIn = true;
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
    st.isLoggedIn = false;
    st.lessonLogs = [];
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
      st.isLoggedIn = true;
      this.setState(st);
    }).catch(err => console.log(err));
  }
  
  handeLessonListMount = () => {
    const api = new Api(localStorage.getItem('token'), localStorage.getItem('userId'));
    api.getLessons().then(res => {
      let st = JSON.parse(JSON.stringify(this.state));
      st.lessons = res.data;
      this.setState(st);
    }); 
    api.getUserLessonLogs().then(res => {
      let st = JSON.parse(JSON.stringify(this.state));
      st.lessonLogs = res.data;
      this.setState(st);
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Route render={ (props) => <Header userId={this.state.userId} user={this.state.user} onLogout={this.handleLogout}/> } />
          <div className="container">
            <IsLoggedInAlert isLoggedIn={this.state.isLoggedIn} />
            <Switch>            
              <Route exact path="/" render={ (props) => <LessonsList {...props} onMount={this.handeLessonListMount} lessonLogs={this.state.lessonLogs} lessons={this.state.lessons} /> } />
              <Route exact path='/lessons/:lessonId' component={Lesson} />
              <Route path="/lessons/:lessonId/:exerciseNumber" render={ (props) => <LessonRoom {...props} isLoggedIn={this.state.isLoggedIn} /> } />
              <Route path="/profile" render={ (props) => <Profile {...props} auth={this.state.auth} /> } />
              <Route path="/login" render={ (props) => <Login {...props} onAuthenticate={this.handleAuthenticate} /> } />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
