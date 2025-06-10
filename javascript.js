// // // // // // /*let country = 'india';
// // // // // // let contient = 'ashia';
// // // // // // let population = 2000;

// // // // // // //console.log(country + contient + population);

// // // // // // console.log(country);
// // // // // // console.log(contient);
// // // // // // console.log(population);*/


// // // // // // const firstName = "Sidd";
// // // // // // const lastName = "Kale";
// // // // // // const age = 21;
// // // // // // const from = "Sangamner";

// // // // // // // const about = `I am ${firstName + " " + lastName} \n\ from ${from} and my Age is \n\ A ${age} years old `


// // // // // // console.log(`I am ${firstName + " " + lastName} \n\ from ${from} and my Age is \n\ A ${age} years old `);


// // // // // const birthYear = 2000;
// // // // // const year = 2025;
// // // // // const age = 17;
// // // // // if (age >= 18) {
// // // // //     console.log("Ready to driving")
// // // // // } else {
// // // // //     console.log(`it is to young wait for ${} year`)
// // // // // }

// // // // // const A = false;
// // // // // const B = false;
// // // // // const C = false;
// // // // // const D = false;

// // // // // if (A || B) {
// // // // //     console.log('it is true');
// // // // // } else if (A && B) {
// // // // //     console.log('it is not');
// // // // // } else if (A && C) {
// // // // //     console.log("3");
// // // // // } else if (A && D) {
// // // // //     console.log("4");
// // // // // } else if (A || C) {
// // // // //     console.log("5");
// // // // // } else {
// // // // //     console.log("6");
// // // // // }


// // // // // const A = prompt("Enter the the number");

// // // // // console.log(!A);


// // // // // const age = prompt("Enter the Number");

// // // // // const result = age >= 18 ? 'wine' : 'water';
// // // // // console.log(result);


// // // // // age >= 18 ? console.log("Wine") : console.log("water");


// // // // // if (age >= 18) {
// // // // //     console.log("wine");
// // // // // } else {
// // // // //     console.log("water");
// // // // // }

// // // // //Primitive data types:-
// // // // // 1) Number

// // // // // let Age = Number(prompt("Enter the Age"));
// // // // // console.log(Age);

// // // // // let age = String(prompt("Enter the number"));
// // // // // console.log(age);

// // // // let age = Boolean(prompt("Enter the number"));
// // // // if (age = false) {
// // // //     console.log("It is a true value");
// // // // } else {
// // // //     console.log("it is not");
// // // // }
// // // // let age;

// // // const A = "Aditya";
// // // console.log(A);
// // // A = "sidd";
// // // console.log(A);

// // const A = Number(prompt("Enter The Number"));

// // switch (A) {
// //     case 1:
// //         console.log("Its One");
// //         break;

// //     case 2:
// //         console.log("Its two");
// //         break;

// //     case 3:
// //         console.log("Its Three");
// //         break;

// //     case 4:
// //         console.log("Its Four");
// //         break;

// //     default:
// //         console.log("Its Not a Number");

// // }

// // 'use strict'

// // let hasDriversLicense = false;
// // const passTest = true;

// // if (passTest) hasDriversLicense = true;
// // if (hasDriversLicense)
// //     console.log("I can drive");

// // let A = "sidd";
// // console.log(A);

// // function fruitJuice(apple, orange) {
// //     console.log(apple, orange);
// //     const juice = `juice is available for ${apple} apple is and for ${orange} orange .`
// //     return juice;
// // }
// // console.log(
// //     fruitJuice(prompt("Enter 1"), prompt("Enter 2")));


// function calcAge(birthYear) {
//     const age = 2025 - birthYear;
//     return age;
// }

// calcAge(2005);

// const calcAge = birthYear => 2025 - birthYear;

// const age = calcAge(2005);
// console.log(age);

const retirment = birthYear => {
    const age = 2025 - birthYear;
    const retirment1 = 65 - age;
    return retirment1;
}

console.log(retirment(2005));