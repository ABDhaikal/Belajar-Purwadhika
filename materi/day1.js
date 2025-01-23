// Hello World
console.log("Hello World");



// VARIABLE ( storage. penampungan data)
/*
Different ways to declare variable :
● var : To create global variables 
        (tidak digunakan lagi karena nama varibale dapat didefine dengan nama yang sama)
● let : To create scoped, replaceable variables
● const : Can’t be updated or redeclared within the scope
*/
var person = "budi";
let person2 = "Siti";
const person3 = "Jack";
console.log(person);
console.log(person2);


// VARIABLE NAMMING
/*
● Must contain only letters, digits, or the symbols “$” and “_”
● The first character must not digit
● Case-sensitive (huruf kecil dan huruf besar dianggap berbeda)
● Can’t use reserved words (kata-kata yang digunakan dalam fungsi javascript )
*/
let $1;
let Orang;
let orang;

//DATA TYPES

/*
    --Primitive data type--
String : 
    Used to represent textual data
Number &  :
    Used to hold decimal values as well as values without decimals
Boolean :
    Represents a logical entity and can have two values: true and false
Null :
    Has exactly one value:Represents theintentional absence of any object value
Undefined: 
     A variable that has not been assigned a value has the value undefined
*/

//string
console.log("Hello");

// number
console.log("1");

//boolean
console.log(true);
console.log(false);

//null
let manusia = null;

//undefined
let alien = undefined;
