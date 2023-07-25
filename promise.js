//
//========  PROMISE  ==========
//
// Обіцянка (Promise) — це конструкція, яка представляє асинхронну операцію, яка буде вирішена (resolved) або відхилена (rejected) у майбутньому.

// Обіцянка може перебувати в трьох станах:
//  "pending" (очіування): очатовий стан обіцянки, оли вона ще не  вирішилась або не відхилена
//   "resolved" (вирішена): Стан, в яому обіцянка успішно вионалась і  повернула результат
//   "rejected" (відхилена): Стан, в яому обіцянка відхилилась і повернула  причину відхилення (помилу).

const loadFile = (filename) =>
    new Promise((resolve) => {
        console.log(`Завантаження файлу ${filename}...`);

        setTimeout(() => resolve(`Вміст файлу ${filename}`), 2000);
    });

const result = loadFile("example.txt");

// console.log(result);

// setTimeout(() => console.log(result), 3000);
// // Завантаження файлу example.txt...
// // Promise { <pending> }
// // Promise { 'Вміст файлу example.txt' }

//
// .then(onResolve, onRejected)
// Це вбудована функція, яка оброблює результат обіцянки

//
// .catch(onRejected)
// Це вбудована функція, яка використовується для обробки помилок, що виникають під час виконання обіцянки.

//
// .finally(onFinally)
// Це вбудована функція, яка виконує певну дію після завершення виконання обіцянки, незалежно від того, чи було виконано обіцянку (resolve) або відхилено (reject).

result.then(
    (data) => {
        console.log(data);
    },
    (error) => {
        console.log(error);
    }
);
// Завантаження файлу example.txt...
// Вміст файлу example.txt

loadFile("text.txt")
    .then((data) => {
        return data.toUpperCase();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("Error", error);
    })
    .finally(() => {
        console.log("End");
    });

// Завантаження файлу example.txt...
// Завантаження файлу text.txt...
// Вміст файлу example.txt
// ВМІСТ ФАЙЛУ TEXT.TXT
// End

const result2 = loadFile("photo.jpg");

result.then((data) => {
    console.log(data, 1);
    return null;
});

result.then((data) => {
    console.log(data, 2);
    return null;
});

result.then((data) => {
    console.log(data, 3);
    return null;
});

// Завантаження файлу photo.jpg...
// Вміст файлу example.txt 1
// Вміст файлу example.txt 2
// Вміст файлу example.txt 3

//
// ===============================
//

function loadNewFile(filename) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Вміст файлу ${filename}`);
        }, 2000);
    });
}

function convertFile(content) {
    // Конвертація файлу...
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Конвертований вміст: ${content.toUpperCase()}`);
        }, 1000);
    });
}

function saveFile(convertContent) {
    // Збереження файлу...
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error test");
        }, 1500);
    });
}

function sendFileToClient(content) {
    // Відправка даних в інтерфейс
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 500);
    });
}

loadNewFile("NewFile.txt")
    .then((content) => {
        console.log("Файл завантажено успішно!");
        console.log("Вміст файлу:", content);
        return convertFile(content);
    })
    .then((data) => {
        return getInfoFile(data);
    })
    .then((convertContent) => {
        console.log("Файл успішно сконвертовано!");
        console.log("Конвертований вміст:", convertContent);
        return saveFile(content);
    })
    .then(() => {
        console.log("Файл успішно збережено!");
        return sendFileToClient();
    })
    .catch(() => {
        console.log("Сталася помилка");
    })
    .finally(() => {
        console.log("Файл успішно відправлено клієнту");
    });

// Файл завантажено успішно!
// Вміст файлу: Вміст файлу NewFile.txt
// Файл успішно сконвертовано!
// Конвертований вміст: Конвертований вміст: ВМІСТ ФАЙЛУ NEWFILE.TXT
// Сталася помилка
// Файл успішно відправлено клієнту

//
// =====================
//
// Promise.resolve(value)
// Це вбудована функція, яка створює об'єкт Promise з вирішеним (resolved) станом і, за потреби, повертає значення або об'єкт вже вирішеного Promise.

// Promise.reject(reason)
// Це вбудована функція, яка створює відхилений об'єкт Promise з вказаною причиною (значенням).

function getInfoFile(file) {
    console.log(file, 1111);

    return Promise.resolve(file);
}

//
// Promise.all(iterable)
// Це вбудована функція, яка об’єднує список обіцянок в одну
// Якщо всі обіцянки успішно виконуються, Promise.all() повертає масив з результатами в тому ж порядку, в якому були передані вхідні обіцянки. Якщо ж хоча б одна обіцянка відхиляється (видає помилку), то повернута обіцянка відхиляється із цією помилкою.

//
Promise.allSettled([
    loadFile("example2.txt"),
    getInfoFile("new_file.doc"),
    saveFile(),
    sendFileToClient(),
    convertFile("file"),
]).then((data) => {
    console.log(data);
});

// [
//     'Вміст файлу example2.txt',
//     'new_file.doc',
//     undefined,
//     undefined,
//     'Конвертований вміст: FILE'
// ]

//
// Promise.allSettled(iterable)
// Це вбудована функція, яка об’єднує список обіцянок в одну
// Вона є аналогом Promise.all(iterable), але повертає результати всіх обіцянок, незалежно від їхнього статусу, включаючи як успішно вирішені, так і відхилені, в той час як Promise.all() зупиняє виконання, якщо одна з обіцянок відхиляється.

Promise.allSettled([
    loadFile("example2.txt"),
    getInfoFile("new_file.doc"),
    saveFile(),
    sendFileToClient(),
    convertFile("file"),
]).then((data) => {
    console.log(data);
});

// [
//     { status: 'fulfilled', value: 'Вміст файлу example2.txt' },
//     { status: 'fulfilled', value: 'new_file.doc' },
//     { status: 'rejected', reason: 'Error test' },
//     { status: 'fulfilled', value: undefined },
//     { status: 'fulfilled', value: 'Конвертований вміст: FILE' }
// ]

//
// Promise.any(iterable)
// Це вбудована функція, яка об’єднує список обіцянок в одну та повертає результат виконання першої успішної обіцянки

// Promise.race(iterable)
// Це вбудована функція, яка об’єднує список обіцянок в одну та повертає результат виконання першої успішної або неуспішної обіцянки
