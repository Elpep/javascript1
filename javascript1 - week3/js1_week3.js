//1. Strings

let myString = "hello,this,is,a,difficult,to,read,sentence";

console.log(myString);
console.log(myString.length);
console.log(myString.replace(/,/g, " ")); //Use of string-replace method


//2. Arrays

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, "meerkat"); //The splice() method adds/removes items to/from an array and returns the removed item(s).
console.log('The array has a length of: ' + favoriteAnimals.length);

favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);

console.log(favoriteAnimals.indexOf('meerkat'));
console.log("The item you are looking for is at index: " + favoriteAnimals.indexOf('meerkat'));


//More JavaScript

//1.

function add3Nums(a, b, c) {
    return a + b + c;
}

console.log(add3Nums(1, 2, 3));


//2.

function colorCar(color) {
    console.log('A ' + color + ' car.');
}

colorCar('red');


//3.

let car = {
    type:"SUV",
    doors: 4,
    wheels: 4
}

function carFunction(objectAsParameter){
    return objectAsParameter
}

console.log(carFunction(car));


//4.

function vehicleType (color, code) {
    var vehicleCode = {
        1: "car",
        2: "motorbike"
    }

    console.log("A " + color + " " + vehicleCode[code]);
}

console.log(vehicleType("blue", 2));


//5.

console.log(3===3 ? "yes" : "no");


//6.

function vehicle (color, code, age) {
    var vehicleCode = {
        1: "car",
        2: "motorbike"
    }

    console.log("A " + color + " " + (age <= 1 ? "new" : "used") + " " + vehicleCode[code]);
}

console.log(vehicle("blue", 1, 5));


//7.

let vehicleArray = ["motorbike", "caravan", "bike"];

console.log(vehicleArray);


//8.

console.log(vehicleArray[2]);


//9.

function vehicle (color, code, age) {
    var vehicleCode = {
        1: "motorbike",
        2: "caravan"
        3: "bike"
    }

    console.log("A " + color + " " + (age <= 1 ? "new" : "used") + " " + vehicleCode[code]);
}

console.log(vehicle("green", 3, 1));


//10.

var adString = "Amazing Joe's Garage, we service ";

for (var item in vehicleArray) {
    adString += vehicleArray[item] + 's.';
}

console.log(adString);


//11.

vehicleArray.push("skateboard");

console.log(vehicleArray);


//12.

let emptyObject = {};

console.log(emptyObject);


//13.

let shaTeachers = {
    Zohir: null,
    Inigo: null,
    Minaidis: null
}

console.log(shaTeachers);


//14.

shaTeachers = {
    Zohir: "JavaScript",
    Inigo: "Python",
    Minaidis: "JavaScript"
}

console.log(shaTeahers);


//15.

let x = [1,2,3];
let y = [1,2,3];
let z = y;

if (x == y) {
    console.log("x == y is true");
} else {
    console.log("x == y is false");
}

if (x === y) {
    console.log("x === y is true");
} else {
    console.log("x === y is false");
}

if (z == y) {
    console.log("z == y is true");
} else {
    console.log("z == y is false");
}

if (z == x) {
    console.log("z == x is true");
} else {
    console.log("z == x is false");
}

//16.

let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

console.log("o1: ", o1);
console.log("o2: ", o2);
console.log("o3: ", o3);

o1 = { foo1:'bar1'};
o2 = { foo2:'bar2'};
console.log("o1: ", o1);
console.log("o2: ", o2);
console.log("o3: ", o3);

console.log("The order of assignment matters. 02=03 means 03 hasn't been assigned a value yet, so we get 'undefined'.")

// 17.

let bar = 42;
typeof typeof bar;
console.log("This code returns a string, because bar is a number and 'number' is a string");