// ===============================
// CONTAGEM REGRESSIVA
// ===============================

const dataEvento = new Date("August 1, 2026 17:00:00").getTime();


function atualizarContador(){

    const agora = new Date().getTime();

    const distancia = dataEvento - agora;


    if(distancia < 0){

        document.getElementById("contador").innerHTML =
        "💍 O grande dia chegou!";

        return;

    }


    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

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


    document.getElementById("contador").innerHTML =

    dias + " Dias<br>" +
    horas + " Horas<br>" +
    minutos + " Minutos<br>" +
    segundos + " Segundos";

}


setInterval(atualizarContador,1000);

atualizarContador();




// ===============================
// GALERIA AUTOMÁTICA
// ===============================

const galeria = document.getElementById("galeria");


for(let i = 1; i <= 57; i++){


    const img = document.createElement("img");


    img.src = "Emanuel/" + i + ".jpg";


    img.alt = "Foto " + i;


    img.loading = "lazy";


    img.onclick = function(){

        abrirImagem(img.src);

    };


    galeria.appendChild(img);


}




// ===============================
// VISUALIZADOR DAS FOTOS
// ===============================

function abrirImagem(src){


    const fundo = document.createElement("div");


    fundo.style.position = "fixed";
    fundo.style.left = "0";
    fundo.style.top = "0";
    fundo.style.width = "100%";
    fundo.style.height = "100%";
    fundo.style.background = "rgba(0,0,0,.9)";
    fundo.style.display = "flex";
    fundo.style.justifyContent = "center";
    fundo.style.alignItems = "center";
    fundo.style.zIndex = "99999";
    fundo.style.cursor = "pointer";


    const imagem = document.createElement("img");


    imagem.src = src;


    imagem.style.maxWidth = "92%";
    imagem.style.maxHeight = "92%";
    imagem.style.borderRadius = "12px";
    imagem.style.boxShadow = "0 0 40px rgba(255,255,255,.25)";


    fundo.appendChild(imagem);


    document.body.appendChild(fundo);



    fundo.onclick = function(){

        fundo.remove();

    };


}




// ===============================
// ANIMAÇÃO AO DESCER A PÁGINA
// ===============================

const observer = new IntersectionObserver(function(entries){


    entries.forEach(function(entry){


        if(entry.isIntersecting){


            entry.target.style.opacity = "1";


            entry.target.style.transform = "translateY(0px)";


        }


    });


});



document.querySelectorAll("section").forEach(function(sec){


    sec.style.opacity = "0";


    sec.style.transform = "translateY(50px)";


    sec.style.transition = "1s";


    observer.observe(sec);


});
