//filme = ['Vingadores', 'The Last of Us', 'Top Gun', 'The W. Dead', 'Senhor dos Aneis'];
const filmes = [
    {Opcao: 'Vingadores', recomendacao: 'nao'},
    {Opcao: 'The Last of Us', recomendacao: 'sim'},
    {Opcao:'Top Gun', recomendacao: 'nao'},
    {Opcao:'The W. Dead', recomendacao: 'sim'},
    {Opcao:'Senhor dos Aneis', recomendacao: 'nao'},
];
const filmesRecomendados = filmes.filter(filme => filme.recomendacao === 'sim');

console.log('Os filmes recomendados são: ',filmesRecomendados);