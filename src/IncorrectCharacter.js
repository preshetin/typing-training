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
              <code style={{ backgroundColor: "red" }}>{this.props.symbol}</code>
              <div className={this.state.visible ? '' : 'hide'} style={{ color: "red", position: "absolute", left: 0 }}>{this.props.incorrectSymbol}</div>
           </div>;
  }
}

export default IncorrectCharacter;
