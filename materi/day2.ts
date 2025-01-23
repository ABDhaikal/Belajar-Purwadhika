/**
 IF STATEMENT
 */

const age: number = 20;

if (age >= 17) {
  console.log("anda bisa buat KTP");
}

/**
  ELSE STATEMENT
  */

const age2: number = 12;

if (age2 >= 17) {
  console.log("anda bisa buat KTP");
} else {
  console.log("anda belum bisa buat KTP");
}

/*
  ELSE IF STATEMENT
  */

const grade: String = "A";

if (grade == "A") {
  console.log("NIlai Bagus");
} else if (grade == "B") {
  console.log("Nilai Lumayan");
} else if (grade == "C") {
  console.log("Nilai Buruk");
} else {
  console.log("Nilai Tidak Diketahui");
}

/**
   SWITCH CASE
   */
const day: String = "senin";

switch (day) {
  case "senin":
    console.log("Hari senin");
    break;

  case "selasa":
    console.log("Hari selasa");
    break;

  case "rabu":
    console.log("Hari rabu");
    break;
}

/**
 LOGICAL OPERATOR
 && -> and (true jika keduanya berinilai true)
 || -> or (true jika salah satu atau keduanya bernilai true)
 ! -> not (true jika tidak sesuai)
 */

// AND
let A: number = 16;
let B: number = 16;
let C: boolean = true;

//  true        true -> true
if ((A >= 17 && C) === true) {
  console.log("Boleh bawa kendaraan");
} else {
  console.log("belum boleh bawa kendaraan");
}

// OR
const car: string = "mercy";

// true || false -> true
// false || true -> true
// false || false -> false
if (car == "mercy" || car == "bmw") {
  console.log("mobil jerman");
} else {
  console.log("mobil Jepang");
}

//not
const isSunny: boolean = false;
const isRaining: boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

/*
TERNARY OPERATOR
shortcut untuk if else condition
condition ? true:false
 */

const str: string = "typescript";

// standard if else
if (str === "javascript") {
  console.log("javascript");
} else {
  console.log("not javascript");
}

//ternary operator
console.log(str === "javascript" ? "benar" : "salah");

console.log(
  str === "javascript"
    ? "benar"
    : str === "typescript"
    ? "typescript"
    : "not found"
);

/**
 LOOPING
 rangkaian instruksi yang dilakukan berulang kali hingga kondisinya tidak terpenuhi

 tipe :
 - for loop
 - while loop
 - do while loop
 */

//forloop
/*
 syntax : 
 for (statement1;statement2;statement3){
    code block yang akan diulang
  }

statement1: menginisialisasikan variable dari looping itu sendiri
statement2: mendefine kondisi dari looping tersebut
statement3: kode yg di eksekusi diakhir setiap iterasi
 }
 */
for (let i = 0; i < 6; i++) {
  console.log("Hello! ");
}

// WHILE LOOP
/*
 syntax :
  while (condition){
  code blok yang akan dijalankan
 }
 */
let i: number = 1;
while (i < 10) {
  console.log(i);
  i++;
}

// DO WHILE
/*
syntax :
do{
      code block yang akan dijalankan
}while(condition);
*/
let count: number = 4;
do {
  console.log(`iterasi ke - ${count}`);
  count++;
} while (count < 3);

/*
 BREAK

 untuk menghentikan loop
 */
let sum: number = 0;
while (true) {
  console.log("Sum: " + sum);
  if (sum >= 5) {
    break;
  }
  sum++;
}

/*
COUNTINUE
digunakan untuk melakukan skip pada looping
*/

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}
