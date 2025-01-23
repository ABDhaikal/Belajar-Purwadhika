//PENGENALAN TYPESCRIPT

/*
TypeScript is a superset of JavaScript,
 which means that it adds additional features to JavaScript, but does
not break any existing JavaScript code
*/

    // versi Js
const message = "Hello World";
const message2 = 0;


    // Versi Ts
const message3:String = "Hello";
const message4:String|Number = 0;


/*
String Built-in Method ( fungsi bawaan untuk mengubah dan memodifkikasi variable string )
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/
const nama = "BuBdi";
const kalimat = "Hello World";
const nama2 = "nama1";
const nama3 = "Udin";
console.log(nama.toLocaleLowerCase());
console.log(nama.toLocaleUpperCase());
console.log(nama.replaceAll("B", "P"));
console.log(kalimat.split(" "));
console.log(nama2.concat(nama3.concat(nama)));
console.log(nama3.slice(0,2));

//TEMPLATE LITERALS
const nama4:string = "carli";
console.log("Welcome "+ nama4);

const message5:string = `welome ${nama4}`;
console.log(message5);

//NUMBER BUILDIN METHOD
const angka:string = "2000";
console.log(typeof Number(angka));
console.log(typeof angka);
console.log(parseInt(angka));


console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


//STRING CONVERSION
const angka2:number = 20
console.log(String(angka2));
console.log(angka2.toString());

//BOOLEAN CONVERSION
/*
selain angka 0 maka dikonversi menjadi true
angka 0 dikonversi menjadi false
*/

console.log(Boolean(0));
console.log(Boolean(1));

/*
jika data yang ingin dikonversi merupakan string
jika data kosong maka berubah menjadi false
jika terisi maka berubah menjadi true
*/

console.log(Boolean(""));
console.log(Boolean("berisi"));


//DATE
const now:Date = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getDate()+1);
console.log(now.getTime()+1);

//SET METHOD
now.setDate(10)
now.setMonth(10)
now.setFullYear(1000)

console.log(now);


//BASIC OPRATOR
/*
+ = Pertambahan
- = Pengurangan
* = Perkalian
/ = Pembagian
% = Modulo
** = Pangkat
*/

console.log(10+ 6);
console.log(10- 6);
console.log(10* 6);
console.log(10/ 6);
console.log(10% 6);
console.log(10**6);


//MODIFY IN PLACE
/*
n = n+2
*/
let n:number =4;
n+=2;
console.log(n);

//INCREMENT & DECREMENT
let y:number =4;
y++;
console.log(y);
y--;
console.log(y);

//POSTFIX & PREFIX
let z:number =4;
console.log(++z);
console.log(z++);
console.log(z);

// COMPARASION OPERATOR
/*
fungsi operator pembanding
*/

// == 
let anum:number =3;
let bnum:number =6;

let astr:string ="3";
let bstr:string ="6";

// console.log(anum===astr); //pengecekan nilai dan tipedata
// console.log(anum==astr); // pengecekan nilai saja
console.log(anum==bnum); // pengecekan nilai saja
console.log(anum>=bnum); // pengecekan nilai saja
console.log(anum<=bnum); // pengecekan nilai saja

// PSEUDOCODE

/*
Problem :
Write a code to find area of rectangle!
Hint:
1. Find out how to count area of rectangle
2. length x width = area of reactangle (the formula)

Solutions in Pseudocode:
1. define variable and assign value to variable
    const rectangleLength = 10
    const rectangleWidth = 5
2. deftne variable to keep the result
and implement the formula area of rectangle
    const rectangleArea = rectangleLength * rectangleWidth
*/


// MATH
/** fungsi matematika  */
console.log(Math.ceil(4.2));//membulatkan keatas
console.log(Math.floor(4.2));//membulatkan kebawah
console.log(Math.round(4.2));//membulatkan ke angkat terdekat
console.log(Math.max(1,2,3,4,5,100));//mengembalikan angkat terbesar dari sekumpulan angkat
console.log(Math.min(1,2,3,4,5,100));//mengembalikan angkat terkecil dari sekumpulan angkat
console.log(Math.abs(-1001));//menghilangkan angka negatif
console.log(Math.random());//menghasilkan angka random dari 0 hingga 1