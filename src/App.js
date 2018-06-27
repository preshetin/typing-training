import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TrainingRoom from './TrainingRoom';
import LessonsList from './LessonsList';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const result =  <TrainingRoom />;
    //    const result =  <LessonsList />;

    return (
      <Router>
        <div>
          <Header />
          <div className="container">
            <Route exact path="/" component={LessonsList} />
            <Route path="/lessons/1" component={TrainingRoom} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
