let contador = 0;
let imagemAtual = 1;
const imagem = document.querySelector('.cat1')
const som = document.getElementById('som')

//const trocar = document.querySelector('.trocar')

function cliqueImagem() {
    if (event.target.id === 'gato1'){
    contador++;
    document.getElementById('contador').textContent = contador;

    if (contador === 30){
        trocarImagem();
    }
    }
};

imagem.addEventListener('click', function(){
    som.currentTime = 0;
    som.play();
});

document.getElementById('gato1').addEventListener('click', cliqueImagem);

function trocarImagem(){
    if (imagemAtual === 1) {
        imagem.src = './img/memecat.png';
        imagemAtual = 2;
    } else {
        imagem.src = './img/cat1.png'
        imagemAtual = 1;
    }
}

/*TENTATIVA DE FAZER O GATO
//const gato1 = document.querySelector('#gato1');
const trocar = document.querySelector('#trocar');
trocar.addEventListener('mousedown', function(){
    this.style.display = 'none';
});

trocar.addEventListener('mouseup', function(){
    this.style.display = 'visible';
});*/





