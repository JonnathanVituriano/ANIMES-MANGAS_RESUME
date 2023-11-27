<?php

$dbHost = 'Localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'fav_like_dislike';

$conexao = new mysqli($dbHost,$dbUsername,$dbPassword,$dbName);

if ($conexao->connect_errno)
{
    echo "Falha ao conectar :( .";
}
else
{
    echo "A conexão foi um sucesso!";
}

?>