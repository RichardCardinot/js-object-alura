const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   };

// => Com operador de ponto ".":
delete objPersonagem.aliado;

console.log(objPersonagem.aliado); 
//undefined

// => Passando uma string entre colchetes [ ]:
delete objPersonagem["status"];

console.log(objPersonagem.status) 
//undefined

console.log(objPersonagem);
// { nome: 'Gandalf', classe: 'mago', nivel: '20' }

// ** Importante! Veja que o delete remove do objeto o valor da propriedade, assim como a chave. **