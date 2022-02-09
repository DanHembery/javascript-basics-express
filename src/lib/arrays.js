const getNthElement = (index, array) => {
  m = (array.length);
  if(index>0){
    index = index % m;
  };
  return array[index];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
 
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index,1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings.map(f => f.toUpperCase());
  };

const reverseWordsInArray = strings => {
  return strings.map(f => f
    .split("")
    .reverse()
    .join(""))
};

const onlyEven = numbers => {
  return numbers.filter(f => f % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  let arrayNew = array.slice();
  arrayNew.splice(index, 1);
  return arrayNew;
};

const elementsStartingWithAVowel = strings => {
  let vowelCheck = /^[aeiouAEIOU]/i;
  let newArray = strings.filter(strings => vowelCheck.test(strings));
  return newArray;
};

const removeSpaces = string => {
  let noSpace = string.replace(/ /g, "");
  return noSpace;
};

const sumNumbers = numbers => {
  return numbers.reduce((a, c) =>
    a + c, 0);
  };

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1)
  - b.charCodeAt(b.length - 1));  
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
