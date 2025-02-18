const Person = [() => [{ target: "Ini Targetnya" }]];
const output = Person[0]()[0].target;
console.log(output);

let data = [1, 22, 33, 44, 55, 66, 77];
let data2 = ["aa", "bb", "cc"];
let data3 = { satu: "aa", dua: "bb", tiga: "cc" };

let coba1 = data.map((v, i, t) => {
  return v * i;
});
console.log(data);
console.log(coba1);

for (const param of data2) {
  console.log(param);
}

for (const param in data3) {
  console.log(param);
}

data.splice(1,1,10000)
console.log(data);

let dataBaru = data.slice(0,5)
console.log(dataBaru);


console.log(coba1);
