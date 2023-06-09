//
//========  ARRAY  ==========
//
// const a = 1;
// const b = 2;
// const c = 3;

// let list = [];

// // console.log(list);

// const testArr = Array();

// testArr[0] = "Start";
// testArr[1] = 2;
// testArr[2] = 20;
// testArr[testArr.length] = 30;
// testArr[testArr.length] = 40;

// delete testArr[0];

// console.log(testArr);

// const big = [[[1], [2, 3, 4, 5], [6]], [[7]], [[8]]];

// console.log(big[0][1][3]);

const location = [
    [100, 101, 102],
    [200, 201, 202],
    [300, 301, 302],
    [400, 401, 402],
];

// const loc1 = location[0];
// const loc2 = location[1];

// деструктурізація
// const [loc1, ...rest] = location;

// const [[p1, p2], loc3, loc4 = "test"] = rest;

// console.log(p1, p2);

// console.log(location[0][2]);

// for (const point of location) {
//     console.log(point);

//     for (const coord of point) {
//         console.log(coord);
//     }
// }

// for (let i = 0; i < location.length; i++) {
//     console.log(location[i]);
//     for (let j = 0; j < location[i].length; j++) {
//         console.log(location[i][j]);
//     }
// }

// const l1 = [1, 2, 3];
// const l2 = [1, 2, 3];

// const l3 = l1;
// const [...l4] = l1;

// console.log(l1, l3);
// console.log(l1, l4);

// delete l1[0];
// console.log(l1, l3); // Змінна а та b посилаються на один і той самий масив в пам'яті. Тому видалене значення з одного масиву видаляється в іншому
// // [ <1 empty item>, 2, 3 ] [ <1 empty item>, 2, 3 ]

// console.log(l1, l4); // Виконана деструктурізація, тому це вже різні масиви. Тому видалене значення з одного масиву НЕ видаляється в іншому
// [ <1 empty item>, 2, 3 ] [ 1, 2, 3 ]

function printFullName([name, surname, lastname, ...arg]) {
    // console.log(arg);
    // return arg.toString();
    return `${name} ${surname} ${lastname} ${
        arg.length ? `(${arg.toString()})` : ""
    }`;
}

console.log(printFullName(["Ivan", "Petrenko", "Vasilenko", "Admin", "18"]));

// function sumAllNum(...nums) {
//     let sum = 0;

//     for (const n of nums) {
//         sum += n;
//     }

//     return [sum, nums.length];
// }

// // console.log(sumAllNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12));

// const [sum, numLength] = sumAllNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12);

// console.log(sum, numLength);

// ==========  METODS Array =============

// Array.from()
// Це вбудована функція, яка створює новий масив з ітерабельного або подібного до масиву об'єкта

// console.log(Array.from("Hello World"));
// // [
// //     'H', 'e', 'l', 'l',
// //     'o', ' ', 'W', 'o',
// //     'r', 'l', 'd'
// // ]

// console.log(
//     Array.from(
//         { 0: "Hello", 1: "World", 2: "!!!", length: 3 },
//         (elem, index) => {
//             console.log(elem, index);
//             return elem;
//         }
//     )
// );
// // Hello 0
// // World 1
// // !!! 2
// // [ 'Hello', 'World', '!!!' ]

// const obj = {
//     0: "Hello",
//     1: "World",
//     2: "!!!",
//     length: 3,
// };

// console.log(
//     Array.from(
//         obj,
//         function (elem, index) {
//             console.log(this);
//             console.log(elem, index);
//             return elem;
//         },
//         obj
//     )
// );
// // { '0': 'Hello', '1': 'World', '2': '!!!', length: 3 }
// // Hello 0
// // { '0': 'Hello', '1': 'World', '2': '!!!', length: 3 }
// // World 1
// // { '0': 'Hello', '1': 'World', '2': '!!!', length: 3 }
// // !!! 2
// // [ 'Hello', 'World', '!!!' ]

// const obj2 = {
//     0: "Hello",
//     1: "World",
//     2: "!!!",
//     length: 3,
//     prefix: "():",
// };

// console.log(
//     Array.from(
//         obj2,
//         function (elem, index) {
//             return `${this.prefix}${elem}`;
//         },
//         obj2
//     )
// );
// [ '():Hello', '():World', '():!!!' ]

// ==========================================
// Array.isArray()
// Це вбудована функція, яка перевіряє, чи є об'єкт масивом

const obj = {
    0: "Hello",
    1: "World",
    2: "!!!",
    length: 3,
    prefix: "():",
};

const arr = Array.from(
    obj,
    function (elem, index) {
        return `${this.prefix}${elem}`;
    },
    obj
);

console.log(Array.isArray(arr)); // true

// ===========================================
// Array.of(element0, element1, /* ... ,*/ elementN)
// Це вбудована функція, яка створює новий масив з будь-якої кількості переданих аргументів.

console.log(Array.of(1, 2, 35, 6));
// [ 1, 2, 35, 6 ]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(Array.of(...arr1, ...arr2));
// [ 1, 2, 3, 4, 5, 6 ]
console.log([...arr1, ...arr2]);
// [ 1, 2, 3, 4, 5, 6 ]

// ====================================
// .at(index)
// Це вбудована функція, яка повертає елемент масиву з вказаним індексом. Якщо індекс виходить за межі масиву, повертається undefined.

console.log(arr1.at(1));
// 2

// ===================================
// push(element0, element1, /* ... ,*/ elementN)
// Це вбудована функція, яка додає один або більше елементів в кінець масиву і повертає оновлену довжину масиву.
console.log(arr1.push(10, 20, 30));
// 6  кількість елементів масивів
console.log(arr1);
// [ 1, 2, 3, 10, 20, 30 ]

// ====================================
// .pop()
// Це вбудована функція, яка видаляє останній елемент з масиву і повертає його значення. Цей метод змінює вихідний масив, скорочуючи його довжину на 1.
console.log(arr1.pop());
// 30 це остання значення в масиві яке буде видалене
console.log(arr1);
// [1, 2, 3, 10, 20];

// ====================================
// shift()
// Це вбудована функція, яка видаляє перший елемент з початку масиву і повертає його значення. Ця операція також зміщує всі наступні елементи масиву на одну позицію вліво.
console.log(arr1.shift());
// 1
console.log(arr1);
[2, 3, 10, 20];

// ====================================
// unshift(element0, element1, /* ... ,*/ elementN)
// Це вбудована функція, яка змінює вихідний масив, додаючи нові елементи на його початок
console.log(arr1.unshift(0, 1));
// 4
console.log(arr1);
// [ 0, 1, 2, 3, 10, 20 ];

// ====================================
// includes(searchElement, fromIndex)
// Це вбудована функція, яка перевіряє, чи міститься певний елемент у масиві і повертає логічне значення, вказуючи на результат перевірки. Він повертає true, якщо елемент знайдено, і false, якщо елемент відсутній у масиві.
console.log(arr1.includes(5));
// false

// ====================================
// indexOf(searchElement, fromIndex)
// Це вбудована функція, яка повертає перший індекс, за яким знаходиться елемент у масиві, або -1, якщо елемент не знайдений
console.log(arr2.indexOf(5));
// 1

// ====================================
// lastIndexOf(searchElement, fromIndex)
// Це вбудована функція, яка шукає вказаний елемент у масиві і повертає його індекс в останньому входженні або -1, якщо елемент не знайдено.
console.log(arr2.lastIndexOf(5));
// 1

// ====================================
// concat(value0, value1, /* ... ,*/ valueN)
// Це вбудована функція, яка використовується для об'єднання двох або більше масивів. Цей метод не змінює існуючі масиви, а повертає новий масив.
const arr3 = arr1.concat(...arr2);
console.log(arr3);

// ====================================
// copyWithin(target, start, end)
// Це вбудована функція, яка копіює частину масиву із заданого діапазону і вставляє її до іншої позиції у самому масиві, замінюючи існуючі значення. Цей метод змінює початковий масив, не створюючи нового.
let arr4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr4.copyWithin(2, 6, 8));
// [0, 1, 6, 7, 4, 5, 6, 7, 8, 9] тобто замість значення 2 і 3 поставило 6 і 7

// ====================================
// fill(value, start, end
// Це вбудована функція, яка заповнює) всі елементи масиву однаковим значенням, починаючи з початкового індексу до кінця або до вказаного індексу.
console.log(arr4.fill(123, 4, 6));
// [0, 1, 6, 7, 123, 123, 6, 7, 8, 9] тобто замість значення 4 і 5 поставило 123

// ====================================
// reverse()
// Це вбудована функція, яка змінює порядок елементів у масиві, розташованих за їх індексами, так щоб останній елемент став першим, передостанній - другим, і так далі.
console.log(arr4.reverse());
// [9, 8, 7, 6, 123, 123, 7, 6, 1, 0]

// ====================================
// filter(callbackFn, thisArg)
// Це вбудована функція, яка створює новий масив, який містить всі елементи початкового масиву, які відповідають певному умовному тесту. Цей метод використовується для фільтрації елементів масиву за заданим критерієм.
const filterFn = (value, index, array) => value % 2 === 0;

console.log(arr4.filter(filterFn));
// [ 8, 6, 6, 0 ] виведе всі парні числа в масиві

// ====================================
// sort(compareFn)
// Це вбудована функція, яка сортує елементи масиву. За замовчуванням у порядку Юнікод-рядків

console.log(arr4.sort());
// [0, 1, 123, 123, 6, 6, 7, 7, 8, 9] сортує по кодам Юнікод

const sortFn = (elem1, elem2) => elem1 - elem2;
console.log(arr4.sort(sortFn));
// [0, 1, 6, 6, 7, 7, 8, 9, 123, 123] сортує за значенням від меншого до більшого

// ====================================
// every(callbackFn, thisArg)
// Це вбудована функція, яка виконує перевірку, чи задовольняють всі елементи масиву певний умовний предикат. Він перевіряє, чи повертається true для кожного елемента масиву під час виконання умови.
const arr5 = [2, 3, 4, 5, -6, 7, 8, 9];
console.log(arr5.every((elem, index, array) => elem >= 0));
// false  Тому що в масиві міститься хоч один елемент який НЕ відповідає умові, тобто є хоч 1 елемент який менше нуля

// ====================================
// some(callbackFn, thisArg)
// Це вбудована функція, яка використовується для перевірки, чи принаймні один елемент масиву задовольняє вказану умову, задану у вигляді функції.
console.log(arr5.some((elem, index, array) => elem < 0));
// true  Тому що в масиві міститься хочаб елемент менше нуля

// ==============================================================
const userList = [
    { id: 1, name: "Dima", age: 19 },
    { id: 54, name: "Ivan", age: 35 },
    { id: 6412, name: "Anton", age: 41 },
];

let age = 0;

// const userBigAge = userList.sort((user1, user2) => {
//     return user2.age - user1.age;
// });

// console.log(userBigAge);
// // [
// //     { id: 6412, name: 'Anton', age: 41 },
// //     { id: 54, name: 'Ivan', age: 35 },
// //     { id: 1, name: 'Dima', age: 19 }
// //   ]

// find(callbackFn, thisArg)
// Це вбудована функція, яка знаходить перший елемент масиву, який задовольняє надану функцію тестування

// const userBigAge = userList.find(({ age }) => age >= 30);

// console.log(userBigAge);
// // { id: 54, name: 'Ivan', age: 35 }

// ==========================
// findIndex(callbackFn, thisArg)
// Це вбудована функція, яка знаходить індекс першого елементу масиву, який задовольняє надану функцію тестування

// const userBigAge = userList.findIndex(({ age }) => age >= 30);

// console.log(userBigAge);
// // 1

// ==========================
// findLast(callbackFn, thisArg)
// Це вбудована функція, яка знаходить останній елемент масиву, який задовольняє надану функцію тестування
// const userBigAge = userList.findLast(({ age }) => age >= 30);

// console.log(userBigAge);
// // { id: 6412, name: 'Anton', age: 41 }

// ==========================
// findLastIndex(callbackFn, thisArg)
// Це вбудована функція, яка знаходить індекс першого елементу масиву, який задовольняє надану функцію тестування
// const userBigAge = userList.findLastIndex(({ age }) => age >= 30);

// console.log(userBigAge);
// // 2

// =========================
// keys()
// Це вбудована функція, яка повертає новий об'єкт ітератора, який містить ключі для кожного індексу в масиві.

// console.log(userList.keys());
// // Object [Array Iterator] {}

// const iter = userList.keys();

// for (const elem of iter) {
//     console.log(elem);
//     // 0  1  2
// }

// ==========================
// values()
// Це вбудована функція, яка містить значення для кожного індексу в масиві у впорядкованому порядку.

// const values = userList.values();

// for (const elem of values) {
//     console.log(elem);
// }
// // { id: 1, name: 'Dima', age: 19 }
// // { id: 54, name: 'Ivan', age: 35 }
// // { id: 6412, name: 'Anton', age: 41 }

// ==========================
// join(separator)
// Це вбудована функція, яка використовується для об'єднання всіх елементів масиву в один рядок. Він повертає рядок, утворений шляхом об'єднання елементів масиву за допомогою розділювача.
// const arr = ["apple", "hotdog", "bread", "milk"];
// console.log(arr.toString());
// // apple,hotdog,bread,milk

// console.log(arr.join("... "));
// // apple... hotdog... bread... milk

// ==========================
// splice(start, deleteCount, item1, item2, itemN)
// Це вбудована функція, яка видаляє, додає або замінює елементи в масиві. Він може модифікувати початковий масив, зміщуючи інші елементи відповідно.
// const arrSmall = arr.splice(1, 2, "tea", "cheese"); // 1 - індекс з якого вирізаємо, 2 - кількість елементів яка буде вирізана, третє значення це те що ми хочемо вставити замість вирізаних елементів
// console.log(arrSmall);
// // [ 'hotdog', 'bread' ]
// console.log(arr);
// // [ 'apple', 'tea', 'cheese', 'milk' ]

// ==========================
// slice(start, end)
// Це вбудована функція, яка створює новий масив, що містить копію певної частини вихідного масиву.
// const newArr = [...arr].splice(1, 2);
// console.log(newArr);
// // [ 'hotdog', 'bread' ]

// const newArr2 = arr.slice(1, 3);
// console.log(newArr2);
// // // [ 'hotdog', 'bread' ]

// ==========================
// reduce(callbackFn, initialValue)
// Це вбудована функція, яка використовується для обчислення одного значення на підставі елементів масиву.

// Цей метод виконує ітерацію зліва направо (з початку до кінця) по кожному елементу масиву і обробляє їх за допомогою функції зворотного виклику, накопичуючи результати в одне фінальне значення, яке повертається на виході.

const newUserList = [
    { id: 1, name: "Dima", age: 19, balance: 300 },
    { id: 54, name: "Ivan", age: 35, balance: 900 },
    { id: 6412, name: "Anton", age: 41, balance: 1500 },
];

// const result = newUserList.reduce((num, user) => {
//     console.log(num, user.age);
//     return user.age > num ? user.age : num;
// }, 1);

// console.log(result);
// // 41

// const totalBalance = newUserList.reduce((num, user) => num + user.balance, 0);

// console.log(totalBalance);
// // 2700     300+900+1500

// ==========================
// reduceRight(callbackFn, initialValue)
// Це вбудована функція, яка використовується для обчислення одного значення на підставі елементів масиву.

// Цей метод виконує ітерацію зправа наліво (з кінця до початку) по кожному елементу масиву і обробляє їх за допомогою функції зворотного виклику, накопичуючи результати в одне фінальне значення, яке повертається на виході.
// const result = newUserList.reduceRight((num, user) => {
//     console.log(num, user.age);
//     return user.age > num ? user.age : num;
// }, 1);
// // 1 41
// // 41 35
// // 41 19

// console.log(result);
// //  41

// ==========================
// map(callbackFn, thisArg)
// Це вбудована функція, яка створює новий масив, який містить результати виконання функції зворотного виклику (callback function) для кожного елемента вихідного масиву

// const result = newUserList.map((user, index, array) => {
//     user.balanceLimit = 1000 - user.balance;

//     if (user.balanceLimit < 0) {
//         user.balanceLimit = 0;
//     }
//     return user;

//     // return user.name;
// });

// console.log(result);
// // [ 'Dima', 'Ivan', 'Anton' ]  повертає масив користувачів

// console.log(result.join(", "));
// // Dima, Ivan, Anton   повертає перелік користувачів

// console.log(result);
// [
//     { id: 1, name: 'Dima', age: 19, balance: 300, balanceLimit: 700 },
//     { id: 54, name: 'Ivan', age: 35, balance: 900, balanceLimit: 100 },
//     { id: 6412, name: 'Anton', age: 41, balance: 1500, balanceLimit: 0 }
//   ]

// ==========================
// flat(depth)
// Це вбудована функція, яка використовується для вирівнювання (розгортання) вкладених підмасивів в одномірний масив.

// const flatArray = [
//     [100, 101],
//     [200, 202],
//     [300, 301],
//     [400, 401],
// ];
// console.log(flatArray.flat((el) => [...el, el[0] - el[1]]));
// // [ [ 100, 101 ], [ 200, 202 ], [ 300, 301 ], [ 400, 401 ] ]

// ==========================
// flatMap(callbackFn, thisArg)
// Це вбудована функція, яка дозволяє виконувати перетворення на кожен елемент масиву та об'єднувати результат у новому масиві.

const flatMapArr = [
    [
        [100, 105],
        [200, 205],
    ],
    [
        [220, 230],
        [400, 440],
    ],
];

const result = flatMapArr.flatMap((el) => {
    return el.map((it) => {
        return it[0] - it[1];
    });
});

console.log(result);
// [ -5, -5, -10, -40 ]

// ==========================
// forEach(callbackFn, thisArg)
// Це вбудована функція, яка використовується для виконання заданої функції один раз для кожного елементу у масиві без створення нового масиву.

result.forEach((elem, index, array) => {
    console.log(elem);
    // -5
    // -5
    // -10
    // -40
});
