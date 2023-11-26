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
        case 'saitama':
            nomePersonagem.textContent = 'Saitama';
            descricaoPersonagem.textContent = 'Saitama, o herói mais poderoso em "One Punch Man", é conhecido por sua força avassaladora e por derrotar qualquer adversário com um único soco. Apesar de sua incrível habilidade, Saitama lida com o tédio resultante da falta de desafios verdadeiros. Mesmo assim, ele permanece como um ícone de poder inigualável.';
            body.className = 'saitama';
            break;
        case 'genos':
            nomePersonagem.textContent = 'Genos';
            descricaoPersonagem.textContent = 'Genos, o ciborgue discípulo de Saitama em "One Punch Man", busca vingança contra o monstro que destruiu sua vila e causou danos graves a ele. Com habilidades tecnológicas avançadas, Genos é um aliado valioso na luta contra ameaças.';
            body.className = 'genos';
            break;
        case 'bang':
            nomePersonagem.textContent = 'Bang';
            descricaoPersonagem.textContent = 'Bang, também conhecido como Silver Fang, é um mestre em artes marciais e um herói veterano em "One Punch Man". Sua habilidade excepcional em combate o torna uma figura respeitada entre os heróis.';
            body.className = 'bang';
            break;
        case 'boros':
            nomePersonagem.textContent = 'Boros';
            descricaoPersonagem.textContent = 'Boros, o líder dos Dominadores da Terra, é um alienígena poderoso e habilidoso em "One Punch Man". Sua busca por desafios leva-o a confrontar Saitama em uma batalha épica.';
            body.className = 'boros';
            break;
        case 'fubuki':
            nomePersonagem.textContent = 'Fubuki';
            descricaoPersonagem.textContent = 'Fubuki, também conhecida como Blizzard do Inferno, é a líder da Tropa do Esquadrão Blizzard em "One Punch Man". Apesar de não possuir habilidades de combate impressionantes, sua habilidade em liderança e estratégia é notável.';
            body.className = 'fubuki';
            break;
        case 'garou':
            nomePersonagem.textContent = 'Garou';
            descricaoPersonagem.textContent = 'Garou, o Caçador de Heróis, é um personagem complexo em "One Punch Man". Inicialmente um humano comum, Garou passa por transformações significativas e busca desafios cada vez mais poderosos.';
            body.className = 'garou';
            break;
        case 'king':
            nomePersonagem.textContent = 'King';
            descricaoPersonagem.textContent = 'King, também conhecido como o Homem mais Forte da Terra, é um herói de classe S em "One Punch Man". Apesar de sua reputação, King não possui habilidades de combate, mas sua presença impõe respeito.';
            body.className = 'king';
            break;
        case 'mumen':
            nomePersonagem.textContent = 'Mumen Rider';
            descricaoPersonagem.textContent = 'Mumen Rider, um herói classe C em "One Punch Man", é conhecido por sua determinação e coragem. Mesmo sem habilidades sobre-humanas, Mumen Rider enfrenta desafios com pura força de vontade.';
            body.className = 'mumen';
            break;
        case 'sonic':
            nomePersonagem.textContent = 'Speed-o\'-Sound Sonic';
            descricaoPersonagem.textContent = 'Speed-o\'-Sound Sonic, um ninja mercenário em "One Punch Man", é conhecido por sua velocidade incrível e rivalidade com Saitama. Apesar de suas habilidades, Sonic constantemente busca superar seu adversário.';
            body.className = 'sonic';
            break;
        case 'tatsumaki':
            nomePersonagem.textContent = 'Tatsumaki';
            descricaoPersonagem.textContent = 'Tatsumaki, também conhecida como Tornado do Terror, é uma heróina classe S em "One Punch Man" e é reconhecida como uma das mais poderosas psíquicas. Sua habilidade em manipular objetos com telecinese é impressionante.';
            body.className = 'tatsumaki';
            break;
    }
}
