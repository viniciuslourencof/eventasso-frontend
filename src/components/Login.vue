<script setup>

</script>

<template >

  <div class="wrapper">
    <form action="" class="login">
      <div class="campos">
        <div class="campo">
          <label for="">Nome de Usuário</label>
          <input type="text" name="" id="">
        </div>
        <div class="campo">
          <label for="">Senha</label>
          <input type="senha" name="" id="">
        </div>
        <button>Entrar</button>
        <a href="">Não tenho uma conta, quero me registrar.</a>
      </div>
    </form>
  </div>

</template>

<style scoped>  
  .wrapper {
    display: flex;    
    align-items: center;
    justify-content: center;
  }

  .login {    
    width: 50vw;
    height: 50vh;    
    display: flex;
    flex-direction: column;
    align-items: center;  
    justify-content: center;        
    background-color: #191825;    
  }

  .campos {
    width: 50%;
    display: flex;
    flex-direction: column;    
    gap: 1rem; 
  }

  .campo {
    display: flex;
    flex-direction: column;    
  }  

  input {
    width: 100%;
  }

  button {
    width: 100%;
  }

</style>
 