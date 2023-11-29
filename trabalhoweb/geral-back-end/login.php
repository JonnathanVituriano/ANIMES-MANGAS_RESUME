<?php
session_start(); // Inicie a sessão para usar variáveis de sessão

$dbHost = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'config';

$conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

if ($conexao->connect_error) {
    die('Falha ao conectar: ' . $conexao->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    // Consulta SQL para verificar se o usuário existe e obter a senha
    $sql = "SELECT id, senha FROM cadastro WHERE email = ?";
    
    // Use uma declaração preparada para evitar injeção de SQL
    $stmt = $conexao->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        // Usuário encontrado, buscar a senha correspondente
        $stmt->bind_result($id, $hashedPassword);
        $stmt->fetch();

        // Verificar se a senha fornecida corresponde à senha armazenada
        if (password_verify($senha, $hashedPassword)) {
            // Senha correta, redirecionar para a página inicial
            $_SESSION['user_id'] = $id; // Armazene o ID do usuário na sessão, se necessário
            header("Location: index-inicio.html");
            exit();
        } else {
            // Senha incorreta
            echo "Senha incorreta. Tente novamente.";
        }
    } else {
        // Usuário não encontrado
        echo "Usuário não encontrado. Faça o cadastro se ainda não tiver uma conta.";
    }

    $stmt->close();
}

$conexao->close();
?>
