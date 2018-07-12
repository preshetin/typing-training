import React from "react";

class IncorrectCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectSymbol: null,
      visible: true
    }
  }

  componentDidMount() {
    this.setState(prevState => ({
      ...prevState,
        incorrectSymbol: this.props.incorrectSymbol
    }));

    this.timeout = setTimeout(() => {
      this.setState(prevState => ({
        ...prevState,
        visible: false
      }));
    }, 200)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  
  render() {
    return <div style={{ display: "inline", position: "relative" }}>
              <div className="Character" style={{ backgroundColor: "#c82333", color: 'white' }}>{this.props.symbol}</div>
              <div className={this.state.visible ? 'Character' : 'Character hide'} style={{ color: "#c82333", position: "absolute", top: "11px", left: 0 }}>{this.state.incorrectSymbol}</div>
           </div>;
  }
}

export default IncorrectCharacter;
