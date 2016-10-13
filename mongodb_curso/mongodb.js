//Insert de documentos

db.createCollection("alunos")
var aluno_insert = {
    "nome":"Igor Vieira",
    "data_nascimento" : new Date(1995,05,26),
    "curso":{
        "nome":"Gestão de TI"
    },
    "notas":[10.0,9.0,9.5],
    "habilidades":[
        {
            "nome":"inglês",
            "nível":"avançado"
        },
        {
            "nome":"Jiu-Jitsu",
            "nível":"faixa-azul"
        }
    ]
}




var aluno_paulo = {
    "nome":"Paulo",
    "data_nascimento": new Date(1979,12,31),
    "notas":[10,9,7],
    "habilidades":[
        {
            "nome":"Inglês",
            "nível":"Avançado"
        },
        {
            "nome":"Francês",
            "nível":"Avançado"
        }
    ]
}


var aluna_daniela = {
    "nome":"Daniela",
    "data_nascimento": new Date(1995,07,17),
    "notas":[10,9,7],
    "habilidades":[
        {
            "nome":"Moda"
        },
        {
            "nome":"Alemão",
            "nível":'Basico'
        }
    ]
}

db.alunos.insert(aluno_paulo)
db.alunos.insert(aluno_daniela)


// Find $or and $in

db.alunos.find({
    $or:[
        {"habilidades.nome":"Jiu-Jitsu"}
        {"curso.nome":"Gestão de TI"}
    ]
})


db.alunos.find({
    "habilidades.nome":{
        $in:["Jiu-Jitsu"]
    }
})


db.alunos.find( {
    "curso.nome": {
        $in: ["Gestão de TI"]
        }
   })

db.alunos.find({
   "nome":"Igor Vieira",
   "data_nascimento" : new Date(1995,05,26)

})


// Update $set and $push
db.alunos.update(
    {"curso.nome" : "Gestão da TI"},
    {

        "nome" : "Gestão de TI"
    }
)


db.alunos.update(
    {"curso.nome" : "Gestão de TI"},
    {
        $set : {
            "curso.nome" : "Gestão da TI"
        }
    }
)
db.alunos.find({"nome":"Igor Vieira"})




db.alunos.update(
   {"_id" : ObjectId("57fef4c164f1e70f03f1cc51")},
   {
       $set : {
           "notas":[10,9,8]
       }
   }
)


db.alunos.update(
   {"_id" : ObjectId("57fef4c164f1e70f03f1cc51")},
   {
       $push : {
           "notas":8.2
       }
   }
)


//Ordenando e limitando dados

db.alunos.insert({
    nome : "André",
    data_nascimento : new Date(1991,01,25),
    curso : {
        nome : "Matemática"
        },
        notas : [ 7, 5, 9, 4.5 ]
})

db.alunos.insert({
    nome : "Lúcia",
    data_nascimento : new Date(1984,07,17),
    curso : {
        nome : "Matemática"
        },
        notas : [ 8, 9.5,  10 ]
})
db.alunos.findOne({
    "notas": { $gt : 5}
})

db.alunos.find().sort({"nome" : 1}) //a ordenar os elementos

db.alunos.find().sort({"nome" : -1}) //os nomes em ordem alfabética

db.alunos.find().sort({"nome" : 1}).limit(3) //limitando por 3

db.alunos.findOne({"curso.nome":"Sistemas de informação"})


// Ultima parte


db.alunos.update(
{ "_id" : ObjectId("56cb0139b6d75ec12f75d3b6") },
{
    $set : {
    localizacao : {
        endereco : "Rua Vergueiro, 3185",
        cidade : "São Paulo",
        coordinates : [-23.588213, -46.632356]
        type : "Point"
        }
    }
}
)
db.alunos.createIndex({"localização": "2dsphere"})



db.aluno.aggregate([{
    $geoNear:{
        "near": {
            "coordinates":[-23.588055, -46.632403],
            "type":"Point"
},
"distanceField": "distancia.calculada",
"spherical": true
}
}])


db.alunos.aggregate([{
    "$geoNear": {
      "near": {
        "coordinates":[-23.588055, -46.632403],
        "type":"Point"
      },
    "distanceField": "distancia.calculada",
    "spherical": true
    }
  },
  { $skip: 1 }
]);
//import

mongoimport -c alunos --jsonArray < alunos.json
