const TYPE_THUMB = 'thumb';
const TYPE_INDEX = 'index';
const TYPE_MIDDLE = 'middle';
const TYPE_RING = 'ring';
const TYPE_PINKY = 'pinky';

const HAND_LEFT = 'left'; 
const HAND_RIGHT = 'right';  

const CHARS = {

  sqlQuote: { en: "`", ru: "]", fingerType: TYPE_PINKY, hand: HAND_LEFT },
  one: { en: "1", ru: "1", fingerType: TYPE_PINKY, hand: HAND_LEFT },
  two: { en: "2", ru: "2", fingerType: TYPE_RING, hand: HAND_LEFT },
  three: { en: "3", ru: "3", fingerType: TYPE_MIDDLE, hand: HAND_LEFT },
  four: { en: "4", ru: "4", fingerType: TYPE_INDEX, hand: HAND_LEFT },
  five: { en: "5", ru: "5", fingerType: TYPE_INDEX, hand: HAND_LEFT },
  six: { en: "6", ru: "6", fingerType: TYPE_INDEX, hand: HAND_RIGHT },
  seven: { en: "7", ru: "7", fingerType: TYPE_INDEX, hand: HAND_RIGHT },
  eight: { en: "8", ru: "8", fingerType: TYPE_MIDDLE, hand: HAND_RIGHT },
  nine: { en: "9", ru: "9", fingerType: TYPE_RING,  hand: HAND_RIGHT },
  zero: { en: "0", ru: "0", fingerType: TYPE_PINKY, hand: HAND_RIGHT },
  dash: { en: "-", ru: "-", fingerType: TYPE_PINKY, hand: HAND_RIGHT },
  equalSign: { en: "=", ru: "=", fingerType: TYPE_PINKY, hand: HAND_RIGHT },

  q: { en: "q", ru: "й", fingerType: TYPE_PINKY, hand: HAND_LEFT },
  w: { en: "w", ru: "ц", fingerType: TYPE_RING, hand: HAND_LEFT },
  e: { en: "e", ru: "у", fingerType: TYPE_MIDDLE, hand: HAND_LEFT },
  r: { en: "r", ru: "к", fingerType: TYPE_INDEX, hand: HAND_LEFT },
  t: { en: "t", ru: "е", fingerType: TYPE_INDEX, hand: HAND_LEFT },
  y: { en: "y", ru: "н", fingerType: TYPE_INDEX, hand: HAND_RIGHT },
  u: { en: "u", ru: "г", fingerType: TYPE_INDEX, hand: HAND_RIGHT },
  i: { en: "i", ru: "ш", fingerType: TYPE_MIDDLE, hand: HAND_RIGHT },
  o: { en: "o", ru: "щ", fingerType: TYPE_RING, hand: HAND_RIGHT },
  p: { en: "p", ru: "з", fingerType: TYPE_PINKY, hand: HAND_RIGHT },
  sqBrLeft: { en: "[", ru: "х", fingerType: TYPE_PINKY, hand: HAND_RIGHT },
  sqBrRight: { en: "]", ru: "ъ", fingerType: TYPE_PINKY, hand: HAND_RIGHT },
  backSlash: { en: "\\", ru: "ё", fingerType: TYPE_PINKY, hand: HAND_RIGHT },
  a: { en: "a", ru: "ф", fingerType: TYPE_PINKY, hand: HAND_LEFT, isHomeRow: true },
  s: { en: "s", ru: "ы", fingerType: TYPE_RING, hand: HAND_LEFT, isHomeRow: true },
  d: { en: "d", ru: "в", fingerType: TYPE_MIDDLE, hand: HAND_LEFT, isHomeRow: true },
  f: { en: "f", ru: "а", fingerType: TYPE_INDEX, hand: HAND_LEFT, isHomeRow: true },
  g: { en: "g", ru: "п", fingerType: TYPE_INDEX, hand: HAND_LEFT },
  h: { en: "h", ru: "р", fingerType: TYPE_INDEX, hand: HAND_RIGHT },
  j: { en: "j", ru: "о", fingerType: TYPE_INDEX, hand: HAND_RIGHT, isHomeRow: true  },
  k: { en: "k", ru: "л", fingerType: TYPE_MIDDLE, hand: HAND_RIGHT, isHomeRow: true  },
  l: { en: "l", ru: "д", fingerType: TYPE_RING, hand: HAND_RIGHT, isHomeRow: true  },
  semicolon: { en: ";", ru: "ж", fingerType: TYPE_PINKY, hand: HAND_RIGHT, isHomeRow: true  },
  apostrophe: { en: "'", ru: "э", fingerType: TYPE_PINKY, hand: HAND_RIGHT },
  z: { en: "z", ru: "я", fingerType: TYPE_PINKY, hand: HAND_LEFT },
  x: { en: "x", ru: "ч", fingerType: TYPE_RING, hand: HAND_LEFT },
  c: { en: "c", ru: "с", fingerType: TYPE_MIDDLE, hand: HAND_LEFT },
  v: { en: "v", ru: "м", fingerType: TYPE_INDEX, hand: HAND_LEFT },
  b: { en: "b", ru: "и", fingerType: TYPE_INDEX, hand: HAND_LEFT },
  n: { en: "n", ru: "т", fingerType: TYPE_INDEX, hand: HAND_RIGHT },
  m: { en: "m", ru: "ь", fingerType: TYPE_INDEX, hand: HAND_RIGHT },
  comma: { en: ",", ru: "б", fingerType: TYPE_MIDDLE, hand: HAND_RIGHT },
  dot: { en: ".", ru: "ю", fingerType: TYPE_RING, hand: HAND_RIGHT },
  slash: { en: "/", ru: "/", fingerType: TYPE_PINKY, hand: HAND_RIGHT }
};

export default CHARS; 
