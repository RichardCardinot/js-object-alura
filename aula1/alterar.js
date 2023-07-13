const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
};

console.log(pessoa.nome);
// Luma

console.log(pessoa.telefone);
// undefined

pessoa.telefone = "11 22330044"

console.log(pessoa.telefone);
// 11 22330044

pessoa.nome = "Luma Silva";

console.log(pessoa);
// {
//     nome: 'Luma Silva',
//     profissao: 'Engenheira',
//     telefone: '11 22330044'
// }

const novaPessoa = {
    nome: "Pedro",
};

pessoa = novaPessoa;