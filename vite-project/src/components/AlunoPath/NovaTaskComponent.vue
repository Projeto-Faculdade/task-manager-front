<template>
  <div class="container_nova_task">
    <input class="input" type="text" placeholder="Nova atividade">
    <button @click="addTask">ADICIONAR</button>
  </div>
</template>

<script>
export default {
  methods: {
    addTask() {
      this.$emit('toggleNovaTask', false)
    }
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