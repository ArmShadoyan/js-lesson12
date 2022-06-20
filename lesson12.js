"Use strict";
//____

{
let num = 0
while(num < 100){
	num+=2
	console.log(num)
}//2,4,6,8,10,12....
}
//___
let num = 10
let result
for(i = 10;i > 0;i--){
	result = num * i
		console.log(result)
}//100,90,80,70...10

//___
function sumOfDigits(num) {
	let sum = 0
	while(num) {        
                   
		sum += num % 10;    
		num = Math.floor(num/10);
	}
	console.log(sum);
}sumOfDigits(123) // = 6

// ___
function evenDigitsInaNumber(num) {
	let lastDigit
    let digitCount = 0
while(num){
    lastDigit = (num % 10);
    if(lastDigit % 2 === 0){ digitCount = (digitCount + 1)};
    num = (Math.floor(num/10));
}console.log(digitCount)
}evenDigitsInaNumber(292981) // = 3

//___
function reverseOrder(num) {
while(num){
console.log(num % 10)
num = Math.floor(num / 10)
	}
}reverseOrder(12345) /* =   5
							4
							3	
							2 
							1 */
//___
function isPowerOfToo(num) {
	let balance
while(num>2){
    balance = (num / 2);
    num = (num - balance);
	}
		num === 2?console.log(true):console.log(false);
}isPowerOfToo(128); //true

//____

function isPowerOfThree(firstN,lastN) {
	let res = 0
for(let i = 2;res < lastN; i++){
    
    res = (3 ** i)
        if (res < lastN && res > firstN){
            console.log(res)
        }
}
}isPowerOfThree(1,100); // 9,27,81;

