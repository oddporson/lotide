const assertEqual = require('../assertEqual');

// TEST CODE
// assertEqual(words.length, 3); // original array should still have 3 elements!
// assertEqual(words.length, 2); // ensure we get back two elements
// assertEqual(words[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(words[1], "Labs"); // ensure second element is "Labs"


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail([1,2,5,6,3]), [2,5,6,3]); // this did not pass.