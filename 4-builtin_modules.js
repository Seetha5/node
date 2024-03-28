const os = require('os');
const path = require('path');
const { readFileSync, writeFileSync } = require('fs');
const { readFile, writeFile } = require('fs');
const { log } = require('console');
// console.log(os.userInfo());
// const data = {
//     name: os.type(),
//     release: os.release(),
//     totalmem: os.totalmem(),
//     freemem: os.freemem()
// }
const adddata = "Hi iam sairam"
const read = readFileSync('./content/first.txt', 'utf-8') // 111

//fs.readFile takes a call back which calls response.send as you have shown - good.If you simply replace that with fs.readFileSync, you need to be aware it does not take a callback so your callback which calls response.send will never get called and therefore the response will never end and it will timeout.
//thats why we use read variable to store
//const write = writeFileSync('./content/first.txt', `${adddata},${read}`) this is one of theapproach tonot ovverride the current data//
// const write = writeFileSync('./content/first.txt', adddata, { flag: "a" })
readFile('./content/first.txt', 'utf-8', (err, res) => {
    // console.log(res);
})
writeFile('./content/first.txt', adddata, { flag: "a" }, () => {

})