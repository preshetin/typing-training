import React, { Component } from 'react';
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
      <div>
        <Header />
        <div className="container">
          {result}
        </div>
      </div>
    );
  }
}

export default App;
