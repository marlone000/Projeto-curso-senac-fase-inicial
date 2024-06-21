<?php 
include "../conexão/conexao.php";
$usuario = $_POST['usuario'];
$senha = $_POST['senha'];
//tem que dar um select se retornar algo quer dizer que esta valido, usando if
$sql = "select usuario, senha from usuarios WHERE values ('$usuario', '$senha')";

mysqli_query($conexao, $sql);

mysqli_close($conexao);
header('location:../Projeto-Final/projeto-final.html');

?>