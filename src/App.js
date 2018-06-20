import React, { Component, Fragment } from 'react';
import TrainingRoom from './TrainingRoom';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const result =  <TrainingRoom />;

    return (
      <Fragment>
        <Header />
          {result}
        <Footer />
      </Fragment>
    );
  }
}

export default App;
