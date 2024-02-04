// myInfo = {
//     name:"Brother T",
//     photo: "images/photo.jpg",
//     favouriteFoods: ["Fettucini","Steak","Chicken","Shrimp","Baked potatoes"],
//     hobbies: ["Reading","Fishing","Camp"],
//     placesLived: [
//         {
//             place: "Rexburg, ID",
//             length: "5 years"
//         },
//         {
//             place:"Ammon, ID",
//             length: "3 years",
//         },
//         {
//             place:"Sandy, UT",
//             length: "1 year",
//         },
//     ],

// };

// // Step 4: For each favourite food in the favoriteFoods property,create an HTmL <li> element and place its value in the <li> element
// let favoriteFood1 = document.createElement("li");
// favoriteFood1.textContent = myInfo.favouriteFoods[0];

// let favoriteFood2 = document.createElement("li");
// favoriteFood2.textContent = myInfo.favouriteFoods[1];

// let favoriteFood3 = document.createElement("li");
// favoriteFood3.textContent = myInfo.favouriteFoods[2];

// let favoriteFood4 = document.createElement('li');
// favoriteFood4.textContent = myInfo.favouriteFoods[3];


// document.querySelector("#favorite-foods").appendChild(favoriteFood1);
// document.querySelector("#favorite-foods").appendChild(favoriteFood2);
// document.querySelector("#favorite-foods").appendChild(favoriteFood3);

// const foodsElement = document.querySelector("#favorite-foods");

// function foodLoop(food){
//     let favoriteFood = document.createElement('li');
//     favoriteFood.textContent = food;
    
//     foodsElement.appendChild(favoriteFood);
// }
// // myInfo.favoriteFoods.forEach(foodLoop);

// const foodListElements = myInfo.favoriteFood.map((food)=>{
//     let favoriteFood = document.createElement('li');
//     favoriteFood.textContent = food;

//     return favoriteFood;
// })

// foodsElement.innerHTML = foodListElements.join('');


const DAYS = 6;
let i = 0
const LIMIT = 30;

let studentReport = [11,42,33,64,29,37,44];
const arrLength = studentReport.length
for(i of studentReport){
    if( i <= LIMIT)console.log(i);

}



// while(studentReport[i] = arrLength){
//     if (studentReport[i] <= 30){
//         console.log(studentReport[i])
//     }
//     i++;
  
    

// }

const nums = [1,2,3,4,5];

nums.forEach(function(num){
    console.log(num);
});

const employees = [
    {
        id:101,
        name: "Alex",
        sal: 10000,
    },
    {
        id:102,
        name:"Clark",
        sal:13000,
    },
    {
        id:103,
        name: "John",
        sal:12000,

    },
    {
        id:104,
        name:"Tony",
        sal:20000

    }

]

employees.forEach(function(emp){
    console.log(emp.name.toUpperCase())
})

const squareNums = nums.map(function(num){
    return num * num;
})

console.log(squareNums);


let pagination = 10;
let j= 1;
while ( j >= pagination ) {
  console.log('pass');
  i++;
}