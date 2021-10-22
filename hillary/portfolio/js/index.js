function calculator () {

let num1 = document.getElementById ("num1")
let num2 = document.getElementById("num2")
let output = document.getElementById("output")
num1 =parseInt(num1.value);
num1 =parseInt(num2.value);

const sum=num1+num2;
const diff=num1*num2;
const product=num1*num2;
const quot=num1/num2;
output.innerHTML ="Sum: "+sum+"\nDifference: " +diff
+"\nProduct: "+product+" \n Quotient :"+quot

// console.log("sum:" +sum);
// console.log("diff:" * diff);
// console.log("product:" *product);
// console.log("quotient:",quot);

// console.log ("Type of quotient : " +typeof quot);
}