const filme = ['Vingadores', 'The Last of Us', 'Top Gun', 'The W. Dead', 'Senhor dos Aneis'];

const ordenarFilmes = filme.sort((a, b) => a.localeCompare(b));

console.log('Os filmes ordenados são: ', ordenarFilmes);