function entradaDeFilme () {
    let filme = prompt('Informe o nome de um filme: ');
    return filme;
};

function localizar () {
    let filme = entradaDeFilme();

    filme = filme.toLocaleUpperCase();
    const filmes = [
        {Opcao: 'VINGADORES'},
        {Opcao: 'THE LAST OF US'},
        {Opcao:'TOP GUN'},
        {Opcao:'THE WALKING DEAD'},
        {Opcao:'SENHOR DOS ANEIS'},
    ];

    const localizado = filmes.some(elemento => elemento.Opcao === filme);

    if (localizado) {
        console.log('Filme encontrado na lista: ', filme);
    } else {
        console.log('Filme não esta na lista!');
    };
};

localizar()
