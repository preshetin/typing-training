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
            <li className="letter">{char('q')}</li>
            <li className="letter">{char('w')}</li>
            <li className="letter">{char('e')}</li>
            <li className="letter">{char('r')}</li>
            <li className="letter">{char('t')}</li>
            <li className="letter">{char('y')}</li>
            <li className="letter">{char('u')}</li>
            <li className="letter">{char('i')}</li>
            <li className="letter">{char('o')}</li>
            <li className="letter">{char('p')}</li>
            <li className="symbol"><span className="off">{char('sqBrLeft')}</span><span className="on">{"{"}</span></li>
            <li className="symbol"><span className="off">{char('sqBrRight')}</span><span className="on">{"}"}</span></li>
            <li className="symbol lastitem"><span className="off">{char('backSlash')}</span><span className="on">|</span></li>
            <li className="capslock">caps lock</li>
            <li className="letter">{char('a')}</li>
            <li className="letter">{char('s')}</li>
            <li className="letter">{char('d')}</li>
            <li className="letter">{char('f')}</li>
            <li className="letter">{char('g')}</li>
            <li className="letter">{char('h')}</li>
            <li className="letter">{char('j')}</li>
            <li className="letter">{char('k')}</li>
            <li className="letter">{char('l')}</li>
            <li className="symbol"><span className="off">{char('semicolon')}</span><span className="on">:</span></li>
            <li className="symbol"><span className="off">{char('apostrophe')}</span><span className="on">&quot;</span></li>
            <li className="return lastitem">return</li>
            <li className="left-shift">shift</li>
            <li className="letter">{char('z')}</li>
            <li className="letter">{char('x')}</li>
            <li className="letter">{char('c')}</li>
            <li className="letter">{char('v')}</li>
            <li className="letter">{char('b')}</li>
            <li className="letter">{char('n')}</li>
            <li className="letter">{char('m')}</li>
            <li className="symbol"><span className="off">{char('comma')}</span><span className="on">&lt;</span></li>
            <li className="symbol"><span className="off">{char('dot')}</span><span className="on">&gt;</span></li>
            <li className="symbol"><span className="off">/</span><span className="on">?</span></li>
            <li className="right-shift lastitem">shift</li>
            <li className="space lastitem">&nbsp;</li>
        </ul>
    </div>
  );
}

export default Keyboard; 
