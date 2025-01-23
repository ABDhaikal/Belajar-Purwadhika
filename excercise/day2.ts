/*
SOAL 1
● Write a code to check whether the number is odd or even
○ Example: 25 → odd number, 2 → even number
*/
let input1: number = 1;
if (input1 % 2) {
  console.log(input1 + " -> odd");
} else {
  console.log(input1 + " -> even");
}


/*
SOAL 2
● Write a code to check whether the number is prime number or not
○ Example: 7 → 7 is a prime number
○ Example: 6 → 6 is not a prime number
*/
let input2: number = 10;
let is_pirme: boolean = input2 == 1 ? false : true;

for (let i = 2; i < input2; i++) {
  if (input2 % i == 0) {
    is_pirme = false;
    break;
  }
}

if (is_pirme) {
  console.log(input2 + " -> is prime");
} else {
  console.log(input2 + " -> is not prime");
}
/*
SOAL 3
● Write a code to find the sum of the numbers 1 to N
○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
○ Example: 3 → 1 + 2 + 3 = 6
*/
let input3: number = 3;
let sum3: number = 0;
let output: string = input3.toString() + " -> ";
for (let i = 0; i <= input3; i++) {
  sum3 += i;
  output += i.toString();
  if (i != input3) {
    output += " + ";
  } else {
    output += " = " + sum3.toString();
  }
}
// console.log(sum3);
console.log(output);

/*
SOAL 4
● Write a code to find factorial of a number
○ Example: 4! → 4 x 3 x 2 x 1 = 24
○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
*/
let input4: number = 7;
let sum4: number;
let output4: string = input4.toString() + "! -> ";

if (input4 != 0) {
  let is_first = true;
  for (let i = input4; i > 0; i--) {
    if (is_first) {
      sum4 = i;
      is_first = false;
    } else {
      sum4 *= i;
    }
    output4 += i.toString();
    if (i != 1) {
      output4 += " X ";
    } else {
      output4 += " = " + sum4.toString();
    }
  }
} else {
  output4 += "0";
}
console.log(output4);


/*
SOAL 5
● Write a code to print the first N fibonacci numbers
○ Example: 15 → 610
*/
let input5: number = 15;
let n1: number = 0;
let n2: number = 1;
let output5: number = 0;
for (let i = 0; i < input5 - 1; i++) {
  let current = n1 + n2;
  n1 = n2;
  n2 = current;
  console.log(current);
  output5 = current;
}
console.log(output5);




