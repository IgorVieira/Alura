var titulo =  document.getElementById('titulo')
var conteudo = titulo.textContent
console.log(conteudo)

var peso =  document.getElementById('peso-1').textContent
var altura =  document.getElementById('altura-1').textContent
var nome = document.getElementById('nome-1').textContent
var toDoImc = document.getElementById('imc-1')

var paciente = {
    peso : peso,
    altura: altura
}


const calcImc = (altura, peso) =>{

    if(paciente.altura != 0){
        var imc = paciente.peso / (paciente.altura * paciente.altura)
        toDoImc.textContent = imc
    }else{
        toDoImc.textContent = 'Não posso executar divisão por 0,\n porfavor digite um valor válido'
    }

    return console.log(toDoImc)
}

calcImc(altura, peso)
