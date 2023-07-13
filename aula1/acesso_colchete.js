const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
};

console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`);
// O nome do cliente é Andre e essa pessoa tem 32 anos.

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}.`);
});

// A chave nome tem valor Andre.
// A chave idade tem valor 32.
// A chave cpf tem valor 1122233345.
// A chave email tem valor andre@dominio.com.
// A chave altura tem valor undefined.