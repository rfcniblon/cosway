 var info = require ("./information.js");
 var cowsay = require("cowsay");

 console.log(cowsay.say({
     text : info.name +' '+ info.school,
     e : "oO",
     T : "U "
 }));

