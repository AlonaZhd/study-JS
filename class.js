//
//========  CLASS  ==========
//

//
// Ключове слово “поширення” (extends) — це ключове слово, яке використовується для наслідування полів батьківського класу та передача їх в дитячий клас
// class Назва extends Клас_батька
class Person {
    constructor(name) {
        this.name = name;
    }
    test = () => {
        console.log("Hello word", this.login);
    };
}

class User extends Person {
    // Конструктор — це спеціальний метод в класах, який викликається автоматично при створенні нового об'єкту
    // constructor ( аргументи ) { ... }

    constructor(login, password) {
        super(login);

        this.login = login;
        this.password = password;
    }

    login = null;
    password = null;
    #role = null;
    age = null;

    #id = 1000;

    isAdmin = () => {
        console.log(this.id);

        return this.role === "Admin";
    };

    createAdminUser = (login) => {
        return new User();
    };

    // Ключове слово “статично” (static) — це ключове слово, яке використовується для створення методів та властивостей, які будуть доступні лише в класі

    static generateRandomPassword = () => {
        return true;
    };

    static city = "Kyiv";

    get admin() {
        return this.#role === "Admin";
    }

    set admin(value) {
        this.#role = "Admin";
    }
}

const user = new User("Ivan", "yfyubjkjnn4");

console.log(user);
// User {
//     login: null,
//     password: null,
//     role: null,
//     age: null,
//     isAdmin: [Function: isAdmin],
//     createAdminUser: [Function: createAdminUser]
//   }

console.log(User);
// [class User] {
//     generateRandomPassword: [Function: generateRandomPassword],
//     city: 'Kyiv'
//   }

console.log(user.isAdmin());
// false

function verifyAdmin(fn) {
    const result = fn();

    if (!result) {
        throw new Error("Не адмін");
    }

    return true;
}

// verifyAdmin(user.isAdmin);
// // Не адмін

console.log(User.generateRandomPassword());
// true

console.log(user.admin);
// false

user.admin = true;

console.log(user.admin);
// true

console.log(user);
// User {
//     login: 'Ivan',
//     password: 'yfyubjkjnn4',
//     age: null,
//     isAdmin: [Function: isAdmin],
//     createAdminUser: [Function: createAdminUser]
//   }

//
// instanceof — це оператор, який перевіряє чи належить об’єкт до певного класу. Він також враховує наслідування.
// Правопис конструкції: об’єкт instanceof клас
console.log(user instanceof User);
// true
