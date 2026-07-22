function scrollHistoria(){

document
.getElementById("historia")
.scrollIntoView({
behavior:"smooth"
});

}



let dataEvento =
new Date("August 1, 2026 17:00:00").getTime();



setInterval(function(){


let agora =
new Date().getTime();



let distancia =
dataEvento - agora;



let dias =
Math.floor(
distancia/(1000*60*60*24)
);



let horas =
Math.floor(
(distancia%(1000*60*60*24))
/(1000*60*60)
);



let minutos =
Math.floor(
(distancia%(1000*60*60))
/(1000*60)
);



let segundos =
Math.floor(
(distancia%(1000*60))
/1000
);



document.getElementById("contador").innerHTML =

dias+" dias "+
horas+" horas "+
minutos+" minutos "+
segundos+" segundos";


},1000);
