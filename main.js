function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);//para sortear o numero minimo e maximo
}


function apertar(){
    var valorminimo = parseInt($("#valorminimo").val());
    var valormaximo = parseInt($("#valormaximo").val());
    valoraleatoriogerado = getRandomArbitrary(valorminimo, valormaximo);
    $("#valordosorteio").text(valoraleatoriogerado)
    console.log(valoraleatoriogerado);

};


function resetar(){
    $("#valorminimo").val("")
    $("#valormaximo").val("")
    $("#valordosorteio").text("")

}


//$('#tempo').text(tempoJogo);
