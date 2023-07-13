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

cliente.enderecos.push(
    {
        rua: "R. Joseph Ladder",
        numero: 404,
        apartamento: false,
        complemento: "casa 2",
    }
);

console.log(cliente.enderecos);
// [  
//     {
//       rua: 'R. Joseph Climber',
//       numero: 1337,
//       apartamento: true,
//       complemento: 'ap 934'
//     },
//     {
//       rua: 'R. Joseph Ladder',
//       numero: 404,
//       apartamento: false,
//       complemento: 'casa 2'
//     }
//   ]

console.log(cliente["enderecos"]);
// [  
//     {
//       rua: 'R. Joseph Climber',
//       numero: 1337,
//       apartamento: true,
//       complemento: 'ap 934'
//     },
//     {
//       rua: 'R. Joseph Ladder',
//       numero: 404,
//       apartamento: false,
//       complemento: 'casa 2'
//     }
//   ]

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);
// [
//     {
//       rua: 'R. Joseph Climber',
//       numero: 1337,
//       apartamento: true,
//       complemento: 'ap 934'
//     }
// ]