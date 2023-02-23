/*console.log("HELLO! I AM JAVASCRIPT");*/
var Myarray=["Erick", "justin", "koJho", "Boerk",  "James", "manhuJ", "Yaakov", "jonas", "Obedi"];
var i=0;
while(i<Myarray.length){

    if(Myarray[i].charAt(0)===("J")||Myarray[i].charAt(0)===("j")){
    console.log("Goodbye "+Myarray[i]+" !"); 
    i++;
}
else if(Myarray[i].charAt(0)!==("J") || Myarray[i].charAt(0)!== ("j")){
console.log("Hello "+Myarray[i]+" !");

i++;
}
}
console.log("------------------------------------");

(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        byeSpeaker(names[i]);
      }
      else {
        helloSpeaker(names[i]);
      }
    }
    
    })();