// Execise for of
// hitung jumlah semua bilangan dalam array menggunakan for of
// ex input =-> [1,2,3,4,5,6] -> 21

const input: number[] = [1, 2, 3, 4, 5, 6];
let sum: number = 0;
for (let i of input) {
  sum += i;
}
console.log(sum);

/*
Nomor 0
*/

function create_triangle(param1: number) {
  for (let i = 1; i <= param1; i++) {
    let output = "";
    for (let j = 1; j <= i; j++) {
      output += j + " ";
    }
    console.log(output);
  }
}

create_triangle(4);

/*
Nomor 1
*/

function Execise1(param1: number) {
  let out_log: number = 1;
  for (let i: number = 1; i <= param1; i++) {
    let output = "";
    for (let j: number = 1; j <= i; j++) {
      if (j < 10) {
        output += "0" + out_log + " ";
      } else {
        output += out_log + " ";
      }
      out_log++;
    }
    console.log(output);
  }
}

Execise1(4);

/*
Nomor 2
*/

function Execise2(param1: number) {
  let out_log: string = "";
  for (let i = 1; i <= param1; i++) {
    if (i % 3 == 0) {
      out_log += "Fizz";
    }
    if (i % 5 === 0) {
      out_log += "Buzz";
    } else if (i % 3) {
      out_log += i;
    }
    i != param1 ? (out_log += ",") : "";
  }
  console.log(out_log);
}

Execise2(15);

/*
Nomor 3
*/

function Execise3(weight: number, height: number): string {
  const BMI = weight / height ** 2;
  if (BMI < 18.5) {
    return "less weight";
  } else if (BMI < 24.9) {
    return "ideal";
  } else if (BMI < 29.9) {
    return "overweight”";
  } else if (BMI < 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
}

console.log(Execise3(1, 1));
console.log(Execise3(22, 1));
console.log(Execise3(25, 1));
console.log(Execise3(38, 1));
console.log(Execise3(550, 1));

/*
Nomor 4
*/

function Execise4(inArray: number[]) {
  const outArray: number[] = [];
  let checker: number;
  for (checker of inArray) {
    let counter = 0;
    if (checker % 2) {
      outArray.push(checker);
    }
  }
  return outArray;
}

const trialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(trialArray);
console.log(Execise4(trialArray));

/*
Nomor 5
*/

function Execise5(param1: string) {
  let checker: string;
  let output: string[] = [];
  let counter = 0;
  output[counter] = "";
  for (checker of param1) {
    if (checker === " ") {
      counter++;
      output[counter] = "";
    } else {
      output[counter] += checker;
    }
  }
  return output;
}
console.log(Execise5("Hello World"));
