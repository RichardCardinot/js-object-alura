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

//   Armazena na let "chave" todos as chaves existentes dentro ("in") do objeto cliente (Que são: nome, idade, email, telefone e enderecos)
for (let chave in cliente) {
    let tipo = typeof cliente[chave];  // You can use the typeof operator to find the data type of a JavaScript variable. In this case, the type is object.
    if (tipo !== "object" && tipo != "function") {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}.`);
    }
}

// Nas aulas anteriores aprendemos que o JavaScript traz uma série de métodos 
// próprios que nos ajudam a trabalhar com objetos. Um exemplo disso é o método 
// for … In que permite a iteração sobre as propriedades de um objeto como em um array.