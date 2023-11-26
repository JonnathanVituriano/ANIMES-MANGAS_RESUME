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
        case 'jonathan':
            nomePersonagem.textContent = 'Jonathan Joestar';
            descricaoPersonagem.textContent = 'Jonathan Joestar, o protagonista da Parte 1: Phantom Blood de "Jojo\'s Bizarre Adventure", é um nobre gentil e determinado. Sua vida toma um rumo dramático quando ele enfrenta o vilão Dio Brando em uma batalha de gerações, marcando o início da longa jornada da família Joestar contra forças sobrenaturais.';
            body.className = 'jonathan';
            break;
        case 'dio':
            nomePersonagem.textContent = 'Dio Brando';
            descricaoPersonagem.textContent = 'Dio Brando, o antagonista da Parte 1: Phantom Blood de "Jojo\'s Bizarre Adventure", é um vilão ambicioso e astuto. Sua busca pelo poder e imortalidade desencadeia eventos que afetam as gerações futuras dos Joestars, tornando-o uma figura central e duradoura na série.';
            body.className = 'dio';
            break;
        case 'bruno':
            nomePersonagem.textContent = 'Bruno Bucciarati';
            descricaoPersonagem.textContent = 'Bruno Bucciarati, um dos protagonistas da Parte 5: Golden Wind de "Jojo\'s Bizarre Adventure", é um membro dedicado e carismático da gangue Passione. Sua jornada envolve proteger o herdeiro Giorno Giovanna e enfrentar ameaças poderosas dentro do mundo do crime organizado.';
            body.className = 'bruno';
            break;
        case 'giorno':
            nomePersonagem.textContent = 'Giorno Giovanna';
            descricaoPersonagem.textContent = 'Giorno Giovanna, o protagonista da Parte 5: Golden Wind de "Jojo\'s Bizarre Adventure", é um jovem com o desejo de se tornar um "Gang-Star" e purificar a máfia de dentro. Com uma herança única, Giorno utiliza seus poderes Stand para enfrentar desafios complexos.';
            body.className = 'giorno';
            break;
        case 'johnny':
            nomePersonagem.textContent = 'Johnny Joestar';
            descricaoPersonagem.textContent = 'Johnny Joestar, o protagonista da Parte 7: Steel Ball Run de "Jojo\'s Bizarre Adventure", é um ex-cavaleiro e competidor na Steel Ball Run, uma corrida de cavalos cruzando os Estados Unidos. Sua busca pelo prêmio e redenção é repleta de desafios e encontros extraordinários.';
            body.className = 'johnny';
            break;
        case 'jolyne':
            nomePersonagem.textContent = 'Jolyne Cujoh';
            descricaoPersonagem.textContent = 'Jolyne Cujoh, a protagonista da Parte 6: Stone Ocean de "Jojo\'s Bizarre Adventure", é uma detenta que se encontra envolvida em uma conspiração sobrenatural. Determinada e astuta, Jolyne usa seu Stand para enfrentar inimigos e desvendar mistérios.';
            body.className = 'jolyne';
            break;
        case 'joseph':
            nomePersonagem.textContent = 'Joseph Joestar';
            descricaoPersonagem.textContent = 'Joseph Joestar, um dos protagonistas da Parte 2: Battle Tendency e da Parte 3: Stardust Crusaders de "Jojo\'s Bizarre Adventure", é um estrategista e usuário de Hamon. Sua personalidade única e habilidades o tornam uma peça fundamental nas batalhas contra inimigos sobrenaturais.';
            body.className = 'joseph';
            break;
        case 'josuke':
            nomePersonagem.textContent = 'Josuke Higashikata';
            descricaoPersonagem.textContent = 'Josuke Higashikata, o protagonista da Parte 4: Diamond is Unbreakable de "Jojo\'s Bizarre Adventure", é um jovem com Stand e um coração gentil. Sua jornada envolve proteger sua cidade natal de ameaças sobrenaturais e desvendar mistérios.';
            body.className = 'josuke';
            break;
        case 'jotaro':
            nomePersonagem.textContent = 'Jotaro Kujo';
            descricaoPersonagem.textContent = 'Jotaro Kujo, o protagonista da Parte 3: Stardust Crusaders e um personagem importante nas Partes 4, 6 e 7 de "Jojo\'s Bizarre Adventure", é um usuário de Stand e membro da família Joestar. Sua natureza calma e suas habilidades excepcionais o tornam uma força formidável contra ameaças sobrenaturais.';
            body.className = 'jotaro';
            break;
        case 'zepelli':
            nomePersonagem.textContent = 'Will A. Zeppeli';
            descricaoPersonagem.textContent = 'Will A. Zeppeli, um mentor e aliado na Parte 1: Phantom Blood de "Jojo\'s Bizarre Adventure", é um usuário de Hamon e guia Jonathan Joestar em sua jornada contra as forças sobrenaturais. Seu sacrifício e sabedoria deixam um impacto duradouro na série.';
            body.className = 'zepelli';
            break;
    }
}
