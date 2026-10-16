const a = require('./src/config');

const b = require('./src/config');

a.dryRun = true;
console.log(b.dryRun)

console.log(a === b)