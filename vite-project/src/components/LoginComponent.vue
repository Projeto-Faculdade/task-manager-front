<template>
  <div class="container">
    <div class="card">
      <h1>Entrar</h1>
      <input class="idioma" v-model="formData.email" type="nome" placeholder="Email">
      <div class="buttons">
        
          <button @click="fazerLogin">ENTRAR</button>
       
        <router-link to="/cadastro">
          <button class="cadastro" @click="entrar">CADASTRAR</button>
        </router-link>
      </div>
    </div>

    <div class="campoNaoEncontrado" v-if="campoNaoEncontrado">
      <h2>Dados não encontrados</h2>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      formData: {
        email: "",
      },
      campoNaoEncontrado: false
    }
  },
  methods: {
    dadosnaoencontrados(){
        this.campoNaoEncontrado = true
        setTimeout(() => {
          this.campoNaoEncontrado = false;
        }, 1500);
        
    },
    fazerLogin() {
      let url = "http://localhost:5071/"
      let email = this.formData.email

      if(email === ''){
        this.dadosnaoencontrados()
      return
      }

    
      fetch(url + 'api/v1/students/'+ email, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) {
          this.dadosnaoencontrados()
            
            throw new Error('Erro ao obter os dados');
          }
          return response.json();
        })
        .then(data => {
          if (data && data.id) {
            this.$router.push({ name: 'aluno', params: { id: data.id } });
          } else {
            this.dadosnaoencontrados();
          }
          
          localStorage.setItem("student_preferredLanguage", data.preferredLanguage)
        })
        .catch(error => {
          console.error('Erro:', error);
          this.dadosnaoencontrados();
        });
    },
  },


}
</script>

<style scoped>
.container {
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #7AC9F5;
}

.card {
  width: 30%;
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;
  background-color: #fff;

}

h1 {
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  color: #36769A;
}

input,
select {
  width: 100%;
  color: #36769A;
  margin: .5rem .3rem;
  padding: .5rem;
  border: none;
  background-color: #D9D9D9;
}

button {
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

button:hover {
  background-color: #36769A;
}

input:focus {
  outline: none;
  border: none;
}

input::placeholder {
  color: #36769A;
  /* Cor do placeholder */
}

.buttons {

  width: 100%;
  display: flex;
  flex-direction: column;
}

.cadastro {
  color: #36769A;
  ;
  border: 1px solid #36769A;
  background-color: #fff;
}

.campoNaoEncontrado{
  position: absolute; 
  top: 50%; 
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 3rem;
  border: 1px solid #36769A;
  color: #36769A;
}
</style>