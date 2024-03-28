const { log } = require('console');
const { readFileSync, writeFileSync } = require('fs');
const adddata = "two"

//fs.readFile takes a call back which calls response.send as you have shown - good.If you simply replace that with fs.readFileSync, you need to be aware it does not take a callback so your callback which calls response.send will never get called and therefore the response will never end and it will timeout.
//thats why we use read variable to store
// const write = writeFileSync('./content/first.txt', `${adddata},${read}`) //this is one of theapproach tonot ovverride the current data //
const write1 = writeFileSync('./content/first.txt', adddata, { flag: "a" })
    //it will execute line  by line
const read = readFileSync('./content/first.txt', 'utf-8') // 111
console.log(read);