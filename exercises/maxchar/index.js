// // --- Directions
// // Given a string, return the character that is most
// // commonly used in the string.
// // --- Examples
// // maxChar("abcccccccd") === "c"
// // maxChar("apple 1231111") === "1"
//
// function maxChar(str) {
//   var letterMap = {};
//   var maxSize = 0;
//   var maxLetter;
//   str.split().forEach((e,i,a) => {
//     if (!letterMap[e]) {
//       letterMap[e] = 1;
//     } else {
//       lettermap[e]++
//     }
//   })
//   for (let letter in letterMap) {
//     if (letter >= maxSize) {
//       maxLetter = letter;
//     }
//   }
//   return maxLetter;
// }
//
// module.exports = maxChar;




var x = 1;
var y = 9;



function closureTest() {
  var y = 2;
  var z = 3;
  if (true) {
    let m = 88;
    var k = 99
  }

}

closureTest()

console.log("X:", x);
console.log("y:", y);
