/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Jonas';

console.log(firstName);
console.log(firstName);
console.log(firstName);

let javascriptIsFun = true;
console.log(javascriptIsFun)

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);


let year;
console.log(year);
console.log(typeof year)

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "Programmer";
job = "Teacher";


//math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//  2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Carsen';
const lastName = 'Traenkner';

console.log(firstName + ' ' + lastName);

// assignemnt operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; //x = x + 1 = 101
x--; //x = x - 1 = 100
x--;
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10, y = 10
console.log(x.y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah);

// coding challenge #1
let markHeight1 = 1.69;
let markWeight1 = 78;
let markBMI1 = markWeight1 / markHeight1 ** 2;
console.log(markBMI1);

let johnHeight1 = 1.95;
let johnWeight1 = 92;
let johnBMI1 = johnWeight1 / johnHeight1 ** 2;
console.log(johnBMI1);

let markHeight2 = 1.88;
let markWeight2 = 95;
let markBMI2 = markWeight2 / markHeight2 ** 2;
console.log(markBMI2);

let johnHeight2 = 1.76;
let johnWeight2 = 85;
let johnBMI2 = johnWeight2 / johnHeight2 ** 2;
console.log(johnBMI2);

let markHigherBMI1 = markBMI1 > johnBMI1
console.log(markHigherBMI1)

let markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI2);

const firstName = 'Carsen';
const lastName = 'Traenkner';
const job = 'Teacher';
const birthYear = 2024;
let year = 2037

const cj = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(cj);

const cjNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(cjNew);

console.log(`String
with
multiple
lines`)

const age = 19;

if (age >= 18) {
    console.log(`Sarah can start driving license`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is to young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1997;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

//coding challenge #2
let markHeight1 = 1.69;
let markWeight1 = 78;
let markBMI1 = markWeight1 / markHeight1 ** 2;
console.log(markBMI1);

let johnHeight1 = 1.95;
let johnWeight1 = 92;
let johnBMI1 = johnWeight1 / johnHeight1 ** 2;
console.log(johnBMI1);

let markHeight2 = 1.88;
let markWeight2 = 95;
let markBMI2 = markWeight2 / markHeight2 ** 2;
console.log(markBMI2);

let johnHeight2 = 1.76;
let johnWeight2 = 85;
let johnBMI2 = johnWeight2 / johnHeight2 ** 2;
console.log(johnBMI2);

if (markBMI1 > johnBMI1) {
    console.log(`Mark (${markBMI1}) has a higher BMI than John (${johnBMI1})!`);
} else {
    console.log(`John (${johnBMI1}) has a higher BMI than Mark (${markBMI1})!`);
}

if (markBMI2 > johnBMI2) {
    console.log(`Mark (${markBMI2}) has a higher BMI than John (${johnBMI2})!`);
} else {
    console.log(`John (${johnBMI2}) has a higher BMI than Mark (${markBMI2})!`);
}

const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Carsen'));

console.log(String(23));

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('carsen'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

const age = 18;
if (age === 18) console.log('You just became an adult!');

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 69) {
    console.log('Cool! 69 is an AMAZING number!');
} else if (favorite === 23) {
    console.log('69 is better but 23 is also an acceptable number');
} else {
    console.log('Try Again!');
}

const hasDriversLicensce = true;
const hasGoodVision = true;

console.log(hasDriversLicensce && hasGoodVision);
console.log(hasDriversLicensce || hasGoodVision);
console.log(!hasDriversLicensce && hasGoodVision);

const shouldDrive = hasDriversLicensce && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false;
console.log(hasDriversLicensce && hasGoodVision && isTired);

if (hasDriversLicensce && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

// coding challenge #3

const dolphinsScores = (96 + 108 + 89) / 3;
const koalasScores = (88 + 91 + 110) / 3;
console.log(dolphinsScores);
console.log(koalasScores);

if (dolphinsScores > koalasScores && dolphinsScores >= 100) {
    console.log('Dolphins have won the competition!')
} else if (dolphinsScores < koalasScores && koalasScores >= 100) {
    console.log('Koalas have won the competition!');
} else if (dolphinsScores === koalasScores && dolphinsScores >= 100 && koalasScores >= 100) {
    console.log('The competition is a draw! Sudden Death Match!!!');
} else {
    console.log('No one wins the trophy!');
}

const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break; //must be here to stop code
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record Videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend!');
        break;
    default:
        console.log('Not a valid day! ');
}

const age = 23;
const drink1 = age >= 18 ? console.log('I like to drink wine') :
    console.log('I like to drink water');

let drink;
if (age >= 19) {
    drink = 'wine';
} else {
    drink = 'water';
}
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

//coding challenge #4

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);
*/





















