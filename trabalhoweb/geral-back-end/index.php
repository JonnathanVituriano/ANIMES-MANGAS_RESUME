<?php
include('conexao.php');

session_start(); // Certifique-se de chamar session_start() no início do seu script se ainda não estiver sendo chamado.

// Verifica se o usuário está logado
if (isset($_SESSION['login'])) {

    // Permite que o usuário deixe um comentário
    // ...

    // Verifica se o usuário está tentando dar like
    if (isset($_GET['like'])) {
        $postId = $_GET['like'];
        // Lógica para processar o like, por exemplo, atualizar o banco de dados
        echo "Like registrado!";
    }

    // Verifica se o usuário está tentando dar deslike
    if (isset($_GET['deslike'])) {
        $postId = $_GET['deslike'];
        // Lógica para processar o deslike, por exemplo, atualizar o banco de dados
        echo "Deslike registrado!";
    }

} else {
    // Exibe uma mensagem de erro
    echo "Você precisa estar logado para dar like ou deslike.";
}


// Lógica para processar likes e dislikes
if (isset($_GET['like'])) {
    $postId = $_GET['like'];
    $conn->query("UPDATE posts SET likes = likes + 1 WHERE id = $postId");
}

if (isset($_GET['dislike'])) {
    $postId = $_GET['deslike'];
    $conn->query("UPDATE posts SET deslikes = deslikes + 1 WHERE id = $postId");
}

// Consulta para obter os posts
$result = $conn->query("SELECT * FROM posts");

// Exibir os posts
while ($row = $result->fetch_assoc()) {
    echo "<div>";
    echo "<h2>" . $row['Quantidade de Like e Deslikes'] . "</h2>";
    echo "<p>Likes: " . $row['likes'] . " | Deslikes: " . $row['deslikes'] . "</p>";
    echo "<a href='index.php?like=" . $row['id'] . "'>Like</a>";
    echo "<a href='index.php?deslike=" . $row['id'] . "'>Deslike</a>";
    echo "</div>";
}

// Fechar a conexão
$conn->close();
?>
