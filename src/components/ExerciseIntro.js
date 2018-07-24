import React from 'react';
import JumbotronWithEnterKeyAction from './JumbotronWithEnterKeyAction';
import Keyboard from './Keyboard';

class IntroKeyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: ""
    }
  }


  componentDidMount() {
    if ( ! Array.isArray(this.props.chars) ) {
      return;
    }
      
    var newsArray = this.props.chars;   // your code puts strings into this array
    var curNewsIndex = -1;

    function advanceNewsItem() {
        ++curNewsIndex;
        if (curNewsIndex >= newsArray.length) {
            curNewsIndex = 0;
        }
        this.setState({
          selectedKey: newsArray[curNewsIndex]
        });
    }
    advanceNewsItem = advanceNewsItem.bind(this);

    this.timer = setInterval(advanceNewsItem, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  render() {
    if ( ! Array.isArray(this.props.chars) ) {
      return null;
    }
    return (
      <React.Fragment>
        <Keyboard selectedKey={this.state.selectedKey} />
        <br /><br />
      </React.Fragment>
    );
  }
}

const ExerciseIntro = ({ intro_text, intro_keyboard, onIntroFinish }) => {
      return (
        <JumbotronWithEnterKeyAction title="Intro" text={intro_text} onPrimaryAction={onIntroFinish}>
          <IntroKeyboard chars={intro_keyboard} />
        </JumbotronWithEnterKeyAction>
      );
}

export default ExerciseIntro;
