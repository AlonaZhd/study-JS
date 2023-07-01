//
//========  OBJECT  ==========
//
// const name = "key";
// const a = {
//     amout: 100,
//     [name]: "Hello World",
// };
// console.log(a);
// // { amout: 100, key: 'Hello World' }
// console.log(a[name]);
// // Hello World

// const b = {};
// console.log(b);
// // Об'явлення нового об'єкту

// delete a.amout;
// console.log(a);
// //{ key: 'Hello World' }  Видалення одніє\ властивості об'єкта

// const c = {
//     amout: 100,
//     [name]: "Hello World",

//     info: {
//         name: "Ivan",
//         age: 35,
//     },
// };
// console.log(c);
// // { amout: 100, key: 'Hello World', info: { name: 'Ivan', age: 35 } }
// console.log(c.info);
// // { name: 'Ivan', age: 35 }

// const person = {
//     name: "Ivan",
//     age: 25,
//     occupation: "Розробник програмного забезпечення",

//     address: {
//         city: "Київ",
//         street: "вул. Шевченка",
//         houseNumber: 10,
//     },

//     getAddress: function () {
//         return this.address;
//     },
// };

// console.log(person.getAddress());
// { city: 'Київ', street: 'вул. Шевченка', houseNumber: 10 }

// Деструктурізація:

// const { age, name, address } = person;
// console.log(age, name, address);

// const {
//     address: { city, street },
// } = person;
// console.log(city, street); //Київ вул. Шевченка

// Деструктурізація з функціями:
// function getAddress({
//     address: { city, street, houseNumber, zipcode = 54585 },
// }) {
//     return `Ваша адреса: ${city} ${street} ${houseNumber} ${zipcode}`;
// }
// const test = getAddress(person);
// console.log(test);
// Ваша адреса: Київ вул. Шевченка 10 54585

// // Виведення данних, якщо вони є і якщо їх немає
// function getAddress({ address }) {
//     if (address) {
//         const { city, street, houseNumber, zipcode = 54585 } = address;
//         return `Ваша адреса: ${city} ${street} ${houseNumber} ${zipcode}`;
//     }
//     return "Немає данних"; // Виведе цей код якщо немає ключа address
// }
// const test = getAddress(person);
// console.log(test);

// 25 Ivan { city: 'Київ', street: 'вул. Шевченка', houseNumber: 10 }

// for (const key in person) {
//     // console.log(key);  // Виведе назви ключів
//     // name
//     // age
//     // occupation
//     // address

//     // console.log(person[key]); // Виведе значення
//     // Ivan
//     // 25
//     // Розробник програмного забезпечення
//     // { city: 'Київ', street: 'вул. Шевченка', houseNumber: 10 }

//     const item = person[key];

//     if (typeof person[key] === "object") {
//         for (const key2 in item) {
//             console.log(item[key2]);
//         }
//     } else {
//         console.log(item);
//     }
//     // Вивели всі значення які у нас є в загальному об'єкті
// }

//
//========  METODS OBJECTS  ==========

const article = {
    id: 51635,
    title: "My article",
    description: "This is info about article",
    categoryId: 5152,
    likeAmout: 445,
};

articlePhoto = {
    photoUrl: "...url",
    photoId: 100,
    photoType: "big",
};

articleCommentList = {
    list: [
        {
            id: 4235,
            user: "Ivan",
            message: "Cool content",
        },
    ],
};

//
// Object.assign(target, sources1, sources2, ...sourcesN)
// Це вбудована функція, яка копіює значення всіх доступних властивостей переданих об’єктів в один головний

Object.assign(article, articlePhoto, articleCommentList);

// console.log(article);
// // {
// //     id: 51635,
// //     title: 'My article',
// //     description: 'This is info about article',
// //     categoryId: 5152,
// //     likeAmout: 445,
// //     photoUrl: '...url',
// //     photoId: 100,
// //     photoType: 'big',
// //     list: [ { id: 4235, user: 'Ivan', message: 'Cool content' } ]
// // }

// ---------------------
// Object.entries(obj)
// Це вбудована функція, яка повертає масив з масивами, які містять пари ключ-значення для кожної перераховуваної властивості об'єкта. Порядок властивостей у масиві відповідає порядку перебору.

// console.log(Object.entries(article));
// // [
// //     [ 'id', 51635 ],
// //     [ 'title', 'My article' ],
// //     [ 'description', 'This is info about article' ],
// //     [ 'categoryId', 5152 ],
// //     [ 'likeAmout', 445 ],
// //     [ 'photoUrl', '...url' ],
// //     [ 'photoId', 100 ],
// //     [ 'photoType', 'big' ],
// //     [ 'list', [ [Object] ] ]
// // ]

// ---------------------
// Object.fromEntries(value)
// Це вбудована функція, яка створює об'єкт зі списку пар ключ-значення. Він приймає масив, який складається змасивів у форматі [ключ, значення] і повертає новий об'єкт у форматі {ключ: значення}

const objArr = [
    ["id", 100521],
    ["title", "My product name"],
    ["price", 1254],
];

console.log(Object.fromEntries(objArr));
// { id: 100521, title: 'My product name', price: 1254 }

// ---------------------
// hasOwnProperty(prop)
// Це вбудована функція, яка перевіряє, чи має об'єкт власну властивість з вказаним ім'ям.
console.log(article.hasOwnProperty("id"));
// true

// ---------------------
// Object.is(object1.value, object2.value)
// Це вбудована функція, яка використовується для перевірки на строгу рівність між двома значеннями.

// Ця функція дозволяє уникнути пастки порівняння NaN з NaN, оскільки Object.is(NaN, NaN) поверне true.

// ---------------------
// propertyIsEnumerable(prop)
// Це вбудована функція, яка перевіряє, чи є певна властивість перераховуваною в об'єкті за допомогою циклу for...in.
console.log(article.propertyIsEnumerable("id"));
// true

// ---------------------
// Object.freeze(obj)
// Це вбудована функція, яка заморожує об'єкт, що перешкоджає зміні його властивостей. Заморожений об'єкт не може бути змінений шляхом додавання, видалення або зміни властивостей.

// Object.freeze(article);
// article.title = "Hello";

// console.log(article);
// // Об'єкт article виведе без змін

// ---------------------
// Object.isFrozen(obj)
// Це вбудована функція, яка використовується для перевірки, чи є об'єкт замороженим (неможливість змінити його властивості).
// console.log(Object.isFrozen(article));
// // false

// ---------------------
// Object.preventExtensions(obj)
// Це вбудована функція, яка використовується для заборони розширення об'єкта, тобто вона запобігає додаванню нових властивостей до об'єкта, але дозволяє змінювати та видаляти існуючі властивості.
Object.preventExtensions(article);
article.title = "Hello";
article.test = "54235315";

console.log(article);
// title: 'Hello', виведе зміну.  test - не додасть властивість

// ---------------------
// Object.isExtensible(obj)
// Це вбудована функція, яка використовується для перевірки, чи можна додавати нові властивості до об'єкта.
console.log(Object.isExtensible(article));
// false

// ---------------------
// Object.seal(obj)
// Це вбудована функція, яка робить об’єкт доступним лише для читання та редагування існуючих властивостей, а додавати нові властивості чи видаляти існуючі неможна
Object.seal(article);
delete article.id;

console.log(article.id);
// 51635 все одно виведе початкове значення, не дивлячись на те що воно було видалено

article.id = 65656;
console.log(article.id);
// 65656  виводить нове значення

// ---------------------
// Object.isSealed(obj)
// Це вбудована функція, яка перевіряє, чи є об'єкт "запечатаним" (sealed), тобто чи дозволяє він тільки читання властивостей, але не дозволяє додавання нових властивостей або видалення існуючих.
console.log(Object.isSealed(article));
// true

// ---------------------
// Object.keys(obj)
// Це вбудована функція, яка повертає масив з ключами доступних властивостей об'єкта
console.log(Object.keys(article));
// [
//     'id',
//     'title',
//     'description',
//     'categoryId',
//     'likeAmout',
//     'photoUrl',
//     'photoId',
//     'photoType',
//     'list'
// ]

// ---------------------
// Object.values(obj)
// Це вбудована функція, яка повертає масив значень доступних властивостей об'єкта в тому ж порядку, у якому вони з'являються в коді
console.log(Object.values(article));
// [
//     65656,
//     'Hello',
//     'This is info about article',
//     5152,
//     445,
//     '...url',
//     100,
//     'big',
//     [ { id: 4235, user: 'Ivan', message: 'Cool content' } ]
// ]
