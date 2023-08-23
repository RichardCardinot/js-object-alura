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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);
// Ligando para 1155555550
// Ligando para 1144444440

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0], // ... é o spread operator
};

console.log(encomenda);

// to spread == espalhar