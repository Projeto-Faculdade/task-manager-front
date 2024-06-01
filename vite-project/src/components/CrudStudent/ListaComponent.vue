<template>
  <div >
    <div class="card_list" >
        <h3>NOME</h3>
        <h3>EMAIL</h3>
        <h3>IDIOMA</h3>
    </div>
    <div class="card_estudantes" v-for="studant in studants" :key="studant.id">
        <h4>{{ studant.name }}</h4>
        <h4>{{ studant.email }}</h4>
        <h4>{{studant.preferredLanguage}}</h4>
    </div>
  </div>
</template>
<script>

export default {
    data(){
        return{
            studants: []
        }
    },
    methods:{
        listarEstudantes(){
            this.abortController = new AbortController(); 
            const signal = this.abortController.signal;
            let url = "https://b5cced4c-3b38-4f19-b6b3-3e9155354b49.mock.pstmn.io"
            
            fetch(url + '/api/v1/students', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao obter os dados');
      }
      return response.text(); // Obtém a resposta como texto
    })
    .then(text => {
      try {
        const data = JSON.parse(text); // Tenta analisar o texto como JSON
        this.studants = data;
        
    } catch (error) {
        console.error('Erro ao analisar JSON:', error, text);
    }
})
.catch(error => {
    console.error('Erro:', error);
});
}
    }
    ,
    mounted() {
        this.listarEstudantes(); 
    },
    beforeDestroy() {
        if (this.abortController) {
            this.abortController.abort(); // Aborta a solicitação fetch se o componente for desmontado
        }
    }
}
</script>

<style scoped>
.card_list, .card_estudantes{
  color: #36769A;
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    
}
.card_estudantes{
    font-size: 12px;
}
h3{
    margin: .5rem;
    font-weight: 500;
    font-size: 18px;
}

h4{
    margin: .5rem;
    font-weight: 500;
}
</style>