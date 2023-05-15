// var controllerA =(function(){
//     //scope a
//     //private
//     var age =20; // pr
//     var log = function(){
//         console.log(this.firstName);
//     } 

//     var firstName ="emre a";
//     //public 
//     return{
//         log,
//         firstName
//     }
// })()

var scriptB = require('./scriptB');
scriptB.log("deneme");
console.log(scriptB.name);
// console.log(scriptB.age); // is not avaible