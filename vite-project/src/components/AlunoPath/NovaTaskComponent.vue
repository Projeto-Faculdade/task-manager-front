<template>
  <div class="container_nova_task">
    <input class="input" type="text" v-model="dataTasks.name_Pt" placeholder="Nova atividade Portugues">
    <input class="input" type="text" v-model="dataTasks.name_En" placeholder="New activity English">
    <input class="input" type="text" v-model="dataTasks.course" :placeholder="$t('salutation.Course')">
    <button @click="addTask">{{ $t('salutation.LabelAdd') }}</button>
  </div>
</template>

<script>
export default {
  props: {
    newTask: Object
  },
  data() {
    return {
      dataTasks: {
        name_Pt: '',
        name_En: '',
        course: '',
        limitDate: '',
        studentId: '',
      },
      language: this.newTask.preferredLanguage

    }
  },
  methods: {
    addTask() {
      const currentDate = new Date();
      this.dataTasks.limitDate = currentDate.toISOString();
      this.dataTasks.studentId = this.newTask.id

      let url = "http://localhost:5071/"
      fetch(url + 'api/v1/tasks', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.dataTasks)
      })
        .then(response => response.json())
        .then(data => {
          this.resetForm();
          this.$emit('toggleNovaTask', false)
          this.$emit('updateTasks')
        })
        .catch(error => {
          console.error('Erro ao enviar dados:', error);
          this.responseMessage = 'Erro ao enviar dados';
        });

    },

    resetForm() {
      this.dataTasks.name_Pt = '';
      this.dataTasks.name_En = '';
      this.dataTasks.course = '';
      this.dataTasks.limitDate = '';
      this.dataTasks.studentId = '';
    },
  },
}
</script>

<style scoped>
.container_nova_task {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #fff;
}

input {
  font-size: 18px;
  width: 500px;
  color: #36769A;
  margin: .5rem .3rem;
  padding: .5rem;
  border: none;
  background-color: #D9D9D9;
}

input:focus {
  outline: none;
  border: none;
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
}

button:hover {
  background-color: #36769A;
}
</style>