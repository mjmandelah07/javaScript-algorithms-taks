const rot13 =(str) => {
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    newStr += letterShifter(str[i], 13);
  }
  return newStr;
}
const letterShifter = (a, text) => {
  a.toUpperCase();
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var newIndex = (alphabet.indexOf(a) + text) % 26;
  return alphabet.includes(a) ? alphabet[newIndex] : a;
}

console.log(rot13("SERR PBQR PNZC"));
