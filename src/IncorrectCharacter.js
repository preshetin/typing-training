import React from "react";

class IncorrectCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ visible: false });
    }, 200)
   }
  
  render() {
    return <div style={{ display: "inline", position: "relative" }}>
              <div style={{  fontFamily: "'Roboto Mono', monospace", display: "inline", fontSize: "300%", backgroundColor: "red" }}>{this.props.symbol}</div>
              <div className={this.state.visible ? '' : 'hide'} style={{ color: "red", fontSize: "300%", position: "absolute", left: 0 }}>{this.props.incorrectSymbol}</div>
           </div>;
  }
}

export default IncorrectCharacter;
