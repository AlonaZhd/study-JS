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

// Композит (Composite) — це патерн програмування, який дозволяє створювати структуру об'єктів у вигляді дерева, де кожен об'єкт може бути окремим елементом або групою об'єктів. Ця структура називається "деревоподібною" через ієрархію "один-багато".

class Composite {
    comments = [];

    addComment(comment) {
        this.comments.push(comment);
    }

    removeComment(comment) {
        const index = this.comments.indexOf(comment);

        if (!index !== -1) {
            this.comments.splice(index, 1);
        }
    }
}

class Comment extends Composite {
    constructor(text) {
        super();
        this.text = text;
    }

    display() {
        console.log(`- Коментар: ${this.text}`);

        for (const comment of this.comments) {
            comment.display();
        }
    }
}

class Video extends Composite {
    constructor(title) {
        super();

        this.title = title;
    }

    display() {
        console.log(`Відео: ${this.title}`);

        for (const comment of this.comments) {
            comment.display();
        }
    }
}

const video = new Video("Навчальне відео");

video.addComment(new Comment("Дуже корисне відео"));
video.addComment(new Comment("Файне відео"));

// video.display();
// // Відео: Навчальне відео
// // - Коментар: Дуже корисне відео
// // - Коментар: Файне відео

video.comments[0].addComment(new Comment("Відповідь: Згоден!"));
video.display();
// Відео: Навчальне відео
// - Коментар: Дуже корисне відео
// - Коментар: Відповідь: Згоден!
// - Коментар: Файне відео

console.log(video.comments);
// [
//     Comment { comments: [ [Comment] ], text: 'Дуже корисне відео' },
//     Comment { comments: [], text: 'Файне відео' }
//  ]

//
//
// ====================================
// Муха (Flyweight) — це патерн програмування, основна ідея якого полягає в тому, щоб спільно використовувати об'єкт- одиночка замість створення окремих унікальних об'єктів для кожного випадку використання

class Category {
    static #categories = {};

    constructor(name) {
        this.name = name;
    }

    static create(name) {
        if (!this.#categories[name]) {
            this.#categories[name] = new Category(name);
        }

        return this.#categories[name];
    }
}

class Product {
    constructor(name, category) {
        this.name = name;
        this.category = category;
    }

    display() {
        console.log(`Product: ${this.name}, Category: ${this.category.name}`);
    }
}

const electronics = Category.create("Electronics");
const books = Category.create("Books");
const electronics2 = Category.create("Electronics");

console.log(electronics, books, electronics2);
// Category { name: 'Electronics' } Category { name: 'Books' } Category { name: 'Electronics' }

console.log(electronics === electronics2);
// true

const product1 = new Product("Laptop", electronics);
const product2 = new Product("Headphones", electronics);
const product3 = new Product("Book Title", books);
const product4 = new Product("Smartphone", electronics2);

product1.display();
product2.display();
product3.display();
product4.display();
// Product: Laptop, Category: Electronics
// Product: Headphones, Category: Electronics
// Product: Book Title, Category: Books
// Product: Smartphone, Category: Electronics

const list = [product1, product2, product3, product4].filter(
    (product) => product.category === Category.create("Electronics")
);

console.log(list);
// [
//     Product {
//       name: 'Laptop',
//       category: Category { name: 'Electronics' }
//     },
//     Product {
//       name: 'Headphones',
//       category: Category { name: 'Electronics' }
//     },
//     Product {
//       name: 'Smartphone',
//       category: Category { name: 'Electronics' }
//     }
// ]

//
//
// ====================================
// Шаблонний метод (Template Method) — це патерн програмування, який визначає загальну структуру алгоритму, залишаючи певні кроки реалізації підкласам. Клас-шаблон визначає основну логіку алгоритму, а підкласи можуть змінювати або розширювати окремі кроки.
class CoffeeMachine {
    prepareCoffee() {
        this.boilWater();
        this.grindCoffeeBeans();
        this.brewCoffee();
        this.pourIntiCup();
        this.addIngridients();
        this.serveCoffee();
    }

    boilWater() {
        console.log("Boiling water...");
    }
    grindCoffeeBeans() {
        console.log("Grinding coffee beans...");
    }
    brewCoffee() {
        console.log("Brewing coffee...");
    }
    pourIntiCup() {
        console.log("Pouring coffee into cup...");
    }
    addIngridients() {
        // Цкй мктод залишається пустим і може бути перевизначений у підкласси
    }
    serveCoffee() {
        console.log("Coffee served!");
    }
}

class LateMachine extends CoffeeMachine {
    addIngridients() {
        console.log("Adding milk to make a latte...");
    }
}

class CappuccinoMachine extends CoffeeMachine {}

const latteMachine = new LateMachine();
latteMachine.prepareCoffee();
// Boiling water...
// Grinding coffee beans...
// Brewing coffee...
// Pouring coffee into cup...
// Adding milk to make a latte...
// Coffee served!

const cappuccinoMachine = new CappuccinoMachine();
cappuccinoMachine.prepareCoffee();
// Boiling water...
// Grinding coffee beans...
// Brewing coffee...
// Pouring coffee into cup...
// Adding fronted milk and sprikle of cocoa powder to make a cappuccino...
// Coffee served!

//
//
// ====================================
// Відвідувач (Visitor) — це патерн програмування, який дозволяє додавати нові операції до групи об'єктів, не змінюючи самі об'єкти. Відвідувач розділяє алгоритм від представлення об'єктів, що дозволяє додавати нові операції, не змінюючи класи цих об'єктів.

class TextFile {
    constructor(name, content) {
        this.name = name;
        this.content = content;
    }
}

class ImageFile {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
}

class VideoFile {
    constructor(name, duration) {
        this.name = name;
        this.duration = duration;
    }
}

class TextEditor {
    files = [];

    addFile(file) {
        this.files.push(file);
    }

    readTextFile(file) {
        console.log(
            `Text file: ${file.name}, Size: ${file.content.length} characters`
        );
    }

    readImageFile(file) {
        console.log(`Image file: ${file.name}, Size: ${file.size} KB`);
    }

    readVideoFile(file) {
        console.log(
            `Video file: ${file.name}, Duration: ${file.duration} minutes`
        );
    }

    readFiles() {
        for (const file of this.files) {
            if (file instanceof TextFile) {
                this.readTextFile(file);
            } else if (file instanceof ImageFile) {
                this.readImageFile(file);
            } else if (file instanceof VideoFile) {
                this.readVideoFile(file);
            }
        }
    }
}

const textEditor = new TextEditor();

const textFile = new TextFile(
    "document.txt",
    "To enter text, you can use traditional or predictive text input"
);
const imageFile = new ImageFile("image.jpg", 1024);
const videoFile = new VideoFile("video.mp4", 60);

textEditor.addFile(textFile);
textEditor.addFile(imageFile);
textEditor.addFile(videoFile);

console.log(textEditor);
// TextEditor {
//     files: [
//       TextFile {
//         name: 'document.txt',
//         content: 'To enter text, you can use traditional or predictive text input'
//       },
//       ImageFile { name: 'image.jpg', size: 1024 },
//       VideoFile { name: 'video.mp4', duration: 60 }
//     ]
// }

console.log(textEditor.files);

textEditor.readFiles();
// Text file: document.txt, Size: 63 characters
// Image file: image.jpg, Size: 1024 KB
// Video file: video.mp4, Duration: 60 minutes

//
//
// ====================================
// Адаптер (Adapter) — це патерн програмування, який дозволяє об'єктам з інтерфейсом несумісним з іншими об'єктами працювати разом, перетворюючи інтерфейс одного об'єкта на інтерфейс, очікуваний іншим об'єктом.
class ElectronicPaymentSystem {
    makePayment(amount) {
        const convertedAmount = this.convertAmount(amount);
        console.log(`Making electronic payment: $${convertedAmount}`);
    }

    convertAmount(amount) {
        // Логіка конвертаціі суми платежу
        return amount * 1.2; // Припустимо, що необхідна конвертація у відсотках
    }
}

class OtherPaymentSystem {
    submit(amount) {
        console.log(`Submitting payment request: ${amount}`);
    }
}

class PaymentAdapter {
    constructor(paymentSystem) {
        this.paymentSystem = paymentSystem;
    }

    makePayment(amount) {
        const convertedAmount = this.convertAmount(amount);
        this.paymentSystem.submit(convertedAmount);
    }

    convertAmount(amount) {
        return amount * 1.2;
    }
}

class Order {
    constructor(amount) {
        this.amount = amount;

        if (amount < 100) {
            this.paymentSystem = new PaymentAdapter(new OtherPaymentSystem());
        } else {
            this.paymentSystem = new ElectronicPaymentSystem();
        }
    }

    makePayment() {
        return this.paymentSystem.makePayment(this.amount);
    }
}

const electronicPaymentSystem = new ElectronicPaymentSystem();
electronicPaymentSystem.makePayment(100);
// Making electronic payment: $120

const order1 = new Order(1000);
order1.makePayment();
// Making electronic payment: $1200

const order2 = new Order(10);
order2.makePayment();
// Submitting payment request: 12

//
//
// ====================================
// Стратегія (Strategy) — це патерн програмування, який дозволяє визначати різні алгоритми та забезпечує можливість обміну їх під час виконання програми.

class ShoppingCart {
    constructor(discountStrategy) {
        this.discountStrategy = discountStrategy;
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    calculateTotalPrice() {
        // let totalPrice = 0;
        // for (const item of this.items) {
        //     totalPrice += item.price;
        // }

        // const finalPrice = totalPrice;
        // return finalPrice;

        const price = this.items.reduce((acc, item) => acc + item.price, 0);

        return this.discountStrategy.calculateDiscount(price);
    }
}

class DiscountStrategy {
    calculateDiscount(price) {
        return price;
    }
}

// Стратегія знижки для звичайних клієнтів
class RegularDiscountStrategy extends DiscountStrategy {
    calculateDiscount(price) {
        return price * 1.1; // 10% знижки
    }
}

// Стратегія знижки для преміум клієнтів
class PremiumDiscountStrategy extends DiscountStrategy {
    calculateDiscount(price) {
        return price * 1.2; // 20% знижки
    }
}

// Стратегія знижки для нових клієнтів
class NewCustomerDiscountStrategy extends DiscountStrategy {
    calculateDiscount(price) {
        return price * 1.05; // 5% знижки
    }
}

const shoppingCart1 = new ShoppingCart(new RegularDiscountStrategy());

shoppingCart1.addItem({ name: "Product 1", price: 100 });
shoppingCart1.addItem({ name: "Product 2", price: 50 });

console.log(shoppingCart1.calculateTotalPrice());
//  135

//
//
// ====================================
// Ітератор (Iterator) — це патерн програмування, який надає спосіб послідовного доступу до елементів колекції без розкриття його внутрішньої структури.

class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

class UserGroup {
    users = [];

    addUser(user) {
        this.users.push(user);
    }
}

class UserIterator {
    #users = null;
    #currentIndex = 0;

    constructor(userGroup) {
        this.#users = userGroup.users;
    }

    #hasNext() {
        return this.#currentIndex < this.#users.length;
    }

    next() {
        if (this.#hasNext()) {
            const name = this.#users[this.#currentIndex].name;
            this.#currentIndex++;
            return name;
        }
        return null;
    }
}

const group = new UserGroup();

group.addUser(new User("John Doe", "join@example.com", "password1"));

group.addUser(new User("Jane Smith", "jane@example.com", "password2"));

// console.log(group);
// // UserGroup {
// //   users: [
// //     User {
// //       name: 'John Doe',
// //       email: 'join@example.com',
// //       password: 'password1'
// //     },
// //     User {
// //       name: 'Jane Smith',
// //       email: 'jane@example.com',
// //       password: 'password2'
// //     }
// //   ]
// // }

// console.log(group.users.map((user) => user.name).join(", "));
// // John Doe, Jane Smith

const iterator = new UserIterator(group);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//
//
// ====================================
// Медіатор (Mediator) — це патерн програмування, який визначає об'єкт, який інкапсулює взаємодію між групою об'єктів. Медіатор сприяє слабкій залежності між цими об'єктами, дозволяючи спілкуватися з ними через централізовану точку.

class User {
    constructor(name, chat) {
        this.name = name;
        this.chat = chat;
    }

    sendMessage(message) {
        console.log(`${this.name} відправив повідомлення ${message}`);
        return this.chat.sendMessage(this, message);
    }

    // Прийняття повідомлення від іншого користувача
    receiveMessage(user, message) {
        console.log(
            `${this.name} отримав повідомлення від ${user.name}: ${message}`
        );
    }
}

class Chat {
    constructor() {
        this.users = [];
    }

    // Додавання користувача до чату
    addUser(user) {
        this.users.push(user);
    }

    // Відправлення повідомлення в чат
    sendMessage(sender, message) {
        for (const user of this.users) {
            if (user !== sender) {
                // Відправка повідомлення в message
                user.receiveMessage(sender, message);
            }
        }
    }
}

const chatMediator = new Chat();

const user1 = new User("John", chatMediator);
const user2 = new User("Alex", chatMediator);
const user3 = new User("Philip", chatMediator);

chatMediator.addUser(user1);
chatMediator.addUser(user2);
chatMediator.addUser(user3);

user1.sendMessage("Hello, world!");
// John відправив повідомлення Hello, world!
// Alex отримав повідомлення від John: Hello, world!
// Philip отримав повідомлення від John: Hello, world!

user2.sendMessage("Hello, world!");
// Alex відправив повідомлення Hello, world!
// John отримав повідомлення від Alex: Hello, world!
// Philip отримав повідомлення від Alex: Hello, world!
