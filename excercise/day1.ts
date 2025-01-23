/*
● Write a code to find area of rectangle.
○ Example : length = 5, width = 3
○ Output : 15
*/
let length:number =5;
let width:number =3;
let output:number =length*width;
console.log(output);



/*
Write a code to find perimeter of rectangle.
○ Example : length = 5, width = 3
○ Output : 16
 */
let length2:number =5;
let width2:number =3;
let output2:number =2*(length2 +width2);
console.log(output2);



/*
Write a code to find diameter, circumference and area of a circle.
○ Example : radius = 5
○ Output : diameter = 10, circumference = 31.4159, area = 78.539
 */
let radius:number =5;

let diameter:number =2*radius;
// console.log(diameter);

let circumference:number =Math.PI*diameter;
// console.log(circumference);

let area:number =Math.PI*radius**2;
// console.log(area);

// console.log("diameter = "+ diameter+", circumference = "+ circumference+", area = " +area);
let output3:string = `diameter = ${diameter}, circumference = ${circumference}, area =  ${area}`;
console.log(output3);

/*
● Write a code to find angles of triangle if two angles are given.
○ Example : a = 80, b = 65
○ Output : 35 
*/
let a:number =80;
let b:number =65;
let output4:number =180 -a-b;
console.log(output4);



/*
● Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
○ Example : 400 days → 1 year, 1 month, 5 days
○ Example: 366 days → 1 year, 0 month, 1 day
*/
let day_input:number =366;
let day:number =day_input%365%30;
let month:number =Math.floor((day_input%365)/30);
let year:number =Math.floor(day_input/365);
console.log(day);
console.log(month);
console.log(year);

let name_day:String =" day";

if (day > 1) {
    name_day = " days";
  }

console.log(year+" year, "+month+" month, "+day +name_day);




/*
Write a code to get difference between dates in days.
○ Example : date1 = 2022-01-20, date2 = 2022-01-22
○ Output : 2
*/
const date1 = new Date();
const date2 = new Date();
date1.setFullYear(2023, 0, 20);
date2.setFullYear(2023, 0, 22);


let deference_year = date1.getFullYear()-date2.getFullYear();
let deference_month = date1.getUTCMonth()-date2.getUTCMonth() + deference_year*12;
let deference_day = date1.getDate()-date2.getDate() + deference_month*30;
let simple_deference_day = date1.getDate()-date2.getDate();

console.log(Math.abs(deference_day));
console.log(Math.abs(simple_deference_day));
// console.log(Math.abs(deference_month));
// console.log(Math.abs(deference_year));
