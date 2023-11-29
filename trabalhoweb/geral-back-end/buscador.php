<?php

include('conexao.php');

// Função de pesquisa
function search($query, $conexao) {
    $results = [];

    // Consulta SQL para buscar termos no banco de dados
    $sql = "SELECT buscador FROM pesquisa WHERE buscador LIKE '%$query%'";
    $result = $conexao->query($sql);

    // Verifica se a consulta foi bem-sucedida
    if ($result) {
        while ($row = $result->fetch_assoc()) {
            $results[] = $row['buscador'];
        }
    }

    return $results;
}

// Exemplo de uso
if (isset($_GET['query'])) {
    $query = $_GET['query'];

    // Adiciona a pesquisa ao banco de dados
    $insertSql = "INSERT INTO pesquisa (buscador) VALUES ('$query')";
    $conexao->query($insertSql);

    $searchResults = search($query, $conexao);

    // Exibir resultados
    echo "<h2>Resultados da busca para '{$query}':</h2>";

    if (empty($searchResults)) {
        echo "<p>Nenhum resultado encontrado.</p>";
    } else {
        foreach ($searchResults as $result) {
            echo "<p>{$result}</p>";
        }
    }
} else {
    echo "<p>Insira uma consulta para pesquisar.</p>";
}

?>
