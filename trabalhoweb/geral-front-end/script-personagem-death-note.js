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
        case 'yagami':
            nomePersonagem.textContent = 'Yagami';
            descricaoPersonagem.textContent = 'Yagami é um personagem central em "Death Note". Sua inteligência aguçada e ambição o levam a descobrir e utilizar o Death Note, desencadeando eventos complexos. Acompanhe a jornada de Yagami enquanto ele explora os limites do poder e moralidade.';
            body.className = 'yagami';
            break;
        case 'L':
            nomePersonagem.textContent = 'L';
            descricaoPersonagem.textContent = 'L é um detetive altamente habilidoso em "Death Note". Sua abordagem metódica e raciocínio brilhante o tornam um adversário formidável para Yagami. Explore a mente complexa de L enquanto ele enfrenta desafios para capturar o misterioso portador do Death Note.';
            body.className = 'L';
            break;
        case 'kiyomi':
            nomePersonagem.textContent = 'Kiyomi';
            descricaoPersonagem.textContent = 'Kiyomi é uma personagem intrigante em "Death Note". Sua inteligência e influência desempenham um papel crucial em certos eventos da história. Acompanhe o impacto de Kiyomi na trama enquanto ela lida com as complexidades do Death Note.';
            body.className = 'kiyomi';
            break;
        case 'mello':
            nomePersonagem.textContent = 'Mello';
            descricaoPersonagem.textContent = 'Mello é um personagem determinado em "Death Note". Sua personalidade audaciosa e busca por sucesso o coloca em rota de colisão com outros personagens-chave. Explore as ações ousadas de Mello enquanto ele busca atingir seus objetivos.';
            body.className = 'mello';
            break;
        case 'misa':
            nomePersonagem.textContent = 'Misa';
            descricaoPersonagem.textContent = 'Misa é uma figura cativante em "Death Note". Sua devoção a Yagami e sua conexão com o Death Note adicionam camadas intrigantes à trama. Acompanhe o papel único de Misa na história enquanto ela navega por desafios e dilemas.';
            body.className = 'misa';
            break;
        case 'near':
            nomePersonagem.textContent = 'Near';
            descricaoPersonagem.textContent = 'Near é um sucessor de L em "Death Note". Sua inteligência excepcional e métodos distintos o colocam no centro dos eventos após a partida de L. Explore as habilidades analíticas de Near enquanto ele investiga casos complexos.';
            body.className = 'near';
            break;
        case 'rem':
            nomePersonagem.textContent = 'Rem';
            descricaoPersonagem.textContent = 'Rem é um Shinigami em "Death Note". Sua presença e decisões têm impacto significativo na história, especialmente em relação ao Death Note. Explore a natureza única de Rem e seu papel na trama.';
            body.className = 'rem';
            break;
        case 'ryuk':
            nomePersonagem.textContent = 'Ryuk';
            descricaoPersonagem.textContent = 'Ryuk é um Shinigami em "Death Note". Sua introdução do Death Note ao mundo humano desencadeia uma série de eventos. Acompanhe a natureza descontraída e observadora de Ryuk enquanto ele observa as consequências de suas ações.';
            body.className = 'ryuk';
            break;
        case 'soichiro':
            nomePersonagem.textContent = 'Soichiro';
            descricaoPersonagem.textContent = 'Soichiro é uma figura paterna importante em "Death Note". Sua posição como chefe da Força-Tarefa de Investigação traz complexidades emocionais à história. Explore o dilema de Soichiro enquanto ele lida com os desafios apresentados pelo Death Note.';
            body.className = 'soichiro';
            break;
        case 'teru':
            nomePersonagem.textContent = 'Teru';
            descricaoPersonagem.textContent = 'Teru é um personagem marcante em "Death Note". Sua personalidade e envolvimento nos eventos acrescentam elementos dramáticos à trama. Acompanhe a jornada de Teru enquanto ele enfrenta as implicações do Death Note.';
            body.className = 'teru';
            break;
    }
}
