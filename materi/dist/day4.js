/**
 ARRAY
 array is type of data with similarity data
 in java script, we dont need to declare number index of array
 in java scirpt, we also can use different type of data for each data in index
 */
// syntax declration
const name_array = [];
const name_array2 = new Array();
// syntax with known inside on declare
const name_array3 = [1, "two", 3, true];
const name_array4 = new Array(1, 2, 3, 4);
// too see inside array
console.log(name_array3[1]);
console.log(name_array3[3]);
// array of object
// the array using key value istead using index
const student = [
    { name: "Budi", email: "budi@mail.com" },
    { name: "siti", email: "siti@mail.com" },
    { name: "jono", email: "jono@mail.com" },
];
console.log(student[1]["email"]);
console.log(student[1]);
//simple interface
const inter_students = { name: "Budi", email: "budi@mail.com" };
//itnerface application on array
const type_students = [
    { name: "Budi", email: "budi@mail.com" },
    { name: "siti", email: "siti@mail.com" },
    { name: "jono", email: "jono@mail.com" },
];
console.log(type_students);
/*
  FOR OF
  using like for loop but used only for array
  */
let fruit;
const fruits = ["Apple", "01-a11ge", "Plum"];
for (fruit of fruits) {
    console.log(fruit);
}
console.log(fruit);
/*
ARRAY BUILD IN METHOD
function that already declare inside javascript
*/
/*
JOIN
used for to combine value inside array into combined string
*/
const words = ["Hello", "World"];
const words2 = [2, 3];
console.log(words.join(" "));
console.log(words2.join(" "));
/*
POP
used to delete latest index array value
*/
const word3 = ["pertama", "kedua", "ketiga"];
console.log(word3);
word3.pop();
console.log(word3);
/*
shift
used to delete first index array value
*/
const word4 = ["pertama", "kedua", "ketiga"];
console.log(word4);
word4.shift();
console.log(word4);
/*
unshift
used to add value of index into first index and shift other index
*/
const word5 = ["pertama", "kedua", "ketiga"];
console.log(word5);
word5.unshift("keenol");
console.log(word5);
/*
PUSH
used to add value of index into last index
*/
const word6 = ["pertama", "kedua", "ketiga"];
console.log(word6);
word6.push("keempat");
console.log(word6);
/*
CONCAT
used to combine multiple array into one array
*/
const word7 = ["pertama", "kedua", "ketiga"];
const word8 = ["apple", "pir", "semangka"];
console.log(word7);
console.log(word8);
console.log(word7.concat(word8));
/*
SPLICE
*/
// SPLICE —> untuk menghapus, mengganti, atau menambahkan value pada sebuah array
// rumus —> splice(startlndex, brpYgMauDiDelete, item)
const months = ["jan", "mar", "apr", "jun"];
// to add data into in the middle of array
months.splice(0, 0, "feb");
console.log(months);
// to delete data in the middle of array
months.splice(4, 1);
console.log(months);
// to replace value of array in the middle of index
months.splice(3, 1, "may");
console.log(months);
/*
SLICE —> mereturn array baru berdasarkan start index dan end index
rumus -> slice(startlndex, endlndex).
*/
const fruit1 = ["Apple", "Banana", "Orange", "Manggo", "Lemon"];
console.log(fruit1.slice(1, 4));
console.log(fruit1.slice(-4, -1));
/*
INDEXOF
mencari index dari value yang kita search, kalo t idak ditemukan
akan me return —1
*/
const fruit2 = ["Apple", "Banana", "Orange", "Manggo", "Lemon"];
// if find the value of index
console.log(fruit2.indexOf("Banana"));
// if not find value of index
console.log(fruit2.indexOf("test"));
/*
// SORT —> mengurutkan isi array berupa string atau number
*/
//IF STRING
const fruit3 = ["C", "F", "A", "D", "B", "E"];
fruit3.sort();
console.log(fruit3);
//IF NUMBER
//: not using compare function
const point = [3, 2, 10, 5, 6];
point.sort();
console.log(point);
//: using compare function
const poin2 = [3, 2, 10, 5, 6];
//ascending
point.sort((a, b) => a - b);
console.log(point);
//discending
point.sort((a, b) => b - a);
console.log(point);
/*
REVERSE
membalikkan urutan element datam array
*/
const points4 = [3, 2, 10, 5, 6];
points4.reverse();
console.log(points4);
/*
MAP
melakukan looping pada array dan akan mereturn array baru

syntax :

const resultt = nameofArray.map((param1,param2) =>{
})


param1 = value of index inside of array
param2 = number of index of array
*/
const points5 = [1, 2, 3, 4, 5, 6];
const resultt = points5.map((point, idx) => {
    return point * 2;
});
console.log(resultt);
/*
FOR EACH
 melakukan looping pada array tapi tidak me-return array baru
*/
const fruit5 = ["Apple", "Banana", "Orange", "Manggo", "Lemon"];
const result3 = fruit5.forEach((fruitt, idx) => {
    console.log(fruitt);
    console.log(idx);
});
console.log(result3);
/*
FILTER
melakukang looping pada array dan menghasilkan array baru berdasarkan
kondisi pada return function
*/
const ages = [32, 15, 40, 22, 12];
const result4 = ages.filter((age) => {
    return age > 17;
});
console.log(result4);
/*
FIND
mencari value yang ditemukan per tama kali datam arrayl
*/
const ages2 = [32, 15, 40, 22, 12];
const result5 = ages2.find((age) => {
    return age > 14;
});
console.log(result5);
/*
FIND INDEX
mencari ubdex yang ditemukan per tama kali datam array
*/
const ages3 = [32, 15, 40, 22, 12];
const result6 = ages3.findIndex((age) => {
    return age > 12;
});
console.log(result6);
/*
REDUCE
biasa digunakan untuk melakukan operasi aritmatika pada tiap isi array
*/
const numbers1 = [200, 50, 100, 50];
const result7 = numbers1.reduce((a, b) => a + b);
console.log(result7);
/*
INCLUDES -> mengecek value pada array ada apa tidak, hasil return nya adalah boolean
*/
const fruit8 = ["Apple", "Banana", "Orange", "Manggo", "Lemon"];
console.log(fruit8.includes("Apple"));
console.log(fruit8.includes("jeruk"));
/*
FUNCTION
the declarated sturcture method in programming
syntax declaration:

function functionName(parameter){
    // logic
}

parameter : variable vanq mewakili value dari arqument vq dimasukkan (ada didkelarasi function)
argument:value yang dimasukkan saat pemanggilan function (ada ketika menggunakan function)
*/
// function declaration
function suqare(param1, param2) {
    param1 = param1 ** 2;
    return param1;
}
console.log(suqare(2));
// function expression
const square2 = function (angka) {
    return angka * angka;
};
console.log(square2(2));
//default parameter
function multiplication(param1, param2 = 2) {
    return param1 * param2;
}
console.log(multiplication(2));
//rest parameter
function myFunc(param1, param2, ...paraminv) {
    console.log(param1);
    console.log(param2);
    console.log(paraminv);
}
myFunc(1, 2, 3, 4, 5, 6, 7);
/*
NESTED FUNCTION
inner function bisa akses parameter dari outer function
outer function tidak bisa akses parameter dari inner function
*/
function outerFunct(param1) {
    function innerFunct() {
        return "this is return of inner funct 1 ";
    }
    function innerFunct2() {
        return " this is return of inner funct 2";
    }
    return innerFunct() + " and " + innerFunct2().toLocaleUpperCase();
}
console.log(outerFunct());
/**
 CLOSURE
 inner function selalu mempunyai akses ke variable dan parameter dari outer function
 bahkan setelah function tsb di return
 */
function outerFunct2(name) {
    const defaultMessage = "Hello";
    return function () {
        return defaultMessage + " " + name;
    };
}
const out_result = outerFunct2("budi");
console.log(out_result());
/**
 Recursive
 function that return him self
 */
function countDown(param1) {
    console.log(param1);
    let nextNumber = param1 - 1;
    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(10);
/**
 ARROW FUNCTION
 shortcut untuk menuliskan function expression
 */
//function expression
const functt1 = function (param1) {
    return param1 ** 2;
};
// adjust into arrow function
const functt2 = (param1) => {
    return param1 ** 2;
};
// if arrow function only need one line
const functt3 = (param1) => param1 ** 2;
export {};
