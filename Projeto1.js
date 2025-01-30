//Lista vazia que sera preenchida
let listaCompras = [];

//Menu de opções
menu:
while (true) {
    const menu = `
    Selecione uma opção: 
    1 - Adicionar um item na lista:
    2 - Remover um item na lista:
    3 - Pesquisar um item na lista:
    4 - Ordenar os itens na lista:
    5 - Exibir lista:
    6 - Limpar lista:
    0 - Encerrar programa:
    : `
    const opcao = parseInt(prompt(menu));
    switch (opcao) {
        case 1:
            add();
           break;
        case 2:
            remover();
            break;
        case 3:
            pesquisar();
            break;
        case 4:
            ordenacao();
            break;
        case 5:
            exibir();
            break;
        case 6:
            limpar();
            break;
        case 0:
            break menu;
        default:
            console.log('Opção inválida.');
    };
};

//Adiciona um item a lista
function add(){
    let item = prompt('Informe o item que deseja adicionar: ');
    item = item.toLocaleUpperCase();
    listaCompras.push(item);
};

//Remove um item da lista
function remover(){
    let item = prompt('Informe o item que deseja remover da lista: ');
    item = item.toLocaleUpperCase();
    const index = listaCompras.indexOf(item);
    if (index >= 0){
        listaCompras.splice(index, 1);
        console.log(`Item removido da lista: 
            ${listaCompras}`);
    } else {
        console.log(`O item ${item}, não está na lista.`);
    };
};

//Pesquisa um item da lista
function pesquisar(){
    let item = prompt('Informe o item que deseja pesquisar: ');
    item = item.toLocaleUpperCase();
    const index =listaCompras.indexOf(item);
    if (index >= 0){
        console.log(`O item perquisado é: ${item}`);
    }else {
        console.log(`O item pesquisado não está na lista.`);
    };
};

//Ordena a lista em ordem alfabetica
function ordenacao(){   
    const itens = listaCompras.sort((a, b) => a.localeCompare(b));
    console.log('Itens ordenador: ', itens);
};

//Exibe um item da lista
function exibir(){
    for (const item of listaCompras){
        console.log(`Os itens são: `, item);
    };
};

//Apaga toda a lista de compras
function limpar(){
    const itens = [];
    listaCompras = itens;
    console.log(listaCompras);
};
