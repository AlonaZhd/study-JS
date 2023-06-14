//
//========  built-in global FUNCTION  ==========
//

// const code = "(5+5) % 5 === 0";
// console.log(eval(code));

// =====================

// function calcScreenRation(w, h) {
//     w = parseInt(w);
//     h = parseInt(h);

//     let result = w / h;

//     if (isNaN(result)) {
//         return "Error";
//     } else if (!isFinite(result)) {
//         return "is Infinity";
//     } else {
//         return result;
//     }
// }
// console.log(calcScreenRation("1920.5px", "1000.5px"));

// const num = parseFloat("1.55555");

// console.log(num);

// =====================
const domain = "it-brains.com.ua";

function redirectToPath(path) {
    path = encodeURI(path);
    const link = `https://${domain}/${path}`;
    console.log(link);

    return link;
}
const URI = "https://it-brains.com.ua//products/microphone%20purple/info";
function getUrl(urInURI) {
    urInURI = decodeURI(urInURI);
    console.log(urInURI);

    return urInURI;
}
const path = "products/microphone purple/info";
const link = `https://${domain}/${path}`;
const link1 = redirectToPath(path); // URI
const link2 = getUrl(link1); // Decode URI

console.log(link === link2);
