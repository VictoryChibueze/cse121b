/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name:"Victory Chibueze",
    photo :{
        src:'images/placeholder.png',
        alt: `Profile Image ${this.name}`,
    },
    favoriteFood:[  
                    'Moi-moi',
                    'Porridge beans',
                    'Egusi soup',
                    'Pepper soup',
                    'Fried rice',
                    'Ogbono soup',
                    'Spaghetti'
                                         
    ],
    hobbies: ['Coding','Soccer','Reading','Gaming'],
    placesLived: [],

};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'PortHarcourt',
        length:'4 Years',
    }
);

myProfile.placesLived.push(
    {
        place: 'kano',
        length: '5 years',
    }
);





/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src',myProfile.photo.src);
document.querySelector('#photo').setAttribute('alt',myProfile.photo.alt);


/* Favorite Foods List*/
myProfile.favoriteFood.forEach((food)=>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);

});


/* Hobbies List */
myProfile.hobbies.forEach((hobby)=>{
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').append(li);
});



/* Places Lived DataList */


myProfile.placesLived.forEach((placeLived)=>{
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');

    dt.textContent = placeLived.place;
    dd.textContent = placeLived.length;

    document.querySelector('#places-lived').append(dt);
    document.querySelector('#places-lived').append(dd);
    

})
