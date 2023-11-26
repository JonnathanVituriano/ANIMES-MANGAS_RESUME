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
        case 'jin':
            nomePersonagem.textContent = 'Jin';
            descricaoPersonagem.textContent = 'Jin é um jogador talentoso em "Blue Lock". Sua notável habilidade e determinação o destacam como um atleta formidável no programa de treinamento. Conhecido por sua destreza em campo e astúcia estratégica, Jin enfrenta desafios com coragem e habilidade incomparáveis. Acompanhe sua jornada emocionante enquanto ele busca se destacar no mundo do futebol.';
            body.className = 'jin';
            break;
        case 'bachira':
            nomePersonagem.textContent = 'Bachira';
            descricaoPersonagem.textContent = 'Bachira é um jogador promissor em "Blue Lock". Sua origem misteriosa e habilidades extraordinárias o colocam no centro do intenso programa de treinamento. Explore o caráter único de Bachira enquanto ele enfrenta desafios competitivos e busca se tornar um jogador de elite.';
            body.className = 'bachira';
            break;
        case 'isagi':
            nomePersonagem.textContent = 'Isagi';
            descricaoPersonagem.textContent = 'Isagi é um jovem determinado em "Blue Lock". Sua tenacidade e desejo de se destacar no mundo do futebol o tornam um participante valioso no programa de treinamento. Acompanhe as experiências de Isagi enquanto ele enfrenta desafios e busca se destacar como um jogador excepcional.';
            body.className = 'isagi';
            break;
        case 'jinpachi':
            nomePersonagem.textContent = 'Jinpachi';
            descricaoPersonagem.textContent = 'Jinpachi é um jogador enigmático em "Blue Lock". Seu passado sombrio e habilidades extraordinárias o colocam no centro das atenções no programa de treinamento. Desvende os mistérios que cercam Jinpachi enquanto ele enfrenta competidores talentosos e busca sua própria excelência no campo de futebol.';
            body.className = 'jinpachi';
            break;
        case 'reika':
            nomePersonagem.textContent = 'Reika';
            descricaoPersonagem.textContent = 'Reika é uma participante determinada em "Blue Lock". Sua habilidade técnica e paixão pelo jogo a destacam como uma jogadora excepcional no programa de treinamento. Acompanhe as conquistas e desafios de Reika enquanto ela busca se destacar e deixar sua marca no mundo do futebol.';
            body.className = 'reika';
            break;
        case 'rensuke':
            nomePersonagem.textContent = 'Rensuke';
            descricaoPersonagem.textContent = 'Rensuke é um jogador ambicioso em "Blue Lock". Sua busca pela perfeição e dedicação aos treinos o colocam entre os participantes mais notáveis. Explore a jornada desafiadora de Rensuke enquanto ele enfrenta obstáculos e busca aprimorar suas habilidades no campo de futebol.';
            body.className = 'rensuke';
            break;
        case 'rin':
            nomePersonagem.textContent = 'Rin';
            descricaoPersonagem.textContent = 'Rin é uma jogadora talentosa em "Blue Lock". Sua habilidade natural e paixão pelo futebol a tornam uma competidora formidável no programa de treinamento. Acompanhe o progresso de Rin enquanto ela enfrenta desafios e busca se destacar como uma das melhores jogadoras.';
            body.className = 'rin';
            break;
        case 'shidou':
            nomePersonagem.textContent = 'Shidou';
            descricaoPersonagem.textContent = 'Shidou é um participante dedicado em "Blue Lock". Sua ética de trabalho e compromisso com o sucesso o destacam como um atleta notável no programa de treinamento. Acompanhe as aspirações de Shidou enquanto ele supera desafios e busca alcançar a excelência no futebol.';
            body.className = 'shidou';
            break;
        case 'zaizen':
            nomePersonagem.textContent = 'Zaizen';
            descricaoPersonagem.textContent = 'Zaizen é um jogador determinado em "Blue Lock". Sua abordagem estratégica e habilidades únicas o tornam um participante valioso no programa de treinamento. Explore a jornada de Zaizen enquanto ele enfrenta competições acirradas e busca se destacar como um jogador excepcional.';
            body.className = 'zaizen';
            break;

    }
}
