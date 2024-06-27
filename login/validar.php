<?php
include "../conexão/conexao.php";
$usuario = $_POST['usuario'];
$senha = $_POST['senha'];
 
//tem que dar um select se retornar algo quer dizer que esta valido, usando if
$sql = "select usuario, senha from usuarios WHERE (usuario = '$usuario') and (senha = '$senha') LIMIT 1";
$query = mysqli_query($conexao, $sql);
 
if (mysqli_num_rows($query) != 1) {
    // Mensagem de erro quando os dados são inválidos e/ou o usuário não foi encontrado
    echo "Login inválido!"; exit;
} else {
    // Salva os dados encontados na variável $resultado
    $resultado = mysqli_fetch_assoc($query);
}
 
mysqli_close($conexao);
header('location:../Projeto-Final/projeto-final.html');
 
?>