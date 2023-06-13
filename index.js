// console.log("Hello world");

// const productName = "Мікрофон";
// const productDefault = "Назва товару";

// const newProductName = "Мікрофон 3000";
// const userRole = "admin";

// const updateProductName =
//     (userRole === "admin" && newProductName) || productName;

// console.log(updateProductName);

// ============================================

// const CUSTOM_NAME = "My Robot";
// const MODE = 0;
// const ROOM = "Вітальня";

// const COMAND = "work";

// if (COMAND === "change name" && MODE !== 0) {
//     const name = CUSTOM_NAME || "Robot v689890";
//     console.log(`Start ${name}`);
// }

// if (MODE === 0) {
//     console.log("Robot is offline");
// }

// if (COMAND === "work") {
//     const room = ROOM;
//     const mode = MODE;

//     console.log(`Мode ${mode}; Прибираю кімнату: ${room}`);
// }

// ==========================================================

// const login = "user";
// const password = "123qwe56566";
// const isAdmin = true;
// const isLoggedIn = true;

// if (isLoggedIn === true) {
//     if (isAdmin) {
//         console.log("переходимо на сторінку /admin");
//     } else if (login === "demo") {
//         console.log("переходимо на сторінку /demo");
//     } else {
//         console.log("переходимо на сторінку /home");
//     }
// } else if (isLoggedIn === false) {
//     if (login && password) {
//         console.log("Token:", 16562286486);
//         if (isAdmin) {
//             console.log("переходимо на сторінку /admin");
//         } else {
//             console.log("переходимо на сторінку /home");
//         }
//     }
// } else if (isLoggedIn === null) {
//     console.log("Помилка");
// }

// ==========================================================

// const price = 100;
// const useCashback = true;

// let cashbackLevel = 4;
// let totalPrice = null;
// let cashbackAmout = null;

// if (price < 100) {
//     console.log("");
//     cashbackAmout = 0;
// } else {
//     if (cashbackLevel > 0) {
//         cashbackAmout = price * (cashbackLevel * 0.01);
//     }
//     cashbackLevel++;
//     if (cashbackLevel > 5) {
//         cashbackLevel = 1;
//     }
//     if (useCashback > 0 && useCashback) {
//         totalPrice = price - cashbackAmout;
//     }
// }

// console.log(totalPrice);

// ==========================================================

// const buttonType = "primary";

// if (buttonType === "primary") {
//     console.log("primary button");
// } else if (buttonType === "secondary") {
//     console.log("secondary button");
// } else if (buttonType === "basic") {
//     console.log("basic button");
// } else {
//     console.log("default button");
// }

// const buttonType = "main";

// switch (buttonType) {
//     case "main":
//         console.log("main");
//     case "global":
//         console.log("global");
//     case "primary":
//         console.log("primary");
//         break;

//     case "second":
//     case "double":
//     case "secondary":
//         console.log("secondary");
//         break;
//     default:
//         console.log("dafault button");
// }

//
//========  LOOPS  ==========
//

// let count = 0;
// let isFast = true;

// while (count < 5) {
//     console.log("Hello world", count);
//     if (isFast) {
//         count = 5;
//     } else {
//         count++;
//     }
// }

// const PRODUCT_AMOUT = 6;
// const DISCOUNT_ADDITIONAL = 2;

// let discountAmout = 0;
// let productCount = 0;

// while (
//     productCount < PRODUCT_AMOUT &&
//     DISCOUNT_ADDITIONAL <= 10 &&
//     discountAmout <= 10
// ) {
//     productCount++;

//     if (productCount <= 0) {
//         break;
//     }

//     if (productCount <= 3) {
//         discountAmout += 1;
//     } else if (productCount > 3 && productCount <= 5) {
//         discountAmout += 1.5;
//     } else if (productCount > 5 && productCount <= 8) {
//         discountAmout += 2;
//     } else if (productCount > 8) {
//         discountAmout += 2.5;
//     }

//     if (DISCOUNT_ADDITIONAL) {
//         discountAmout += DISCOUNT_ADDITIONAL;
//     }

//     console.log(productCount, discountAmout);
// }

// if (discountAmout > 10) {
//     discountAmout = 10;
// }
// console.log("Знижка:", discountAmout, "%");
// console.log("Знижка для товарів", productCount);
// console.log("Товарів не мають знижку", PRODUCT_AMOUT - productCount);

// let container = 5;
// let storage = 20;

// let car = 3;

// do {
//     car++;
//     storage -= container;
//     console.log(car, storage);
// } while (car < 3);

// if (car > 3) {
//     console.log("Нам потрібна нова машина");
// }

// let start = 40; // start
// let goal = 100; //ціль

// let step = 0; //поточний оберт
// let set = 8; //кількість підходів
// let rest = 10; //відпочинок

// do {
//     if (step === 0) {
//         console.log("Початок тренування");
//     }

//     start++;
//     step++;

//     if (step === goal || start === goal) {
//         console.log("Закінчення тренування");
//         break;
//     }

//     if (step % rest === 0) {
//         console.log("Зробіть перерву");
//         continue;
//     }

//     if (step % set === 0) {
//         console.log(`Ви зробили ${step / set} сет (ів)`);
//     }

//     if (step === goal / 2) {
//         console.log("Ви зробили половину тренування");
//     }

//     console.log("Поточний прогрес", step);
// } while (step < goal && start < goal);

// let q = 0;

// for (let i = 1, j = 5; i <= j; i++) {
//     console.log("Test", i, j);

//     if (i === 3) {
//         j++;
//     }

//     for (; q < i; q++) {
//         console.log("Q", q);
//     }
// }

// let age = 25;
// let hasExp = true;
// let hasEdu = true;

// let JS = true;
// let HTML = true;

// form: {
//     if (age >= 18) {
//         if (!hasExp) {
//             console.log("Ви нам не підходите. Немає досвіду");
//         } else if (!hasEdu) {
//             console.log("Ви нам не підходите. Немає освіти");
//         } else if (hasExp) {
//             console.log("Ви нам підходите!");
//             break form;

//             if (JS) {
//                 console.log("Ви нам підходите!");
//             }
//             if (HTML) {
//                 console.log("Ви нам підходите!");
//             }
//         } else if (hasEdu) {
//             console.log("Ви нам підходите!");
//             break form;
//         }
//     }
//     if (age < 18) {
//         console.log("Ви нам не підходите. Малий вік");
//         break form;
//     }
// }

// table: for (let i = 1; i < 10; i++) {
//     if (i === 1) {
//         continue;
//     }
//     console.log(`Число ${i} =============`);
//     for (let j = 1; j <= 10; j++) {
//         if (i === 10) {
//             break table;
//         }
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

//
//========  FUNCTION  ==========
//

// function calcSpace(amout, unit = "px") {
//     return `${amout * 4}${unit}`;
// }

// console.log(calcSpace(5));

//======================================

function playTrackById(trackId) {
    // Отримати файл пісні та запустити її
}

function stopTrackById(trackId) {
    /// отримати файл пісні і її поставити на паузy
    console.log(`отримати файл пісні з ID ${trackId} і її поставити на паузy`);
}

function play(trackName, trackId) {
    console.log(`Запускаємо ${trackName}`);

    playTrackById(trackId);
}

function end(oldTrackName, newTrackName) {
    console.log(`Завершуємо грати ${oldTrackName}`);
    console.log(`Завершуємо грати ${newTrackName}`);
}

function pausePlay(currentTrackName) {
    console.log(`Трек ${currentTrackName} на паузі`);

    reloadDataTrack();

    play();
}

// function reloadDataTrack(amout) {
//     if (amout <= 0) {
//         console.log("Дані оновлені вказану кількість разів");
//     } else {
//         console.log("Повторне оновлення");
//         reloadDataTrack(amout - 1);
//     }
// }

// reloadDataTrack(5);

function pauseStopByTrack(trackName, trackId) {
    let isPause = null;

    return () => {
        if (isPause == true) {
            return;
        }

        stopTrackById(trackId);
        console.log(`Трек ${trackName} на паузі`);
        isPause = true;
    };
}

// const pauseStop123 = function pauseStop(originTrackId, originTrackName) {
//     // stopTrackById(originTrackId);
//     console.log(`Трек ${originTrackName} на паузі`);
// };
// pauseStop123();

const pauseStop456 = pauseStopByTrack("IT - Console log", 10);
pauseStop456();
pauseStop456();
pauseStop456();

//======================================

const memoCalcSpace = (oldAmout = null, oldUnit = null, oldResult = null) => {
    return (amout, unit = "px") => {
        if (oldAmout === amout && unit === oldUnit) {
            console.log("Memo");
            return oldResult;
        }

        oldResult = `${amout * 4}${unit}`;
        oldAmout = amout;
        oldUnit = unit;

        return oldResult;
    };
};

const calcSpace = memoCalcSpace();

console.log(calcSpace(4));
console.log(calcSpace(4));

//=====================================
