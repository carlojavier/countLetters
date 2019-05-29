// first step is to get the string
var uniqueString = "Lighthouse in the house";
function countLetters(str) {
  // set up empty object
  var myObject = {};
  // then eliminate the spaces and split the string into individual characters
  var noSpaces = str.split(" ").join("");
  for (var i = 0; i < noSpaces.length; i++) {
    var newLetter = noSpaces[i];
    if (myObject[newLetter]) {
       myObject[newLetter] ++
       } else {
       myObject[newLetter] = 1;
       }
  }
  return myObject
}

console.log(countLetters(uniqueString));