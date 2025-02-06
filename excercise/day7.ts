//Nomor 1

//check equal function

let a: any = { prop1: 1, nama: 12 };
let b: any = { prop1: 1, nama: 10 };

console.log(a["a"]);

function isEquivalent(a, b) {
 let aProps = Object.keys(a);
 let bProps = Object.keys(b);

 if (aProps.length != bProps.length) {
  return false;
 }

 for (let i = 0; i < aProps.length; i++) {
  let propName = aProps[i];

  if (a[propName] !== b[propName]) {
   return false;
  }
 }
 return true;
}

console.log(isEquivalent(a, b));

//Nomor 2;

let o1={ a: 1, b: 2 } 
let o2={ a: 1, c: 3 }
function intersection(a:object,b:object)
{
    let out_result ={}
    let nameKey = Object.keys(a).concat(Object.keys(b))
    nameKey.filter((v,i,s)=>s.indexOf(v)!==s.lastIndexOf(v))
    nameKey.forEach(keyy => {
        if(a[keyy]===b[keyy]){
             out_result[keyy]=b[keyy]
            }
    });
    return out_result
}

console.log(intersection(o1,o2));

//Nomor 3;

let Array1 = [
 { name: "Student 1", email: "student1@mail.com" },
 { name: "Student 2", email: "student2@mail.com" },
 { name: "Student 2", email: "student2@mail.com" },
];

let Array2 = [
 { name: "Student 1", email: "student1@mail.com" },
 { name: "Student 2", email: "student2@mail.com" },
 { name: "Student 3", email: "student3@mail.com" },
];

function combineObjArr(Array1: any[], Array2: any[]) {
 let Arrayout = Array1.concat(Array2);
 console.log(Arrayout);

 Arrayout = Arrayout.filter(
  (value, index, self) =>
   index === self.findIndex((t) => isEquivalent(t, value))
 );

 return Arrayout;
}

console.log(combineObjArr(Array1, Array2));

//Nomor 4
/*
● Create a function that can accept input as an array of objects and switch all values into property and
property into value
● Example :
○ Input : [{ name: ‘David’, age: 20 }]
○ Output : [{ David: ‘name’, 20: ‘age’}]
*/

let Input = [{ name: "David", age: 20 }];
let Input2 = { name: "David", age: 20 };
let key = Object.values(Input2);
console.log(key);

function switchPropVal(input: any[]) {
 let output = input.map((v) => {
  let obj = {};
  let key = Object.keys(v);
  key.map((keyval, i) => {
   let value = v[keyval];
   obj[value] = keyval;
  });
  return obj;
 });
 return output;
}

console.log(switchPropVal(Input));


//Nomor 5
function factorial(n) {
 if (n == 0 || n == 1) return 1;
 return factorial(n - 1) * n;
}

console.log(factorial(5));
