

var button = document.getElementById('calcula-imcs')
button.addEventListener('click', ()=>{
    var trsPacientes = document.getElementsByClassName("paciente");
    percorreArray(trsPacientes, (pacienteTr) =>{
        var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
        var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
        var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
        var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];

        var paciente = {
              nome : tdNome.textContent,
              peso : tdPeso.textContent,
              altura : tdAltura.textContent,
              pegarIMC(){
                  if(this.altura != 0){
                      var imc = this.peso / (this.altura * this.altura)
                      return imc

                  }else{
                      console.log('Não posso executar divisão por 0,\n porfavor digite um valor válido')
                  }
              }
           };

        var imc = paciente.pegarIMC();
        tdImc.textContent = imc;

        console.log(imc);
    })
})
