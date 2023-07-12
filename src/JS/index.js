//aula final
/*OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
        passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
        passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        passo 2 - alterar a imagem do personagem grande
        passo 3 - alterar o nome do personagem grande
        passo 4 - alterar a descrição do personagem grande*/

        // OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
        // passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
    const personagens = document.querySelectorAll('.personagem');
    console.log(personagens);

    //passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
    personagens.forEach((personagem) => {
        personagem.addEventListener('mouseenter', () => {
            
            //passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele
            removerSelecaoDoPersonagem();

            personagem.classList.add('selecionado');

            //OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
            //passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
            alterarImagemPersonagemGrande(personagem);

            //passo 3 - alterar o nome do personagem grande
            alterarInformacoesPersonagem(personagem);

        })
    })

function alterarInformacoesPersonagem(personagem) {
    const tituloPersonagem = document.getElementById('nome-personagem');
    tituloPersonagem.innerText = personagem.getAttribute('data-name');
    //passo 4 - alterar a descrição do personagem grande
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarImagemPersonagemGrande(personagem) {
    const personagemGrande = document.querySelector('.personagem-grande');

    //passo 2 - alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    personagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
