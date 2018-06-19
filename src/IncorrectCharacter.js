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
              <div className="Character" style={{ backgroundColor: "red" }}>{this.props.symbol}</div>
              <div className={this.state.visible ? 'Character' : 'Character hide'} style={{ color: "red", position: "absolute", top: "10px", left: 0 }}>{this.props.incorrectSymbol}</div>
           </div>;
  }
}

export default IncorrectCharacter;
