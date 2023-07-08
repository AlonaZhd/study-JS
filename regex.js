//
// =========== REGULAR EXPRESSION ==============
//
const regex = /test/g;
const regex1 = RegExp("test", "gm");

console.log(regex);
// /test/g

console.log(regex1);
// /test/gm

const result = regex.exec("This is test");

console.log(result);
// [ 'test', index: 8, input: 'This is test', groups: undefined ]
