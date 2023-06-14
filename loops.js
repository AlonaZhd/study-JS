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
