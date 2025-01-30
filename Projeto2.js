//Listas vazias que seram preenchidas
let listaFilmes = [];
let FilmesMarcados = [];

//Menu de opções
meuFilmes:
while (true){
    const meuFilmes =`
    Selecione uma opção:
    1 - Adicionar Filme:
    2 - Ordenar a lista de Filmes:
    3 - Pesquisar Filme:
    4 - Exibir listas de Filmes:
    5 - Marcar Filme Assistidos:
    6 - Exibir a Lista de Filmes Assistidos
    7 - Remover Filme:
    8 - Apagar Toda a Lista de Filmes:
    0 - Encerrar Programa:
    : `

    const opcaoFilmes = parseInt(prompt(meuFilmes));
    switch(opcaoFilmes){
        case 1:
            add();
            break;
        case 2:
            ordenacao();
            break;
        case 3:
            pesquisar();
            break;
        case 4:
            exibir();
            break;
        case 5:
            marcar();
            break;
        case 6:
            marcados();
            break;
        case 7:
            remover();
            break;
        case 8:
            apagar();
            break;
        case 0:
            break meuFilmes;
        default:
            console.log('Opção inválida.')
    };
};

//Adicionar filmes
function add(){
    let Filme = prompt('Informe um Filme para ser adicionado: ');
    Filme = Filme.toLocaleUpperCase();
    listaFilmes.push(Filme);
};

//Ordenar filmes em ordem alfabetica
function ordenacao(){
    const Filme = listaFilmes.sort((a, b) => a.localeCompare(b));
    console.log(`Lista de Filmes ordenada: ${Filme}`);
};

//Pesquisar um filme na lista
function pesquisar(){
    let Filme = prompt('Informe um Filme para ser pesquisado: ');
    Filme = Filme.toLocaleUpperCase();
    const index = listaFilmes.indexOf(Filme);
    if (index >= 0){
        console.log('O Filme se encontra na lista: ', Filme);
    }else{
        console.log('O Filme informado não está na lista.');
    };
};

//Exibir a lista de filmes
function exibir(){
    for(const Filme of listaFilmes){
        console.log('Os Fimes da lista são: ', Filme);
    };
};

//Exibir os filmes já assistidos
function marcados(){
    console.log('Os Filmes que foram marcados como assistidos são: ', FilmesMarcados);
};

//Marcar os filmes já assistidos
function marcar(){
    let Filme = prompt('Digite o filme que deseja marcar como assistido: ');
    Filme = Filme.toLocaleUpperCase();
    FilmesMarcados = Filme;
    console.log('Filme adicionado a lista de assistidos.')
};

//Remover os filmes da lista
function remover(){
    let Filme = prompt('Informe o Filme que deseja remover da lista: ');
    Filme = Filme.toLocaleUpperCase();
    const index = listaFilmes.indexOf(Filme);
    if (index >= 0){
        listaFilmes.splice(index, 1);
        console.log(`O Filme informado foi removido da lista com sucesso:
            ${Filme}`);
    }else{
        console.log('O Filme informado não está na lista: ', Filme);
    };
};

//Apaga toda a lista de filmes
function apagar(){
    const lFilmes = [];
    listaFilmes = lFilmes;
    console.log('Lista de Filmes apagada: ', listaFilmes);
};