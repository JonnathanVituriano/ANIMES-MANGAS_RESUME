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
        case 'ichigo':
            nomePersonagem.textContent = 'Ichigo Kurosaki';
            descricaoPersonagem.textContent = 'Ichigo Kurosaki, o protagonista de "Bleach", é um destemido Ceifador de Almas com habilidades espirituais excepcionais. Sua vida comum sofre uma reviravolta quando ele obtém poderes de Ceifeiro de Almas. Além de sua personalidade corajosa, Ichigo é conhecido por sua determinação em proteger seus entes queridos e pelo desenvolvimento de suas habilidades espirituais.';
            body.className = 'ichigo';
            break;
        case 'byakuya':
            nomePersonagem.textContent = 'Byakuya Kuchiki';
            descricaoPersonagem.textContent = 'Byakuya Kuchiki, um nobre Ceifador de Almas em "Bleach", personifica a elegância e a força. Inicialmente apresentado como um personagem frio e distante, Byakuya passa por uma notável evolução ao longo da série. Suas habilidades excepcionais em Zanjutsu e Kidou, bem como sua relação com Rukia, adicionam camadas à sua complexa personalidade.';
            body.className = 'byakuya';
            break;
        case 'kenpachi':
            nomePersonagem.textContent = 'Kenpachi Zaraki';
            descricaoPersonagem.textContent = 'Kenpachi Zaraki, o capitão selvagem da 11ª Divisão em "Bleach", personifica a brutalidade e a paixão pela batalha. Conhecido por sua sede insaciável por lutas desafiadoras, Kenpachi destaca-se como um dos Ceifeiros de Almas mais formidáveis. Sua natureza caótica e seu olho-patch distintivo são ícones marcantes em sua representação.';
            body.className = 'kenpachi';
            break;
        case 'orihime':
            nomePersonagem.textContent = 'Orihime Inoue';
            descricaoPersonagem.textContent = 'Orihime Inoue, uma personagem cativante em "Bleach", personifica a gentileza e a habilidade única. Suas habilidades espirituais especiais incluem a capacidade de reverter eventos, curar ferimentos e invocar seres espirituais. Além disso, sua natureza compassiva e relação com Ichigo e seus amigos a tornam uma presença fundamental na narrativa.';
            body.className = 'orihime';
            break;
        case 'renji':
            nomePersonagem.textContent = 'Renji Abarai';
            descricaoPersonagem.textContent = 'Renji Abarai, um Ceifador de Almas corajoso em "Bleach", personifica a lealdade e a determinação. Inicialmente apresentado como rival de Ichigo, Renji passa a desempenhar papéis cruciais na série, destacando-se por suas habilidades excepcionais em Zanjutsu e sua jornada de autoaperfeiçoamento.';
            body.className = 'renji';
            break;
        case 'rukia':
            nomePersonagem.textContent = 'Rukia Kuchiki';
            descricaoPersonagem.textContent = 'Rukia Kuchiki, uma nobre Ceifadora de Almas em "Bleach", personifica a graça e a responsabilidade. Seu encontro com Ichigo desencadeia eventos cruciais na história. Rukia destaca-se por suas habilidades em Kidou, Zanjutsu e sua busca por justiça. Sua relação com Byakuya e sua influência na formação de Ichigo como Ceifador de Almas são aspectos fundamentais de sua personagem.';
            body.className = 'rukia';
            break;
        case 'sosuke':
            nomePersonagem.textContent = 'Sosuke Aizen';
            descricaoPersonagem.textContent = 'Sosuke Aizen, o vilão maquiavélico em "Bleach", personifica a astúcia e a traição. Inicialmente retratado como um capitão respeitável, Aizen revela sua verdadeira natureza ao longo da série. Suas habilidades em Kidou, sua busca pelo poder supremo e sua manipulação de eventos desencadeiam eventos significativos na narrativa.';
            body.className = 'sosuke';
            break;
        case 'toshiro':
            nomePersonagem.textContent = 'Toshiro Hitsugaya';
            descricaoPersonagem.textContent = 'Toshiro Hitsugaya, um prodígio Ceifador de Almas em "Bleach", personifica a maturidade além de sua aparência juvenil. Como capitão da 10ª Divisão, Toshiro destaca-se por suas habilidades excepcionais em Hyourinmaru, sua Zanpakuto, e sua abordagem séria para proteger a Soul Society.';
            body.className = 'toshiro';
            break;
        case 'uryu':
            nomePersonagem.textContent = 'Uryu Ishida';
            descricaoPersonagem.textContent = 'Uryu Ishida, um habilidoso Quincy em "Bleach", personifica a determinação e o orgulho. Inicialmente apresentado como rival de Ichigo, Uryu passa por uma jornada de desenvolvimento, destacando-se por suas habilidades únicas em Quincy Bowmanship e sua dedicação à sua linhagem.';
            body.className = 'uryu';
            break;
        case 'yoruichi':
            nomePersonagem.textContent = 'Yoruichi Shihouin';
            descricaoPersonagem.textContent = 'Yoruichi Shihouin, uma figura enigmática em "Bleach", personifica a astúcia e a força formidável. Inicialmente apresentada como um gato preto, Yoruichi revela sua verdadeira forma como uma mulher habilidosa em combate e liderança. Sua influência na história é marcada por sua conexão com personagens principais e sua participação em eventos cruciais.';
            body.className = 'yoruichi';
            break;
    }
}
