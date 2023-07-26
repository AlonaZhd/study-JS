async function performFile(path) {
    const content = await loadFile(path);

    const data = await convertFile(content);
    const convertedContent = await getInfoFromFile(data);

    await saveFile(convertedContent);
    await sendFileToClient();
}

performFile("file.txt");
//
//========  FUNCTION  ==========
//
// Функція-генератор — це особливий тип функції, який може призупиняти своє виконання, повертаючи проміжний результат

// Функція-генератор дозволяє створювати ітератори

// Коли ви викликаєте функцію-генератор, вона повертає спеціальний об'єкт-ітератор. Цей об'єкт використовується для управління процесом виконання функції-генератора.

function* myGenerator() {
    console.log("Start 1");
    yield 1;

    console.log("Start 2");
    yield 2;

    console.log("Start 3");
    yield 3;

    console.log("End");
}

const generator = myGenerator();

const result1 = generator.next();
console.log(result1);
// Start 1
// { value: 1, done: false }

const result2 = generator.next();
console.log(result2);
// Start 2
// { value: 2, done: false }

// Ключове слово “віддати” (yield) — це ключове слово, яке використовується у функціях-генераторах для призупинення виконання та повернення значень.

// next()  Метод, який продовжує виконання генератора до наступного оператора yield і повертає оновлений об’єкт ітератор-генератор

function* processOrder(order) {
    yield validateOrder(order);
    yield processPayment(order);
    yield sendOrderConfirmation(order);

    return order;
}

function getOrderDetail() {
    const order = { id: 123, product: "Product", quantity: 2 };
    return order;
}

function validateOrder(order) {
    const isValid = order.quantity > 0;
    return isValid;
}

function processPayment(order) {
    const isPaymentSuccessful = Math.random() < 0.5;
    return isPaymentSuccessful;
}

function sendOrderConfirmation() {
    const isConfirmationSent = true;
    return isConfirmationSent;
}

// ====================

const order = { id: 123, product: "Product", quantity: 2 };

const orderProcessing = processOrder(order);

// ===================

const isValidateOrder = orderProcessing.next().value;

if (isValidateOrder === false) {
    // ...
}

//

const isProcessPayment = orderProcessing.next();

if (isProcessPayment === false) {
    // ...
}

//

console.log(orderProcessing.next());
console.log(orderProcessing.next());
console.log(orderProcessing.next());
console.log(orderProcessing.next());
// { value: true, done: false }
// { value: false, done: false }
// { value: true, done: false }
// { value: { id: 123, product: 'Product', quantity: 2 }, done: true }

//
// ===============================================================
//
// Генератори можна перебирати за допомогою циклу for .. of.

function* generatorFunction() {
    yield "First value";
    yield "Second value";
}

const generator2 = generatorFunction();

for (let value of generator2) {
    console.log(value);
}
// First value
// Second value

//
// ===============================================================
//
// Генератори можуть бути композиційними, тобто один генератор може вбудовуватись в інший. Потрібно вказати yield* перед викликом генератора

function* generatorOne() {
    yield "1 1";
    yield "1 2";
}

function* generatorTwo() {
    yield* generatorOne();
    yield "2 1";
    yield "2 2";
}

const generator3 = generatorTwo();

console.log(generator3.next());
console.log(generator3.next());
console.log(generator3.next());
console.log(generator3.next());
// { value: '1 1', done: false }
// { value: '1 2', done: false }
// { value: '2 1', done: false }
// { value: '2 2', done: false }

//
// ===============================================================
//
// Ключове слово yield не лише повертає значення назовні, але може передавати значення всередину генератора. Потрібно значення передати в аргумент next( ) value

function* myGenerator2() {
    yield 1;
    const value = yield 2;
    yield 3;
    yield value;
}

const generator4 = myGenerator2();

console.log(generator4.next().value);
console.log(generator4.next().value);
console.log(generator4.next(4).value);

// console.log(generator4.return(100));
// // цей код достроково заіершить функці. і виведе: { value: 100, done: true }

console.log(generator4.next().value);
// 1
// 2
// 3
// 4

//
// ===============================================================
//

// return(value)
// Завершує виконання генератора і повертає об'єкт, властивість value якого є аргументом return(), а властивість done має значення true.

// throw(error)
// Викликає помилку в коді функції-генератора. Значення, яке передали як аргумент, можна обробити в генераторі за допомогою блоку try..catch.

//
// ===============================================================
//
// Генератори можна використовувати разом з асинхронним кодом за допомогою ключових слів та async await

const asyncFunc = () => new Promise((resolve) => setTimeout(resolve, 1000));

async function* asyncGenerator() {
    await asyncFunc;
    yield "After 1 second";
    await asyncFunc;
    yield "After 2 seconds";
}

async function runGenerator() {
    const generator5 = asyncGenerator();

    // let result = null;
    // result = await generator5.next();
    // console.log(result);

    // result = await generator5.next();

    // result.value;
    // console.log(result);

    for await (const result of generator5) {
        console.log(result);
    }
}
runGenerator();
// { value: 'After 1 second', done: false }
// { value: 'After 2 seconds', done: false }

// за допомогою метода перебору for await of   момемо висести данні values
// After 1 second
// After 2 seconds
