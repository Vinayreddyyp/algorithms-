import React from 'react';

import './App.css';

function App() {
  
//   function caesarCipher(text,num) {
//     let newText = text.split('');
//     let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
//     let newString = '';
//   newText.forEach(word => {
//        let currentLetter = word
//       console.log("word", word);
//         let currentIndex = alphabets.indexOf(word);
//         let newIndex = currentIndex + num;
//         if(currentLetter === '') {
//           newString += currentLetter
//           console.log("please send proper text");
//         }
//         if(newIndex > 26) {
//            newIndex = newIndex - 26
//         } else if(newIndex < 0)  {
//            newIndex = 26 + newIndex;
//            console.log("newIndex", newString += alphabets[newIndex]);
//         } else newString += alphabets[newIndex]
//         console.log("newIndex", newString += alphabets[newIndex]);
//     });
//     console.log("newString", newString);
//     return newString;
// };
// caesarCipher("", 3);

/* takes a string as a parameter, reverse the each string and return as a new parameter */

// function reverseWords(string) {
//   var wordsArr = string.split(' ');
//   var reverseWordArr = [];
//   wordsArr.forEach(word => {
//       var reversedWord = '';
//       for(var i = word.length - 1 ; i >=0; i--) {
//         reversedWord += word[i];
//         console.log("joining the word", reversedWord);
//       }
//       reverseWordArr.push(reversedWord);
//   });

//   return reverseWordArr.join('');
   
// };
// reverseWords('vinay');

/* Reverse Array in place it takes array as parameter reverse the array and teturns reversed arr*/

function reverseArrayInPlace(arr) {
    for(var i = 0; i < arr.length/2; i++) {
       var tempVar = arr[i];
       debugger;
       arr[i] = arr[arr.length - 1 - i];
       arr[arr.length - 1 - i] = tempVar;
    }
    return arr;
};
reverseArrayInPlace([1,2,3,5,6]);

  return (
    <div className="App">

    </div>
  );
}

export default App;
