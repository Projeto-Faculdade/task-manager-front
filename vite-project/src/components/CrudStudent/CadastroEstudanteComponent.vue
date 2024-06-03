<template>
  <div class="container">
    <div class="containerCard">
    <div class="card">
      <div class="formsContainer">
      <h1>Cadastro estudante</h1>
      <input v-model="formData.name" class="nome" type="nome" placeholder="Nome">
      <input v-model="formData.email" class="email" type="email" placeholder="Email">
      <select v-model="formData.preferredLanguage">
        <option disabled value="">Select language</option>
        <option value="en">English</option>
        <option value="pt-br">Português</option>
      </select>
      <div class="buttons">
        <div class="buttonsLog">
          <router-link to="/login">
          <button class="entrar" @click="login">LOGIN</button>
          </router-link>
          <button @click="cadastarEstudante">CADASTRAR ESTUDANTE</button>
        </div>
        <button @click="listarEstudantes">LISTAR ESTUDANTES</button>
      </div>
      </div>

      <div class="listar" v-if="listar">
        <div>
          <h1 class="listagem">Listagem</h1>
          <div class="underline"></div>
          <ListaComponent ref="listagem" />
        </div>
      </div>
      <div class="seta" v-if="listar" @click="listar = !listar">
        <h1>&lt;</h1>
      </div>
    </div>

    <div class="camposVazios" v-if="camposVazios">
      <h2>Há campos vaios</h2>
    </div>

  </div>

  </div>
</template>

<script>
import ListaComponent from './ListaComponent.vue';

export default {
  name: 'CadastroEstudanteComponent',
  components: {
    ListaComponent
  },
  data() {
      return {
        formData: {
          name: "",
          email: "",
          preferredLanguage: ""
        },
        camposVazios: false,
        listar: false
        
      }
    },
  methods: {
    listarEstudantes(){
      this.listar = !this.listar
     
    },
    cadastarEstudante(){
      let data = this.formData
      let url = "http://localhost:5071"
            

      if(data.preferredLanguage == "" || data.email == "" || data.name == ""){
        this.camposVazios = true 
        setTimeout(() => {
          this.camposVazios = false;
        }, 1500);
        return;
      }else{
        this.camposVazios = false;

      fetch(url + '/api/v1/students', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.formData)
      })
      .then(response => response.json())
      .then(data => {
        this.formData.name = ""
        this.formData.email = ""
        this.formData.preferredLanguage = ""

        this.responseMessage = data.message;
        if (this.listar !== false) {
          this.$refs.listagem.listarEstudantes()
          } 
      })
      .catch(error => {
        console.error('Erro ao enviar dados:', error);
        this.responseMessage = 'Erro ao enviar dados';
      });
      

    
    }
    


      
    },
    entrar(){
      

      this.$emit('handleEntrar', true)

    }
  },
}
</script>

<style scoped>
.listar{
  margin-left: 3rem;

}
.seta{
  margin-left: 2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.listagem{
  display: flex;
  align-items: center;
  justify-content: center;
}
.underline{
  border: .5px rgb(54, 118, 154, .3) solid;
}

.card{
  display: flex;
  padding: 3rem 2rem;
  background-color: #fff;
  
}

.formsContainer{
  display: flex;
  flex-direction: column;
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
  flex-direction: column;

}

.camposVazios{
  position: absolute; 
  top: 50%; 
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 3rem;
  border: 1px solid #36769A;
  color: #36769A;
}

.container{
  height: 100vh;
  background-color: #7AC9F5;;
}
.containerCard{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.entrar{
  color: #36769A;;
  border: 1px solid #36769A;
  background-color: #fff;
}

.entrar:hover{
  color: #fff;
}
.buttonsLog{
  display: flex;
  flex-grow: 1;

}
</style>