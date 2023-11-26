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
        case 'baki':
            nomePersonagem.textContent = 'Baki Hanma';
            descricaoPersonagem.textContent = 'Baki Hanma, o protagonista de "Baki", é um lutador feroz e determinado que busca constantemente superar seus limites nas artes marciais. Criado desde jovem por seu pai, Yujiro Hanma, uma figura lendária conhecida como o "Grappler mais forte", Baki enfrenta desafios intensos para se tornar o guerreiro mais forte do mundo. Sua jornada é repleta de batalhas épicas contra outros mestres de artes marciais, incluindo seu pai. Além de suas habilidades físicas excepcionais, Baki também desenvolve uma profunda compreensão das nuances psicológicas das batalhas, tornando-se uma presença formidável e intrigante no cenário das artes marciais.';
            body.className = 'baki';
            break;
        case 'yujiro':
            nomePersonagem.textContent = 'Yujiro Hanma';
            descricaoPersonagem.textContent = 'Yujiro Hanma, o pai de Baki em "Baki", personifica a brutalidade e a força suprema. Conhecido como o "Ogre" ou "Grappler mais forte", Yujiro é um guerreiro formidável que busca desafios inigualáveis. Sua presença imponente e habilidades excepcionais fazem dele uma figura temida no mundo das artes marciais.';
            body.className = 'yujiro';
            break;
        case 'doppo':
            nomePersonagem.textContent = 'Doppo Orochi';
            descricaoPersonagem.textContent = 'Doppo Orochi, um mestre de artes marciais em "Baki", personifica a experiência e a tradição. Como o líder da Escola de Karatê Shinshinkai, Doppo é respeitado por suas habilidades excepcionais e sua dedicação ao aprimoramento pessoal e à tradição das artes marciais.';
            body.className = 'doppo';
            break;
        case 'hannayama':
            nomePersonagem.textContent = 'Hannayama Kaoru';
            descricaoPersonagem.textContent = 'Hannayama Kaoru, um formidável lutador de sumô em "Baki", personifica a força e a tradição do sumô. Como um dos lutadores mais poderosos do mundo, Hannayama destaca-se por sua técnica aprimorada e seu comprometimento com o caminho do sumô.';
            body.className = 'hannayama';
            break;
        case 'katsumi':
            nomePersonagem.textContent = 'Katsumi Orochi';
            descricaoPersonagem.textContent = 'Katsumi Orochi, um ex-presidiário e habilidoso lutador em "Baki", personifica a resiliência e a determinação. Katsumi busca redenção e aprimoramento contínuo por meio das artes marciais, enfrentando desafios e provando sua força.';
            body.className = 'katsumi';
            break;
        case 'gouki':
            nomePersonagem.textContent = 'Gouki Shibukawa';
            descricaoPersonagem.textContent = 'Gouki Shibukawa, um mestre de Jujutsu em "Baki", personifica a astúcia e a eficácia. Como um estrategista experiente, Gouki destaca-se por suas habilidades em Jujutsu e sua abordagem única para superar desafios.';
            body.className = 'gouki';
            break;
        case 'kozue':
            nomePersonagem.textContent = 'Kozue Matsumoto';
            descricaoPersonagem.textContent = 'Kozue Matsumoto, uma personagem cativante em "Baki", personifica a gentileza e a influência positiva. Sua presença na vida de Baki adiciona uma dimensão emocional à narrativa, contrastando com o mundo brutal das artes marciais.';
            body.className = 'kozue';
            break;
        case 'musashi':
            nomePersonagem.textContent = 'Musashi Miyamoto';
            descricaoPersonagem.textContent = 'Musashi Miyamoto, uma figura lendária em "Baki", personifica a maestria nas artes marciais. Baseado no famoso espadachim histórico, Musashi destaca-se por suas habilidades incomparáveis com a espada e sua busca pela verdadeira essência das artes marciais.';
            body.className = 'musashi';
            break;
        case 'retsu':
            nomePersonagem.textContent = 'Retsu Kaioh';
            descricaoPersonagem.textContent = 'Retsu Kaioh, um mestre de artes marciais em "Baki", personifica a sabedoria e a experiência. Como um dos mais respeitados mestres do mundo, Retsu destaca-se por sua compreensão profunda das artes marciais e sua busca pelo equilíbrio entre força e harmonia.';
            body.className = 'retsu';
            break;
        case 'sikorsky':
            nomePersonagem.textContent = 'Sikorsky';
            descricaoPersonagem.textContent = 'Sikorsky, um assassino habilidoso em "Baki", personifica a letalidade e a astúcia. Como um mestre na arte do assassinato, Sikorsky enfrenta desafios e adversários formidáveis, destacando-se por sua habilidade em combates corpo a corpo.';
            body.className = 'sikorsky';
            break;
    }
}
