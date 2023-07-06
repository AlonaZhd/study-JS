//
//========  MATH  ==========
//

console.log(Math.PI);
// 3.141592653589793

//
// Максимальне та мінімальне значення

const a = 5;
const b = 10;
const c = -5;
const d = 25;

const arr = [20, 30, 40];

console.log(Math.min(a, b, c, ...arr));
// -5

//
// вбудована функція, яка повертає знак числа в аргументі
console.log(Math.sign(a));
// 1

//
// Math.pow(base, exponent)
// Це вбудована функція, яка використовується для піднесення числа до певного степеня.
console.log(Math.pow(b, 2));
//  100  = 10 в 2 степені

//
// Math.sqrt(x)
// Це вбудована функція, яка використовується для обчислення квадратного кореня числа.
console.log(Math.sqrt(d));
// 5

//
//  Округлення числа
// Math.floor(x) Округлює x до цілого числа, яке менше за x
// Math.ceil(x) Округлює x до цілого, яке більше за x
// Math.round(x) Округлює число x до найближчого цілого числа === найбільш наближене до звичайного округлення
// Math.trunc(x) Відкидає для x всі його десяткові числа
console.log(
    Math.floor(3.1),
    Math.floor(3.5),
    Math.floor(3.6),
    Math.floor(-1.1),
    Math.floor(-1.6)
); // 3 3 3 -2 -2
console.log(
    Math.ceil(3.1),
    Math.ceil(3.5),
    Math.ceil(3.6),
    Math.ceil(-1.1),
    Math.ceil(-1.6)
); // 4 4 4 -1 -1
console.log(
    Math.round(3.1),
    Math.round(3.5),
    Math.round(3.6),
    Math.round(-1.1),
    Math.round(-1.6)
); // 3 4 4 -1 -2
console.log(
    Math.trunc(3.1),
    Math.trunc(3.5),
    Math.trunc(3.6),
    Math.trunc(-1.1),
    Math.trunc(-1.6)
); // 3 3 3 -1 -1

//
// Math.random()
// Це вбудована функція, яка повертає випадкове десяткове число від 0 (включно) до 1 (виключно).

const random = Math.trunc(Math.random() * 10); // множимо на 10 щоб отримати число від 1 до 10, бо рандом видає число від 0 до 1. використовуємо функцію Math.trunc() для отримання цілого числа
console.log(random);

//
// Math.fround(х)
// Це функція, яка виконує округлення звичайного числа з плаваючою точкою з формату double (8 байтів) до float (4 байтів)
console.log(0.1 + 0.2 === 0.3);
// false

console.log(Math.fround(0.1 + 0.2) === Math.fround(0.3));
// true

console.log(Math.fround(0.1 + 0.2));
// 0.30000001192092896

console.log(Math.fround(0.3));
// 0.30000001192092896
