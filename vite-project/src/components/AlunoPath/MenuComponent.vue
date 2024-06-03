<template>
    <div class="cantainer">

        <div class="infos">
            <h1>Amanda Souza</h1>
            <h4>Espanhol</h4>
        </div>


        <div class="buttons">
            <div @click="addNovaTask" class="mais"><Icon icon="ph:plus-bold" /></div>
        </div>

        <div class="nova_task" v-if="novaTask">
            <NovaTaskComponentVue @toggleNovaTask="addNovaTask"/>
        </div>

        

    </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import NovaTaskComponentVue from './NovaTaskComponent.vue';

export default {
    
    components: {
        Icon,
        NovaTaskComponentVue
    },
    data(){
        return{
            novaTask: false
        }
    },
    methods: {
        addNovaTask(){
            this.novaTask = !this.novaTask
        },
        
    },


}
</script>

<style scoped>

.cantainer{
    padding: 4rem;
    justify-content: space-between;
    align-items: center;
    display: flex;
    color: #36769A;
    background-color: #7AC9F5;
    width: 100vw;
}

h4{
    font-weight: 400;
}

.mais{
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    padding: 1rem;
    background-color: #fff;
    transition: .2s ease-in-out;
}

.mais:hover{
    color: #fff;
    background-color: #36769A;

}

.nova_task {
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>