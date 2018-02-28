// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  /* SHORTEST */
  // return str.split('').reverse().join('');

  /* FOR LOOP */
  // var letterArray = str.split('');
  // var reversedArray = [];
  // for (var i = 0; i <= letterArray.length; i++) {
  //   reversedArray.push(letterArray[letterArray.length - i])
  // }
  // return reversedArray.join('');

  /* FOR of LOOP */
  // let reversedString = '';
  //
  // for (let character of str) {
  //   reversedString = character + reversedString;
  // }
  // return reversedString;

}

module.exports = reverse;
