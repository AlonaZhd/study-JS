//
//========  Object-oriented programming  ==========
//

const Animal = {
    name: "Тварина",
    voice: "Звук",
    say() {
        console.log(`${this.name} каже ${this.voice}`); // Бобік каже Гав
    },
};

//
// Object.create(proto, properties)
// Це вбудована функція, яка створює новий об'єкт з вказаним прототипом і необов'язковими властивостями.

const dog = Object.create(Animal);

dog.name = "Бобік";
dog.voice = "Гав";

dog.say();
console.log(dog);
// { name: 'Бобік', voice: 'Гав' }

Animal.go = function () {
    console.log(`${this.name} біжить`); // Бобік біжить
};

dog.go();

//
// Object.getPrototypeOf(obj)
// Це вбудована функція, яка повертає прототип об'єкта
console.log(Object.getPrototypeOf(dog));
// {
//     name: 'Тварина',
//     voice: 'Звук',
//     say: [Function: say],
//     go: [Function (anonymous)]
// }

console.log(Object.getPrototypeOf(dog) === Animal);
// true

//
// .isPrototypeOf(object)
// Це вбудована функція, яка перевіряє, чи є об'єкт, для якого вона викликається, прототипним об'єктом іншого об'єкта.
console.log(Animal.isPrototypeOf(dog));
// true

//
// Object.setPrototypeOf(obj, prototype)
// Це вбудована функція, яка дозволяє змінити прототип об'єкта
// Object.setPrototypeOf(dog, null);
// console.log(Object.getPrototypeOf(dog));
// null

//
// Object.defineProperty(obj, prop, descriptor)
// Object.defineProperties(obj, props)
// Це вбудовані функції, які використовуються для налаштування властивості об'єкта.
Object.defineProperty(dog, "age", {
    set(value) {
        this._age = value * 2;
    },
    get() {
        return `${this._age || 0} років`;
    },
});

console.log(dog.age);
// 0

dog.age = 15;

console.log(dog.age);
// 30 років

delete dog.age;

console.log(dog);
// { name: 'Бобік', voice: 'Гав', _age: 30 }

Object.defineProperty(dog, "location", {
    value: "house",
    // writable: true,
    // configurable: true,
    // enumerable: true,
});

console.log(dog.location);
// house

delete dog.location;

console.log(dog.location);
// house  = виведе якщо configurable вимкнене
// undefined  = виведе якщо configurable включене

console.log(Object.keys(dog));
// [ 'name', 'voice', '_age', 'location' ] = виведе якщо enumerable включене
// [ 'name', 'voice', '_age' ]  = виведе якщо enumerable вимкнене

dog.location = "street";

console.log(dog.location);
// street = виведе якщо writable включене
// house = виведе якщо writable вимкнене

//
// Object.getOwnPropertyDescriptor(obj, prop)
// Object.getOwnPropertyDescriptors(obj)
// Це вбудовані функції, які повертають налаштування властивості об'єкта за заданим ім'ям.
console.log(Object.getOwnPropertyDescriptor(dog, "location"));
// {
//     value: 'house',
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

//
// .hasOwnProperty(prop)
// Це вбудована функція, яка перевіряє, чи властивість належить об'єкту, а не успадкованою з його прототипу
console.log(dog.hasOwnProperty("voice"));
// true
// ===========================
//
// Поліморфізм (Polymorphism) — це принцип ООП, який дозволяє різним об'єктам мати однакові методи, які будуть виконувати різні дії.

const Tag = {
    render(value) {
        return `<>${value}<>`;
    },
    className: null,
};

const Button = Object.create(Tag);

Button.render = function (value = "") {
    return `<button class="${this.className}" style="${this.style}">${value}</button>`;
};
const mainButton = Object.create(Button, {
    style: {
        value: "background: red:",
        writable: true,
    },
    className: {
        value: "my-button",
    },
});

console.log(mainButton.render("Click"));
// <button style="background: red:">Click</button>

const Input = Object.create(Tag);

Input.render = function () {
    return `<input placeholder="${this.placeholder}" style="${this.style}">`;
};

const loginInput = Object.create(Input, {
    style: {
        value: "border: 1px solid red;",
        writable: true,
    },
    placeholder: {
        value: "Login...",
    },
});

console.log(loginInput.render());
// <input placeholder="Login..." style="border: 1px solid red;">

const serverRequest = {
    data: null,
    getData() {
        ///...
    },
    render() {
        this.data = this.getData();
        return `...`;
    },
};

// ==========================
//
// Абстракція (Abstraction) — це принцип ООП, який дозволяє визначати загальні властивості та методи об'єктів, щоб потім їх використовувати
