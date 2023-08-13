var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

function modalExibirImagem(indiceImagem) {
    document.getElementById("myModal").style.display = "flex"
    document.getElementById("img01").src = document.querySelector(`#desenhodigitais img:nth-child(${indiceImagem})`).src
}

function modalExibirImagemColuna2(indiceImagem) {
    document.getElementById("myModal").style.display = "flex"
    document.getElementById("img01").src = document.querySelector(`#desenhodigitais2 img:nth-child(${indiceImagem})`).src
}

var span = document.getElementsByClassName("close")[0];

function Close() {
    document.getElementById("myModal").style.display = "none";
}