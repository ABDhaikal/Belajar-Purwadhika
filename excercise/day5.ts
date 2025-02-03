/*
1
. Write a function to get the lowest, highest and average value in the array (with and without sort function).
a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
*/

const arr = [12, 5, 23, 18, 4, 45, 32];

function functt(param1: number[]) {
  let avg = param1.reduce((a, b) => a + b) / param1.length;
  let max: number = param1[0];
  let min: number = param1[0];

  for (let i = 0; i < param1.length; i++) {
    if (param1[i] > max) {
      max = param1[i];
    }
    if (param1[i] < min) {
      min = param1[i];
    }
  }
  console.log(max);
  console.log(min);
}

functt(arr);

/*
2. 
Write a function that takes an array of words and returns a string by concatenating the words in the array,
separated by commas and - the last word - by an 'and'.
a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

*/

const arr2 = ["apple", "banana", "cherry", "date"];

function takewords(param1: string[]) {
  let container: string = "";
  for (let i = 0; i < param1.length; i++) {
    if (i === param1.length - 1) {
      container += " and " + param1[i];
    } else {
      container += param1[i] + ",";
    }
  }
  return container;
}

console.log(takewords(arr2));

/*

3.
 Write a function from a given array of numbers and return the second smallest number
a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
*/

let numbers: number[] = [5, 3, 1, 7, 2, 6];

function functt3(param1: number[]) {
  let secsmall: number;
  let containter: number[] = param1;
  containter.sort((a, b) => a - b);
  containter.length === 1
    ? (secsmall = containter[0])
    : (secsmall = containter[1]);
  return secsmall;
}

console.log(functt3(numbers));

/*
4. 
Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
of the same length.
a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
*/
let arr4a: number[] = [1, 2, 3];
let arr4b: number[] = [3, 2, 1];

function functt4(param1: number[], param2: number[]) {
  if (param1.length != param2.length) {
    return;
  }

  const resultt = param1.map((point, idx) => {
    return point + param2[idx];
  });
  return resultt;
}

console.log(functt4(arr4a, arr4b));

/*
5. 
Write a function that adds an element to the end of an array. 
However, the element should only be added if it is
not already in the array.
a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
*/

function functt5(param1: number[], param2: number[]) {
  let newElement: number[] = param1;
  for (const input of param2) {
    if (param1.includes(input) === false) {
      newElement.push(input);
    }
  }
  return newElement;
}

const arr5a: number[] = [1, 2, 3, 4];
const arr5b: number[] = [1, 2, 3, 4, 5, 6, 7];

console.log(functt5(arr5a, arr5b));
/*
6
Write a function from a given array of mixed data types and return the sum of all the number
a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
*/
const mixedArray = ["3", 1, "string", null, false, undefined, 2];

function functt6(param1: any[]) {
  let output = param1.filter((x) => typeof x == "number");
  return output.reduce((a, b) => a + b);
}

console.log(functt6(mixedArray));

/*
7. 
Write a function to insert multiple given integer 
(not an array) to an array and have a maximum size input. The
array can only have a maximum size from a given input.
 (if the maximum size of the given input is 5 than the
array can only contain 5 elements).
a. Example :
maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
The function will return [5, 10, 24, 3, 6]
*/

let input1 = 10;
let input2 = 20;
let input3 = 30;
let input4 = 40;
let input5 = 50;
let input6 = 60;
let input7 = 70;

function functt7(maxnumber: number, ...paraminv: any) {
  const output = paraminv.slice(0, maxnumber);
  return output;
}
console.log(functt7(5, input1, input2, input3, input4, input5, input6, input7));

/*
8. 
Write a function that will combine 2 given array into one array
a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
*/
const arr8_1 = [1, 2, 3];
const arr8_2 = [4, 5, 6];
function functt8(param1: any[], param2: any[]) {
  const output: any[] = param1.concat(param2);
  return output;
}

console.log(functt8(arr8_1, arr8_2));

/*
9. 
Write a function to find duplicate values in an array
a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
*/
let arr9 = [1, 2, 2, 2, 2, 2, 3, 3, 4, 5, 5];
function functt9(param1: number[]) {
  param1.sort((a, b) => a - b);
  let output: number[] = [];
  let insert: boolean = false;
  for (let i = 0; i < param1.length; i++) {
    for (let j = i + 1; j < param1.length; j++) {
      if (param1[i] === param1[j]) {
        i++;
        insert = true;
      } else {
        break;
      }
    }
    insert === true ? output.push(param1[i]) : "";
    insert = false;
  }
  return output;
}

console.log(functt9(arr9));

function functt92(param1: any[]) {
  let output = param1.filter(function (item, pos, self) {
    return self.indexOf(item) != pos;
  });
  return output;
}

console.log(functt92(arr9));

/*
10. 
Write a function to find the difference in 2 given array
a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
*/
let arr10_1 = [1, 2, 3, 4, 5];
let arr10_2 = [3, 4, 5, 6, 7];

function functt10(param1: number[], param2: number[]) {
  let container1 = param1.filter((x) => !param2.includes(x));
  let container2 = param2.filter((x) => !param1.includes(x));
  return container1.concat(container2);
}
console.log(functt10(arr10_1, arr10_2));

/*
11. 
Based on the array below write a function that will return primitive data types only. let
arr = [1, [], undefined, {}, "string", {}, []];
a. The function will return [1, undefined, “string”]
*/

let arr11 = [1, [], undefined, {}, "string", {}, []];

function functt11(param1: any[]) {
  const output = param1.filter((type) => {
    return typeof type !== "object" && typeof type !== "function";
  });
  return output;
}
console.log(functt11(arr11));

/*
12. 
Write a function from the below array of number that will return sum of duplicate values. let
arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
a. The function will return 40
*/

const arr12 = [10, 20, 40, 10, 50, 30, 10, 60, 10];

function functt12(param1: any[]) {
  let container = param1.filter(function (item, pos, self) {
    return self.indexOf(item) != pos;
  });
  let output = param1.filter(function (item) {
    return container.includes(item);
  });
  console.log(output);
  return output.reduce((a, b) => a + b);
}

console.log(functt12(arr12));

/*
13.
 Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
between rock, paper, or scissor.
a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
*/

let input13 = "rock";
function functt13(param1: string) {
  let state = ["rock", "paper", "scissor"];
  let input = state.indexOf(param1);
  let counter = Math.round(Math.random() * 3);
  if (input === -1) {
    return;
  } else {
    if (input === counter) {
      console.log("draw");
    } else if (input - counter > 0 && input - counter < 2) {
      console.log("Win");
    } else {
      console.log("Lose");
    }
  }
}

console.log(functt13("rock"));
