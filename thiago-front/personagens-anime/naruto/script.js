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
        case 'naruto':
            nomePersonagem.textContent = 'Naruto Uzumaki';
            descricaoPersonagem.textContent = 'Naruto Uzumaki, o herói icônico de "Naruto", é um ninja determinado e otimista da Vila da Folha. Conhecido por sua jornada de superação, Naruto busca se tornar o Hokage, líder da sua vila, para conquistar o reconhecimento e respeito dos outros. Dotado de habilidades ninja excepcionais, incluindo a utilização de chakra e a transformação em diversas formas, Naruto enfrenta desafios épicos, constrói laços poderosos e defende a paz em seu mundo.';
            body.className = 'naruto';
            break;
        case 'sasuke':
            nomePersonagem.textContent = 'Sasuke Uchiha';
            descricaoPersonagem.textContent = 'Sasuke Uchiha, um dos últimos sobreviventes do clã Uchiha em "Naruto", é conhecido por sua busca por poder e vingança. Com habilidades extraordinárias em jutsus e técnicas ninja, Sasuke passa por uma jornada de descoberta de suas origens e conflitos internos. Sua relação complexa com Naruto, seu antigo companheiro de equipe, é central para a trama, revelando camadas profundas de emoção e amadurecimento.';
            body.className = 'sasuke';
            break;
        case 'sakura':
            nomePersonagem.textContent = 'Sakura Haruno';
            descricaoPersonagem.textContent = 'Sakura Haruno, uma ninja da Vila da Folha em "Naruto", é conhecida por sua determinação e crescimento como uma kunoichi. Inicialmente uma personagem focada em seu relacionamento com Sasuke, Sakura evolui ao longo da série, desenvolvendo habilidades médicas e combativas. Sua jornada é marcada por momentos de coragem, autodescoberta e contribuição significativa para a equipe.';
            body.className = 'sakura';
            break;
        case 'kakashi':
            nomePersonagem.textContent = 'Kakashi Hatake';
            descricaoPersonagem.textContent = 'Kakashi Hatake, um dos senseis mais respeitados de "Naruto", é conhecido por sua habilidade excepcional em técnicas ninja e sua abordagem descontraída. Com o Sharingan e uma vasta experiência em combate, Kakashi desempenha um papel crucial na formação da próxima geração de ninjas. Sua história é marcada por perdas, aprendizado e uma dedicação inabalável à proteção da Vila da Folha.';
            body.className = 'kakashi';
            break;
        case 'minato':
            nomePersonagem.textContent = 'Minato Namikaze';
            descricaoPersonagem.textContent = 'Minato Namikaze, também conhecido como o Quarto Hokage em "Naruto", é lembrado por sua habilidade excepcional em combate e pela marca deixada em seu filho, Naruto. Sua história é entrelaçada com eventos cruciais, incluindo sacrifícios para proteger a vila e a formação de estratégias ninja inovadoras.';
            body.className = 'minato';
            break;
        case 'itachi':
            nomePersonagem.textContent = 'Itachi Uchiha';
            descricaoPersonagem.textContent = 'Itachi Uchiha, uma figura complexa em "Naruto", é conhecido por sua habilidade extraordinária como ninja e sua trágica história. Sua jornada envolve sacrifícios, lealdade à vila e conflitos morais profundos. A relação com seu irmão Sasuke é central para o enredo, revelando camadas de tragédia e redenção.';
            body.className = 'itachi';
            break;
        case 'jiraiya':
            nomePersonagem.textContent = 'Jiraiya';
            descricaoPersonagem.textContent = 'Jiraiya, um lendário ninja e autor renomado em "Naruto", é conhecido por sua personalidade extrovertida e habilidades formidáveis. Sua contribuição vai além do campo de batalha, envolvendo o treinamento de ninjas promissores e a busca por conhecimento. Sua conexão com Naruto desempenha um papel significativo no desenvolvimento do protagonista.';
            body.className = 'jiraiya';
            break;
        case 'obito':
            nomePersonagem.textContent = 'Obito Uchiha';
            descricaoPersonagem.textContent = 'Obito Uchiha, uma figura complexa em "Naruto", é conhecido por sua transformação de um jovem ninja promissor para um antagonista poderoso. Sua história envolve tragédias, manipulação e uma busca por significado. A revelação de sua verdadeira identidade impacta profundamente o mundo de "Naruto".';
            body.className = 'obito';
            break;
        case 'kurama':
            nomePersonagem.textContent = 'Kurama (Kyuubi)';
            descricaoPersonagem.textContent = 'Kurama, também conhecido como Kyuubi, é a Besta com Cauda de Nove Caudas em "Naruto". Inicialmente uma força destrutiva, a relação com Naruto transforma Kurama em um aliado poderoso. Sua presença é crucial em batalhas épicas, e a jornada de cooperação entre Naruto e Kurama é uma parte essencial da narrativa.';
            body.className = 'kurama';
            break;
        case 'neji':
            nomePersonagem.textContent = 'Neji Hyuga';
            descricaoPersonagem.textContent = 'Neji Hyuga, um talentoso ninja do clã Hyuga em "Naruto", é conhecido por suas habilidades em taijutsu e seu domínio do Byakugan. Sua jornada envolve questões de destino, liberdade e mudanças significativas na Vila da Folha. A transformação de Neji é um aspecto impactante da narrativa.';
            body.className = 'neji';
            break;
    }
    
}