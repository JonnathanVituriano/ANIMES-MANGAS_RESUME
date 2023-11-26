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
        case 'gon':
            nomePersonagem.textContent = 'Gon Freecss';
            descricaoPersonagem.textContent = 'Gon Freecss, o protagonista de "Hunter x Hunter", é um jovem caçador determinado a encontrar seu pai e descobrir o mistério por trás da sua ausência. Com uma personalidade otimista e corajosa, Gon embarca em uma jornada perigosa, enfrentando desafios e inimigos formidáveis.';
            body.className = 'gon';
            break;
        case 'chrollo':
            nomePersonagem.textContent = 'Chrollo Lucilfer';
            descricaoPersonagem.textContent = 'Chrollo Lucilfer, o líder da Tropa Fantasma em "Hunter x Hunter", personifica a astúcia e o poder. Com sua habilidade Nen única, Chrollo é um estrategista talentoso e um adversário temível.';
            body.className = 'chrollo';
            break;
        case 'hisoka':
            nomePersonagem.textContent = 'Hisoka Morow';
            descricaoPersonagem.textContent = 'Hisoka Morow, um caçador de alto nível em "Hunter x Hunter", personifica a imprevisibilidade e a obsessão pela emoção. Hisoka busca desafios emocionantes e vê outros caçadores como presas potenciais em seu jogo mortal.';
            body.className = 'hisoka';
            break;
        case 'illumni':
            nomePersonagem.textContent = 'Illumi Zoldyck';
            descricaoPersonagem.textContent = 'Illumi Zoldyck, um membro da família Zoldyck em "Hunter x Hunter", personifica a frieza e a letalidade. Como um assassino profissional, Illumi utiliza suas habilidades Nen para realizar missões perigosas e proteger os interesses da família Zoldyck.';
            body.className = 'illumni';
            break;
        case 'killua':
            nomePersonagem.textContent = 'Killua Zoldyck';
            descricaoPersonagem.textContent = 'Killua Zoldyck, um ex-assassino e amigo próximo de Gon em "Hunter x Hunter", personifica a agilidade e a transformação pessoal. Ao deixar sua família de assassinos, Killua busca encontrar seu próprio caminho e desenvolver suas habilidades Nen.';
            body.className = 'killua';
            break;
        case 'kurapika':
            nomePersonagem.textContent = 'Kurapika';
            descricaoPersonagem.textContent = 'Kurapika, um dos protagonistas de "Hunter x Hunter", personifica a determinação e a vingança. Como o último sobrevivente do clã Kurta, Kurapika busca vingança contra a Tropa Fantasma pelos crimes cometidos contra seu povo.';
            body.className = 'kurapika';
            break;
        case 'leorio':
            nomePersonagem.textContent = 'Leorio Paradinight';
            descricaoPersonagem.textContent = 'Leorio Paradinight, um dos protagonistas de "Hunter x Hunter", personifica a ambição e a busca pela profissão médica. Leorio, inicialmente motivado pela riqueza, desenvolve um forte senso de justiça e amizade ao longo de suas aventuras.';
            body.className = 'leorio';
            break;
        case 'meruem':
            nomePersonagem.textContent = 'Meruem';
            descricaoPersonagem.textContent = 'Meruem, o rei das formigas-quimera em "Hunter x Hunter", personifica a evolução e a complexidade emocional. Inicialmente um ser imparcial e calculista, Meruem passa por uma transformação significativa ao longo da série.';
            body.className = 'meruem';
            break;
        case 'netero':
            nomePersonagem.textContent = 'Netero';
            descricaoPersonagem.textContent = 'Isaac Netero, o presidente da Associação Hunter em "Hunter x Hunter", personifica a experiência e o poder extremo. Como um dos caçadores mais poderosos, Netero desempenha um papel fundamental na luta contra ameaças poderosas.';
            body.className = 'netero';
            break;
        case 'bisky':
            nomePersonagem.textContent = 'Biscuit Krueger';
            descricaoPersonagem.textContent = 'Biscuit Krueger, uma experiente caçadora em "Hunter x Hunter", personifica a força e a sabedoria. Apesar de sua aparência jovem, Bisky é uma mestra em Nen e joga um papel crucial no treinamento de Gon e Killua.';
            body.className = 'bisky';
            break;

    }
}