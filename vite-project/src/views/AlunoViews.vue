<template>
  <div class="container">
    <MenuComponentVue />
    <div class="task" v-for="task in tasks" :key="task.id">
      <TaskComponent :task="task" />
    </div>
  </div>
</template>

<script>
import MenuComponentVue from '../components/AlunoPath/MenuComponent.vue'
import NovaTaskComponentVue from '../components/AlunoPath/NovaTaskComponent.vue'
import TaskComponent from '../components/AlunoPath/TaskComponent.vue';
export default {
  components: {
    MenuComponentVue,
    NovaTaskComponentVue,
    TaskComponent
  },
  data() {
    return {
      tasks: [
        { id: 1, text: "Leer 3 páginas del libro favorito." },
      ],
      id: '',
      studentData: []
    }
  },
  created() {
    this.id = this.$route.params.id
    this.fetchStudentData();
  },
  methods: {
    fetchStudentData() {
      let url = "http://localhost:5071/"

      fetch(url + `api/v1/students/${this.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao obter os dados do aluno');
          }
          return response.text(); 
        })
        .then(text => {
          try {

            const data = JSON.parse(text)
            this.studentData = data
            console.log(this.studentData)

          } catch (err) {
            console.error('Ta dando merda', err); 
          }
        })
        .catch(error => {
          console.error('Erro ao obter os dados do aluno:', error);
        });
    }

  }
}
</script>

<style scoped>
.task {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>