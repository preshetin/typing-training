export const exerciseIsFinished = (stringsArr, globalIndex) => {

  return getLengthsArr(stringsArr).reduce((acc, val) => acc + val) - 1 === globalIndex;
}

export const getStringIndexByGlobalIndex = (stringsArr, globalIndex) => {
    const result = globalIndex - getMinsArray(stringsArr, globalIndex)[getArrayIndexByGlobalIndex(stringsArr, globalIndex)]; 
    return result;
  }

export const getArrayIndexByGlobalIndex = (stringsArr, globalIndex) => {
    const minsArray = getMinsArray(stringsArr);
    const maxesArray = getMaxesArray(stringsArr);
    let resultIndex;
    stringsArr.forEach((_, index) => {
      if (globalIndex >= minsArray[index] && globalIndex <= maxesArray[index] ) {
        resultIndex = index;
      }
    });
    return resultIndex;
  }

export const getCharByGlobalIndex = (stringsArr, globalIndex) => {
  const currentString = stringsArr[getArrayIndexByGlobalIndex(stringsArr, globalIndex)];
  return currentString[getStringIndexByGlobalIndex(stringsArr, globalIndex)];
}

const getLengthsArr = (stringsArr) => {
  return stringsArr.map(arr => arr.length);
}

const getMaxesArray = (stringsArr) => {
  const resultArr = [];
  const lengthsArr = getLengthsArr(stringsArr);
  lengthsArr.forEach((length, index) => {
    if (index === 0) {
      resultArr.push(length - 1);
    } else {
      resultArr.push(resultArr[index - 1] + length );
    }
  });
  return resultArr;
}

const getMinsArray = (stringsArr) => {
  const maxesArray = getMaxesArray(stringsArr);
  const lengthsArr = getLengthsArr(stringsArr);
  const minsArray = [];
  lengthsArr.forEach((length, index) => {
    if (index === 0) {
      minsArray.push(0);
    } else {
      minsArray.push(maxesArray[index - 1] + 1);
    }
  });
  return minsArray;
}

