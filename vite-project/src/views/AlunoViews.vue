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
    components:{
        MenuComponentVue,
        NovaTaskComponentVue,
        TaskComponent
    },
    data(){
      return{
        tasks: [
          { id: 1, text: "Leer 3 páginas del libro favorito." },

        ]
      }
    }
}
</script>

<style scoped>
.task{
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>