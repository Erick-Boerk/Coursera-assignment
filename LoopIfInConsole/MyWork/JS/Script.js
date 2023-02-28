/*var names={
    Name:"Josephine", Gender:'M', Age:16, Country:"Ukrain"
}*/

var check="John";
if(check.includes("j",0) || check.includes("J",0))
{
console.log("Goodbye "+check)
}
else{
console.log("Hello "+check);
}
var breakline="+++++####+++++####+++++####++++++#####++++++\n these below are excises did along the week4";
for(var k=1; k<3; k++)
{
    console.log("check on top to see the output\n"+breakline);
}
/*var greeting="Hello guys!";
console.log(greeting);*/
var name1=["John",'M', 12, "Miami", "2979645", "I am an american boy proud of my country"];
var name2=["John","James", "Erick", "Obedi"];
for(var erick in name1){
    console.log("...: "+name1[erick]);
}
/*switch(name1.startwith("j") || name1.startwith("j")){
    case ""
}*/
for(var i=0; i < name2.length; i++){
if(name2.includes("J",0) || name2.includes("j",0)){
console.log("Name: "+name2[i]+"\nGoodbye "+name2[i]);
}
else{
    console.log("Name: "+name2[i]+"\nHello "+name2[i]);
}
}
var identity={
    Firstname:"ERICK",
    Secondname:"OBEDI",
    Gender:"MALE",
    Age:"08",
    Nationality:"Congolese",
    Currentcountry:"Malawi",
    Address:"Kawale1"
};
for(var promp in identity){
    console.log(promp+" : "+identity[promp]);
    console.log("****************")
}
console.log("=========================================================")
var names=["Josephine"];
for(var ERICK = 0; ERICK<3; ERICK++){
    if(names.includes("J") || names.includes("j"))
    {
    console.log("Goodbye "+ERICK+" : "+names[ERICK]);
    }
    else
    {
    console.log("Hello "+ERICK+" : "+names[ERICK]);
    }
}