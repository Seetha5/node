const os = require('os');

console.log(os.userInfo());
const data = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}
console.log(data);