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
        case 'casca':
        nomePersonagem.textContent = 'Casca';
        descricaoPersonagem.textContent = 'Casca é uma personagem de "Berserk" conhecida por sua valentia e habilidades em combate. Ela desempenha um papel crucial na história, enfrentando desafios incríveis e mostrando grande determinação.';
        body.className = 'casca';
        break;
    case 'farnese':
        nomePersonagem.textContent = 'Farnese';
        descricaoPersonagem.textContent = 'Farnese é uma personagem de "Berserk" que passa por uma jornada de autodescoberta. De nobre a membro da trupe de Guts, ela desenvolve habilidades mágicas e força interior ao longo da história.';
        body.className = 'farnese';
        break;
    case 'griffith':
        nomePersonagem.textContent = 'Griffith';
        descricaoPersonagem.textContent = 'Griffith é um personagem central em "Berserk", líder da Tropa do Falcão. Sua personalidade carismática e ambições grandiosas desempenham um papel significativo na trama, explorando temas complexos ao longo da narrativa.';
        body.className = 'griffith';
        break;
    case 'guts':
        nomePersonagem.textContent = 'Guts';
        descricaoPersonagem.textContent = 'Guts, também conhecido como "O Espadachim Negro", é o protagonista de "Berserk". Sua jornada é marcada por tragédias, batalhas épicas e um desejo implacável de vingança contra os seres demoníacos conhecidos como God Hand.';
        body.className = 'guts';
        break;
    case 'isidro':
        nomePersonagem.textContent = 'Isidro';
        descricaoPersonagem.textContent = 'Isidro é um personagem aventureiro e jovem em "Berserk". Ele se junta à jornada de Guts, buscando aprimorar suas habilidades de combate e provar seu valor como membro da equipe.';
        body.className = 'isidro';
        break;
     case 'judeau':
        nomePersonagem.textContent = 'Judeau';
        descricaoPersonagem.textContent = 'Judeau é um habilidoso membro da Tropa do Falcão em "Berserk". Ele é conhecido por sua perícia em combate, especialmente com adagas, e desempenha um papel significativo na história de Guts e dos outros membros da trupe.';
        body.className = 'judeau';
        break;
    case 'puck':
        nomePersonagem.textContent = 'Puck';
        descricaoPersonagem.textContent = 'Puck é uma fada amigável e companheira constante de Guts em "Berserk". Além de fornecer alívio cômico, Puck também desempenha um papel importante na jornada de Guts, trazendo leveza ao mundo sombrio de "Berserk".';
        body.className = 'puck';
        break;
    case 'rickert':
        nomePersonagem.textContent = 'Rickert';
        descricaoPersonagem.textContent = 'Rickert é um membro da Tropa do Falcão em "Berserk". Após os eventos traumáticos, ele se torna um personagem central que busca seu caminho próprio. Sua jornada é marcada por desafios e determinação.';
        body.className = 'rickert';
        break;
    case 'schierke':
        nomePersonagem.textContent = 'Schierke';
        descricaoPersonagem.textContent = 'Schierke é uma jovem feiticeira em "Berserk" com habilidades mágicas excepcionais. Ela desempenha um papel vital na equipe de Guts, contribuindo com conhecimentos místicos e magia poderosa.';
        body.className = 'schierke';
        break;
    case 'serpico':
        nomePersonagem.textContent = 'Serpico';
        descricaoPersonagem.textContent = 'Serpico é um habilidoso espadachim e membro da Tropa do Falcão em "Berserk". Ele é conhecido por sua destreza com a espada e suas habilidades táticas, tornando-se um aliado valioso para Guts.';
        body.className = 'serpico';
        break;
    }
}
