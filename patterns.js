//
//========  PATTERNS  ==========
//
// Патерн програмування — це загально визнанe рішення для типових проблем, що виникають під час розробки програмного забезпечення.

// Одиночка (Singleton) — це патерн програмування, який забезпечує, що клас має тільки один екземпляр і надає глобальну точку доступу до цього екземпляра.

class RecentPurchasses {
    static #instance = null;

    static #purchases = [];

    static create() {
        if (!this.#instance) {
            this.#instance = new RecentPurchasses();
        }

        return this.#instance;
    }

    static add(item) {
        this.#purchases.push(item);
    }

    static get() {
        return this.#purchases;
    }
}

RecentPurchasses.create();

RecentPurchasses.add("Telephone");
RecentPurchasses.add("Laptop");
console.log(RecentPurchasses.get());
// [ 'Telephone', 'Laptop' ]

//
// ==================
// Фабрика (Factory) — це патерн програмування, який надає загальний клас для створення об'єктів, який враховує передані аргументи та вирішує який клас повинен мати об’єкт при створенні

class Button {
    constructor({ text, color }) {
        this.text = text;
        this.color = color;
    }

    render() {
        return `<button class="color:${this.color};">${this.text}</button>`;
    }
}

class IconButton {
    constructor({ icon, color }) {
        this.icon = icon;
        this.color = color;
    }

    render() {
        return `<button class="color:${this.color};"><img src="${this.icon}"/></button>`;
    }
}

class ButtonFactory {
    static TYPE = {
        BASIC: "basic",
        ICON: "icon",
    };

    static createButton(type, options) {
        if (options.icon) {
            return new IconButton(options);
        }

        if (options.text) {
            return new Button(options);
        }

        throw new Error(`Такого типу кнопки не існує: ${type}`);

        // switch (type) {
        //     case this.TYPE.BASIC:
        //         return new Button(options);
        //     case this.TYPE.ICON:
        //         return new IconButton(options);
        //     default:
        //         throw new Error(`Такого типу кнопки не існує: ${type}`);
        // }
    }
}

const myIconButton = ButtonFactory.createButton(ButtonFactory.TYPE.ICON, {
    color: "red",
    icon: "/icon/my-icon.svg",
});

console.log(myIconButton);
// IconButton { icon: '/icon/my-icon.svg', color: 'red' }

//
// ==================
// Спостерігач (Observer) — це патерн програмування, який визначає залежність "один-багато" між об'єктами, так що зміна стану одного об'єкта призводить до автоматичного оновлення всіх залежних об'єктів.

class User {
    constructor(email) {
        this.email = email;
    }

    sendEmail(message) {
        console.log(
            `відправки на e-mail ${this.email} повідомлення: ${message}`
        );
    }
}

class Video {
    constructor(name) {
        this.name = name;
    }
}

class Chanel {
    constructor(name) {
        this.name = name;
        this.subscribers = [];
    }

    subscribe(user) {
        // Підписка на канал
        this.subscribers.push(user);
    }

    unsubscribe(user) {
        // Відписка від каналу
        this.subscribers = this.subscribers.filter((sub) => sub !== user);
    }

    createVideo(name) {
        // Створення нового в відео
        const video = new Video(name);
        this.sendNotify(video);
    }

    sendNotify(video) {
        // Відправка повідомлення підписникам про нове відео
        this.subscribers.forEach((subscriber) => {
            subscriber.sendEmail(
                `Нове відео "${video.name}" на Youtube каналі ${this.name}`
            );
        });
    }
}

const channel = new Chanel("IT Brains");

const user1 = new User("john@example.com");
const user2 = new User("alex@example.com");
const user3 = new User("philip@example.com");

channel.subscribe(user1);
channel.subscribe(user2);
channel.subscribe(user3);

channel.createVideo("Lesson HTML");
// відправки на e-mail john@example.com повідомлення: Нове відео "Lesson HTML" на Youtube каналі IT Brains
// відправки на e-mail alex@example.com повідомлення: Нове відео "Lesson HTML" на Youtube каналі IT Brains
// відправки на e-mail philip@example.com повідомлення: Нове відео "Lesson HTML" на Youtube каналі IT Brains

console.log("====");

channel.unsubscribe(user1);

channel.createVideo("Lesson CSS");
// відправки на e-mail alex@example.com повідомлення: Нове відео "Lesson CSS" на Youtube каналі IT Brains
// відправки на e-mail philip@example.com повідомлення: Нове відео "Lesson CSS" на Youtube каналі IT Brains

console.log("====================");
//
// ==================
// Декоратор (Decorator) — це патерн програмування, який додає нову функціональність до існуючих об'єктів, не змінюючи їхньої структури. Іншими словами, він дозволяє розширити функціональність об'єкта, не змінюючи сам об'єкт.
class Coffee {
    name = "Кава";

    cost = 10;

    cook() {
        console.log(`Приготування ${this.name}`);
        // Логіка приготування напою
    }
}

class MilkDecorator {
    constructor(coffee, amout) {
        this.coffee = coffee;
        this.amout = amout;
    }

    get name() {
        return `${this.coffee.name}, з ${this.amout} мл молока`;
    }

    get cost() {
        const milkPrice = 0.05;
        return this.coffee.cost + milkPrice * this.amout;
    }

    cook() {
        console.log(`Приготування ${this.name}`);
        // Логіка приготування кави з молоком
    }
}

// Створення об'єкту базової кави
let coffee = new Coffee();
console.log(coffee.name); // 10
console.log(coffee.cost); // Приготування Кава
coffee.cook();
// Кава, з 300 мл молока

// Додавання декоратора молока до кави
let latteCoffee = new MilkDecorator(coffee, 300);
console.log(latteCoffee.name); // Кава, з 300 мл молока
console.log(latteCoffee.cost); // 25
latteCoffee.cook();
// Приготування Кава, з 300 мл молока

console.log("====================");

//
// ==================
// Мементо (Memento) — це патерн програмування, який забезпечує збереження стану об'єкта для подальшого відновлення.

class TextEditor {
    #text = "";

    set text(text) {
        this.#text = text;
        this.#save();
    }

    get text() {
        return this.#text;
    }

    #save() {
        Snapshot.create(this.text);
    }

    restore() {
        this.#text = Snapshot.restore().text;
    }
}

class Snapshot {
    constructor(text) {
        this.text = text;
    }

    static #snapshots = [];

    static create(text) {
        console.log(text);
        this.#snapshots.push(new Snapshot(text));
    }

    static restore() {
        this.#snapshots.pop();
        return this.#snapshots[this.#snapshots.length - 1];
    }
}

const editor = new TextEditor();

editor.text = "Це початковий текст.";
editor.text = "Редагований текст";
editor.text = "Оновлений текст";

console.log("===");

console.log(editor.text);
// Оновлений текст

console.log("===");

editor.restore();

console.log(editor.text);
// Редагований текст

editor.restore();

console.log(editor.text);
// Це початковий текст.

console.log("====================");

//
// ==================
// Ланцюжок відповідальності (Chain of Responsibility) — це паттерн програмування, який дозволяє передавати запити послідовно через ланцюжок обробників, кожен з яких може обробити або передати запит далі.

class AuthHandler {
    setNextHandler(handler) {
        this.nextHandler = handler;
        return handler;
    }

    login(user, password) {
        if (this.nextHandler) {
            return this.nextHandler.login(user, password);
        } else {
            console.log("Вхід заборонено");
            return false;
        }
    }
}

class TwoFactorAuthHandler extends AuthHandler {
    login(user, password) {
        if (
            user === "John" &&
            password === "password" &&
            this.isValidTwoFactorCode()
        ) {
            console.log("Вхід дозволено з двофакторною автентефікацією");
            return true;
        } else {
            return super.login(user, password);
        }
    }

    isValidTwoFactorCode() {
        return true;
    }
}

class RoleHandler extends AuthHandler {
    login(user, password) {
        if (user === "guest") {
            console.log("Вхід дозволенн в ролі гостя");
            return true;
        } else {
            return super.login(user, password);
        }
    }
}

class CredentialsHandler extends AuthHandler {
    login(user, password) {
        if (user === "admin" && password === "admin123") {
            console.log("Вхід дозволенн за логінем та паролем");
            return true;
        } else {
            return super.login(user, password);
        }
    }
}

class HandlerBuilder {
    constructor() {
        this.firstHandler = null;
        this.lastHandler = null;
    }

    add(handler) {
        if (!this.firstHandler) {
            this.firstHandler = handler;
            this.lastHandler = handler;
        } else {
            this.lastHandler.setNextHandler(handler);
            this.lastHandler = handler;
        }

        return this;
    }

    create() {
        return this.firstHandler;
    }
}

// const handler = new TwoFactorAuthHandler();

// const handler2 = new CredentialsHandler();

// handler2.setNextHandler(new RoleHandler());

// handler.setNextHandler(handler2);

// handler.login("admin", "admin123");
// // Вхід дозволенн за логінем та паролем

// handler.login("guest", "55gjhti");
// // Вхід дозволенн в ролі гостя

const handlerBuilder = new HandlerBuilder();
const handler = handlerBuilder
    .add(new CredentialsHandler())
    .add(new TwoFactorAuthHandler())
    .add(new RoleHandler())
    .create();

handler.login("admin", "admin123");
// Вхід дозволенн за логінем та паролем

handler.login("John", "password");
// Вхід дозволено з двофакторною автентефікацією

handler.login("guest", "guest123");
// Вхід дозволенн в ролі гостя

handler.login("user", "password");
// Вхід заборонено

console.log("====================");

//
// ==================
// Міст (Bridge) — це паттерн програмування, який дозволяє розмістити абстракцію і реалізацію в окремі класи, дозволяючи їм мати незалежний функціонал

class User2 {
    constructor(name, messenger) {
        this.name = name;
        this.messenger = messenger;
    }

    sendMessage(message) {
        const formatMessage = this.formatMessage(message);
        this.messenger.sendMessage(formatMessage);
    }

    formatMessage(message) {
        return `[${this.name}]: ${message}`;
    }
}

// через СМС
// череземейл
// через телеграм бот

class SMSMessenger {
    static sendMessage(message) {
        console.log(`Відправляємо SMS: ${message}`);
    }
}

class EmailMessenger {
    static sendMessage(message) {
        console.log(`Відправляємо Email: ${message}`);
    }
}

const john = new User2("John", SMSMessenger);
const alex = new User2("Alex", EmailMessenger);

john.sendMessage("Hello");
//Відправляємо SMS: [John]: Hello

alex.sendMessage("Hello");
//Відправляємо Email: [Alex]: Hello
