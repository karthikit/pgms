const EventEmitter = require('events');
const Information = require('./app6');
const inform = new Information();

inform.on('L1',(arg1) => {
    console.log('Listener 1 =',arg1);
});
inform.on('L2',(arg1,arg2) => {
    console.log('Listener 2 =',arg1,arg2);
});

inform.info('L1',80);
inform.info('L2',{'name':'jai'},90);