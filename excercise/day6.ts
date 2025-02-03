/*
● Create a function to calculate array of student data
● The object has this following properties :
    ○ Name → String
    ○ Email → String
    ○ Age → Date
    ○ Score → Number
● Parameters : array of student
● Return values :
    ○ Object with this following properties :
        ■ Score
            ● Highest
            ● Lowest
            ● Average
        ■ Age
            ● Highest
            ● Lowest
            ● Average
*/

interface Student {
 name: string;
 age: number;
 score: number;
}
interface resultt {
 higest: number;
 Lowest: number;
 Average: number;
}

const student: Student[] = [
 {
  name: "Mahmud",
  age: 10,
  score: 10,
 },
 {
  name: "Mahmud",
  age: 20,
  score: 10,
 },
 {
  name: "Mahmud",
  age: 30,
  score: 110,
 },
];

console.log(student[1]["score"]);
let a= Math.max(...(student.map((v,i)=>{return v.score})))
console.log(a);


function getout(input: Student[], param: string) {
 let max = input[0][param];
 let min = input[0][param];
 let avg = 0;
 input.map((v, i) => {
  max = v[param] > max ? v[param] : max;
  min = v[param] < min ? v[param] : min;
  avg = (avg * i + v[param]) / (i + 1);
 });

 const output: resultt = {
  higest: max,
  Lowest: min,
  Average: avg,
 };
 return output;
}

class School {
 student: Student[];
 Score: resultt;
 Age: resultt;
 maxx:number;
 constructor(student: Student[]) {
  this.student = student;
  this.Score = getout(student, "score");
  this.Age = getout(student, "age");
 }
 seeOutput() {
  console.log(this.Age);
  console.log(this.Score);
  console.log(this.maxx);
  
 }
}

const school = new School(student);
school.seeOutput();

/*
● Create a program to create transaction
● Product Class
    ○ Properties
        ■ Name
        ■ Price
● Transaction Class
    ○ Properties
        ■ Total
        ■ Product
● All product data
● Qty
    ○ Add to cart method → Add product to transaction
    ○ Show total method → Show total current transaction
    ○ Checkout method → Finalize transaction, return transaction data
*/

class Product {
 name: string;
 price: number;
 constructor(name: string, Price: number) {
  this.name = name;
  this.price = Price;
 }

 public get Name(): string {
  return this.name;
 }

 public get Price(): number {
  return this.price;
 }
}

class Transaction {
 total: number=0;
 allproduct: Product[]=[];
 final = false;

 addToCart(input: Product, Qty: number) {
  if (!this.final) {
   for (let i = 0; i < Qty; i++) {
    this.allproduct.push(input);
    this.total += input.Price;    
   }
  } else {
   console.log("already Finalize");
  }
 }
 showTotal() {
  return this.total;
 }
 Checkout() {
  this.final = true;
 }
}

const product1 = new Product("Product1", 1);
const product2 = new Product("Product2", 2);
const product3 = new Product("Product3", 3);
const product4 = new Product("Product4", 4);
const product5 = new Product("Product5", 5);
const product6 = new Product("Product6", 6);
const product7 = new Product("Product7", 7);

let transaction = new Transaction();

transaction.addToCart(product1, 1);
transaction.addToCart(product2, 1);
transaction.addToCart(product3, 1);
transaction.addToCart(product4, 1);
transaction.addToCart(product5, 1);
transaction.addToCart(product6, 1);
transaction.addToCart(product7, 1);

console.log(transaction.showTotal());
