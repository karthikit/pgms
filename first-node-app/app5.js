const EventEmitter = require('events');
const emitter = new EventEmitter();

//Listener 1
emitter.on('L1',(eventArg1) => {
    console.log('listener called',eventArg1);
    });
//Listener 2
emitter.on('L2',(eventArg1, eventArg2) => {
    console.log(`listener called ${eventArg1},${eventArg2}`);
    });
//Listener 3
emitter.on('L3',(eventArg1, eventArg2, eventArg3) => {
    console.log('listener called',eventArg1, eventArg2, eventArg3);
    });
emitter.emit('L1','id:1'); //Event raised
emitter.emit('L2','id:1','id:2'); //Event raised
emitter.emit('L3','id:1', 'id:2', 'id:3'); //Event raised
emitter.emit('L1',{ id:1, url:'http://'}); //Event raised