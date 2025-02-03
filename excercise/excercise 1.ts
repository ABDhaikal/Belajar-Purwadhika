let n=10

let pre  =1
let curr =1
let temp =0;
for (let i = 1; i < n; i++) {
  temp = curr
  curr = curr+pre
  pre = temp
  console.log(curr);
  
}

console.log(curr);


let a = [1,2,1,2,2]

console.log(a.reverse());


[9,9,9,9,9,9,9]
[9,9,9,9]
[8,9,9,9,0,0,0,1]

