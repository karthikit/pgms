const os=require('os');

var totalMem = os.totalmem();
var freeMem = os.freemem();
var hname = os.hostname();
console.log('Total Memory:'+totalMem);
console.log('Free Memory:'+freeMem);
console.log('Host Name:'+hname);

console.log(`Total memory: ${totalMem}`); //use backtake character (template string)