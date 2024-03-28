const { readFile, writeFile } = require('fs'); //const fs= require('fs) then fs.readfile

const adddata = "two"
console.log("1");

writeFile('./content/first.txt', adddata, { flag: "a" }, () => {
    console.log("3");
})
readFile('./content/first.txt', 'utf-8', (err, res) => {
    console.log(res);
})
console.log("4");