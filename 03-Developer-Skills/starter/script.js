// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const xyzabc = 23;

// const birthYear = 12;
// if (xyzabc === 23) console.log(23);

// const calcAge = birthYear => 2037 - birthyear;

// console.log(xyzabc);
// console.log(birthYear);
/*
const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const temperatures2 = [5, -4, -8, -3, 'error', 11, 15, 19, 17, 16, 11, 7];

const temperatures3 = temperatures1.concat(temperatures2);
console.log(temperatures3);

// 1) understanding the problem
// - What is temp amplitude? Answer: Difference between highest and lowest temp
//  - How to compute max and min temps?
// - What a sensor error? What to do?

// 2) Breaking into sub-problems
// - How to Ignore error?
// - Find max value in temp
// - Find min value in temp
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures3);
console.log(amplitude);

// Problem 2:
// Function should now recieve two arrays of temps

// 1) Understanding the problem
// - With 2 arrays should we implement function twice? NO! just merge two arrays

// 2) Breaking into sub problems
//  - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) Fix
    // value: Number(prompt('Degrees Celsius:')),
    value: 10,
  };
  console.log(measurement);
  // B) Find bug
  console.table(measurement);

  //   console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) Identify bug
console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
*/

//Coding Challenge
//  1) Understanding the problem
// - Array transformed to string by ...
// - What is X days? Answer index + 1

// 2) Breaking into sub problems
// - transform array into string
//  - transform each element to string with C
//  - String needs to contain day (index + 1)
//  Add .. between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}C in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1);
