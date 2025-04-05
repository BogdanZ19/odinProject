let text = "Apple, Banana, Kiwi";
let text1 = "Hello";
let text2 = "World";
let text3 = "             Hello, Wrold!            ";
let text4 = "5";
let length = text.length;
let char = text.charAt(0);
let charCode = text.charCodeAt(0);
let letter = text.at(0);
let letter1 = text[0];

let part = text.slice(7, 13);
//let part = text.slice(7);
//let part = text.slice(-12);
//let part = text.slice(-12, -6);

let part1 = text.substring(7, 13);

let up = text.toUpperCase();
let lwr = text.toLowerCase();

let txt = text1.concat(", ", text2);

let txtTrim = text3.trim();
//let txtTrim = text3.trimStart();
//let txtTrim = text3.trimEnd();

let txtPad = text4.padStart(5, "x");
//let txtPad = text4.padStart(5, "0");

let nr = 4;
let nrTxt = nr.toString();
nrTxt = nrTxt.padEnd(5, "0");
nr = Number(nrTxt);

let repeat = text.repeat(2);

let replaceTX = "Apple, Banana, Banana, Kiwi"
let replace = replaceTX.replace("Banana", "Pizza");
//let replace = replaceTX.replace(/Banana/g, "Pizza");
//let replace = replaceTX.replace("banana", "Pizza");
//let replace = replaceTX.replace(/banana/i, "Pizza");
//let replace = replaceTX.replace(/banana/ig, "Pizza");

let rplAllTxt = "I love cats. Cats are very easy to love. Cats are very popular.";
let newTxt = rplAllTxt.replaceAll("cats", "dogs");
newTxt = newTxt.replaceAll("Cats", "Dogs");

let arr = rplAllTxt.split(".");
//let arr = rplAllTxt.split("");

console.log(arr);


