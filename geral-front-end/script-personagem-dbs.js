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
        case 'goku':
            nomePersonagem.textContent = 'Son Goku';
            descricaoPersonagem.textContent = 'Goku, o icônico protagonista de "Dragon Ball", é um guerreiro Saiyan conhecido por sua personalidade alegre, pureza de coração e insaciável paixão por desafios. Dotado de habilidades sobre-humanas, ele domina técnicas de combate excepcionais, como a manipulação de energia ki e transformações poderosas, como a lendária forma Super Saiyan. Sua jornada épica é marcada por incríveis batalhas, amizades profundas e uma inabalável determinação em se superar constantemente para proteger seus entes queridos e o universo.';
            body.className = 'goku';
            break;
        case 'vegeta':
            nomePersonagem.textContent = 'Vegeta';
            descricaoPersonagem.textContent = 'Vegeta, o príncipe Saiyan em "Dragon Ball", irradia uma determinação inabalável em sua busca incessante por poder. Com habilidades extraordinárias em técnicas de combate e manipulação de energia ki, sua jornada é uma dança épica entre a feroz rivalidade inicial com Goku e a evolução para um protetor dedicado de sua família e do universo. Suas transformações, como a lendária forma Super Saiyan, não apenas amplificam sua força, mas também revelam camadas mais profundas de sua complexidade como personagem.';
            body.className = 'vegeta';
            break;
        case 'gohan':
            nomePersonagem.textContent = 'Gohan';
            descricaoPersonagem.textContent = 'Gohan, figura central em "Dragon Ball", é um exemplo notável de crescimento e coragem. Inicialmente tímido, revela seu potencial como guerreiro Saiyan em desafios cruciais. Além de habilidades excepcionais em combate e energia ki, destaca-se por sua natureza compassiva. Sua trajetória, marcada por momentos emblemáticos, como a transformação em Super Saiyan, reflete uma evolução de adolescente hesitante para guerreiro destemido, comprometido em proteger seus entes queridos. A relação única com seu pai, Goku, e seu papel crucial na narrativa o tornam um personagem cativante na saga.';
            body.className = 'gohan';
            break;
        case 'piccolo':
            nomePersonagem.textContent = 'Piccolo';
            descricaoPersonagem.textContent = 'Piccolo, uma presença imponente em "Dragon Ball", personifica a síntese única de poder e sabedoria. Inicialmente introduzido como um antagonista, sua evolução ao longo da saga é marcada por uma notável redenção e transformação em aliado crucial. Dotado de habilidades excepcionais em técnicas de combate e controle de energia, Piccolo se destaca como um estrategista astuto. Sua jornada revela um comprometimento inabalável com a proteção da Terra, especialmente em relação a Gohan, a quem treina e forma uma conexão paternal.';
            body.className = 'piccolo';
            break;
        case 'trunks':
            nomePersonagem.textContent = 'Trunks';
            descricaoPersonagem.textContent = 'Trunks, figura cativante em "Dragon Ball", personifica a coragem e tenacidade. Introduzido como viajante do futuro, sua história é entrelaçada com eventos apocalípticos, destacando-se como guerreiro formidável em combate e manipulação de energia ki. Sua jornada, marcada por confrontos cruciais com os Androides e Cell, revela momentos de evolução, como a transformação em Super Saiyan e a obtenção da forma Ultra Super Saiyan';
            body.className = 'trunks';
            break;
        case 'freeza':
            nomePersonagem.textContent = 'Freeza';
            descricaoPersonagem.textContent = 'Freeza, o icônico vilão de "Dragon Ball", personifica uma aura de crueldade e poder inigualáveis como imperador do Universo. Conhecido por sua natureza impiedosa, ele destaca-se como um formidável mestre em técnicas de combate e controle de energia. Sua saga é marcada por eventos impactantes, incluindo a destruição do planeta Vegeta e a busca pelas Esferas do Dragão. A transformação em formas cada vez mais poderosas, culminando na forma Dourada, ilustra sua busca incessante por poder absoluto, enquanto sua rivalidade com Goku e outros guerreiros Z revela camadas complexas em seu caráter.';
            body.className = 'freeza';
            break;
        case 'broly':
            nomePersonagem.textContent = 'Broly';
            descricaoPersonagem.textContent = 'Broly, uma força avassaladora em "Dragon Ball", personifica uma imensa força bruta e intensidade. Originário de um passado traumático, ele é conhecido por seu poder descomunal e transformações devastadoras. Dotado de habilidades sobre-humanas, Broly destaca-se como um dos guerreiros mais formidáveis, capaz de desencadear uma tempestade de energia incontrolável. Sua narrativa é marcada por um desejo de vingança e uma busca incessante por superioridade. A relação única com Goku e Vegeta adiciona complexidade à sua história, enquanto suas batalhas épicas solidificam sua posição como uma força incomparável no universo de "Dragon Ball".';
            body.className = 'broly';
            break;
        case 'bulma':
            nomePersonagem.textContent = 'Bulma';
            descricaoPersonagem.textContent = 'Bulma, uma presença fundamental em "Dragon Ball", personifica uma mistura única de engenhosidade e determinação. Conhecida por sua inteligência excepcional e habilidades tecnológicas, Bulma desempenha um papel crucial na jornada de Goku desde o início, sendo sua primeira amiga. Sua influência vai além da perícia técnica, destacando-se por sua personalidade carismática e coragem diante dos desafios. Ao longo da saga, suas invenções e estratégias desempenham um papel vital, enquanto sua conexão duradoura com Goku e a formação da Família Brief adicionam profundidade à sua rica contribuição para o universo de "Dragon Ball".';
            body.className = 'bulma';
            break;
        case 'mestre-kame':
            nomePersonagem.textContent = 'Mestre Kame';
            descricaoPersonagem.textContent = 'Mestre Kame, uma figura venerável em "Dragon Ball", personifica a sabedoria e a comédia. Conhecido por seu vasto conhecimento em artes marciais, é uma presença fundamental desde os primeiros momentos da jornada de Goku, sendo um mentor e uma influência significativa. Além de suas habilidades excepcionais de combate, Mestre Kame é notório por seu senso de humor peculiar e sua apreciação por certas "leituras" menos convencionais. Sua contribuição à formação de Goku e outros guerreiros Z é inegável, enquanto sua personalidade cativante o solidifica como uma peça vital e memorável no universo de "Dragon Ball".';
            body.className = 'mestre-kame';
            break;
        case 'kuririn':
            nomePersonagem.textContent = 'Kuririn';
            descricaoPersonagem.textContent = 'Kuririn, um guerreiro valente em "Dragon Ball", personifica a coragem e lealdade. Desde os primeiros momentos da saga, ele é um amigo inseparável de Goku, enfrentando desafios e batalhas juntos. Como um dos humanos mais habilidosos em artes marciais, Kuririn destaca-se por sua destemida participação em combates contra inimigos formidáveis, contribuindo significativamente para a defesa da Terra. Sua relação única com Goku, assim como seu papel na formação dos guerreiros Z, acrescenta uma dimensão emocional à narrativa.';
            body.className = 'kuririn';
            break;
    }
}