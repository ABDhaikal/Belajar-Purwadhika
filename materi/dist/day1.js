/*
TypeScript is a superset of JavaScript,
 which means that it adds additional features to JavaScript, but does
not break any existing JavaScript code
*/
// versi Js
const message = "Hello World";
const message2 = 0;
// Versi Ts
const message3 = "Hello";
const message4 = 0;
/*
String Built-in Method ( fungsi bawaan untuk mengubah dan memodifkikasi variable string )
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/
const nama = "BuBdi";
const kalimat = "Hello World";
const nama2 = "nama1";
const nama3 = "nama2";
console.log(nama.toLocaleLowerCase());
console.log(nama.toLocaleUpperCase());
console.log(nama.replace("B", "P"));
console.log(nama.replaceAll("B", "P"));
console.log(kalimat.split(" "));
console.log(nama2.concat(nama3.concat(nama)));
export {};
