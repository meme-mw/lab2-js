//1st Q
let eatsPlants ,eatsAnimals;

eatsPlants=false; eatsAnimals=true;
eatsPlants&&eatsAnimals? console.log("omnivore"):!eatsAnimals&&eatsPlants?console.log("herbivore"):eatsAnimals?console.log("carnivore"):console.log("undefined");
// 2nd Q
let musicians=80;

if(musicians<=0){
    console.log("not a group");
    
}else if(musicians===1){
    console.log("solo");
}else if(musicians===2){
    console.log("duet");
}else if(musicians===3){
    console.log("trio");
}else if(musicians===4){
    console.log("quartet");
}else{
    console.log("this is a large group" );
}
//3rd Q
let room,suspect,weapon,solved;
room="dining room";
suspect="Mr. Parkes";
solved=false; weapon="";

if(room==="gallery"){
    weapon="trophy";
    if(suspect==="Ms. Van Cleve"){
        solved=true;
    }
}else if(room==="ballroom"){
    weapon="poison";
    if(suspect==="Mr. Kalehoff"){
        solved=true;
    }
}else if(room==="billiards room"){
    weapon="pool stick";
    if(suspect==="pool stick"){
        solved=true;
    }
}else if(room==="dining room"){
    weapon="knife";
    if(suspect==="Mr. Parkes"){
        solved=true;
    }
}

if(solved){
    console.log(suspect+" did it in the "+room+" with the "+weapon);
}

// 4th Q

var balance = -325;
var checkBalance = true;
var isActive = true;

if(checkBalance){
    if(balance>=0){
        isActive=true;
        console.log("balance is active");
    }else{
        isActive=false;
        console.log("balance isn't active");
    }
    
}

// 5th Q

var flavor="vanilla",vessel="cone",toppings="sprinkles";
if((flavor==="vanilla"||flavor==="chocolate")&&(vessel==="cone"||vessel==="bowl")&&(toppings==="sprinkles"||toppings==="peanuts")){
    console.log("I'd like two scoops of "+flavor+ " ice cream in a "+vessel+ " with "+toppings+ ".");
}
