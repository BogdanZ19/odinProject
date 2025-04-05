//1

function add7(x) {
    return x + 7;
}

function multiply(a, b) {
    return a * b;
}
/**
 * 
 * @param {string} str 
 */
function capitalize(str) {

    str = str.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);

    return str;
}

/**
 * 
 * @param {string*} str  
 */
function lastLetter(str) {
    return str.charAt(str.length - 1);
}

console.log(add7(3));
console.log(multiply(3, 5));
console.log(capitalize("merge"));
console.log(lastLetter("jklmnop"));




