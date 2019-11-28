/*
countOnly will be given an array and an object.

It will return an object containing counts of everything that the input object listed.

Rules:
only keys which have a truthy value should be counted in the resulting object.

All other strings (either set to false or not included at all in the object) should NOT be counted.

if a particular string is meant to be counted => true , include it.

if particular string meant to be count but doesn't existed in input array, do NOT include in final count.

*/

// Copied from assertEqual.js from lotide folder.

/* This checks list of firstNames.
We want to find Jason, Karima and Fang by setting them true.
Looks for them from the array list of firstNames in the TestCode an validate it from assertEqual library.
*/
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${(actual)} !== ${(expected)}`);
  }
  // return;
};


const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) { //for..of loop basically a shortcut to loop through firstNames array and print them out. item is the variable. all the names that are looked are store in item variable. 
  
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1
    };
  } 
  return results;
};

//Test Codes
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
