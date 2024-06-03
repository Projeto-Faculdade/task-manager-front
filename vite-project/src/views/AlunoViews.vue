<template>
  <div class="container">
    <MenuComponentVue :studant="studentData" @handleChange="change" @updateChangeLanguage="changeLanguage" @updateTasks="novaTask"/>
    <div class="task" v-for="task in tasks" :key="task.id">
      <TaskComponent @updateTask="novaTask" :task="task" />
    </div>

    <div v-if="vazioTask" class="vazio_task">{{ $t('salutation.AtividadeVazia') }}</div>
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
      language: '',
      tasks: [],
      vazioTask: true,
      id: '',
      studentData: []
      
    }
  },
  created() {
    this.id = this.$route.params.id
    this.fetchStudentData();
    this.novaTask()
  },
  methods: {
    changeLanguage(){
      this.novaTask()
    },
    change(){
      this.novaTask()
    },
    novaTask(){

      let url = "http://localhost:5071/"

      fetch(url + `api/v1/students/${this.id}/tasks`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': localStorage.getItem('student_preferredLanguage')
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
            this.tasks = data
            this.vazioTask = this.tasks.length === 0;

          } catch (err) {
            console.error('Ta dando merda', err); 
          }
        })
        .catch(error => {
          console.error('Erro ao obter os dados do aluno:', error);
        });

    },
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
            this.language = this.studentData.preferredLanguage
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

.vazio_task{
  color: #36759a79;
  font-weight: 600;
  font-size: 1.5rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>