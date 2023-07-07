//
//========  CONSOLE  ==========
//

// console.error() Відображення критичних помилок
// console.exception() Виведення непередбачених помилок
// console.info() Відображення корисних повідомлень
// console.warn() Виведення попереджень про потенційні проблеми
// console.log() Запис повідомлень для відстеження роботи програми
// console.debug() Виведення додаткових деталей для налагодження

//
// ============== Групування

console.group("Група розгорнута");

console.error("Відображення критичних помилок");
// console.exception("Виведення непередбачених помилок");
console.info("Відображення корисних повідомлень");

console.groupCollapsed("Група згорнута");
console.warn("Виведення попереджень про потенційні проблеми");
console.log("Запис повідомлень для відстеження роботи програми");

console.groupEnd();
// console.debug("Виведення додаткових деталей для налагодження");

console.groupEnd();

//
// =========== Вимірювання часу
// .time(label)  .timeLog(label)  .timeEnd(label)

// =========== Вимірювання кількості виконання певного фрагмента коду
// .count(label)  .countReset(label)

const counterLabel = "Timer";

console.time(counterLabel); //включає таймер
console.count("Лічильник:"); // починає рахувати, виведе 1

console.groupCollapsed("Група згорнута");
console.warn("Виведення попереджень про потенційні проблеми");
console.timeLog(counterLabel); // рахує скільки пройшло часу від включеня таймеру до виконання цього відрізку коду
console.count("Лічильник:"); // продовжує рахувати, виведе 2
console.log("Запис повідомлень для відстеження роботи програми");

console.groupEnd();

console.countReset("Лічильник:"); // обнуляє рахування, нічого не виводить
console.count("Лічильник:"); // починає рахувати, виведе 1
console.timeEnd(counterLabel); // рахує скільки пройшло часу від включеня таймеру до завершення таймеру виконуючи код між таймерами
// Timer: 0.721ms

//
// .trace(value1, value2, ...valueN)
// Це вбудована функція, яка показує шлях виконання коду (стек викликів) до того місця, де була викликана функція

const test1 = () => console.trace("Hello");
const test2 = () => test1();
const test3 = () => test2();
test3();

//
// .table(data, columns)
// Це вбудована функція, яка використовується для відображення таблиці з даними у консолі
const data = [
    { name: "John", age: 25, city: "New York" },
    { name: "Alice", age: 30, city: "London" },
];

console.table(data);
// виводить красиву таблицю де ключі це заголовки колонок а кількість об'єктів це кожна строка таблиці

console.table(data, ["name", "city"]);
// виводить тільки певні стовпці до таблиці

//
// assert(assertion, ...value1, value2, ...valueN)
// Це вбудована функція, яка використовується для перевірки умови та виведення повідомлення, якщо умова не виконується.

const x = 10,
    y = 5;
console.assert(x === y, "x не дорівнює y");
// Assertion failed: x не дорівнює y

//
// Стилізація тексту
console.log("%cHello World", "color: yellow; background-color: blue");
