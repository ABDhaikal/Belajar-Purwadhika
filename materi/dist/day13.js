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
        }
        else {
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
    age: 32
};
const intoJSON = JSON.stringify(user);
console.log(intoJSON);
const intoOBJ = JSON.parse(intoJSON);
console.log(intoOBJ);
export {};
//MODULES



