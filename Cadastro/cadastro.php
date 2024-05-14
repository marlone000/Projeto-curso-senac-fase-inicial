<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">  
    <link rel="stylesheet" href="cadastro.css">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    </head>
    
    <body>
    <div class='container' >
      <div class='card'>
        <h1> Cadastrar </h1>
        
        <div id='msgError'></div>
        <div id='msgSuccess'></div>
            <form method="post" action="inserir.php" enctype="multipart/form-data">
                <div class="label-float">
                   <input name="nome" type="text" id="nome" placeholder=" " required>
                   <label id="labelNome" for="nome">Nome</label>
                </div>
    
                <div class="label-float">
                   <input name="usuario" type="text" id="usuario" placeholder=" " required>
                   <label id="labelUsuario" for="usuario">Usuário</label>
                </div>
                
                <div class="label-float">
                   <input name="senha" type="password" id="senha" placeholder=" " required>
                   <label id="labelSenha" for="senha">Senha</label>
                   <i id="verSenha" class="fa fa-eye" aria-hidden="true"></i>
                   
                </div>
    
                <div class="label-float">
                   <input name="confirmarSenha" type="password" id="confirmSenha" placeholder=" " required>
                   <label id="labelConfirmSenha" for="confirmSenha">Confirmar Senha</label>
                   <i id="verConfirmSenha" class="fa fa-eye" aria-hidden="true"></i>
                </div>
                
                <div class='justify-center'>
                   <button onclick='cadastrar()'>Cadastrar</button>
                </div>
            </form>
        
      </div>
      </div>
      <script src="cadastro.js"></script>
    </body>