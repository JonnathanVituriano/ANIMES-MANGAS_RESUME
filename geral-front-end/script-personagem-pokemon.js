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
        case 'pikachu':
            nomePersonagem.textContent = 'Pikachu';
            descricaoPersonagem.textContent = 'Pikachu, o adorável Pokémon elétrico, é conhecido por sua personalidade animada e sua habilidade em usar ataques elétricos. Como o mascote mais reconhecível da franquia Pokémon, Pikachu é um companheiro leal e poderoso em batalhas Pokémon.';
            body.className = 'pikachu';
            break;
        case 'charizard':
            nomePersonagem.textContent = 'Charizard';
            descricaoPersonagem.textContent = 'Charizard, um dos Pokémon iniciais de fogo da região de Kanto, é um dragão de fogo poderoso. Com suas asas imponentes e chamas ardentes, Charizard é um parceiro impressionante em batalhas.';
            body.className = 'charizard';
            break;
        case 'bulbassaur':
            nomePersonagem.textContent = 'Bulbassaur';
            descricaoPersonagem.textContent = 'Bulbassaur, o Pokémon inicial de grama da região de Kanto, é conhecido por sua planta bulbosa em suas costas. Com habilidades de planta e veneno, Bulbassaur é um Pokémon versátil e confiável.';
            body.className = 'bulbassaur';
            break;
        case 'eevee':
            nomePersonagem.textContent = 'Eevee';
            descricaoPersonagem.textContent = 'Eevee, o Pokémon evolutivo, pode se transformar em várias formas diferentes, conhecidas como Eeveelutions. Sua adaptabilidade e carisma fazem de Eevee um favorito entre os treinadores Pokémon.';
            body.className = 'eevee';
            break;
        case 'gardevoir':
            nomePersonagem.textContent = 'Gardevoir';
            descricaoPersonagem.textContent = 'Gardevoir, um Pokémon psíquico e de fada, é conhecido por sua elegância e poder psíquico. Com sua lealdade inabalável, Gardevoir é um companheiro confiável em diversas situações.';
            body.className = 'gardevoir';
            break;
        case 'gyarados':
            nomePersonagem.textContent = 'Gyarados';
            descricaoPersonagem.textContent = 'Gyarados, uma evolução majestosa de Magikarp, é um Pokémon aquático poderoso. Sua força e imponência tornam Gyarados uma presença formidável tanto na água quanto em batalhas.';
            body.className = 'gyarados';
            break;
        case 'lucario':
            nomePersonagem.textContent = 'Lucario';
            descricaoPersonagem.textContent = 'Lucario, um Pokémon de luta e aço, é conhecido por sua sabedoria e habilidades espetaculares em combate. Sua conexão com as energias ao seu redor o torna um Pokémon único e poderoso.';
            body.className = 'lucario';
            break;
        case 'mew':
            nomePersonagem.textContent = 'Mew';
            descricaoPersonagem.textContent = 'Mew, um Pokémon lendário, é conhecido por sua raridade e versatilidade. Sua habilidade de aprender diversos golpes faz de Mew uma adição valiosa à equipe de qualquer treinador.';
            body.className = 'mew';
            break;
        case 'mewtwo':
            nomePersonagem.textContent = 'Mewtwo';
            descricaoPersonagem.textContent = 'Mewtwo, outro Pokémon lendário, é conhecido por sua força psíquica avassaladora. Sua aparência imponente e habilidades excepcionais o tornam um desafio temido por muitos treinadores.';
            body.className = 'mewtwo';
            break;
        case 'squirtle':
            nomePersonagem.textContent = 'Squirtle';
            descricaoPersonagem.textContent = 'Squirtle, o Pokémon inicial de água da região de Kanto, é um pequeno e ágil Pokémon aquático. Com sua casca resistente e habilidades aquáticas, Squirtle é um parceiro confiável em jornadas aquáticas.';
            body.className = 'squirtle';
            break;
    }
}
