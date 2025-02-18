/**
CLASS

1. need to declare using pascal case
2. can declare using class declaration or class expression
*/
var _email, _password, _a;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
//======IF USING CLASS DECLARATION======//
class User {
    constructor() {
        this.greeting2 = () => {
            console.log("Hello World 2");
        };
    }
    greeting() {
        console.log("Hello World");
    }
}
//======IF USING CLASS EXPRESSION======//
const User2 = class {
    constructor() {
        this.greeting2 = () => {
            console.log("Hello World 2");
        };
    }
    greeting() {
        console.log("Hello World");
    }
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
    constructor() {
        this.greeting2 = () => {
            console.log("Hello World 2");
        };
        //declare contructor function
        console.log("Hi");
        //declare contructor define object
        this.name = "hi";
    }
    greeting() {
        console.log("Hello World");
    }
};
const human3 = new User3();
/*
//======ACCESS MODIFIER======//
we can set the access every variable inside class on Private / Public
Private : Only can access inside class
Public : can access outside class
*/
const User4 = (_a = class {
        constructor() {
            //Private acess
            _email.set(this, void 0);
            _password.set(this, void 0);
            this.name = "hi";
            __classPrivateFieldSet(this, _email, "hi.mail.com", "f");
            __classPrivateFieldSet(this, _password, "hi.mail.com", "f");
        }
        //using getter to get private variable
        showEmail() {
            console.log(__classPrivateFieldGet(this, _email, "f"));
        }
        //declare private function
        showPassword() {
            console.log(__classPrivateFieldGet(this, _password, "f"));
        }
    },
    _email = new WeakMap(),
    _password = new WeakMap(),
    _a);
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
    get fullName() {
        return this.firstname + " " + this.Lastname;
    },
    set setFirstname(v) {
        this.firstname = v + " Added";
    },
    set setLastname(v) {
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
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    work() {
        console.log(`${this.name} is working`);
    }
}
class Manager extends Employee {
    constructor(name, salary, department) {
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
class Animal {
}
class Rabbit extends Animal {
}
class Tree {
}
const rabbit = new Rabbit();
console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Tree);
