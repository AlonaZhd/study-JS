//
// =========== SET ==============
//
const sets = new Set(["123", "123", "123", 123, null]);

console.log(sets);
// Set(3) { '123', 123, null } виводиться Set тобто позначення що це множина, кількість унікальних об'єктів множини 3, а також унікальні значення множини

const userIdList = new Set([40125, 45268, 24561, 42421]);

console.log(userIdList);
// Set(4) { 40125, 45268, 24561, 42421 }

// ===========

// Ключове слово “для” (for) можна використовувати з множиною для ітерації (перебору) значень множини

for (const value of userIdList) {
    console.log(value);
}
// 40125
// 45268
// 24561
// 42421

// ===========

// forEach(callbackFn, thisArg)
// Це вбудована функція, яка використовується для виконання заданої функції один раз для кожного елемента у об'єкта Set.

userIdList.forEach((value) => console.log(value));
// цей метод доцільніше використовувати ніж попередній
// 40125
// 45268
// 24561
// 42421

const userList = new Set(["Ivan", "Petro", "Taras", "Ivan", "Stepan", "Petro"]);
console.log(userList.size);
// 4 Це вбудована властивість, яка повертає кількість унікальних елементів в множині.

// ===========

userList.add("Philip");
// Це вбудована функція, яка додає новий елемент

console.log(userList);
// Set(5) { 'Ivan', 'Petro', 'Taras', 'Stepan', 'Philip' }

console.log(userList.size);
// 5

// ===========

userList.delete("Ivan");
// Це вбудована функція, яка видаляє елемент

console.log(userList);
// Set(4) { 'Petro', 'Taras', 'Stepan', 'Philip' }

console.log(userList.size);
// 4

// ===========
// has(value)
// Це вбудована функція, яка перевіряє наявність елемента

console.log(userList.has("Taras"));
// true

console.log(userList.has("Ivan"));
// false

// ===========
// clear()
// Це вбудована функція, яка видаляє всі елементи

userIdList.clear();
console.log(userIdList);
// Set(0) {}

// ===========
// keys()
// Це вбудована функція, яка повертає спеціальний об'єкт- ітератор, що містить ключі для кожного елемента в множині у порядку їх вставлення.

const key = userList.keys();
console.log(key);
// [Set Iterator] { 'Petro', 'Taras', 'Stepan', 'Philip' }

// ===========
// values()
// Це вбудована функція, яка повертає спеціальний об'єкт-ітератор, який містить значення унікальних елементів в множині в порядку їх вставлення.
const value = userList.values();
console.log(value);
// [Set Iterator] { 'Petro', 'Taras', 'Stepan', 'Philip' }

const valueList = userList.values();
const array = Array.from(valueList);
console.log(array);
// [ 'Petro', 'Taras', 'Stepan', 'Philip' ]

// ===========
// entries()
// Це вбудована функція, яка перетворює значення множини в спеціальний об’єкт-ітератор, який можна використовувати для створення інших типів даних

const entry = userList.entries();
console.log(entry);
// [Set Entries] {
//     [ 'Petro', 'Petro' ],
//     [ 'Taras', 'Taras' ],
//     [ 'Stepan', 'Stepan' ],
//     [ 'Philip', 'Philip' ]
// }

const obj = Object.fromEntries(entry);
console.log(obj);
// { Petro: 'Petro', Taras: 'Taras', Stepan: 'Stepan', Philip: 'Philip' }

console.log("=========== Реальні приклади =============");

const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const set = new Set(arr);
const arr2 = Array.from(set);
console.log(arr2);
// [ 1, 2, 3, 4, 5 ]

// ===================

const categoryList = new Set();

function addCategory(category) {
    if (categoryList.has(category)) {
        console.log("Ця категорія вже існує");

        return false;
    }
    categoryList.add(category);

    return true;
}

console.log(addCategory("Sport"));
console.log(addCategory("Sport"));
console.log(addCategory("Food"));

// true
// Ця категорія вже існує
// false
// true

// ===================

const students = [
    { id: 1, name: "John", course: "Math" },
    { id: 2, name: "Jane", course: "Science" },
    { id: 3, name: "Adam", course: "Math" },
    { id: 4, name: "Eva", course: "English" },
    { id: 5, name: "Kate", course: "Science" },
];

// const course = students.map((student) => student.course);

// console.log(course);
// // [ 'Math', 'Science', 'Math', 'English', 'Science' ]

// const courseList = new Set(course);
// console.log(courseList);
// // Set(3) { 'Math', 'Science', 'English' }

const courseList = new Set(students.map((student) => student.course)); // скорочений запис
console.log(Array.from(courseList));
// [ 'Math', 'Science', 'English' ]
