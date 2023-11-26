function trocarPersonagem(personagem) {
    var imagemAtual = document.querySelector('.direita img.ativo');
    if (imagemAtual) {
        imagemAtual.classList.remove('ativo');
    }

    var novaImagem = document.getElementById(personagem);
    novaImagem.classList.add('ativo');

    var nomePersonagem = document.querySelector('h1');
    var descricaoPersonagem = document.querySelector('p');
    var body = document.body;

    switch (personagem) {
        case 'mikey':
            nomePersonagem.textContent = 'Mikey';
            descricaoPersonagem.textContent = 'Mikey é o líder do Toman em "Tokyo Revengers". Sua personalidade carismática e comportamento imprevisível o tornam uma figura central no enredo. Acompanhe as decisões impactantes de Mikey enquanto ele lidera sua gangue e enfrenta desafios.';
            body.className = 'mikey';
            break;
        case 'baji':
            nomePersonagem.textContent = 'Baji';
            descricaoPersonagem.textContent = 'Baji é um membro proeminente do Toman em "Tokyo Revengers". Sua história complexa e lealdade à gangue adicionam camadas emocionais à trama. Explore as motivações de Baji enquanto ele navega por alianças e rivalidades.';
            body.className = 'baji';
            break;
        case 'chifuyu':
            nomePersonagem.textContent = 'Chifuyu';
            descricaoPersonagem.textContent = 'Chifuyu é um personagem cativante em "Tokyo Revengers". Sua amizade próxima com o protagonista e sua jornada pessoal contribuem para a narrativa. Acompanhe as experiências de Chifuyu enquanto ele enfrenta desafios e busca um futuro melhor.';
            body.className = 'chifuyu';
            break;
        case 'draken':
            nomePersonagem.textContent = 'Draken';
            descricaoPersonagem.textContent = 'Draken é uma figura respeitada no Toman em "Tokyo Revengers". Sua postura calma e força notável o destacam entre os membros da gangue. Explore a dinâmica de Draken enquanto ele desempenha um papel crucial nas atividades do Toman.';
            body.className = 'draken';
            break;
        case 'hina':
            nomePersonagem.textContent = 'Hina';
            descricaoPersonagem.textContent = 'Hina é uma personagem central em "Tokyo Revengers". Sua relação com o protagonista e sua influência no enredo contribuem para o desenvolvimento da história. Acompanhe as escolhas difíceis de Hina enquanto ela enfrenta os desafios do mundo dos delinquentes.';
            body.className = 'hina';
            break;
        case 'kisaki':
            nomePersonagem.textContent = 'Kisaki';
            descricaoPersonagem.textContent = 'Kisaki é um antagonista em "Tokyo Revengers". Sua presença sinistra e manipulações têm um impacto significativo na trama. Explore os planos e motivações obscuras de Kisaki enquanto ele se torna uma força perturbadora no enredo.';
            body.className = 'kisaki';
            break;
        case 'mitsuya':
            nomePersonagem.textContent = 'Mitsuya';
            descricaoPersonagem.textContent = 'Mitsuya é um membro leal do Toman em "Tokyo Revengers". Sua devoção à gangue e suas habilidades únicas o destacam entre os personagens. Acompanhe as contribuições significativas de Mitsuya para o Toman e a história geral.';
            body.className = 'mitsuya';
            break;
        case 'naoto':
            nomePersonagem.textContent = 'Naoto';
            descricaoPersonagem.textContent = 'Naoto é um personagem envolvente em "Tokyo Revengers". Sua presença e papel na trama acrescentam mistério e complexidade. Explore as conexões de Naoto com outros personagens e como ele influencia os eventos do enredo.';
            body.className = 'naoto';
            break;
        case 'ran':
            nomePersonagem.textContent = 'Ran';
            descricaoPersonagem.textContent = 'Ran é um membro do Toman em "Tokyo Revengers". Sua lealdade à gangue e interações com outros personagens contribuem para o tecido emocional da história. Acompanhe as experiências e escolhas de Ran enquanto ele enfrenta desafios junto com o Toman.';
            body.className = 'ran';
            break;
        case 'takemichi':
            nomePersonagem.textContent = 'Takemichi';
            descricaoPersonagem.textContent = 'Takemichi é o protagonista de "Tokyo Revengers". Sua jornada no tempo e esforços para mudar o destino da gangue Toman formam a espinha dorsal da história. Acompanhe as lutas e determinação de Takemichi enquanto ele enfrenta desafios perigosos.';
            body.className = 'takemichi';
            break;
    }
}
