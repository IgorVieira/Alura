

function calcularImc(){
    if(this.altura != 0){
        var imc = this.peso / (this.altura * this.altura)
        return imc

    }else{
        console.log('Não posso executar divisão por 0,\n porfavor digite um valor válido')
    }
}

var trsPacientes = document.getElementsByClassName("paciente");
const calcImc = () =>{
    for(var i = 0; i <= trsPacientes.length - 1; i++){

        var tdNome = trsPacientes[i].getElementsByClassName("info-nome")[0];
        var tdPeso = trsPacientes[i].getElementsByClassName("info-peso")[0];
        var tdAltura = trsPacientes[i].getElementsByClassName("info-altura")[0];
        var tdImc = trsPacientes[i].getElementsByClassName("info-imc")[0];

        var paciente = {
              nome : tdNome.textContent,
              peso : tdPeso.textContent,
              altura : tdAltura.textContent,
              pegarIMC : calcularImc
           };

        var imc = paciente.pegarIMC();
        tdImc.textContent = imc;

        console.log(imc);
    }
}
