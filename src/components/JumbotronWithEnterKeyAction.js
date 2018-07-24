import React from 'react';

class JumbotronWithEnterKeyAction extends React.Component {

  keyPressed = (event) => {
    let symbol = event.key;

    if (symbol !== "Enter") {
      return;
    }

    this.props.onPrimaryAction();
  }

  handlePrimaryClick = (e) => {
    e.preventDefault();
    this.props.onPrimaryAction();
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyPressed, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPressed, false);
  }

  render() {
    const secondaryButton = this.props.onSecondaryAction ? (<button
      className="btn btn-lg btn-outline-primary"
      onClick={this.props.onSecondaryAction} >Try Again</button>) : null;
      
    return (
      <div className="jumbotron text-center">
        <h1>{this.props.title}</h1>
        <p className="lead">{this.props.text}</p>
        {this.props.children}
        {secondaryButton}
        &nbsp;
        <button className="btn btn-lg btn-primary"
          onClick={this.handlePrimaryClick} >
          {this.props.primaryActionText || 'Continue'} ⏎</button>
      </div>
    );
  }

}


export default JumbotronWithEnterKeyAction;
