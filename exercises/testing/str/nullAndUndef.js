console.log(typeof undefined);
console.log(typeof null);
console.log(null == undefined);
console.log(null === undefined);

//cand se folosesc > < >= <= ::: (nu se aplica la == si ===)
//null      ---> 0
//undefined ---> NaN

//cand se se foloseste equality check "==" sau "===" undefined == null dar doar atat
//undefined == null && undefined == undefined si atat && null == null

console.log("\n=================================\n");
console.log(null > 0);   //false
console.log(null == 0);  //false
console.log(null >= 0);  //true

console.log("\n=================================\n");

console.log(undefined > 0);   //false
console.log(undefined < 0);   //false
console.log(undefined == 0);  //false