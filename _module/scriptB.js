// IIFE
// var controllerB = (function () {
//   var firstName = "emre b";
//   return {
//     firstName,
//   };
// })();

// console.log(controllerB.firstName);
// console.log(controllerA.firstName);

// private 
var age= 20;

//public
var firstName =  'emre';
var log = function(name){
    console.log(name);
}

// module.exports.name = firstName;
// module.exports.log = log;
// you can also make it like that

module.exports ={
    name : firstName, // firstName,
    log :  log, // log,
}
