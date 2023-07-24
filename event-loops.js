//
//========  EVENT LOOPS  ==========
//
setTimeout(() => {
    console.log("One");
}, 0);

setTimeout(() => {
    console.log("Two");
}, 0);

console.log("Three");

console.log("Four");

// Three
// Four
// One
// Two

//
// ====================

setImmediate(() => {
    console.log("One");
});

setImmediate(() => {
    console.log("Two");
});

console.log("Three");

console.log("Four");

// Three
// Four
// One
// Two

//
// ====================

// function sayHello() {
//     console.log("Привіт!");
// }

// setInterval(sayHello, 1000);
// // Буде виводити кожну секунду код з функції  до безкінечності..

//
// ===================

let counter = 0;

function incrementCounter() {
    console.log(counter);
    counter++;
}

const intervalId = setInterval(incrementCounter, 1000);

// Зупинка циклічного виконання після 5 секунд
setTimeout(() => {
    clearInterval(intervalId);
}, 5000);
