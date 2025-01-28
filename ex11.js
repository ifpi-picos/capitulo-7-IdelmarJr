let filmesDousuario = [];
let comentarios = [];
//filme = ['Vingadores', 'The Last of Us', 'Top Gun', 'The W. Dead', 'Senhor dos Aneis'];

for (let i = 0; i < 5; i++){
    let filme = prompt('Digite um filme: ');
    let comentario = prompt('Digite um comentario: ');
    filmesDousuario.push(filme);
    comentarios.push(comentario);
};

filmesDousuario.forEach((filme, index) =>
    console.log(`O filme escolhido é: ${filmesDousuario[index]}, e sua critica é: ${comentarios[index]}`)
);