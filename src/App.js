import React from 'react';

import './App.css';
import { validate } from '@babel/types';

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

// function reverseArrayInPlace(arr) {
//     for(var i = 0; i < arr.length/2; i++) {
//        var tempVar = arr[i];
//        arr[i] = arr[arr.length - 1 - i];
//        arr[arr.length - 1 - i] = tempVar;
//     }
//     return arr;
// };
// reverseArrayInPlace([1,2,3,5,6]);

/* calculating mean median and mode and return an object have three values */
 
// function MeanMedianMode(array) {
//    return {
//       mean: getMean(array),
//       median: getMedian(array),
//       mode: getMode(array)
//     }
// }

// function getMean(array) {
//   var sum = 0;
//     array.forEach(num => {
//       sum += sum;
//     });
//     var mean = sum/ array.length;
//     return mean;
// };
// function getMedian(array) {
 
//   array.sort((a,b)=> {
//     return a-b;
//   });
//   console.log("array sorted", array);
//   var median;

//   if (array.length % 2 !== 0) {
//     median = array[Math.floor(array.length / 2)];
//     console.log("median is", median);
//   } else {
//     var mid1 = array[(array.length/2) - 1];
//     console.log("mid1", mid1);
//     var mid2 = array[array.length / 2];
//     console.log("mid2", mid2);
//     median = (mid1 + mid2)/2;
//     console.log("median is", median);
//   }
//   return median;
// }


// function getMode(array) {
//    var modeObj = {};
//    debugger;
//     array.forEach(num => {
//        if(!modeObj[num]) {
//           modeObj[num] = 0;
//           console.log("modeObj",  modeObj[num]);
//           modeObj[num]++;
//        }
//     });
//     console.log("modeObj", modeObj);
//     var maxFrequency = 0;
//     var modes = [];
//     for (var num in modeObj) {
//       console.log("nums", num);
//       if (modeObj[num] > maxFrequency) {
//         console.log("modeObj[num]", modeObj[num]);
//         modes = [num];
//         console.log("modes = [num]]", modes);
//         maxFrequency = modeObj[num];
//         console.log(" maxFrequency = modeObj[num]",  maxFrequency);
//       }
//       else if (modeObj[num] === maxFrequency) modes.push(num);
//       console.log("push modes", modes);
//     }
//     // if every value appears same amount of times 
//     if (modes.length === Object.keys(modeObj).length){
//       modes = [];
//       console.log("", modes);
//     }
//     return modes;

// };
// MeanMedianMode([10,23,10,23]);

/* Two sum algorithm ehich takes as array and number returns every pair of numbers from 
  'numArray' that adds upto the sum */

  // function findTwoSum(numArray, sum) {
  //    var pairs = [];
  //    var hashTabel = [];
  //   //  debugger;
  //    for (var i=0; i < numArray.length; i++) {
  //       var currentNum = numArray[i];
  //       //debugger;
  //       console.log("hashTabel", hashTabel);
  //       console.log("current number", currentNum);
  //       var counterPart = sum - currentNum;
  //       if(hashTabel.indexOf(counterPart) !== -1) {
  //         pairs.push([currentNum, counterPart]);
  //       }
  //       hashTabel.push(currentNum);
  //    }
  //    console.log("pairs", pairs);
  // }
  // findTwoSum([2,0,3,2,34], 1);


  /* Binat Search operation takes two arguments  array and key and returns true once it matches with key*/
  // function BinarySearch(numArray, key) {
  //     var middleIndx = Math.floor(numArray.length/2);
  //     var middleElem = numArray[middleIndx];
  //     if(middleElem === key) return true;
  //     else if(middleElem < key && numArray.length > 1) {
  //       return BinarySearch(numArray.splice(middleIndx, numArray.length), key);
  //     } else if(middleElem > key && numArray.lenght > 1) {
  //        return BinarySearch(numArray.splice(0, middleIndx), key);
  //     }
  // }
  // BinarySearch([56,5,6,7,8,9,13,15,16,36], 56);

  /* Memoized BInary Search operation with more fast execution */
  // function fibMemo(index, cache) {
  //  console.log("before", cache);
  //   cache = cache || [];
  //   console.log("cache", cache);
  //   debugger;
  //   if (cache[index]) return cache[index];
  //   else {
  //     if (index < 3) return 1;
  //     else {
  //       cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
  //     }
  //   }
  //   return cache[index];
  // }
   
  //fibMemo(3);
  // function primeNumber(num) {
  //    var primes = [];
  //    for(var i=0; i<=num; i++) {
  //       primes[i] = true;
  //    }
  //    console.log("primes", primes);
  //    primes[0] = false;
  //    primes[1] = false;


  //    for(var i=2; i<Math.sqrt(num); i++) {
  //      for(var j=2; i*j <=num; j++) {
  //        primes[i*j] = false;
  //      }
  //    }
  //    console.log("primes", primes);

  //    var result =[];
  //    debugger;
  //    for(var i=0; i<primes.length; i++) {
  //      if(primes[i]) result.push(i);
  //      console.log("primes result", result);
  //    }
  //    return result;
    
  // }
  // primeNumber(5)
//   function bubbleSort(array) {
//     debugger;
//     for (var i = array.length; i > 0; i--) {
//       for (var j = 0; j < i; j++) {
//         if (array[j] > array[j + 1]) {
//           var temp = array[j];
//           console.log("temp value", temp);
//           array[j] = array[j + 1];
//           console.log("swap value", array[j] = array[j + 1]);
//           array[j + 1] = temp;
//         }
//       }
//     }
    
//     return array;
// }
 
// bubbleSort([5,4,1]);

// function mergeSort(arr) {
//   if(arr.length < 2) {
//      return arr
//   }
//     var middleIndex = Math.floor(arr.length/2);
//     debugger;
//     var firstHalf = arr.slice(0,middleIndex);
//     var secondHalf = arr.slice(middleIndex);
    
//     return merge(mergeSort(firstHalf), mergeSort(secondHalf));

// }

//  function merge(arr1, arr2) {
//    var result = [];
//    debugger;
    
//   while(arr1.length && arr2.length) {
//     var minElem;
//     if(arr1[0] < arr2[0]) {
//       minElem = arr1.shift();
//     } else minElem = arr2.shift();

//     result.push(minElem);
//   }
//   if(arr1.length) {
//      result = result.concat(arr1);
//   } else      result = result.concat(arr2);
//    return result;
//  }
// mergeSort([4,5,3]);

// function mergeSort(arr) {
//      if(arr.length < 2 ) return arr;
//      debugger;
//         var middleEle = Math.floor(arr.length/2);
//         var arr1 = arr.splice(0,middleEle);
//         var arr2 = arr.splice(middleEle);
//       return merge(mergeSort(arr1), mergeSort(arr2));
// }

// function merge(arr1, arr2) {
//    var result = [];
//    debugger;
//    console.log("result", result);
//    var minEle;
//   while(arr1.length && arr2.length) {
//      if(arr1[0] < arr2[0]) {
//         minEle = arr1.shift();
//      } else minEle =  arr2.shift();
     
//      result.push(minEle); 
//   }

//   if(arr1.length) {
//     result = result.concat(arr1);
//   } else result = result.concat(arr2);
//    return result;
// }

// mergeSort([3,4,1]);
// function maxStockProfit (pricesArr) {
//   var maxProfit = -1;
//   var buyPrice = 0;
//   var sellPrice = 0;
  
//   var changeBuyPrice = true;
//    debugger;
//   for (var i = 0; i < pricesArr.length; i++) {
//     if (changeBuyPrice) buyPrice = pricesArr[i];
//     sellPrice = pricesArr[i + 1];
//     debugger;
//     if (sellPrice < buyPrice) {
//       changeBuyPrice = true;
//     }
//     else {
//       var tempProfit = sellPrice - buyPrice;
//       if (tempProfit > maxProfit) maxProfit = tempProfit;
//       changeBuyPrice = false;
//     }
//   }
  
//   return maxProfit;
// }
 
// maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]);

// function maxStockProfit(arr) {
//     var maxProfit = -1;
//     var buyPrice = 0;
//     var sellPrice = 0;
//     var currentBuyPrice = true;
//     debugger;
//     for(var i=0; i < arr.length; i++) {
//         if(currentBuyPrice) {
//           buyPrice = arr[i];
//           sellPrice = arr[i + 1];
//         }
//         if(sellPrice < buyPrice) {
//           currentBuyPrice = true;
//         } else {
//           var tempProfit = sellPrice - buyPrice;
//           if(tempProfit > maxProfit) {
//             maxProfit = tempProfit;
//             currentBuyPrice = false
//           }
       
//         }
     
//     }
//     return maxProfit;
// };
// maxStockProfit([4,3,6,8,9,12,3,4]);

// function charCount(str) {
//    var charObj = {};
//    debugger;
//     for( var char of str) {
//         char = char.toLowerCase();
//         charObj[char] = ++charObj[char] || 1;
//     }
//     return charObj;
// }

// charCount("hello hi");
// function  anagrams(first, second) {
//   let lookUp = {};
//   debugger;
//   for( let i=0; i < first.length; i++) {
//        let letter = first[i];
//       lookUp[letter] ? lookUp[letter] +=1 : lookUp[letter] = 1;
//   }

//   for( let j =0; j < second.length; j++) {
//       let letter = second[j];
//       if(!lookUp[letter]) {
//           return false
//       } else {
//         lookUp[letter] -= 1;
//       }
//   };
//   return true;
// };
// anagrams('cinema', 'iceman');

// function counterValuePattern(arr) {
//     var i =0;
//     debugger;
//     for(var  j=1; j < arr.length; j++) {
//        if(arr[i] !== arr[j]) {
//          i++;
//          arr[i] = arr[j];
//          console.log(  arr[i] = arr[j]);
//        }
//     }
//     return i+1;
// }
// counterValuePattern([1,2,3,3,5,4,7,5,5,5]);
// function maxSubarraySum(arr, num){
//   let maxSum = 0;
//   let tempSum = 0;
//   debugger;
//   if (arr.length < num) return null;
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum;
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum;
// }

// maxSubarraySum([2,6,9,2,1,8,5,6,3],3)

function sumRange(num) {

    if(num ===1) return 1;
    return num + sumRange(num -1);
};
sumRange(3);

// function areDuplicates(val) {
//   let var1 = val.toString();
//   let counter = {};
//   debugger;
//   for(let i=0; i < var1.length; i++) {
//      counter[ var1[i]] = (counter[ var1[i]] || 0) + 1
//   };
//   console.log("counter", counter);
// };
// areDuplicates(1,2,3);

function binarySearch(arr, ele) {
   let start = 0;
   let  end = arr.length - 1; 
   let middle = Math.floor((start + end) /2);
   console.log("middle", middle)
   while( arr[middle] !== ele && start <= end) {
     debugger;
      if( ele < arr[middle] ) end = middle -1;
      else start = middle + 1;
      middle =  Math.floor((start + end) /2);
      console.log("middle", middle);
   };
 return arr[middle] === ele ? middle : -1;
    
};
binarySearch([2,3,4,6,7,9,10,40,49], 50);

  return (
    <div className="App">

    </div>
  );
}

export default App;
