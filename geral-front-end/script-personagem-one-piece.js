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
        case 'luffy':
            nomePersonagem.textContent = 'Monkey D. Luffy';
            descricaoPersonagem.textContent = 'Luffy, o carismático protagonista de "One Piece", é um intrépido pirata com o objetivo de se tornar o Rei dos Piratas. Conhecido por sua personalidade extrovertida, determinação inabalável e habilidades de borracha após consumir a Fruta Gum-Gum. Sua jornada é marcada por amizades duradouras, incríveis batalhas e a busca pelo One Piece, o tesouro lendário no Grand Line.';
            body.className = 'luffy';
            break;
        case 'zoro':
            nomePersonagem.textContent = 'Roronoa Zoro';
            descricaoPersonagem.textContent = 'Zoro, o espadachim habilidoso de "One Piece", é o espadachim principal da tripulação de Luffy. Conhecido por sua devoção à espada de três espadas, sua busca é se tornar o melhor espadachim do mundo. Sua lealdade a Luffy e suas habilidades excepcionais em esgrima o tornam uma força formidável no mundo de One Piece.';
            body.className = 'zoro';
            break;
        case 'jinbe':
            nomePersonagem.textContent = 'Jinbe';
            descricaoPersonagem.textContent = 'Jinbe, o habilidoso mestre em artes marciais e navegante de "One Piece", é conhecido por sua habilidade em lutas aquáticas e seu papel crucial na tripulação de Luffy. Sua integridade, sabedoria e lealdade fazem dele um valioso aliado na busca pelo One Piece e na luta contra os Yonko.';
            body.className = 'jinbe';
            break;
        case 'sanji':
            nomePersonagem.textContent = 'Sanji';
            descricaoPersonagem.textContent = 'Sanji, o cozinheiro e perito em técnicas de pernas de "One Piece", é conhecido por seu estilo de luta único que envolve o uso de suas pernas. Sua paixão pela culinária e seu respeito pelo código de honra fazem dele uma parte essencial da tripulação de Luffy.';
            body.className = 'sanji';
            break;
        case 'ace':
            nomePersonagem.textContent = 'Portgas D. Ace';
            descricaoPersonagem.textContent = 'Ace, o irmão mais velho de Luffy em "One Piece", é um habilidoso usuário da Fruta Mera Mera no Mi, que lhe concede poderes de fogo. Sua relação especial com Luffy e sua busca pela verdadeira liberdade o tornam um personagem memorável no mundo de One Piece.';
            body.className = 'ace';
            break;
        case 'nami':
            nomePersonagem.textContent = 'Nami';
            descricaoPersonagem.textContent = 'Nami, a navegadora talentosa de "One Piece", é conhecida por sua habilidade em navegação e meteorologia. Inicialmente introduzida como uma ladra, ela se torna uma parte indispensável da tripulação de Luffy, contribuindo significativamente para a jornada em busca do One Piece.';
            body.className = 'nami';
            break;
        case 'usopp':
            nomePersonagem.textContent = 'Usopp';
            descricaoPersonagem.textContent = 'Usopp, o atirador habilidoso e contador de histórias de "One Piece", é conhecido por suas habilidades com a zarabatana e sua imaginação vívida. Sua jornada é marcada por momentos de coragem e superação, tornando-se um membro valioso da tripulação de Luffy.';
            body.className = 'usopp';
            break;
        case 'brook':
            nomePersonagem.textContent = 'Brook';
            descricaoPersonagem.textContent = 'Brook, o esqueleto músico de "One Piece", é um revive-revive usuário da Fruta Yomi Yomi no Mi. Sua presença musical e habilidades de espadachim fazem dele uma adição única e animada à tripulação de Luffy.';
            body.className = 'brook';
            break;
        case 'franky':
            nomePersonagem.textContent = 'Franky';
            descricaoPersonagem.textContent = 'Franky, o construtor e ciborgue de "One Piece", é conhecido por suas habilidades em engenharia e sua natureza exuberante. Ele é responsável pela construção do Thousand Sunny, o navio da tripulação de Luffy, e suas habilidades em combate mecânico o tornam uma força formidável.';
            body.className = 'franky';
            break;
        case 'chopper':
            nomePersonagem.textContent = 'Tony Tony Chopper';
            descricaoPersonagem.textContent = 'Chopper, a rena médica e usuário da Fruta Hito Hito no Mi em "One Piece", é conhecido por suas transformações devido à sua Akuma no Mi. Sua adorável aparência e habilidades médicas fazem dele um membro querido e essencial da tripulação de Luffy.';
            body.className = 'chopper';
            break;
    }
    
}