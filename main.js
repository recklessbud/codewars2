// alert('pp')
//im up in this bitch again


// This function should return an object, but it's not doing what's intended. What's wrong?
function mystery() {
    var results =  {sanity: 'Hello'};
    return results;
  }

  // doing a codewar morroe

  /*In some scripting languages like PHP, there exists a logical operator
   (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata).
   The exclusive or evaluates two booleans. It then returns true if exactly one of the two 
   expressions are true, false otherwise.
   Since we cannot define keywords in Javascript (well, at least I don't know how to do it), 
   your task is to define a function xor(a, b) where a and b are the two expressions to be 
   evaluated. Your xor function should have the behaviour described above, returning true if 
   exactly one of the two expressionsevaluate to true, false otherwise.*/
   function xor(a, b) {
    // TODO: Program Me 
      if ((a === true  && b === false) || (a === false && b === true) ){
        return true;
      }else{
        return false
      }
     
  }

  /*Create a function called _if which takes 3 arguments: a value bool and 2 functions 
  (which do not take any parameters): func1 and func2
When bool is truthy, func1 should be called, otherwise call the func2. */
function _if(bool, func1, func2) {
  // ...
     if(bool){
       func1()
     }else{
        func2()
     }
}


  // reversing a string ...  using the split, reverse and join
  function solution(str){
    return str.split('').reverse().join('')
  } 
  

  
     //square every element in an array
     function numArr(ms) {
         
     }


     // 7kyu fizzbuzz
     function fizzbuzz(n)
     {
       //declare the array variable
       var list = []; 
       //declare for loop
       for (let i=1 ; i<=n ;  i++)
       //When number is divisible by both 3 & 5
       {
         var num = "";
         if ( i % 3 == 0 && i % 5 == 0 ) {
           num ="FizzBuzz"
           list.push(num);
           }
         //When a number is divisible by three only
         else if ( i % 3 == 0 ) {
           num ="Fizz";
           list.push(num);
           }
         //When a number is divisible by five only
         else if (i % 5 == 0){
           num = "Buzz";
           list.push(num);
         }  
         //When a number isn't divisible by either
         else {
           num = i;
           list.push(i)};
        ;
       }
       // return the list
       return list;
       
     }        


// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.
function testEven(n) {
//Your awesome code here!
if(n % 2 === 0){
return true
}else{
return false
}
}



// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
  //your code goes here    
   if(n >= 10){
     return  "Great, now move on to tricks"
   }else{
     return  "Keep at it until you get it"
   }
}

// Given a set of numbers, return the additive inverse of each. 
// Each positive becomes negatives, and the negatives become positives.

function invert(array) {
  let newArr = [];
  
   for(let i = 0; i < array.length; i++){
     const goes = array[i]
        if(goes < 0){
          let b = goes * -1
            newArr.push(b)
        }else if(goes > 0){
          let b = -goes
            newArr.push(b)
        }else{
          newArr.push(-0)
  }
   }
  return newArr
}

  // other solution
  function invert(array) {
    return array.map((num) => -num);
 }

//  7kyu i couldnt solve
  /*A square of squares
You like building blocks. You especially like building blocks that are squares.
 And what you even like more,is to arrange them into a square of square building blocks!
However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary 
rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain…
 Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.*/

var isSquare = function(n){
  if(Math.sqrt(n) % 1 === 0){
    return true
  }else{
    return false
    
  }
}


/* Given an array of integers your solution should find the smallest integer.
For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied
 array will not be empty.* */

 class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}


/**Complete the function that takes two integers (a, b, where a < b) and 
 * return an array of all integers 
 * between the input parameters, including them. */

    function name(pa, ras) {
        let newAr = []
          for (let index = pa; index <= ras; index++) {
            const element = array[index];
            newArr.push(element)
          }
          return newAr
    }

/**Complete the solution so that it returns true if the first argument(string)
 *  passed in ends with the 2nd argument (also a string). */

  function  starAt(par, ams) {
    return par.endsWith(ams)
  }
  /**Given an array of numbers, check if any of the numbers are 
   * the character codes for lower case vowels (a, e, i, o, u).
   If they are, change the array value to a string of that vowel.
  Return the resulting array. */
  
  //make the function
   function  isVowel(a) {
      //making the loop
       for (let index = 0; index < a.length; index++) {
          if (a[index] === 97  || a[index] === 101 || a[index] === 105 || a[index] === 111 || a[index] === 117) {
            var allNum = a[index]
            let all  = String.fromCharCode(allNum)
            a[index] = all
          }
        }
        return a
    }
  

   console.log(isVowel([60, 78, 87, 97, 100, 101, 103, 105, 106, 111, 115, 117 ]))



  //  Complete the square sum function so that it squares each number passed into it and then sums the results together.
  // For example, for [1, 2, 2] it should return 9 because 

    function num(nums){
      // let newAr =[]
      let allSum = 0
      for(let i = 0; i < nums.length; i++){
          const square = nums[i] * nums[i]
          // newAr.push( square + nums[i])
          allSum += square
          // newAr.push(allSum)
            // console.log(allSum)
      }
      return allSum
    }

  // console.log(num([1, 2, 2])


  //Consider an array/list of sheep where some sheep may be missing from their place. 
  // We need a function that counts the number of sheep present in the array (true means present).
  function countSheep(ms) {
    let presentSheep = 0
      for (let i = 0; i < ms.length; i++) {
        if(ms[i] === true){
          presentSheep++
        }
      }
      return presentSheep
  
  
  }
  //  console.log(countSheep([true, true ,false, true]))
// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's
//  the first non-consecutive number.
// If the whole array is consecutive then return null2.
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique 
// and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges
// 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a
//  single number and is not tested for, but you can write your own example test. )

 
  function nonConNum(arr) {
    //sort the array to check if its ascending order
      arr.sort((a , b) => a - b) //sorted array
      for (let i = 0; i < arr.length - 1; i++) {//for loop to iterate through all the elements in the array thr length-1 because i dont have to go thhe end
        //if statement to check if the current element plus one is not equal to the next element plus one
           if(arr[i] + 1 !== arr[i + 1]){
            //if its not plus one return the next element
            return arr[i+1]
         }
      // return null if all are consecutive
      }   return null
  }



// console.log(nonConNum([1,2,3,4,5]))


// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 2
// Note: if there is nothing to sum, the sum is default to 0.

function sumOfPositive(arr) {
  let sum = 0
   for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
      if(element > 0)
       sum += element
    
   }
  return sum
}
// another solution usind reduce
  function positiveSum(array) {
    return array.reduce((acc, c)=>{
      if(c > 0){
        return acc + c
      }
      return acc
    }, 0)
  }
// console.log(positiveSum([2,3,-2,5]))

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string
   function fakeBin(arr) {
      let string = ''
       for (let index = 0; index < arr.length; index++) {
        const element = arr[index]
          if(parseInt(element) < 5){
             string += '0'
          }else{
            string += "1"
          }
        
       }
       return string
   }


  //  console.log(fakeBin(['89530']))
  // You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) 
  // and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

   function twoSort(par) {
      par.sort((a,b) => a.localeCompare(b))
       const getString = par[0]
           const result = Array.from(getString).join('***')       
           return result
      // return someString.split('').join('***')
   }

   const list = ['bad', 'good', 'bitcoin', "are", 'cat']
    //  const twoSortFunc = twoSort(list);
    //  console.log(twoSortFunc)\


    

// Yes, that's absolutely correct! Your solution is concise and it achieves the desired outcome. It sorts the array of strings
// / alphabetically, retrieves the first string, splits it into an array of characters, and then joins them back together
//  with "***" in between each character
    function sortlist(pop){
         return pop.sort()[0].split('').join('***')
    }

    let twoSortFunc = sortlist(list)
    // console.log(twoSortFunc)


      // Write a function that merges two sorted arrays into a single one. The arrays only contain integers. 
      // Also, the final outcome must be sorted and not have any duplicate.

      function mergeArrays(par, ams) {
        //  return [...new Set([...par, ...ams])].sort((a,b)=> a -b)
           const combineArr = par.concat(ams)
             const sorted  = combineArr.sort((x,y)=> x-y)
            //  e is element and i is index 
             const result = sorted.filter((e, i) => sorted.indexOf(e)==i )
             return result
      }

      // console.log(mergeArrays([1,2,4,3], [4,5,6]))



// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
// The order of the sequence has to stay the same.
function distinct(a) {
  const filteredArray = a.filter((e, i) => a.indexOf(e) === i)
  return filteredArray;}



// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
//  You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str){
 //You got this!
   return str.slice(1,-1)
};


// You are given a string containing a sequence of character sequences separated by commas.
// Write a function which returns a new string containing the same character sequences except the first and the last ones
//  but this time separated by spaces.
// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty,
//  return an empty value (represented as a generic value NULL in the examples below).

// Examples


function array(string) {
  // TODO
    let sequence =  string.split(',')
      sequence = sequence.slice(1, -1)
      let all = sequence.join('')
    return all !== '' ? all : null  //(if statement teniary operators)
}

// console.log(array('A1,B2,43'))

// console.log('all')

  // Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 
// 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
function countPos(input){
  // let newAr = []
   let countPos = 0
   let countNeg = 0
  if (input = [] || input === null || input === 0 ) {
    return []
  }
    
  for (let index = 0; index < input.length; index++) {
        const element = input[index];
        if (element < 0) {
            countNeg += element
        }else{
           countPos++
        }
        
       }

        // (some)
       return [countPos, countNeg]
}

  // console.log(countPos([]))
/**I'm new to coding and now I want to get the sum of two arrays...
 *  Actually the sum of all their elements. I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too. */
  function arrayPlus(arr1, arr2) {
    let array = arr1.concat(arr2)
     let allSSum = array.reduce((acc, c)=>{
        return acc + c
     }, 0)
        
    return allSSum;
  }
  // console.log(arrayPlus([1,2], [3,1]))


  //  const newAr = [1,3,4,5]
  //  console.log(newAr.lastIndexOf(2))


  // leetcode 1 
  /**Given an integer n, return a counter function. This counter function initially returns n and 
   * then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc). */
  var createCounter = function (n) {
    return function () {
        return n++
    };
  };

   let count = createCounter(10)

  //  Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
     function evenOrOdd(number) {
       if (number % 2 === 0) {
         return "Even";
       } else {
         return "Odd";
       }
     }
     /**In this simple exercise, you will build a program that takes a value, integer , 
      * and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well.
      * 3 There will only ever be positive integers passed into the function, not consisting of 0. 
      * The limit will always be higher than the base.
For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6. */


     function findMultiples(integer, limit) {
       //your code here
        if(integer <= 0 || limit <= 0 || limit <= integer)
        {  return null;}
          
           let multipleArray = []
             for (let i = integer; i < limit; i += integer) {
                 multipleArray.push(i)
              
             }
             if(limit % integer === 0){
                multipleArray.push(limit)
             }
             return multipleArray
     }

    //  console.log(findMultiples(2, 6))
     /**Input: Array of elements
          ["h","o","l","a"]Output: String with comma delimited elements of the array in th same order.
             "h,o,l,a" */
            const printAll = input =>{
              return input.toString()
            }


   // Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.


    function printArr(input){
      let newAr = []
          for (let index = 0; index < input.length; index++) {
            const element = input[index];
            if (index % 2 === 0) {
              newAr.push(element)
            }
            
          }
          return newAr
    }

    console.log(printArr(['h','o','l','a','q', "7"])) 


    /**What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.

 */

    function stringLength(str){
       const words = str.split(" ")
        let newAr = []
           for(let i = 0; i < words.length; i++){
            let element = words[i]
               let eleLength = element.length
              newAr.push(element + " " + eleLength)
           }
        return newAr
    }


// console.log(stringLength(['p','loptttt', 'pork', 'cedis']))

/**Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. 
 * The box is special because it has the ability to change gravity.
There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. 
At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, 
it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). 
Below is an example of what a box of cubes might look like before and after switching gravity. 
Given the initial configuration of the cubes in the box, find out how many cubes are in
 each of the n columns after Bob switches the gravity.

 */
const flip=(d, a)=>{
  if(d === 'R') {
    return a.sort((a, b) => a - b)
  } else if (d === 'L') {
    return a.sort((a, b) => b - a)
  } else {
  return console.log("Please anter a valid direction")
  }
}

// console.log(flip("R",[4,6,7] ))

// m

function findAverage(array) {
  // your code here
if (array.length === 0) {
   return 0;
}
   
  
   let allSum = 0;
  
  
  for (let i = 0; i < array.length; i++) {
      const element = array[i]
      allSum += element

  }
  // return allSum
   const sum = allSum / array.length
      // newArr.push(sum)
  return sum;
}
 
//  console.log(findAverage([]))
// Write a function to split a string and convert it into an array of words.
  function stringToArr(string){
     const split = string.split(" ")
     return split 
  }

  console.log(stringToArr('i love you'))

/**The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.
Task:Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), 
return the name of the chosen Player(name is a property of Player objects, e.g Player.name) */


  function duckDuckGoose(players, goose) {
    // Ensure the gooseIndex is within bounds
    // ...
    for (let i = 0; i < players.length; i++) {
      if (i === (goose - 1) % players.length) {
        return players[i].name;
      }
    }
  }

    // first 7kyu
    // looping through an array in the reverse order
    /**An element in an array is dominant if it is greater than all elements to its right. 
     * You will be given an array and your task will be to return a list of all dominant elements. */

      function reverseArray(arr){
        //declare a variable to be an empty array
        const newArr = []
        //  loop through the give array from the right to left
          for(let i = arr.length -1; i >=0; i--){
            // set a dominant varaible to true if it is
             let isGreater = true
            //  now iterate through the reversed array 
              for(let j = i + 1; j < arr.length; j++){
                // compare the elements in the array
                if(arr[i] <= arr[j]){
                  isGreater = false
                  break;//if the value is no longer dominant or equal is found break stop
                }
              }
              if(isGreater){
                //push the element  dominant or equal to the dominant number;
                newArr.unshift(arr[i])
              }
          }
          //return he araay reversed to make the start
          return newArr
      }
      
      console.log(reverseArray([1, 4, 6, 3, 5]))
      //solution 2

       const solve = arr => {
        const res = []
          // arr.reduceRight((acc, c)=> (c > acc ?  (res.unshift(c), c) : acc), 0) //
          arr.reduceRight((acc, c) => {
            if(acc < c){
              res.unshift(c);
              return c
            }else{
              return acc
            }
          }, 0)
          return res
       }
      // console.log(solve([1, 4, 6, 3, 5]))



/**Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings,
 *  ordered from shortest to longest.
For example, if this array were passed as an argument
["Telescopes", "Glasses", "Eyes", "Monocles"]
Your function would return the following array:
["Eyes", "Glasses", "Monocles", "Telescopes"]
All of the strings in the array passed to your function will be different lengths, so you will not have to decide 
how to order multiple strings of the same length. */
      function stringSort(string){
        //returning the sorted array with .sort and passing the .length prop to the parameters in the sort function
           return string.sort((a, b)=> a.length - b.length )
      }

      // console.log(stringSort(["eyes", "logse", "changes", "is"]))

      // next distinct year

      // function distinctYear(year){
        
      // }

      // console.log(distinctYear(1010))

        function findDp(arr) {
          // const duplicate = 0
        const duplicate =  arr.sort((a, b) => a-b).filter((element, index) => arr.indexOf(element) !== index)
            const last = Number(duplicate)
             return last
        }


        // console.log(findDp([4, 5, 6, 1, 3, 2, 2]))

/**Given an array of numbers, return a new array of length number containing the last even numbers from the original
 *  array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
For example: */

  function isEven(array, num){
      const newArr = []
        for (let index = 0; index < array.length; index++) {
          const element = array[index];
           if(element % 2 === 0){
            newArr.push(element)
           }else{
            // newArr.push(index)
           }
          
        }
          return newArr.slice(-num)
  }

  // console.log(isEven([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
  /**Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

 */

  const binaryZeros = arr =>{    
    //assigned a varaible to an array converted to a string which all commas are been replaced
   const digits =  arr.toString().replaceAll(",", "")
     //after converting we use a parse int which takes a binary(mostly in strings) and the base number to be converted to
     return parseInt(digits, 2)
   }

  // console.log(binaryZeros([0, 1, 1 , 0]))


  const whosOnline =(friends) => {
    //  let allFriends = {
    //    online: [],
    //    offline: [], 
    //    away: []
    //  }  
    //  for (const element in friends) {
    //     //  console.log(element)
    //       if(element.status === "online" && element.lastActivity <= 10){
    //          allFriends.away.push(element.username)
    //       }else if(element.status === "offline"){
    //         allFriends.offline.push(element.username)
    //       }else{
    //         allFriends.online.push(element.username)
    //       }

    //  }
    //  for (const guests in allFriends) {
    //    if (allFriends[guests].length === 0) {
    //      delete allFriends[guests];
    //    }
    //  }

    //  return allFriends
    const status = {
      online: [],
      offline: [],
      away: [],
    };

    for (const friend of friends) {
      if (friend.status === "offline") {
        status.offline.push(friend.username);
      } else {
        if (friend.lastActivity > 10 && friend.status === "online") {
          status.away.push(friend.username);
        } else {
          status.online.push(friend.username);
        }
      }
    }
    for (const guests in status) {
      if (status[guests].length === 0) {
        delete status[guests];
      }
    }
    return status;
  }


  
  
  // const allBoys = [
  //   {
  //     username: "David",
  //     status: "online",
  //     lastActivity: 10,
  //   },
  //   {
  //     username: "Lucy",
  //     status: "offline",
  //     lastActivity: 22,
  //   },
  //   {
  //     username: "Bob",
  //     status: "online",
  //     lastActivity: 10,
  //   },
  // ];

  // console.log(whosOnline(allBoys));
/**In this kata you will be given a random string of letters and tasked with returning them as
 *  a string of comma-separated sequences sorted alphabetically, with each sequence starting with an uppercase character 
 * followed by n-1 lowercase characters, where n is the letter's alphabet position 1-26. */


   function alphaStr(str){
    // declared a variable containing all the alphabets in lowercase
    const alphabeticallyOrder = "abcdefghijklmnopqrstuvwxyz"
    // set an empty array
      const sequences = []

      for (let index = 0; index < str.length; index++) {// loop through the srting input 
        // element = the values
        const element = str[index];
        //  set all the values in the array to lower case
        const char = element.toLowerCase()
        //  in finding the position, the alphabets are returned withh their first index adding those not found in the array 
        const position =  alphabeticallyOrder.indexOf(char) + 1;
          // element then changed into uppercase and the lowercase alphabet are repeated by the position, minns 1
        const alphabetSequence = element.toUpperCase() + char.repeat(position - 1)
        // the final solution is pushed into the array
        sequences.push(alphabetSequence)
        
      }
      // the array is returned after sorting and joining it
      return sequences.sort().join(",")

   }

  //  console.log(alphaStr('Rtymopler'))
  

function alphaSeq(s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const sequences = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();
    const position = alphabet.indexOf(char) + 1;
    const letterSequence = s[i].toUpperCase() + char.repeat(position - 1);
    sequences.push(letterSequence);
  }

  return sequences.sort().join(",");
}

// Example usage
// const result = alphaSeq("ZpglnRxqenU");
// console.log(result);


const mispelledWords = (word1, word2) => {
const str1 = word1
const str2 = word2

//  check if the strings are t
if(str1.length < str2.length){
  let temp = str1
   str1 = str2
   str2 = temp
}

let count = 0
 for (let index = 0, j = 0; index < str1.length; index++, j++) {
       if (str1[index] !== str2[j]) {
          count++
          if (str1.length > str2.length) {
            index++
          }

       }
  ;
 }

return count < 2
}

// console.log(mispelledWords('versed', 'persep'))
/**Write a function that takes one or more arrays and returns a new array of unique values,
 *  in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order,
 but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order. */

function uniteUnion(arr, arr2, arr3){
  // simple but tricky

  //declare an empty array 
    let finalArray = []
    // loop through the array af arguments passed in the function
    for (let i = 0; i < arguments.length; i++) {
      // store the elements in the loop to a variable
      const element = arguments[i];
      // loop through the array at hand the receive array
         for (let  j= 0; j < element.length; j++) {
          // store it
          const arrayAtHand = element[j];
        //check if the arguments to be pushed as an index of the array at hand loop  
          // if not push it
          if (finalArray.indexOf(arrayAtHand) < 0) {
             finalArray.push(arrayAtHand)
          }
         }
      
        
    }

    return finalArray
}

// console.log(uniteUnion([1,3,4,5], [1,6,8,9], [2,5]))


// the haystack thing

/**Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so: */
  function findHay(haystack){

    for (let i = 0; i < haystack.length; i++) {
       const element = haystack[i]
         if(element.includes("needle")){
          return `found the needle at position ${haystack.indexOf("needle")}`;
         }else{
           i
         }
      
    }

  }

  // console.log(findHay(["lop", "kuy", "nee", "pop", "needle",23]))

























    function spaceRepitionDay1(array){
    //   sheeps
        // let presentSheep = 0
        //    for (let index = 0; index < array.length; index++) {
        //     const element = array[index];
        //       if(element === sheep){
        //         presentSheep++
        //       }
            
        //    }
        //    return presentSheep

      //sum of positives\
        //  return array.reduce((acc,c)=>{
        //   if (c > 0) {
        //     return acc+c
        //   }
        //   return acc
        //  },0)
      
      //non-consecutive number
        //  array.sort((a,v) => a-v)
        //   for(let j = 0; j < array.length - 1; j++){
        //      if (array[j] + 1 !== array[j+1]) {
        //         return array[j+1]
        //      }
        //   } 
        //  return null

      //all-squares
      //   let square = 0
      //    for (let index = 0; index < array.length; index++) {
      //      let squares = array[index] * array[index]
      //      return squares += square
      //    }
      //  return square
    //string
      // let emptyString  = ""
      //   for (let index = 0; index < array.length; index++) {
      //     const element = array[index];
      //       if (Number(element) > 5) {
      //          return emptyString += '0'
      //       }else{
      //         return emptyString += '1'
      //       }
      //   }
      //   return emptyString
    // sort and addind
    //  return array.sort()[0].split('').join('***')
    }

    

  //callbacks

// let stocks = {
//   fruits: ['mango', 'orange', 'pop']
// }

//   let order = (callProd)=>{
//     console.log('order placed continue production');
//     callProd()
//   }

//   let production = ()=> {
//     console.log('order recieved lets produce');
//   }


//   order(production())



// WE GO GET
// we go get */
