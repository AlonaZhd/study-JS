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
