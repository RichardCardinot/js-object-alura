const objPersonagem = 
    {
        nome: "Gandalf",
        classe: "mago",
        nivel: "20"
    };

console.log(objPersonagem.nome);
// Gandalf

// ================================================================================

// A variável objPersonagem2 não fez uma cópia do objeto original, 
// apenas serviu como referência para o objeto original objPersonagem.
const objPersonagem2 = objPersonagem;
objPersonagem2.nome = "Mago Gandalf";

console.log(objPersonagem2.nome) ;
// Mago Gandalf

console.log(objPersonagem.nome);
// Mago Gandalf

// ================================================================================

// O método Object.create() cria um novo objeto utilizando como protótipo 
// o objeto passado via parâmetro. Dessa forma, objPersonagem2 é uma instância 
// diferente de objPersonagem e pode ser trabalhada de forma independente.
const objPersonagem3 = Object.create(objPersonagem);
objPersonagem3.nome = "Gandalf, o Cinzento";
   
console.log(objPersonagem3.nome);
// Gandalf, o Cinzento

console.log(objPersonagem2.nome) ;
// Mago Gandalf

console.log(objPersonagem.nome);
// Mago Gandalf