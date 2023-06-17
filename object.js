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
