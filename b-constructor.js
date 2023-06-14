//
//========  built-in global CONSTRUCTOR  ==========
//

// const a = 0.1;
// const b = 0.2;
// const c = 0.3;

// const d = a + b;

// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);

// console.log(d - c < Number.EPSILON && c - d < Number.EPSILON);

//
// =============================================
//

// function rewiewNumber(num) {
//     if (isNaN(num)) {
//         return console.log("Is not a number", num);
//     }
//     if (!num && num !== 0) {
//         return console.log("Bad number", num);
//     }
//     if (!Number.isInteger(num)) {
//         return console.log("Дробове число", num);
//     }
//     if (!Number.isSafeInteger(num)) {
//         return console.log("Небезпечне число", num);
//     }
//     return console.log(num);
// }
// rewiewNumber(10.5);

//
// =============================================
//

// const a1 = 1.235511;
// const a2 = parseInt("1000");

// const a3 = parseFloat(a1.toFixed(4));

// console.log(typeof a3, a3);

//
// ==========================
//

// const a1 = 123.4511;
// const a2 = parseInt("1000");

// const a3 = parseFloat(a1.toPrecision(6));

// console.log(typeof a3, a3);

//
// =======================
//

const a1 = 9484558;
const a2 = a1.toExponential();
const a3 = parseFloat(a2);
const a4 = a3.toString();

console.log(typeof a4, a4);
