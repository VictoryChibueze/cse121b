// operator.js

let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip(){
    if(shipCanFire()){
        shipAmmo--;

        if(ishit()){
            targetHealth--;
            console.log("hit - targetHealth:",targetHealth)
        }else{
            console.log("miss");
        }
    }else{
        reloadShip()
        console.log("reloading, shipHealth:", shipHealth)
    }
}

function encounter(){
    console.log("You see a target");

    if(!isDestroyed(targetHealth) && !isDestroyed(shipHealth)){
        fireShip();

        if (isDestroyed(targetHealth)){
            console.log("Target eliminated");
        }
        if(isDestroyed(shipHealth)){
            console.log("ship destroyed")
        }
    }
}
function isHit(){
  return Math.random() > 0.5;

}
function isDestroyed(health){

    return health <=0;
}

function reloadShip(){
    shipHealth-- ;
    shipAmmo+=3;
}
function shipCanFire(){
    return shipAmmo > 0 &&shipHealth > 0;


}

let firstName = 'Antonia';
let lastName = 'Francesca';


function fullName(firstName,lastName){
    return `${firstName} ${lastName}`
}

const fullName = function(first,last){
    return `${first} ${last}`

}

const fullName = (first,last)=>`${first} ${last}`




let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

const namesB = names.filter(name=>name.charAt(0)=="B");

const namesLength = names.map(name=> name.length())

const average = names.reduce((total,name)=> (total + name.length,0))/names.length;
