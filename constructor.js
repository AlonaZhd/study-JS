//
//========  FUNCTION CONSTRUCTOR  ==========
//

// const User = {
//     login: null,
//     password: null,
//     role: null,
//     age: null,
// };

// function CreateUser({ login, password, isAdmin }) {
//     return Object.create(User, {
//         login: {
//             value: registerData.login,
//         },
//         password: {
//             value: registerData.password,
//         },
//         role: {
//             value: isAdmin ? "Admin" : "User",
//         },
//         verify: {
//             value(password) {
//                 return this.password === password;
//             },
//         },
//     });
// }

// const registerData = {
//     login: "Ivan",
//     password: "123qwe145",
// };

// const user = CreateUser(registerData);

// console.log(user.verify("test"));
// // false  тому що пароль не такий як був заданий password: "123qwe145"

// // ==================

// const adminData = {
//     login: "Ivan",
//     password: "123qwe145",
//     isAdmin: "true",
// };

// const adminUser = CreateUser(adminData);

// console.log(adminUser.password);
// // 123qwe145

// // ==================

// const testData = {
//     login: "Ivan",
//     password: "123qwe145",
//     isAdmin: "true",
// };

// const testUser = CreateUser(testData);

// console.log(testUser.login);
// // Ivan

//
// ======== НОВИЙ МЕТОД =============
//

function User(data) {
    // console.log("new", new.target);

    if (new.target) {
        const { login = null, password = null, isAdmin = null, age = 0 } = data;

        const role = isAdmin ? "Admin" : "User";

        const object = Object.assign(this, {
            login,
            password,
            role,
            age,
        });

        if (role === "Admin") {
            object.verify = function (password) {
                return this.password === password;
            };
        }

        object.toString = function () {
            return `Користувач ${this.login}`;
        };

        if (age >= 50) {
            object.login = String(object.login).toUpperCase();
        }

        return object;
    } else {
        return new User(data);
    }
}

// function UserAdmin ({ login = null, password = null, isAdmin = null, age = 0 }) {
//     ruturn;
// }

// ======

const registerData = {
    login: "Ivan",
    password: "123qwe145",
    isAdmin: true,
};

User.prototype.test = "Hello world";

const user = User(registerData);

console.log(user.verify("test"));
// false  тому що пароль не такий як був заданий password: "123qwe145"

console.log(user.toString());
// Користувач Ivan

// ==================

const adminData = {
    login: "Ivan",
    password: "123qwe145",
    isAdmin: "true",
};

const adminUser = User(adminData);

console.log(adminUser.password);
// 123qwe145

// ==================

const testData = {
    login: "Ivan",
    password: "123qwe145",
    age: 50,
};

const testUser = User(testData);

console.log(testUser.login);
// Ivan

console.log(testUser === User);
// false

// =========================================

// new.target
// Це спеціальна змінна, яка містить посилання на конструктор, який був викликаний за допомогою оператора new, дозволяючи перевірити, чи функція була викликана за допомогою new чи без нього.

// length
// Це вбудована властивість, яка повертає кількість параметрів

console.log(User.length);
// 1

// name
// Це вбудована властивість, яка містить ім'я функції.

const test = User;
console.log(test.name);
// User

// prototype
// Це вбудована властивість, яка представляє доступ до прототипу об'єкта, що створюється цією функцією

const verifyUser = user.verify;

console.log(verifyUser);
// [Function (anonymous)]

// ==================

function Animal(name) {
    this.name = name;
}

// call(thisArg, arg1, /* ..., */ argN)
// Це вбудована функція, яка викликає функцію з прив'язаним контекстом і з початковими аргументами

const Person = function (name, age) {
    Animal.call(this, name);
    this.age = age;
};

const user2 = new Person("Taras", 32);

console.log(user2.name);
// Taras
