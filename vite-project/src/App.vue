<template>
  <div>
    <div v-if="!loginOK" class="container_cadastro">
      <div  >
        <CadastroEstudante @handleEntrar="entrar" />
        
      </div>
    </div>

    

  </div>


</template>

<script>
import CadastroEstudante from './components/CrudStudent/CadastroEstudanteComponent.vue';
export default{
  components: {
    CadastroEstudante,

  },
  data(){
    return{

      loginOK: false
    }
  },
  methods: {
    entrar(){
      
    }
  },
}
</script>

<style>

.container_cadastro{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color:#7AC9F5;

}

.container_cadastro_ok{
  background-color: #fff;
}

.task{
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  width: 100vw;
}
</style>
