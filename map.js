//
// =========== MAP ==============
//
const button = new Map([
    ["color", "red"],
    ["size", "32px"],
]);

console.log(button);
// Map(2) { 'color' => 'red', 'size' => '32px' }

//
// Перетворення об'єкта в словник:
const obj = {
    color: "red",
    size: 32 + "px",
};

const button2 = new Map(Object.entries(obj));
console.log(button2);
// Map(2) { 'color' => 'red', 'size' => '32px' }

// =====================
// Перетворення словника в множину
const set2 = new Set(button);
console.log(set2);
// Set(2) { [ 'color', 'red' ], [ 'size', '32px' ] }

// =====================
// Отримання значень з множини
const set3 = new Set(button.values());
console.log(set3);
// Set(2) { 'red', '32px' }

// =====================
// ітерація (перебору) значень словника
for (const [key, value] of button) {
    console.log(key, value);
}
// color red
// size 32px

// =====================
// forEach(callbackFn, thisArg)
// Це вбудована функція, яка використовується для виконання заданої функції один раз для кожного елементу словника у порядку вставки.

button.forEach((key, value, map) => console.log(key, value, map));
// red color Map(2) { 'color' => 'red', 'size' => '32px' }
// 32px size Map(2) { 'color' => 'red', 'size' => '32px' }

// =====================
// size
// Це вбудована властивість, яка повертає кількість унікальних елементів у словнику.

console.log(button.size);
//  2

// =====================
// set(key, value)
// Це вбудована функція, яка додає новий елемент

button.set("form", "circle");
console.log(button);
// Map(3) { 'color' => 'red', 'size' => '32px', 'form' => 'circle' }

// =====================
// get(key)
// Це вбудована функція, яка повертає значення елемента словника за його ключем

console.log(button.get("form"));
// circle

// =====================
// delete(value)
// Це вбудована функція, яка видаляє елемент
console.log(button.delete("form"));
// true
console.log(button.delete("form"));
// false

// =====================
// has(value)
// Це вбудована функція, яка перевіряє наявність елемента
console.log(button.has("form"));
// false

// =====================
// clear()
// Це вбудована функція, яка видаляє всі елементи
button.clear();
console.log(button);
// Map(0) {}

// =====================
// keys()
// Це вбудована функція, яка повертає спеціальний об'єкт-ітератор, що містить ключі для кожного елемента в словнику у порядку їх вставлення.

// =====================
// values()
// Це вбудована функція, яка повертає спеціальний об'єкт-ітератор, який містить значення унікальних елементів у словнику в порядку їх вставлення.

// =====================
// entries()
// Це вбудована функція, яка перетворює значення словника в спеціальний об’єкт-ітератор, який можна використовувати для створення інших типів даних

console.log("=========== Реальні приклади =============");

const LANG_LIST = {
    UA: "uk-UA",
    EU: "eu-US",
};

const activeLang = LANG_LIST.UA;

const product = {
    price: 100,
    amout: 3,

    info: new Map([
        [
            LANG_LIST.UA,
            {
                title: "Заголовок",
                info: "Інформація",
            },
        ],
        [
            LANG_LIST.EU,
            {
                title: "Title",
                info: "Info",
            },
        ],
    ]),
};

console.log(product);
// {
//     price: 100,
//     amout: 3,
//     info: Map(2) {
//       'uk-UA' => { title: 'Заголовок', info: 'Інформація' },
//       'ea-US' => { title: 'Title', info: 'Info' }
//     }
// }

const info = product.info.get(activeLang);

console.log(info);
// { title: 'Заголовок', info: 'Інформація' }

console.log(product.info.has(activeLang));
// true

console.log("====================");

const user1 = {
    id: 1235,
    name: "Ivan",
};

const user2 = {
    id: 6545,
    name: "Anton",
};

const product1 = {
    id: 6545,
    name: "Mobile Phone",
};

const product2 = {
    id: 8989,
    name: "Laptop",
};

const userProduct = new Map();
userProduct.set(user1, product1).set(user2, product2);
console.log(userProduct);
// Map(2) {
//     { id: 1235, name: 'Ivan' } => { id: 6545, name: 'Mobile Phone' },
//     { id: 6545, name: 'Anton' } => { id: 8989, name: 'Laptop' }
// }

console.log(userProduct.get(user1));
// { id: 6545, name: 'Mobile Phone' }
