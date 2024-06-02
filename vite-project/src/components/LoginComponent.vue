<template>
  <div class="container">
    <div class="card">
      <h1>Entrar</h1>
      <input class="idioma" type="nome" placeholder="Email">
      <select v-model="formData.preferredLanguage">
        <option disabled value="">Select language</option>
        <option value="en">English</option>
        <option value="pt-br">Português</option>
        <option value="sp">Spanish</option>
      </select>
      <div class="buttons">
        <router-link to="/aluno">
          <button @click="fazerLogin">ENTRAR</button>
        </router-link>
        <router-link to="/cadastro">
        <button class="cadastro" @click="entrar">CADASTRAR</button>
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        formData: {
          email: "",
          preferredLanguage: ""
        }        
      }
    },
  methods: {
    fazerLogin(){
    this.$emit('handleEntrarAluno', true)
    },
  },
  

}
</script>

<style scoped>
.container{
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #7AC9F5;
}
.card{
  width: 30%;
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;
  background-color: #fff;
  
}
h1{
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  color: #36769A;
}

input, select{
  width: 100%;
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
  width: 100%;

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

.buttons {
  
  width: 100%;
  display: flex;
  flex-direction: column;
}

.cadastro{
  color: #36769A;;
  border: 1px solid #36769A;
  background-color: #fff;
}
</style>