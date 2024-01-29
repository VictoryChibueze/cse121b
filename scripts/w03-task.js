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
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
