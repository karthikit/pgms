const EventEmitter = require('events');

class Information extends EventEmitter{
    info(l,arg1){
        this.emit(l,arg1);
    } 
    info(l,arg1,arg2){
        this.emit(l,arg1,arg2);
    }
}
module.exports = Information;