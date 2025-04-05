const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
console.log("ceva " + eval(String(s2)));
console.log("ceva " + `${s2}`);
console.log("ceva " + s2);
console.log(s2);
console.log(eval(s2.valueOf()));
console.log("\nNEWWWWW\n\n");
console.log(s1.constructor);
console.log(0.1 + 0.2);
