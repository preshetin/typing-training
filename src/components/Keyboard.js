import React, { Component } from 'react'
import './Keyboard.css';
import CHARS from '../constants/keyboard_characters';

const SAME_CHARS = [
  " ", "1", "2", "\n", "/"
];
// <KeyboardChar char='f' selectedKey={props.selectedKey} lang={props.lang} /> 
const KeyboardChar = props => {
  const charObj = CHARS[props.char]; 
  const currentStyle =  { backgroundColor: "rgb(0, 105, 217)", color: "#fff" };
  const style = charObj[props.lang] === props.selectedKey ? currentStyle : null;
  const className = `letter ${charObj.fingerType}-finger-${charObj.hand} ${charObj.isHomeRow ? 'home-row' : ''}`;
  return <li style={style} className={className}>{charObj[props.lang]}</li>

}

const Keyboard = ( props ) =>  {

  if (props.hide) {
    return null;
  }

  // todo: remove
  const  char = (charSymbol) => {
    return CHARS[charSymbol][props.lang];
  }
  const currentStyle =  { backgroundColor: "rgb(0, 105, 217)", color: "#fff" };

  return (
    <div id="container" style={{ marginTop: "40px" }}>
        <ul id="keyboard">
            <KeyboardChar char='sqlQuote' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='one' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='two' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='three' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='four' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='five' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='six' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='seven' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='eight' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='nine' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='zero' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='dash' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='equalSign' selectedKey={props.selectedKey} lang={props.lang} /> 
            <li className="delete lastitem">delete</li>
            <li className="tab">tab</li>
            <KeyboardChar char='q' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='w' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='e' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='r' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='t' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='y' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='u' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='i' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='o' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='p' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='sqBrLeft' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='sqBrRight' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='backSlash' selectedKey={props.selectedKey} lang={props.lang} /> 
            <li className="capslock">caps lock</li>
            <KeyboardChar char='a' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='s' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='d' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='f' selectedKey={props.selectedKey} lang={props.lang} /> 
            <KeyboardChar char='g' selectedKey={props.selectedKey} lang={props.lang} />
            <KeyboardChar char='h' selectedKey={props.selectedKey} lang={props.lang} />
            <KeyboardChar char='j' selectedKey={props.selectedKey} lang={props.lang} />
            <KeyboardChar char='k' selectedKey={props.selectedKey} lang={props.lang} />
            <KeyboardChar char='l' selectedKey={props.selectedKey} lang={props.lang} />
            <KeyboardChar char='semicolon' selectedKey={props.selectedKey} lang={props.lang} />
            <KeyboardChar char='apostrophe' selectedKey={props.selectedKey} lang={props.lang} />
            <li className="return lastitem">return</li>
            <li className="left-shift">shift</li>
            <KeyboardChar char='z' selectedKey={props.selectedKey} lang={props.lang} />
            <KeyboardChar char='x' selectedKey={props.selectedKey} lang={props.lang} />
            <KeyboardChar char='c' selectedKey={props.selectedKey} lang={props.lang} />
            <KeyboardChar char='v' selectedKey={props.selectedKey} lang={props.lang} />
            <KeyboardChar char='b' selectedKey={props.selectedKey} lang={props.lang} />
            <KeyboardChar char='n' selectedKey={props.selectedKey} lang={props.lang} />
            <KeyboardChar char='m' selectedKey={props.selectedKey} lang={props.lang} />
            <KeyboardChar char='comma' selectedKey={props.selectedKey} lang={props.lang} />
            <KeyboardChar char='dot' selectedKey={props.selectedKey} lang={props.lang} />
            <KeyboardChar char='slash' selectedKey={props.selectedKey} lang={props.lang} />
            <li className="right-shift lastitem">shift</li>
            <li className="buffer"></li>
            <li style={ " " === props.selectedKey ? currentStyle : null } className="space">&nbsp;</li>
            <li className="buffer lastitem"></li>
        </ul>
    </div>
  );
}

Keyboard.defaultProps = {
  lang: "ru"
};

export default Keyboard; 
