var idade = 20
var  nome = "Igor Vieira"
var estagiario = true
var ehIgual = (2==2)
var ehDiferente = (2==4)
var ehDiferente2 = (2 != 5)
var ehDiferente3 = (2 != 2)
console.log(typeof idade) //number
console.log(typeof nome) //string
console.log(typeof estagiario) //true
console.log(ehIgual) //true
console.log(ehDiferente) //false
console.log(ehDiferente2) //true
console.log(ehDiferente3) //false





// Exercicio 1

var peso = 100
var altura = 0

const imc = (altura, peso) =>{
    if(altura != 0 ){
        var imc = peso/(altura * altura)
    }else{
        console.log('Não posso fazer divisão por 0!')
    }
    return console.log(imc)
}


imc(altura, peso)


//Exercicio 2


var salarioMensal = 1500
var tipoDoFuncionario = "clt"
const  salarioFuncionario = (salario, funcionario) =>{
    if(funcionario == 'estagiario' || funcionario == 'clt'){
        if (salario > 0 && salario < 1000 ) {
            var salarioAnual = 13*salario+salario*0.05
        }else if(salario < 2000){
            var salarioAnual = 13*salario+salario*0.10
        }else{
            var salarioAnual = 13*salario+salario*0.15
        }
}
    return console.log("O funcionario tipo"+tipoDoFuncionario+" tem um salário de:"+salarioAnual)

}



salarioFuncionario(salarioMensal, tipoDoFuncionario)
