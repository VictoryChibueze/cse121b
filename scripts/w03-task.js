/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1,number2){
    return number1 + number2;
}

function addNumber(){
    let sumOfNumbers = document.getElementById("sum");
    let addNumber1 = Number(document.getElementById("add1").value);
    let addNumber2 = Number(document.getElementById("add2").value);

   sum = add(addNumber1,addNumber2);

   sumOfNumbers.value = sum;

}


document.querySelector("#addNumbers").addEventListener("click",addNumber);
/* Function Expression - Subtract Numbers */
function subract(number1,number2){
    return number1 - number2
}

function subractNumbers(){
    let diffOfNumbers = document.getElementById('difference')
    let subNumber1 = Number(document.getElementById('subtract1').value);
    let subNumber2 = Number(document.getElementById('subtract2').value);

    difference = subract(subNumber1,subNumber2);

    diffOfNumbers.value = difference;

    
}

document.querySelector('#subtractNumbers').addEventListener('click',subractNumbers);


/* Arrow Function - Multiply Numbers */

const multiply = (num1,num2) =>  num1*num2;

const multiplyNumbers = ()=>{
    let product = document.getElementById('product');
    let factor1 = Number(document.getElementById('factor1').value);
    let factor2 = Number(document.getElementById('factor2').value);

    productOfNumbers = multiply(factor1,factor2);
    product.value = productOfNumbers;
    
}
document.querySelector('#multiplyNumbers').addEventListener('click',multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(num1,num2){
    return num1/num2;
}

function divideNumber(){
    let quotient = document.getElementById('quotient');
    let dividend = Number(document.getElementById('dividend').value);
    let divisor = Number(document.getElementById('divisor').value);

    quotientOfNumbers = divide(dividend,divisor);

    quotient.value = quotientOfNumbers;
}

document.querySelector('#divideNumbers').addEventListener('click',divideNumber);

/* Decision Structure */


function totalDue(){
    let subtotalValue = Number(document.querySelector('#subtotal').value);
    let membershipCheck = document.getElementById('member');
    if (membershipCheck.checked){
        subtotalValue = subtotalValue - (subtotalValue*0.2);
    }
    document.querySelector('#total').textContent = `${subtotalValue}`
}

document.querySelector('#getTotal').addEventListener('click',totalDue);




/* ARRAY METHODS - Functional Programming */
let arrayNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
document.getElementById('array').textContent = arrayNumber;

/* Output Odds Only Array */
const oddNumbers = arrayNumber.filter((num)=>
{
    if (num%2 !== 0) return num;
})
document.getElementById('odds').textContent = oddNumbers;



/* Output Evens Only Array */
const evenNumbers = arrayNumber.filter((num)=>
{
    if (num%2 == 0) return num;
})
document.getElementById('evens').textContent = evenNumbers;
/* Output Sum of Org. Array */
let sum;
const sumOfSourceArray = arrayNumber.reduce((acc,num)=>{
    
    return acc + num;
},0)
document.getElementById('sumOfArray').textContent = sumOfSourceArray;
/* Output Multiplied by 2 Array */

const arrMultipliedByTwo = arrayNumber.map((num)=> num*2);
document.getElementById('multiplied').textContent = arrMultipliedByTwo;

/* Output Sum of Multiplied by 2 Array */
let summation;
const sumMultipliedArr = arrayNumber.reduce((acc,num)=>{
    
    return acc + num;
},0)*2
document.getElementById('sumOfMultiplied').textContent = sumMultipliedArr;

