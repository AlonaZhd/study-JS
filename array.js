//
//========  ARRAY  ==========
//
// const a = 1;
// const b = 2;
// const c = 3;

// let list = [];

// // console.log(list);

// const testArr = Array();

// testArr[0] = "Start";
// testArr[1] = 2;
// testArr[2] = 20;
// testArr[testArr.length] = 30;
// testArr[testArr.length] = 40;

// delete testArr[0];

// console.log(testArr);

// const big = [[[1], [2, 3, 4, 5], [6]], [[7]], [[8]]];

// console.log(big[0][1][3]);

const location = [
    [100, 101, 102],
    [200, 201, 202],
    [300, 301, 302],
    [400, 401, 402],
];

// const loc1 = location[0];
// const loc2 = location[1];

// деструктурізація
// const [loc1, ...rest] = location;

// const [[p1, p2], loc3, loc4 = "test"] = rest;

// console.log(p1, p2);

// console.log(location[0][2]);

// for (const point of location) {
//     console.log(point);

//     for (const coord of point) {
//         console.log(coord);
//     }
// }

// for (let i = 0; i < location.length; i++) {
//     console.log(location[i]);
//     for (let j = 0; j < location[i].length; j++) {
//         console.log(location[i][j]);
//     }
// }

// const l1 = [1, 2, 3];
// const l2 = [1, 2, 3];

// const l3 = l1;
// const [...l4] = l1;

// console.log(l1, l3);
// console.log(l1, l4);

// delete l1[0];
// console.log(l1, l3); // Змінна а та b посилаються на один і той самий масив в пам'яті. Тому видалене значення з одного масиву видаляється в іншому
// // [ <1 empty item>, 2, 3 ] [ <1 empty item>, 2, 3 ]

// console.log(l1, l4); // Виконана деструктурізація, тому це вже різні масиви. Тому видалене значення з одного масиву НЕ видаляється в іншому
// [ <1 empty item>, 2, 3 ] [ 1, 2, 3 ]

function printFullName([name, surname, lastname, ...arg]) {
    // console.log(arg);
    // return arg.toString();
    return `${name} ${surname} ${lastname} ${
        arg.length ? `(${arg.toString()})` : ""
    }`;
}

console.log(printFullName(["Ivan", "Petrenko", "Vasilenko", "Admin", "18"]));

// function sumAllNum(...nums) {
//     let sum = 0;

//     for (const n of nums) {
//         sum += n;
//     }

//     return [sum, nums.length];
// }

// // console.log(sumAllNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12));

// const [sum, numLength] = sumAllNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12);

// console.log(sum, numLength);
