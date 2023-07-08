//
//========  ERRORS  ==========
//
try {
    const a = 10;
    // a = 5;
    console.log("Hello!");
} catch (err) {
    console.log(err);
    // Тут виводиться повідомлення про помилку, але код далі продовжує працювати
} finally {
    console.log("Hello world");
}

function getUserData(userId) {
    try {
        const a = 10;
        a = 5;
        // ... робить запит до бази даних
    } catch (err) {
        // err - помилка про те, що дані не можуть бути отримані
        throw new Error(
            `Помилка. Неможливо отримати данні користувача ${userId}`,
            {
                cause: err,
            }
        );
    }
}

function updateUserData(userId) {
    try {
        const data = getUserData(userId);
        data.name = "Ivan";
        // ...
    } catch (err) {
        const newError = new Error(
            `Помилка. Неможливо оновити данні користувача ${userId}`,
            {
                cause: err,
            }
        );
        console.log(newError.message);
    }
}

updateUserData(21527);

function sumNum(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Аргументи не є числом");
    }
    return a + b;
}

try {
    sumNum(5, "10");
} catch (err) {
    console.log(err.message);
}
