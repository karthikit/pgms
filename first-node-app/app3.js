const fs = require('fs');

var curDir=fs.readdirSync('./');
console.log(curDir);

fs.readdir('./',function(err,curDir)  {
if(err) console.log(err);
else console.log(curDir)
});