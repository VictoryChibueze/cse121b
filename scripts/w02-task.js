/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = 'Victory Chibueze';
const currentYear =new Date().getFullYear();
const profilePicture = '/images/profilee.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`
yearElement.textContent = currentYear;
imageElement.setAttribute('src',profilePicture);
imageElement.setAttribute('alt',`Profile image of ${fullName}`)






/* Step 5 - Array */
const foodArr = ['Moi-moi','Porridge beans','Egusi soup','Pepper soup',,'Fried rice','Ogbono soup','Spaghetti'];
foodElement.textContent = foodArr;
const favFood = 'Jollof rice'

foodArr.push(favFood);

foodElement.innerHTML += `<br><br>${foodArr}`
foodArr.shift()
foodElement.innerHTML += `<br><br>${foodArr}`
foodArr.pop();
foodElement.innerHTML += `<br><br>${foodArr}`;





