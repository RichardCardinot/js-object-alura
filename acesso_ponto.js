const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
};

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);
// O nome do cliente é Andre e essa pessoa tem 32 anos.

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}.`);
// Os 3 primeiros digitos do CPF são 112. 