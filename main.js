function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);//para sortear o numero minimo e maximo
}


function apertar(){
    var valorminimo = parseInt($("#valorminimo").val());
    var valormaximo = parseInt($("#valormaximo").val());
    if (valorminimo < valormaximo){
        valoraleatoriogerado = getRandomArbitrary(valorminimo, valormaximo);
        $("#valordosorteio").text(valoraleatoriogerado)
        console.log(valoraleatoriogerado);
    } 
    if(valorminimo == valormaximo){
        $("#valordosorteio").text("erro")
        alert("valor minimo é igual ao valor maximo")
    }


    if(valorminimo > valormaximo) {
        $("#valordosorteio").text('erro')
        alert("valor minimo é maior que valor maximo")
        
    }

    if(valormaximo >= 7000000000000000000000){
        $("#valordosorteio").text('erro')
        alert("Este valor é muito grande, por favor insira um menor")
    }

    

};


function resetar(){
    $("#valorminimo").val("")
    $("#valormaximo").val("")
    $("#valordosorteio").text("")

}


//$('#tempo').text(tempoJogo);
