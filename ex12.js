let filmesDousuario = [];
let comentarios = [];
//filme = ['Vingadores', 'The Last of Us', 'Top Gun', 'The W. Dead', 'Senhor dos Aneis'];

for (let i = 0; i < 2; i++){
    let filme = prompt('Digite um filme: ');
    let comentario = prompt('Digite um comentario: ');
    filmesDousuario.push(filme);
    comentarios.push(comentario);
};

for (const elementosEscolhidos of filmesDousuario) {
    console.log(`O filme escolhido é: ${elementosEscolhidos}`);
};

for (const Criticas of comentarios){
    console.log(`E sua critica seguindo a sequencia dos filmes escolhidos é: ${Criticas}`)    
};