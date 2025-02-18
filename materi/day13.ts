/**
 CALLBACK FUCNTION 
 the function using another function become parameter and useit using 
 other paramter
 */
function sum(a, b) {
  return a + b;
}

function calculateAndPrint(x, y, callback) {
  const result = callback(x, y);
  console.log("The result is: " + result);
}

calculateAndPrint(5, 3, sum);

/*
  Asycronus code
  running code with asycronus running task for each opration
    -> method that usually use in the asycronus task is using promise
        # (promise)=> class use to fetch data and return resolve (if success) and reject (failed)
                three function can be called in the promise
                    - then()  ; can be return if return is resolve
                    - catch() ; returns a Promise and deals with rejected cases only
                    - finnaly(); function called when the promise is settled
        # try and cath=>
  */
// PROMISE

function resoveRejectChecker(resolve, reject) {
  const success = true;
  setTimeout(() => {
    if (success) {
      resolve("Data Berhasil diambil");
    } else {
      reject("Terjadi Kesalahan");
    }
  }, 500);
}

function fetchData() {
  return new Promise(resoveRejectChecker);
}


fetchData().then((value) => console.log(value));
fetchData().catch((value) => console.log(value));
fetchData().finally(() => console.log("selesai"));

/*
JSON : Javascript Object Notation
*/

const user = {
  name: "Budi",
  age: 32,
};

const intoJSON = JSON.stringify(user);

console.log(intoJSON);

const intoOBJ = JSON.parse(intoJSON);
console.log(intoOBJ);


//try catch 
const getDataUser = async()=>{
  try{
    const data = await fetchData();
    console.log("success");
    
  }
  catch(error){
    console.log(error);
    
  }
}

getDataUser();



//impmenet on real case
const getData = async() =>{
try{
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json();
  if(!response.ok){
    throw new Error("Terjadi kesalahan")
  }

  console.log(user);
} catch(error){
  console.log(error);
  
}
}

getData()
//MODULES

// see on this page "./day13code.ts"

/*
HOISTING var & funct declaration
Hoisting adalah mekanisme di JavaScript di mana deklarasi variabel dan fungsi
diangkat (hoisted) ke atas dari cakupan (scope) sebelum kode dieksekusi.

*/

// expression() test function 1 can only be executed below its declaration
const expres = () => {
  console.log("this is test1");
};

// function declaration: functions can be executed above their declaration,
// because function declarations are always executed first
declar();
function declar() {
  console.log("Hello World");
}



