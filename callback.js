//
//========  CALLBACK  ==========
//
// Колбек (callback) — це функція, яка передається як аргумент іншим функціям і викликається пізніше в контексті виконання цих інших функцій

function loadFile(filename, callback) {
    try {
        console.log(`Завантаження файлу ${filename}...`);
        setTimeout(() => callback(null, `Вміст файлу ${filename}`), 2000);
    } catch (e) {
        callback(e);
    }
}

loadFile("example.txt", function (error, content) {
    if (error) {
        console.log("Помилка завантаження файлу", error);
    } else {
        console.log("Файл завантажено успішно!");
        console.log("Вміст файлу:", content);
    }
});

// Завантаження файлу example.txt...
// Файл завантажено успішно!
// Вміст файлу: Вміст файлу example.txt

//
// ========= ПРИКЛАД не дуже доброї callback функції ==========
// ========= такий код називається Пекельна піраміда!!!

function convertFile(content, callback) {
    setTimeout(function () {
        // Конвертація файлу...
        callback(null, `Конвертований вміст: ${content.toUpperCase()}`);
    }, 1000);
}

function saveFile(convertContent, callback) {
    setTimeout(function () {
        // Збереження файлу...
        callback();
    }, 1500);
}

function sendFileToClient(content, callback) {
    setTimeout(function () {
        // Відправка даних в інтерфейс
        callback();
    }, 500);
}

loadFile("example.txt", (error, content) => {
    if (error) {
        console.log("Помилка завантаження файлу:", error);
    } else {
        console.log("Файл завантажено успішно!!");
        console.log("Вміст файлу:", content);

        convertFile(content, (error, convertContent) => {
            if (error) {
                console.log("Помилка конвертації файлу:", error);
            } else {
                console.log("Файл успішно сконвертовано!");
                console.log("Конвертований вміст:", convertContent);

                saveFile(convertContent, (error) => {
                    if (error) {
                        console.log("Помилка збереження файлу:", error);
                    } else {
                        console.log("Файл успішно збережено!");

                        sendFileToClient((error) => {
                            if (error) {
                                console.log(
                                    "Помилка відправлення файлу клієнту:",
                                    error
                                );
                            } else {
                                console.log(
                                    "Файл успішно відправлено клієнту!"
                                );
                            }
                        });
                    }
                });
            }
        });
    }
});
