const produto = {
    nome: 'Whiskys Old Par',
    preco: 200,
    quantidade: 14,
    valorTotal: function valor () {
       this.preco * this.quantidade
 };
};
console.log('Valor Total do estoque ' + produto.valorTotal);

