// ===============================
// CONTAGEM REGRESSIVA
// ===============================

const dataEvento = new Date("August 1, 2026 17:00:00").getTime();


function atualizarContador(){

    const agora = new Date().getTime();

    const distancia = dataEvento - agora;


    const contador = document.getElementById("contador");


    if(!contador){
        return;
    }


    if(distancia <= 0){

        contador.innerHTML =
        "💍 O grande dia chegou!";

        return;

    }



    const dias = Math.floor(
        distancia / (1000 * 60 * 60 * 24)
    );


    const horas = Math.floor(
        (distancia % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );


    const minutos = Math.floor(
        (distancia % (1000 * 60 * 60)) /
        (1000 * 60)
    );


    const segundos = Math.floor(
        (distancia % (1000 * 60)) /
        1000
    );



    contador.innerHTML =

    `
    <div>
    ${dias} Dias
    </div>

    <div>
    ${horas} Horas
    </div>

    <div>
    ${minutos} Minutos
    </div>

    <div>
    ${segundos} Segundos
    </div>
    `;


}



setInterval(atualizarContador,1000);

atualizarContador();





// ===============================
// GALERIA AUTOMÁTICA 57 FOTOS
// ===============================


const galeria = document.getElementById("galeria");



if(galeria){


for(let i = 1; i <= 57; i++){


    const img = document.createElement("img");


    img.src = "Emanuel/" + i + ".jpg";


    img.alt = "Momento " + i;


    img.loading = "lazy";



    img.onerror = function(){

        this.src = "Emanuel/" + i + ".jpeg";

    };



    img.onclick = function(){

        abrirImagem(this.src);

    };



    galeria.appendChild(img);


}


}






// ===============================
// VISUALIZADOR DAS FOTOS
// ===============================


function abrirImagem(src){


const fundo = document.createElement("div");


fundo.className = "visualizador";



const imagem = document.createElement("img");


imagem.src = src;



fundo.appendChild(imagem);



document.body.appendChild(fundo);



fundo.onclick = function(){

    fundo.remove();

};


}







// ===============================
// MÚSICA AUTOMÁTICA
// ===============================


const musica = document.getElementById("musica");

const botaoSom = document.getElementById("botaoSom");



if(musica && botaoSom){



    musica.volume = 0.5;


    musica.play()
    .catch(function(){

        console.log("Autoplay bloqueado pelo navegador");

    });



    botaoSom.onclick = function(){



        if(musica.muted){


            musica.muted = false;


            botaoSom.innerHTML =
            "🔊 Desligar Som";


        }else{


            musica.muted = true;


            botaoSom.innerHTML =
            "🔇 Ativar Som";


        }



    };



}







// ===============================
// ANIMAÇÃO DAS SECÇÕES
// ===============================


const observer = new IntersectionObserver(function(entries){


entries.forEach(function(entry){


if(entry.isIntersecting){


entry.target.style.opacity="1";


entry.target.style.transform="translateY(0)";


}


});


});




document.querySelectorAll("section").forEach(function(sec){


sec.style.opacity="0";


sec.style.transform="translateY(40px)";


sec.style.transition="1s";


observer.observe(sec);



});
