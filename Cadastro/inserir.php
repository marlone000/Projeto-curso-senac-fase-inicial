<?php 
include "../conexão/conexao.php";
$nome = $_POST['nome'];
$usuario = $_POST['usuario'];
$senha = $_POST['senha'];

$sql = "insert into pi_anime (nome, usuario, senha) values ('$nome', '$usuario', '$senha')";

mysqli_query($conexao, $sql);

mysqli_close($conexao);
header('../login/login.html');

?>