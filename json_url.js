//
// =========== JSON ==============
//

const data = {
    id: 1045,
    login: "user65652",
    password: "4562Efvu",
    role: "Admin",
};

const jsonData = JSON.stringify(data);
console.log(jsonData);
// {"id":1045,"login":"user65652","password":"4562Efvu","role":"Admin"}

// ===============

const jsonData2 = JSON.stringify(data, (key, value) => {
    console.log(key, value);
});
// { id: 1045, login: 'user65652', password: '4562Efvu', role: 'Admin' }

//
// ===============
// JSON.parse(text, reviver)
// Це вбудована функція, яка перетворює рядок у форматі JSON в об'єкт або значення в форматі JavaScript

const parseData = JSON.parse(jsonData);
console.log(parseData);
// { id: 1045, login: 'user65652', password: '4562Efvu', role: 'Admin' }

//
// ===============
// JSON.stringify(value, replacer, space)
// Це вбудована функція, яка перетворює значення JavaScript на рядок у форматі JSON.

const stringData = JSON.stringify(jsonData);
console.log(stringData);
// "{\"id\":1045,\"login\":\"user65652\",\"password\":\"4562Efvu\",\"role\":\"Admin\"}"

//
// ======= URL =======
console.log("====== URL ======");

const url = new URL("/path", "https://www.example.com");
console.log(url);
// URL {
//     href: 'https://www.example.com/path',
//     origin: 'https://www.example.com',
//     protocol: 'https:',
//     username: '',
//     password: '',
//     host: 'www.example.com',
//     hostname: 'www.example.com',
//     port: '',
//     pathname: '/path',
//     search: '',
//     searchParams: URLSearchParams {},
//     hash: ''
// }

//
// ===============
// toString()
// Це вбудована функція, яка перетворює URL адресу в рядок

const string = url.toString();
console.log(string);
// https://www.example.com/path
