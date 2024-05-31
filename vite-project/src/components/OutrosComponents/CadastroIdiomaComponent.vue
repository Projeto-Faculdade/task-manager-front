<template>
  <div class="card">
    <h1>Cadastro estudante</h1>
    <input class="idioma" type="nome" placeholder="Idioma">
    <select>
        <option>Ingles</option>
    </select>
    <div class="buttons">
    <button @click="fazerLogin">FAZER LOGIN</button>
    <button @click="entrar">CADASTRAR</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fazerLogin(){
    this.$emit('handleEntrarAluno', true)
    },
  },
  

}
</script>

<style scoped>
.card{
  
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem ;
  background-color: #fff;
  
}
h1{
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  color: #36769A;
}

input, select{
  color: #36769A;
  margin: .5rem .3rem;
  padding: .5rem;
  border: none;
  background-color: #D9D9D9;
}

button{
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  background-color: #7AC9F5;
  padding: 1rem;
  margin: .3rem;
  border: none;
  color: #fff;
  transition: .2s ease-in-out;
  flex-grow: 1;

}

button:hover{
  background-color: #36769A;
}
input:focus{
  outline: none;
  border: none;
}
input::placeholder {
  color:  #36769A; /* Cor do placeholder */
}

.buttons{
  display: flex;
  justify-content: space-around;
}
</style>