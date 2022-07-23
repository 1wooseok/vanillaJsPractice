const fs = require('fs');
const json = require("./data/data.js");
console.log(json);

fs.writeFileSync("data.json", JSON.stringify(json))