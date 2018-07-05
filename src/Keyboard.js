import React, { Component } from 'react'
import './Keyboard.css';

const charRu = {
  q: "й",
  w: "ц",
  e: "у"
};

const charEn = {
  q: "q",
  w: "w",
  e: "e"
};

class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      char: null
    }
  }

  componentDidMount() {
    switch (this.props.lang) {
      case "ru":
        this.setState({ char: charRu });
        break;
      case "en":
        this.setState({ char: charEn });
        break;
      default:
        throw new Error('Unknown locale language');
    }
  }
  render() {
    if (this.state.char === null) {
      return 'Loading...';
    }
    if (this.props.hide) {
      return null;
    }
    return (
<div id="container">
    <ul id="keyboard">
        <li className="symbol"><span className="off">{"`"}</span><span className="on">~</span></li>
        <li className="symbol"><span className="off">1</span><span className="on">!</span></li>
        <li className="symbol"><span className="off">2</span><span className="on">@</span></li>
        <li className="symbol"><span className="off">3</span><span className="on">#</span></li>
        <li className="symbol"><span className="off">4</span><span className="on">$</span></li>
        <li className="symbol"><span className="off">5</span><span className="on">%</span></li>
        <li className="symbol"><span className="off">6</span><span className="on">^</span></li>
        <li className="symbol"><span className="off">7</span><span className="on">&amp;</span></li>
        <li className="symbol"><span className="off">8</span><span className="on">*</span></li>
        <li className="symbol"><span className="off">9</span><span className="on">(</span></li>
        <li className="symbol"><span className="off">0</span><span className="on">)</span></li>
        <li className="symbol"><span className="off">-</span><span className="on">_</span></li>
        <li className="symbol"><span className="off">=</span><span className="on">+</span></li>
        <li className="delete lastitem">delete</li>
        <li className="tab">tab</li>
        <li className="letter">{this.state.char.q}</li>
        <li className="letter">{this.state.char.w}</li>
        <li className="letter">{this.state.char.e}</li>
        <li className="letter">r</li>
        <li className="letter">t</li>
        <li className="letter">y</li>
        <li className="letter">u</li>
        <li className="letter">i</li>
        <li className="letter">o</li>
        <li className="letter">p</li>
        <li className="symbol"><span className="off">[</span><span className="on">{"{"}</span></li>
        <li className="symbol"><span className="off">]</span><span className="on">{"}"}</span></li>
        <li className="symbol lastitem"><span className="off">\</span><span className="on">|</span></li>
        <li className="capslock">caps lock</li>
        <li className="letter">a</li>
        <li className="letter">s</li>
        <li className="letter">d</li>
        <li className="letter">f</li>
        <li className="letter">g</li>
        <li className="letter">h</li>
        <li className="letter">j</li>
        <li className="letter">k</li>
        <li className="letter">l</li>
        <li className="symbol"><span className="off">;</span><span className="on">:</span></li>
        <li className="symbol"><span className="off">'</span><span className="on">&quot;</span></li>
        <li className="return lastitem">return</li>
        <li className="left-shift">shift</li>
        <li className="letter">z</li>
        <li className="letter">x</li>
        <li className="letter">c</li>
        <li className="letter">v</li>
        <li className="letter">b</li>
        <li className="letter">n</li>
        <li className="letter">m</li>
        <li className="symbol"><span className="off">,</span><span className="on">&lt;</span></li>
        <li className="symbol"><span className="off">.</span><span className="on">&gt;</span></li>
        <li className="symbol"><span className="off">/</span><span className="on">?</span></li>
        <li className="right-shift lastitem">shift</li>
        <li className="space lastitem">&nbsp;</li>
    </ul>
</div>
    )
  }
}

export default Keyboard; 
