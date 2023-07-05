//
// =========== DATE ==============
//

const date = new Date();

console.log(date);
// 2023-07-05T21:03:03.662Z      об'єкт date

const dateString = date.toISOString();
console.log(dateString);
// 2023-07-05T21:09:58.274Z      text date

console.log(new Date(dateString));
// 2023-07-05T21:12:34.487Z      об'єкт date

// ==============
// Date.parse(dateString)
// Це вбудована функція, яка призначена для аналізування рядків, що містять дати, і перетворення їх у відповідні числові значення,використовуючи ISO формат дати
const date2 = Date.parse(dateString);

console.log(date2);
// 1688591873957   Повертає числове значення, що представляє кількість мілісекунд, що пройшли з 1 січня 1970 року 00:00:00 за UTC до заданої дати.

// ==============
// .toString()
console.log(date.toString());
// Wed Jul 05 2023 23:23:05 GMT+0200 (за центральноєвропейським літнім часом)

// .toUTCString()
console.log(date.toUTCString());
// Wed, 05 Jul 2023 21:23:05 GMT

// .toTimeString()
console.log(date.toTimeString());
// 23:23:05 GMT+0200 (за центральноєвропейським літнім часом)

// .toDateString()
console.log(date.toDateString());
// Wed Jul 05 2023

// ==============
// .getTimezoneOffset()
// Це вбудована функція, яка повертає зсув часового поясу між локальним часом та часом UTC (відлік від стандартного часу, що використовується у світі).

const zone = date.getTimezoneOffset() / -60;
console.log(zone);
//  2
const user = -3;
function getUserTimeZone(timezone) {
    let date = new Date(Date.UTC(2023, 5, 26, 12, 30, 0, 0));

    console.log(date.toUTCString());
    // Mon, 26 Jun 2023 12:30:00 GMT

    const myTimezone = date.getTimezoneOffset() / -60;

    date.setTime(date.getTime() - 1000 * 60 * 60 * myTimezone);

    date.setTime(date.getTime() + 1000 * 60 * 60 * timezone);

    // date -= 1000 * 60 * 60 * myTimezone;

    return date;
}

const userDate = getUserTimeZone(user);

console.log(userDate.toString());
// Mon Jun 26 2023 09:30:00 GMT+0200 (за центральноєвропейським літнім часом)

console.log(userDate.toUTCString());
// Mon, 26 Jun 2023 07:30:00 GMT

// console.log(new Date(getUserTimeZone(user)).toString());
// // Wed Jul 05 2023 21:54:47 GMT+0200 (за центральноєвропейським літнім часом)
// console.log(new Date().toUTCString());
// // Wed, 05 Jul 2023 21:54:47 GMT
