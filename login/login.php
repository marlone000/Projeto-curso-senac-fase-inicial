<!DOCTYPE html>
<html lang="pt_br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <title>Login Anime Code</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</head>
<body>
    <div class="wrapper">
        <form method="post" action="validar.php" enctype="multipart/form-data">
            <h1>Login</h1>
            <div class="input-box">
                <input type="text" placeholder="Usuario" id="usuario" name="usuario">
                <i class='bx bxs-user'></i>
            </div>
            <div class="input-box">
                <input type="password" placeholder="Senha" id="senha" name="senha" required>
                <i class='bx bxs-lock-alt'></i>
            </div>
             <button type="submit" class="btn">Login</button>
            <div class="register-link">
                <p>Não tem uma conta?<a href="../Cadastro/cadastro.php">Cadastre-se</a></p>
            </div>
 
        </form>
</body>
</html>