let filme = [];
//filme = ['Vingadores', 'The Last of Us', 'Top Gun', 'The W. Dead', 'Senhor dos Aneis'];

for (let Teste = 0; Teste < 5; Teste++) {
    let nomeFilmes = prompt('Digite um filme: ');
    filme.push(nomeFilmes);
};

console.log('Os filmes escolhidos são: ');

for (let i = 0; i < filme.length; i++) {
    console.log(filme[i]);
};

