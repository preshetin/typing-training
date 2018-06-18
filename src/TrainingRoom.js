import React from 'react';
import PropTypes from 'prop-types';
import TypingStrings from './TypingStrings';
import Keyboard from './Keyboard';
import { getCharByGlobalIndex, getArrayIndexByGlobalIndex, getStringIndexByGlobalIndex } from './arrayConverter.js';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


//const TRAINING_STRING = "ппп ррр ппп ррр";
//const TRAINING_STRING = "fff jjj fff jjj";
const TRAINING_STRING = ["fff jjj fff jjj", "ffj ffj jjf jjf", "jfj jfj fjf fjf"];

class TrainingRoom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chars: [
        //        [
        //          { symbol: "f", isCorrect: true },
        //          { symbol: "f", isCorrect: true },
        //          { symbol: "f", isCorrect: true }
        //        ],
        //        [
        //          { symbol: "j", isCorrect: null },
        //          { symbol: "j", isCorrect: null },
        //          { symbol: "j", isCorrect: null }
        //        ],
      ],
      currentIndex: 4,
      currentSymbol: ""
    }
    this.keyPressed = this.keyPressed.bind(this);
  }

  keyPressed(event){
    const symbol = event.key;
    if (symbol === "Backspace") {
      let st = this.state;
        if (st.currentIndex > 0) {
          st.currentIndex--;
          st.chars[getArrayIndexByGlobalIndex(this.state.chars, this.state.currentIndex)][getStringIndexByGlobalIndex(this.state.chars, this.state.currentIndex)].isCorrect = null;
        }
      this.setState(st);
      return;
    }
    if (symbol.length !== 1) {
      return;
    }
    if (this.state.currentIndex > 0 && getCharByGlobalIndex(this.state.chars, this.state.currentIndex - 1).isCorrect === false) {
      return; 
    }
    let st = this.state;
    if (symbol === getCharByGlobalIndex(this.state.chars, this.state.currentIndex).symbol) {
      st.chars[getArrayIndexByGlobalIndex(this.state.chars, this.state.currentIndex)][getStringIndexByGlobalIndex(this.state.chars, this.state.currentIndex)].isCorrect = true;
    } else {
      st.chars[getArrayIndexByGlobalIndex(this.state.chars, this.state.currentIndex)][getStringIndexByGlobalIndex(this.state.chars, this.state.currentIndex)].isCorrect = false;
    }
    st.currentIndex++;
    st.currentSymbol = symbol;
    this.setState(st);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.keyPressed, false);
    const chars = [];
    TRAINING_STRING.forEach((str, index) => {
      chars.push([]);
      str.split('').forEach((symbol, charIndex) => {
        chars[index].push({ symbol, isCorrect: null })
        if (str.length === charIndex + 1) {
          chars[index].push({ symbol: " ", isCorrect: null });
        }
      });
    });
    let st = this.state;
    st.chars = chars;
    this.setState(st);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyPressed, false);
  }

  render() {
    return (
      <div>
        <Grid container justify="center" style={{ margin: "20px" }} spacing={24}>
          <Grid item xs={8}>  
            <Card style={{ paddingBottom: "30px" }}>
              <CardContent>
                <TypingStrings chars={this.state.chars} currentIndex={this.state.currentIndex} currentSymbol={this.state.currentSymbol} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={8}>
            <Keyboard />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default TrainingRoom;
