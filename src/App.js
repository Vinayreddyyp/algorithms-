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
       arr[i] = arr[arr.length - 1 - i];
       arr[arr.length - 1 - i] = tempVar;
    }
    return arr;
};
reverseArrayInPlace([1,2,3,5,6]);

/* calculating mean median and mode and return an object have three values */
 
function MeanMedianMode(array) {
   return {
      mean: getMean(array),
      median: getMedian(array),
      mode: getMode(array)
    }
}



function getMean(array) {
  var sum = 0;
    array.forEach(num => {
      sum += sum;
    });
    var mean = sum/ array.length;
    return mean;
};
function getMedian(array) {
 
  array.sort((a,b)=> {
    return a-b;
  });
  console.log("array sorted", array);
  var median;

  if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)];
    console.log("median is", median);
  } else {
    var mid1 = array[(array.length/2) - 1];
    console.log("mid1", mid1);
    var mid2 = array[array.length / 2];
    console.log("mid2", mid2);
    median = (mid1 + mid2)/2;
    console.log("median is", median);
  }
  return median;
}


function getMode(array) {
   var modeObj = {};
   debugger;
    array.forEach(num => {
       if(!modeObj[num]) {
          modeObj[num] = 0;
          console.log("modeObj",  modeObj[num]);
          modeObj[num]++;
       }
    });
    console.log("modeObj", modeObj);
    var maxFrequency = 0;
    var modes = [];
    for (var num in modeObj) {
      console.log("nums", num);
      if (modeObj[num] > maxFrequency) {
        console.log("modeObj[num]", modeObj[num]);
        modes = [num];
        console.log("modes = [num]]", modes);
        maxFrequency = modeObj[num];
        console.log(" maxFrequency = modeObj[num]",  maxFrequency);
      }
      else if (modeObj[num] === maxFrequency) modes.push(num);
      console.log("push modes", modes);
    }
    // if every value appears same amount of times 
    if (modes.length === Object.keys(modeObj).length){
      modes = [];
      console.log("", modes);
    }
    return modes;

};
MeanMedianMode([10,23,10,23]);


  return (
    <div className="App">

    </div>
  );
}

export default App;
