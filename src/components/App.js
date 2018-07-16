import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LessonRoom from './LessonRoom';
import LessonsList from './LessonsList';
import Lesson from './Lesson';
import Login from './Login';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import * as routes from '../constants/routes';
import { firebase, db } from '../firebase';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Profile from './Profile';
import './App.css';
library.add(faCheckCircle);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
      lessons: [],
      lessonLogs: []
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
      this.handeLessonListMount();
    });
  }

  //  handleLogout = () => {
  //    localStorage.removeItem('token');
  //    localStorage.removeItem('userId');
  //    let st = JSON.parse(JSON.stringify(this.state));
  //    st.user = null;
  //    st.auth = null;
  //    st.userId = null;
  //    st.isLoggedIn = false;
  //    st.lessonLogs = [];
  //    this.setState(st);
  
  handeLessonListMount = () => {
    db.getLessons().then(lessons => {
      let st = JSON.parse(JSON.stringify(this.state));
      st.lessons = lessons;
      this.setState(st);
    }); 
    db.getUserLessonLogs(this.state.authUser).then(lessonLogs => {
      let st = JSON.parse(JSON.stringify(this.state));
      st.lessonLogs = lessonLogs;
      this.setState(st);
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Route render={ (props) => <Header authUser={this.state.authUser}/> } />
          <div className="container">
            <Switch>            
              <Route
                exact path="/"
                render={ (props) => <LessonsList {...props} lessonLogs={this.state.lessonLogs} lessons={this.state.lessons} /> }
              />
              <Route
                exact path='/lessons/:lessonId'
                render={(props) => <Lesson {...props} authUser={this.state.authUser} />}
              />
              <Route
                path="/lessons/:lessonId/:exerciseNumber"
                render={ (props) => <LessonRoom {...props} authUser={this.state.authUser} /> }
              />
              <Route
                path="/profile"
                render={ (props) => <Profile {...props} authUser={this.state.authUser} /> }
              />
              <Route path={routes.SIGN_IN} render={ () => <SignInPage /> }  /> } />
              <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
