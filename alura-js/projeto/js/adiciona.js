var botao = document.querySelector("#adicionar-paciente")
botao.addEventListener('click', (event)=>{

    event.preventDefault()

    var campoNome = document.querySelector('#campo-nome')
    var campoPeso = document.querySelector('#campo-peso')
    var campoAltura = document.querySelector('#campo-altura')

    var novoPaciente = "<tr class='paciente'>" +
                            "<td class='info-nome'>" +campoNome.value+ "</td>"+
                            "<td class='info-peso'>" +campoPeso.value+ "</td>"+
                            "<td class='info-altura'>" +campoPeso.value+ "</td>"+
                            "<td class='info-imc'></td>"+
                      "</tr>"

 var todosPacientes = document.querySelector('table')
 todosPacientes.innerHTML += novoPaciente;

 campoNome.value = ''
 campoPeso.value = ''
 campoAltura.value = ''


})
