const cliente = {
    nome: "João", 
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};


cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    }
];

// Retorna um array com todas as chaves já iniciadas para o objeto "cliente"
const chavesDoObjeto = Object.keys(cliente); 

console.log(chavesDoObjeto); // [ 'nome', 'idade', 'email', 'telefone', 'enderecos' ]

// Exibe o erro se o array "chavesDoObjeto" não tiver o valor "enderecos"
if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado.")
}

// Documentação de objetos => https://cursos.alura.com.br/course/javascript-objetos/task/115776