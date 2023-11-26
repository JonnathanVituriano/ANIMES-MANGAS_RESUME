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
        case 'tanjiro':
            nomePersonagem.textContent = 'Tanjiro Kamado';
            descricaoPersonagem.textContent = 'Tanjiro Kamado, o protagonista de "Kimetsu no Yaiba" (Demon Slayer), é um jovem determinado a vingar sua família e salvar sua irmã, Nezuko, que foi transformada em um demônio. Com uma personalidade compassiva e corajosa, Tanjiro enfrenta ameaças sobrenaturais em sua busca por justiça e redenção.';
            body.className = 'tanjiro';
            break;
        case 'inosuke':
            nomePersonagem.textContent = 'Inosuke Hashibira';
            descricaoPersonagem.textContent = 'Inosuke Hashibira, um dos companheiros de Tanjiro em "Kimetsu no Yaiba" (Demon Slayer), é um combatente feroz que prefere o combate corpo a corpo. Com sua máscara de javali e natureza selvagem, Inosuke adiciona uma dinâmica única ao grupo.';
            body.className = 'inosuke';
            break;
        case 'zenitsu':
            nomePersonagem.textContent = 'Zenitsu Agatsuma';
            descricaoPersonagem.textContent = 'Zenitsu Agatsuma, outro companheiro de Tanjiro em "Kimetsu no Yaiba" (Demon Slayer), é um espadachim talentoso com uma personalidade medrosa. Apesar de seus medos, Zenitsu é capaz de realizar feitos incríveis quando motivado.';
            body.className = 'zenitsu';
            break;
        case 'kanao':
            nomePersonagem.textContent = 'Kanao Tsuyuri';
            descricaoPersonagem.textContent = 'Kanao Tsuyuri, uma das integrantes do Corpo de Caçadores de Demônios em "Kimetsu no Yaiba" (Demon Slayer), é uma espadachim habilidosa e calma. Sua destreza em combate e lealdade aos princípios do Corpo a tornam uma aliada valiosa.';
            body.className = 'kanao';
            break;
        case 'kochou':
            nomePersonagem.textContent = 'Kanae Kochou';
            descricaoPersonagem.textContent = 'Kanae Kochou, uma das Pilares do Corpo de Caçadores de Demônios em "Kimetsu no Yaiba" (Demon Slayer), é conhecida por sua beleza e habilidade excepcionais. Sua postura séria e comprometimento com a missão a tornam uma figura respeitada.';
            body.className = 'kochou';
            break;
        case 'muzan':
            nomePersonagem.textContent = 'Muzan Kibutsuji';
            descricaoPersonagem.textContent = 'Muzan Kibutsuji, o principal antagonista em "Kimetsu no Yaiba" (Demon Slayer), é o progenitor dos demônios e busca exterminar os Caçadores de Demônios. Sua astúcia e poder formidável fazem dele uma ameaça constante.';
            body.className = 'muzan';
            break;
        case 'nezuko':
            nomePersonagem.textContent = 'Nezuko Kamado';
            descricaoPersonagem.textContent = 'Nezuko Kamado, a irmã mais nova de Tanjiro em "Kimetsu no Yaiba" (Demon Slayer), foi transformada em um demônio. Apesar disso, ela mantém sua humanidade e busca ajudar Tanjiro em sua missão contra os demônios.';
            body.className = 'nezuko';
            break;
        case 'rengoku':
            nomePersonagem.textContent = 'Kyojuro Rengoku';
            descricaoPersonagem.textContent = 'Kyojuro Rengoku, o Pilar das Chamas do Corpo de Caçadores de Demônios em "Kimetsu no Yaiba" (Demon Slayer), é um espadachim poderoso e dedicado. Sua determinação em proteger a humanidade o torna uma figura inspiradora.';
            body.className = 'rengoku';
            break;
        case 'tomioka':
            nomePersonagem.textContent = 'Giyu Tomioka';
            descricaoPersonagem.textContent = 'Giyu Tomioka, o Pilar da Água do Corpo de Caçadores de Demônios em "Kimetsu no Yaiba" (Demon Slayer), é um espadachim habilidoso e reservado. Sua dedicação à missão e habilidades excepcionais o destacam entre os Caçadores de Demônios.';
            body.className = 'tomioka';
            break;
        case 'urokodaki':
            nomePersonagem.textContent = 'Sakonji Urokodaki';
            descricaoPersonagem.textContent = 'Sakonji Urokodaki, o mentor de Tanjiro em "Kimetsu no Yaiba" (Demon Slayer), é um ex-Pilar do Corpo de Caçadores de Demônios. Sua sabedoria e treinamento foram fundamentais para preparar Tanjiro para enfrentar os desafios que viriam.';
            body.className = 'urokodaki';
            break;
    }
}
