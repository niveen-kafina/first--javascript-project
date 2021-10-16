console.log('hello')
var b='smoothie';
console.log(b);
var someNumber=45;
console.log(someNumber);
document.getElementById('someText').innerHTML='hey there';
var num1=10;
num1++;
num1--;
console.log(num1);
console.log(num1/6);
num1+=10;
console.log(num1);


function fun(){
    console.log('this is a function')
}
fun();
function greeting(){
    var name=prompt('What is your name?');
    var result ='Hello'+' '+ name;
    console.log(result);
}
function sumNumbers(num1,num2){
    var result=num1+num2;
    console.log(result);
}
sumNumbers('Hello','Qazi');
