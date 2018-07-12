import React, { Component } from 'react'
import './Keyboard.css';

const CHARS = {
  q: { en: "q", ru: "й" },
  w: { en: "w", ru: "ц" },
  e: { en: "e", ru: "у" },
  r: { en: "r", ru: "к" },
  t: { en: "t", ru: "е" },
  y: { en: "y", ru: "н" },
  u: { en: "u", ru: "г" },
  i: { en: "i", ru: "ш" },
  o: { en: "o", ru: "щ" },
  p: { en: "p", ru: "з" },
  sqBrLeft: { en: "[", ru: "х" },
  sqBrRight: { en: "]", ru: "ъ" },
  backSlash: { en: "\\", ru: "ё" },
  a: { en: "a", ru: "ф" },
  s: { en: "s", ru: "ы" },
  d: { en: "d", ru: "в" },
  f: { en: "f", ru: "а" },
  g: { en: "g", ru: "п" },
  h: { en: "h", ru: "р" },
  j: { en: "j", ru: "о" },
  k: { en: "k", ru: "л" },
  l: { en: "l", ru: "д" },
  semicolon: { en: ";", ru: "ж" },
  apostrophe: { en: "'", ru: "э" },
  z: { en: "z", ru: "я" },
  x: { en: "x", ru: "ч" },
  c: { en: "c", ru: "с" },
  v: { en: "v", ru: "м" },
  b: { en: "b", ru: "и" },
  n: { en: "n", ru: "т" },
  m: { en: "m", ru: "ь" },
  comma: { en: ",", ru: "б" },
  dot: { en: ".", ru: "ю" }
};

const SAME_CHARS = [
  " ", "1", "2", "\n", "/"
];

const Keyboard = ( props ) =>  {

  if (props.hide) {
    return null;
  }

  const  char = (charSymbol) => {
    return CHARS[charSymbol][props.lang];
  }

  const currentStyle =  { backgroundColor: "rgb(0, 105, 217)", color: "#fff" };

  return (
    <div id="container" style={{ marginTop: "40px" }}>
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
            <li style={ char('q') === props.selectedKey ? currentStyle : null } className="letter">{char('q')}</li>
            <li style={ char('w') === props.selectedKey ? currentStyle : null } className="letter">{char('w')}</li>
            <li style={ char('e') === props.selectedKey ? currentStyle : null } className="letter">{char('e')}</li>
            <li style={ char('r') === props.selectedKey ? currentStyle : null } className="letter">{char('r')}</li>
            <li style={ char('t') === props.selectedKey ? currentStyle : null } className="letter">{char('t')}</li>
            <li style={ char('y') === props.selectedKey ? currentStyle : null } className="letter">{char('y')}</li>
            <li style={ char('u') === props.selectedKey ? currentStyle : null } className="letter">{char('u')}</li>
            <li style={ char('i') === props.selectedKey ? currentStyle : null } className="letter">{char('i')}</li>
            <li style={ char('o') === props.selectedKey ? currentStyle : null } className="letter">{char('o')}</li>
            <li className="letter">{char('p')}</li>
            <li className="symbol"><span className="off">{char('sqBrLeft')}</span><span className="on">{"{"}</span></li>
            <li className="symbol"><span className="off">{char('sqBrRight')}</span><span className="on">{"}"}</span></li>
            <li className="symbol lastitem"><span className="off">{char('backSlash')}</span><span className="on">|</span></li>
            <li className="capslock">caps lock</li>
            <li style={ char('a') === props.selectedKey ? currentStyle : null } className="letter">{char('a')}</li>
            <li style={ char('s') === props.selectedKey ? currentStyle : null } className="letter">{char('s')}</li>
            <li style={ char('d') === props.selectedKey ? currentStyle : null } className="letter">{char('d')}</li>
            <li style={ char('f') === props.selectedKey ? currentStyle : null } className="letter">{char('f')}</li>
            <li style={ char('g') === props.selectedKey ? currentStyle : null } className="letter">{char('g')}</li>
            <li style={ char('h') === props.selectedKey ? currentStyle : null } className="letter">{char('h')}</li>
            <li style={ char('j') === props.selectedKey ? currentStyle : null } className="letter">{char('j')}</li>
            <li style={ char('k') === props.selectedKey ? currentStyle : null } className="letter">{char('k')}</li>
            <li style={ char('l') === props.selectedKey ? currentStyle : null } className="letter">{char('l')}</li>
            <li className="symbol"><span className="off">{char('semicolon')}</span><span className="on">:</span></li>
            <li className="symbol"><span className="off">{char('apostrophe')}</span><span className="on">&quot;</span></li>
            <li className="return lastitem">return</li>
            <li className="left-shift">shift</li>
            <li style={ char('z') === props.selectedKey ? currentStyle : null } className="letter">{char('z')}</li>
            <li style={ char('x') === props.selectedKey ? currentStyle : null } className="letter">{char('x')}</li>
            <li style={ char('c') === props.selectedKey ? currentStyle : null } className="letter">{char('c')}</li>
            <li style={ char('v') === props.selectedKey ? currentStyle : null } className="letter">{char('v')}</li>
            <li style={ char('b') === props.selectedKey ? currentStyle : null } className="letter">{char('b')}</li>
            <li style={ char('n') === props.selectedKey ? currentStyle : null } className="letter">{char('n')}</li>
            <li style={ char('m') === props.selectedKey ? currentStyle : null } className="letter">{char('m')}</li>
            <li className="symbol"><span className="off">{char('comma')}</span><span className="on">&lt;</span></li>
            <li className="symbol"><span className="off">{char('dot')}</span><span className="on">&gt;</span></li>
            <li className="symbol"><span className="off">/</span><span className="on">?</span></li>
            <li className="right-shift lastitem">shift</li>
            <li className="buffer"></li>
            <li style={ " " === props.selectedKey ? currentStyle : null } className="space">&nbsp;</li>
            <li className="buffer lastitem"></li>
        </ul>
    </div>
  );
}

export default Keyboard; 
