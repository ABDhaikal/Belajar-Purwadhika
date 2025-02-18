/*
Object Oriented Programming

*/
// Cara menuliskan object
// cara 1
const objectl = {};
//cara 2
const person = {
    name: "joko",
    age: 20,
};
console.log(person);
//add Property
//  if using .
person.hobby = "Mancing";
console.log(person);
//  if using []
person["address"] = "sleman";
console.log(person);
// Delete Property
console.log(person);
delete person.address;
console.log(person);
//accessing value
console.log(person.name);
console.log(person["age"]);
//change object into array
console.log(Object.keys(person));
console.log(Object.values(person));
// IMMUTABLE & MUTABLE
/*
Mutable: Merujuk pada tipe data yang bisa diubah setelah dibuat. Biasanya ini adalah
objek dan array dalam JavaScript. Misalnya, kamu bisa mengubah isi array atau properti
objek setelah diciptakan.

Immutable: Merujuk pada tipe data yang t idak bisa diubah setelah dibuat. Ini umumnya
berlaku pada tipe data primitif seperti string, number, boolean, null, undefined, dan
symbol dalam JavaScript. Begitu nitai primitif ditetapkan, nilai tersebut t idak bisa
diubah.

*/
//IMMUTABLE
const count1 = 4;
let count2 = count1;
count2 = 10;
console.log(count1);
console.log(count2);
//MUTTABLE
let orang1 = {
    name: "Jack",
};
let orang2 = orang1;
console.log(orang1);
console.log(orang2);
orang2.age = 20;
console.log(orang1);
console.log(orang2);
//shallow copy
let orang3 = { ...orang1 };
console.log(orang1);
console.log(orang3);
orang3.age = 1000;
console.log(orang1);
console.log(orang3);
// weakness : cant provide advance changing
let original1 = {
    name: "Udin",
    address: {
        city: "Jakarta",
    },
};
let unoriginal = { ...original1 };
unoriginal.address.city = "Bandung";
console.log(original1);
console.log(unoriginal);
// DEEP Copy : Can Provide advance structure
let original2 = {
    name: "Udin",
    address: {
        city: "Jakarta",
    },
};
let unoriginal2 = structuredClone(original2);
unoriginal2.address.city = "Bukan Jakarta";
console.log(original2);
console.log(unoriginal2);
//   Optional Chaining '?'
/*
The optional chaining ?. is a safe way to access nested Objeæt properties, even if an intermediate property
doesn't exist
*/
let user2 = {};
console.log(user2.address);
// console.log(user2.address.street);
//how to use
console.log(user2.address?.street);
/*
FOR IN
to make loop of object
*/
let original3 = {
    name: "Udin",
    age: 70,
};
for (const key in orang3) {
    console.log(key);
    console.log(original3[key]);
}
//Destructuring
//mengeluarkan property datam object menjadi sebuah variable
const animal = {
    name: "gajah",
    age: 2,
    weight: 10,
};
console.log(animal.name);
console.log(animal.age);
console.log(animal.weight);
const { name: nm, age, weight } = animal;
console.log(nm);
console.log(age);
console.log(weight);
// destructuring array
const array = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = array;
console.log(a);
console.log(b);
console.log(c);
//SPREAD OPERATOR
//digunakan untuk copy isi object / menggabungkan object
const objectOne = { name: "jacky", password: "Admin123" };
const objectTwo = { email: "jacky@mail.com", name: "pepeng" };
const result = { ...objectOne, ...objectTwo };
const result2 = { ...objectOne, ...objectTwo, password: "Hashh" };
console.log(result);
console.log(result2);
// This-> keyword
//// mengakses property lain di dalam sebuah object
const animal2 = {
    firstName: "Udin",
    LastName: "Blake",
    greet() {
        console.log(`hello ${this.firstName} ${this.LastName}`);
    }
};
animal2.greet();
export {};
