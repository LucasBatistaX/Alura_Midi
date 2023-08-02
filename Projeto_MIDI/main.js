function tocaSom (seletorElemento) {

   const elemento = document.querySelector(seletorElemento);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
        
    }
    else{

        alert('Elemento não encontrado ou seletor inválido')
        //console.log('Elemento não encontrado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla'); // Esta linha nos criamos para não ficarmos usando o nome querySelectorAll e sim listaDeTeclas



//Para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }


    tecla.onkeydown = function (evento) {
        
        if (evento.code === 'Enter' || evento.code === 'Space' ) { 
            tecla.classList.add('ativa');
        }

    }
    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
