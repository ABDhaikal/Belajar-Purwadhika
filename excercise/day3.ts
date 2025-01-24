/*
Soal - 01
● Write a code to display the multiplication table of a given integer.
○ Example : Number → 9
○ Output :
■ 9 x 1
■ 9 x 2
■ …
■ 9 x 10
*/
const input: number = 9;
const interation: number = 10;
for (let i = 1; i <= interation; i++) {
    console.log(`${input} x ${i} = ${input * i}`);
}
/*
Soal - 02
● Write a code to check whether a string is a palindrome or not.
○ Example : ‘madam’ → palindrome
*/


const input2: string = "madam";
let reverse: string = "";
for (let i = input2.length - 1; i >= 0; i--) {
    reverse += input2[i];
}
let output2 = input2 === reverse ? "palindrome" : "not palindrome");
console.log(output2);



/*
Soal - 03
● Write a code to convert centimeter to kilometer.
○ Example : 100000 → “1 km”
*/
const input3: number = 100000;
const output3: string = `${input3} cm = ${input3 / 100000} km`;
console.log(output3);

/*
Soal - 04
● Write a code to format number as currency (IDR)
○ Example : 1000 → “Rp. 1.000,00”
*/
const input4: number = 1000;
let output4: string = `Rp. ${input4.toLocaleString("id-ID")},00`;
console.log(output4);


/*
Soal - 05
● Write a code to remove the first occurrence of a given “search string” from a string
○ Example : string = “Hello world”, search string = “ell” → “Ho world”
*/
const input5: string = "Hello world";
const search: string = "ell";
let output5: string = input5.replace(search, "");
console.log(output5);



// cara 2
let output5_2:string = "";
let not_inputed:boolean = false;

for(let i=1;i<=input5.length;i++)
{
    if(not_inputed===false)
    {
        output5_2 += input5.substring(i-1,i);
    }

    if(input5.substring(i-1,i)===" ")
    {
        if(i!=2)
        {
            output5_2 += input5.substring(i-2,i-1);    
        }
        output5_2 += input5.substring(i-1,i);
        not_inputed = false;
    };
    if(i===1)
        {
            not_inputed =true 
        }
}
console.log(output5_2);

/*
Soal - 06
● Write a code to capitalize the first letter of each word in a string
○ Example : “hello world” → “Hello World”
*/
const input6: string = "hello world";
let output6: string = input6;
let capitalize: boolean = true;
for (let i = 0; i < input6.length; i++) {
    if (capitalize) {
        output6 = output6.substring(0, i) + output6[i].toUpperCase() + output6.substring(i + 1);
        capitalize = false;
    }
    if (output6[i] === " ") {
        capitalize = true;
    }
}
console.log(output6);

/*
Soal - 07
● Write a code to swap the case of each character from string
○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
*/
const input7: string = "The QuiCk BrOwN Fox";
let output7: string = "";
for (let i = 0; i < input7.length; i++) {
    if (input7[i] === input7[i].toUpperCase()) {
        output7 += input7[i].toLowerCase();
    } else {
        output7 += input7[i].toUpperCase();
    }
}

/*
Soal - 08
● Write a code to find the largest of two given integers
○ Example : num1 = 42, num2 = 27 → 42
*/
const input8_1: number = 42;
const input8_2: number = 27;
let output8: number = input8_1>input8_2 ? input8_1 : input8_2;
console.log(output8);


/*
Soal - 09
● Write a conditional statement to sort three numbers
○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
*/
const input9_1: number = 42;
const input9_2: number = 27;
const input9_3: number = 18;
const min: number = Math.min(input9_1,input9_2,input9_3);
const max: number = Math.max(input9_1,input9_2,input9_3);
let mid: number = ((input9_1 != min)&&(input9_1!=max)) ? input9_1: 0;
mid = ((input9_2 != min)&&(input9_2!=max)) ? input9_2: mid;
mid = ((input9_3 != min)&&(input9_3!=max)) ? input9_3: mid;

let Output9:string = `${min}, ${mid}, ${max}`; 
console.log(Output9);

/*
Soal - 10
● Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
type.
○ Example : “hello” → 1
*/
const input10: any = "hello";
let output10: number = 3;
if (typeof input10 === "string") {
    output10 = 1;
} else if (typeof input10 === "number") {
    output10 = 2;
}
console.log(output10);

/*
Soal - 11
● Write a code to change every letter a into * from a string of input
○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
*/
const input11: string = "An apple a day keeps the doctor away";
let output11: string = input11.replaceAll("a", "*");
output11 = output11.replaceAll("A", "*");
console.log(output11);