//
//========  SYMBOL  ==========
//
// const phoneBook = {
//     olga: "+3805642256352",
// };

// function addToPhoneBook(phone, id) {
//     const key = Symbol(id);
//     phoneBook[key] = phone;
//     return key;
// }

// const olga1 = addToPhoneBook("+380502223366", "компанія Перша");

// const olga2 = addToPhoneBook("+380503335544", "компанія Друга");

// console.log(phoneBook);
// // {
// //     olga: '+3805642256352',
// //     [Symbol(olga)]: '+380502223366',
// //     [Symbol(olga)]: '+380503335544'
// // }

// console.log(phoneBook[olga1]);
// // +380502223366

// console.log(olga1.description);
// // olga  виводить початкове значення
const user = {
    name: "Olga",
    id: 554825896,
    bookId: null,

    getPhone(book) {
        return book[this.bookId];
    },
};

const phoneBook = {
    olga: "+3805642256352",
};

function addToPhoneBook(phone, user) {
    const symId = Symbol.for(user.id);
    phoneBook[symId] = phone;
    user.bookId = symId;
}

addToPhoneBook("+380502223366", user);

// console.log(user.getPhone(phoneBook));
// +380502223366

addToPhoneBook("+380505558844", user);

// console.log(phoneBook);
// {
//     olga: '+3805642256352',
//     [Symbol(554825896)]: '+380502223366',
//     [Symbol(554825896)]: '+380505558844'
// }

// const a = Symbol("1");
// const b = Symbol("1");

// console.log(a === b);
// // false

// const a = Symbol.for("1");
// const b = Symbol.for("1");

// console.log(a === b);
// // true

const symId = user.bookId;

console.log(Symbol.keyFor(symId));
