/**
CLASS

1. need to declare using pascal case
2. can declare using class declaration or class expression
*/

//======IF USING CLASS DECLARATION======//
class User {
 greeting() {
  console.log("Hello World");
 }
 greeting2 = () => {
  console.log("Hello World 2");
 };
}

//======IF USING CLASS EXPRESSION======//
const User2 = class {
 greeting() {
  console.log("Hello World");
 }
 greeting2 = () => {
  console.log("Hello World 2");
 };
};

//======HOW TO USE IT======//
/*
after declare the class variable ,
we need to create object using that class
*/

const human = new User2();
const human2 = new User2();

/*
we can use that function inside object 
*/
human.greeting();
human.greeting();

/*
//======CONSTRUCTOR======//
we can create the function that run after class has been declarated
that function call as "CUNSTRUCTOR"
*/

const User3 = class {
 name: string;
 constructor() {
  //declare contructor function
  console.log("Hi");
  //declare contructor define object
  this.name = "hi";
 }
 greeting() {
  console.log("Hello World");
 }
 greeting2 = () => {
  console.log("Hello World 2");
 };
};

const human3 = new User3();

/*
//======ACCESS MODIFIER======//
we can set the access every variable inside class on Private / Public
Private : Only can access inside class
Public : can access outside class
*/

const User4 = class {
 // Public access
 name: string;
 //Private acess
 #email: string;
 #password: string;
 constructor() {
  this.name = "hi";
  this.#email = "hi.mail.com";
  this.#password = "hi.mail.com";
 }

 //using getter to get private variable
 public showEmail() {
  console.log(this.#email);
 }

 //declare private function
 private showPassword() {
  console.log(this.#password);
 }
};

const human4 = new User4();
human4.showEmail();

/*
//======GETTER AND SETTER======//
to set variable and get variable 
*/

const orang = {
 firstname: "Udin",
 Lastname: "Blake",

 // define getter

 get fullName(): string {
  return this.firstname + " " + this.Lastname;
 },

 set setFirstname(v: string) {
  this.firstname = v + " Added";
 },

 set setLastname(v: string) {
  this.Lastname = v + " Added";
 },
};

console.log(orang.fullName);
orang.setFirstname = "amir";
orang.setLastname = "udin";
console.log(orang.fullName);

/*
//======INHERITANCE======//
we can create class as parent class to crate another class with same property inside
*/

class Employee {
 name: string;
 salary: number;

 constructor(name: string, salary: number) {
  this.name = name;
  this.salary = salary;
 }
 work() {
  console.log(`${this.name} is working`);
 }
}

class Manager extends Employee {
 department: string;

 constructor(name: string, salary: number, department: string) {
  super(name, salary);
  this.department = department;
 }
}

const manager = new Manager("Siti", 4000000, "IT");
manager.work();


/*
//======INHERITANCE OF======//
we can check the parent class
*/

class Animal {}
class Rabbit extends Animal {}
class Tree {}


const rabbit  = new Rabbit();
console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Tree);
