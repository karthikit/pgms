class Information1 {
    info1(msg){
        console.log(msg);
    }
    info2(arg1,arg2){
        console.log(`${arg1},${arg2}`)
    }
}
class Information2 {
    info1(msg){
        console.log(msg);
    }
    info2(arg1,arg2){
        console.log(`${arg1},${arg2}`)
    }
}
module.exports = {Information1,Information2};