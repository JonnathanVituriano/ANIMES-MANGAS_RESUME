<?php
// Inicia a sessão
session_start();

// Função para verificar se o usuário está logado
function isUserLoggedIn() {
    return isset($_SESSION['user_id']);
}

// Função para fazer o login (um exemplo básico)
function login($user_id) {
    $_SESSION['user_id'] = $user_id;
}

// Função para fazer o logout
function logout() {
    session_unset();
    session_destroy();
}

// Função para adicionar um comentário
function addComment($user_id, $comment) {
    // Adicione lógica para armazenar o comentário no banco de dados
    // Aqui, apenas simularemos o armazenamento em um array
    $comments = isset($_SESSION['comments']) ? $_SESSION['comments'] : array();
    $comments[] = array('user_id' => $user_id, 'comment' => $comment);
    $_SESSION['comments'] = $comments;
}

// Exemplo de uso
if (isUserLoggedIn()) {
    // Usuário está logado, pode adicionar comentários

    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['comment'])) {
        $comment = $_POST['comment'];
        $user_id = $_SESSION['user_id'];

        // Adiciona o comentário
        addComment($user_id, $comment);
    }
?>
    <!-- Formulário de comentários -->
    <form method="post" action="">
        <label for="comment">Comentário:</label><br>
        <textarea name="comment" id="comment" rows="4" cols="50"></textarea><br>
        <input type="submit" value="Adicionar Comentário">
    </form>
<?php
} else {
    // Usuário não está logado, exibe uma mensagem ou redireciona para a página de login
    echo "Você precisa estar logado para adicionar comentários.";
}
?>

<!-- Exibição dos comentários -->
<h2>Comentários:</h2>
<?php
if (isset($_SESSION['comments'])) {
    foreach ($_SESSION['comments'] as $comment) {
        echo "<p><strong>Usuário:</strong> {$comment['user_id']}</p>";
        echo "<p><strong>Comentário:</strong> {$comment['comment']}</p>";
        echo "<hr>";
    }
} else {
    echo "<p>Nenhum comentário disponível.</p>";
}
?>
