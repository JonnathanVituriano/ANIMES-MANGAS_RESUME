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
        case 'yuji':
            nomePersonagem.textContent = 'Yuji Itadori';
            descricaoPersonagem.textContent = 'Yuji Itadori, o protagonista de "Jujutsu Kaisen", é um estudante do ensino médio com habilidades atléticas notáveis. Sua vida toma um rumo sombrio quando ele se depara com um objeto amaldiçoado e eventos sobrenaturais. Ao absorver um dedo amaldiçoado para salvar seus amigos, Yuji se torna uma peça crucial em uma guerra contra maldições. Determinado e corajoso, ele se junta à Escola Técnica de Feiticeiros para aprender a controlar maldições e proteger aqueles que ama. Yuji destaca-se não apenas por suas habilidades físicas, mas também por sua compaixão e determinação em enfrentar o sobrenatural.';
            body.className = 'yuji';
            break;
        case 'gojo':
            nomePersonagem.textContent = 'Satoru Gojo';
            descricaoPersonagem.textContent = 'Satoru Gojo, um feiticeiro poderoso em "Jujutsu Kaisen", personifica a força e a excentricidade. Como professor na Escola Técnica de Feiticeiros, Gojo destaca-se por sua habilidade excepcional em jujutsu e seu caráter descontraído. Sua presença é marcada por eventos significativos na luta contra as maldições.';
            body.className = 'gojo';
            break;
        case 'fushiguro':
            nomePersonagem.textContent = 'Megumi Fushiguro';
            descricaoPersonagem.textContent = 'Megumi Fushiguro, um estudante promissor na Escola Técnica de Feiticeiros em "Jujutsu Kaisen", personifica a seriedade e a determinação. Como usuário de jujutsu com habilidades únicas, Fushiguro desempenha um papel crucial na batalha contra as maldições e na proteção dos inocentes.';
            body.className = 'fushiguro';
            break;
        case 'inumaki':
            nomePersonagem.textContent = 'Toge Inumaki';
            descricaoPersonagem.textContent = 'Toge Inumaki, um feiticeiro em "Jujutsu Kaisen", personifica a singularidade e a comunicação única. Utilizando seu jujutsu através de palavras, Inumaki destaca-se por sua abordagem única nas batalhas contra as maldições e sua contribuição para a equipe de feiticeiros.';
            body.className = 'inumaki';
            break;
        case 'maki':
            nomePersonagem.textContent = 'Maki Zenin';
            descricaoPersonagem.textContent = 'Maki Zenin, uma guerreira determinada em "Jujutsu Kaisen", personifica a força e a superação. Apesar das expectativas sociais, Maki busca se destacar como uma feiticeira poderosa. Sua jornada é marcada por desafios, autoafirmação e sua dedicação à luta contra as maldições.';
            body.className = 'maki';
            break;
        case 'nanami':
            nomePersonagem.textContent = 'Kento Nanami';
            descricaoPersonagem.textContent = 'Kento Nanami, um feiticeiro experiente em "Jujutsu Kaisen", personifica a pragmática e a habilidade excepcional. Como um ex-salárioman que se torna feiticeiro, Nanami destaca-se por sua abordagem racional nas batalhas e sua contribuição para a missão de eliminar as maldições.';
            body.className = 'nanami';
            break;
        case 'nobara':
            nomePersonagem.textContent = 'Nobara Kugisaki';
            descricaoPersonagem.textContent = 'Nobara Kugisaki, uma feiticeira em "Jujutsu Kaisen", personifica a determinação e a independência. Com suas habilidades únicas em jujutsu e seu caráter forte, Nobara contribui para a luta contra as maldições e desafia as normas sociais estabelecidas.';
            body.className = 'nobara';
            break;
        case 'panda':
            nomePersonagem.textContent = 'Panda';
            descricaoPersonagem.textContent = 'Panda, uma entidade única em "Jujutsu Kaisen", personifica a mistura de mistério e força. Apesar de sua aparência peculiar, Panda é um feiticeiro poderoso e leal, contribuindo para a equipe de feiticeiros em sua missão contra as maldições.';
            body.className = 'panda';
            break;
        case 'suguru':
            nomePersonagem.textContent = 'Suguru Geto';
            descricaoPersonagem.textContent = 'Suguru Geto, um antagonista em "Jujutsu Kaisen", personifica a ambição e a escuridão. Como um feiticeiro renegado, Geto busca transformar o mundo através de suas próprias ideias e métodos, desafiando os valores estabelecidos pela sociedade feiticeira.';
            body.className = 'suguru';
            break;
        case 'yuta':
            nomePersonagem.textContent = 'Yuta Okkotsu';
            descricaoPersonagem.textContent = 'Yuta Okkotsu, o protagonista de "Tokyo Metropolitan Magic Technical School", personifica a complexidade e o peso emocional. Envolvido em eventos sobrenaturais, Yuta busca entender e controlar suas habilidades mágicas, enfrentando desafios e descobrindo seu papel no mundo dos feiticeiros.';
            body.className = 'yuta';
            break;
    }
}
