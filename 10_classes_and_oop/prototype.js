// let myName = "Sahil     ";

// console.log(myName.truelength);

let myHeroes = ["thor", "Spiderman", "hulk"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    hulk: "power",

    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`);
    }
}

Object.prototype.Sahil = function(){
    console.log(`sahil is present in all objects`);
}

Array.prototype.heySahil = function(){
    console.log(`Sahil says hello`);
}

// heroPower.Sahil();
// myHeroes.Sahil();
// myHeroes.heySahil();
// heroPower.heySahil();

// Inheritance

const user = {
    name: "Sahil",
    email: "Sahil.patole@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'JS Assignment', 
    fullTime: true, 
    __proto__: TeachingSupport
}

Teacher.__proto__ = user;

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "SahilPatole        "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength();
"sahil".trueLength();
"iceTea".trueLength();