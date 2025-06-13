// // // // // // // // // // /*let country = 'india';
// // // // // // // // // // let contient = 'ashia';
// // // // // // // // // // let population = 2000;

// // // // // // // // // // //console.log(country + contient + population);

// // // // // // // // // // console.log(country);
// // // // // // // // // // console.log(contient);
// // // // // // // // // // console.log(population);*/


// // // // // // // // // // const firstName = "Sidd";
// // // // // // // // // // const lastName = "Kale";
// // // // // // // // // // const age = 21;
// // // // // // // // // // const from = "Sangamner";

// // // // // // // // // // // const about = `I am ${firstName + " " + lastName} \n\ from ${from} and my Age is \n\ A ${age} years old `


// // // // // // // // // // console.log(`I am ${firstName + " " + lastName} \n\ from ${from} and my Age is \n\ A ${age} years old `);


// // // // // // // // // const birthYear = 2000;
// // // // // // // // // const year = 2025;
// // // // // // // // // const age = 17;
// // // // // // // // // if (age >= 18) {
// // // // // // // // //     console.log("Ready to driving")
// // // // // // // // // } else {
// // // // // // // // //     console.log(`it is to young wait for ${} year`)
// // // // // // // // // }

// // // // // // // // // const A = false;
// // // // // // // // // const B = false;
// // // // // // // // // const C = false;
// // // // // // // // // const D = false;

// // // // // // // // // if (A || B) {
// // // // // // // // //     console.log('it is true');
// // // // // // // // // } else if (A && B) {
// // // // // // // // //     console.log('it is not');
// // // // // // // // // } else if (A && C) {
// // // // // // // // //     console.log("3");
// // // // // // // // // } else if (A && D) {
// // // // // // // // //     console.log("4");
// // // // // // // // // } else if (A || C) {
// // // // // // // // //     console.log("5");
// // // // // // // // // } else {
// // // // // // // // //     console.log("6");
// // // // // // // // // }


// // // // // // // // // const A = prompt("Enter the the number");

// // // // // // // // // console.log(!A);


// // // // // // // // // const age = prompt("Enter the Number");

// // // // // // // // // const result = age >= 18 ? 'wine' : 'water';
// // // // // // // // // console.log(result);


// // // // // // // // // age >= 18 ? console.log("Wine") : console.log("water");


// // // // // // // // // if (age >= 18) {
// // // // // // // // //     console.log("wine");
// // // // // // // // // } else {
// // // // // // // // //     console.log("water");
// // // // // // // // // }

// // // // // // // // //Primitive data types:-
// // // // // // // // // 1) Number

// // // // // // // // // let Age = Number(prompt("Enter the Age"));
// // // // // // // // // console.log(Age);

// // // // // // // // // let age = String(prompt("Enter the number"));
// // // // // // // // // console.log(age);

// // // // // // // // let age = Boolean(prompt("Enter the number"));
// // // // // // // // if (age = false) {
// // // // // // // //     console.log("It is a true value");
// // // // // // // // } else {
// // // // // // // //     console.log("it is not");
// // // // // // // // }
// // // // // // // // let age;

// // // // // // // const A = "Aditya";
// // // // // // // console.log(A);
// // // // // // // A = "sidd";
// // // // // // // console.log(A);

// // // // // // const A = Number(prompt("Enter The Number"));

// // // // // // switch (A) {
// // // // // //     case 1:
// // // // // //         console.log("Its One");
// // // // // //         break;

// // // // // //     case 2:
// // // // // //         console.log("Its two");
// // // // // //         break;

// // // // // //     case 3:
// // // // // //         console.log("Its Three");
// // // // // //         break;

// // // // // //     case 4:
// // // // // //         console.log("Its Four");
// // // // // //         break;

// // // // // //     default:
// // // // // //         console.log("Its Not a Number");

// // // // // // }

// // // // // // 'use strict'

// // // // // // let hasDriversLicense = false;
// // // // // // const passTest = true;

// // // // // // if (passTest) hasDriversLicense = true;
// // // // // // if (hasDriversLicense)
// // // // // //     console.log("I can drive");

// // // // // // let A = "sidd";
// // // // // // console.log(A);

// // // // // // function fruitJuice(apple, orange) {
// // // // // //     console.log(apple, orange);
// // // // // //     const juice = `juice is available for ${apple} apple is and for ${orange} orange .`
// // // // // //     return juice;
// // // // // // }
// // // // // // console.log(
// // // // // //     fruitJuice(prompt("Enter 1"), prompt("Enter 2")));


// // // // // function calcAge(birthYear) {
// // // // //     const age = 2025 - birthYear;
// // // // //     return age;
// // // // // }

// // // // // calcAge(2005);

// // // // // const calcAge = birthYear => 2025 - birthYear;

// // // // // const age = calcAge(2005);
// // // // // console.log(age);

// // // // const retirment = birthYear => {
// // // //     const age = 2025 - birthYear;
// // // //     const retirment1 = 65 - age;
// // // //     return retirment1;
// // // // }

// // // // console.log(retirment(2005));

// // // // 11-06-2025
// // // //Function Calling
// // // // const fruitePeaces = function (fruits) {
// // // //     return fruits * 4;
// // // // }

// // // // const fruiteProcessor = function (apple, orange) {
// // // //     const appleJuice = fruitePeaces(apple);
// // // //     const orangeJuice = fruitePeaces(orange);

// // // //     const juice = `it is ${appleJuice} and it is ${orangeJuice}.`
// // // //     return juice;
// // // // };

// // // // console.log(fruiteProcessor(3, 3));

// // // // const calcAverage = (score1, score2, score3) => {
// // // //     return (score1 + score2 + score3) / 3;
// // // // }

// // // // const scoreDolphins = calcAverage(44, 23, 71);
// // // // const scoreKoalas = calcAverage(65, 54, 49);

// // // // const checkWinner = function (scoreDolphins, scoreKoalas) {
// // // //     if (scoreDolphins >= scoreKoalas) {
// // // //         console.log(`team dolphin win`);
// // // //     } else if (scoreDolphins <= scoreKoalas) {
// // // //         console.log(`Team Kotlas Win`);
// // // //     } else {
// // // //         console.log(`no one win`);
// // // //     }
// // // // }


// // // // const calcAverage = (score1, score2, score3) => {
// // // //     return (score1 + score2 + score3) / 3;
// // // // }

// // // // const scoreDolphins = calcAverage(44, 23, 71);
// // // // const scoreKoalas = calcAverage(65, 54, 49);

// // // // const checkWinner = function (scoreDolphins, scoreKoalas) {
// // // //     if (scoreDolphins >= scoreKoalas * 2)
// // // //         console.log('team Dolphin wins');
// // // //     else if (scoreKoalas >= scoreDolphins * 2)
// // // //         console.log('team Koalas wins...');
// // // //     else
// // // //         console.log('No team wins...');
// // // // }


// // // const calcTip = function (bill) {
// // //     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// // // }
// // // console.log(calcTip(100));

// // // const bills = [125, 555, 44];
// // // const tips = [calcTip(bills[0]), calcTip(bills[1], calcTip(bills[2]))];


// // // const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// // // // console.log(bills, tips, totals);

// // const Arrey = [
// //     'sidd',
// //     'kale',
// //     2025 - 2005,
// //     'codder',
// //     ['akash', 'aditya', 'vedant']
// // ];

// // const arrey = {
// //     firstName: 'sidd',
// //     lastName: 'Kale',
// //     age: 2025 - 2005,
// //     job: 'codder',
// //     friends: ['akash', 'aditya', 'vedant']

// // }
// // // console.log(Arrey);
// // // console.log(arrey);


// // const info = prompt("What Info Requeired");
// // if (arrey[info]) {
// //     console.log(`The ${info} is ` + arrey[info]);
// // }
// // else {
// //     console.log("Bad Request")
// // }

// // //Challenge

// // console.log(`${arrey.firstName} has ${arrey.friends.length} friends but his best friend is ${arrey.friends[0]}`);

// // For LOOP

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`lifting weights ${rep} repo`);
// }

// const Arrey = [
//     'sidd',
//     'kale',
//     2025 - 2005,
//     'codder',
//     ['akash', 'aditya', 'vedant']
// ];

// // console.log(Arrey);

// // for (let i = 0; i < Arrey.length; i++) {
// //     console.log(Arrey[i])
// // }

// for (let i = Arrey.length; i >= 0; i--) {

//     console.log(Arrey[i]);

// }

for (let Exercise = 1; Exercise < 4; Exercise++) {
    console.log(`-----starting----${Exercise}`);

    for (let repo = 1; repo <= 6; repo++) {
        console.log(`Lifting weights ${repo}`);
    }
    for (let done = 1; done <= 1; done++) {
        console.log(`done `);
    }
}