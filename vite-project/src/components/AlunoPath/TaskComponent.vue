    <template>
        <div>
            <div class="container_task" v-if="isEditing">
                <input class="input" type="text" v-model="editedText" @keyup.enter="saveEdit" />
                <div class="editar icone">
                    <Icon icon="ic:twotone-save-alt" />
                </div>
            </div>

            <div v-else class="container_task" >
                <div>{{ task.name }}</div>
                <div class="icones">
                    <div class="lixo icone" @click="deletar(task.id)">
                        <Icon icon="mdi:trash-outline" />
                    </div>
                    <div class="editar icone" @click="saveEdit(task.id)">
                        <Icon icon="material-symbols:edit-outline" />
                    </div>
                </div>
            </div>
        </div>
    </template>

<script>
import { Icon } from '@iconify/vue';

export default {
    props: {
        task: Object,
    },
    data() {
        return {
            isEditing: false,
            editedText: this.task.name,
        };
    },
    components: {
        Icon
    },
    methods: {
        editTask() {
            this.isEditing = true;
        },
        deletar(id){
            let url = `http://localhost:5071/api/v1/tasks/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao excluir a tarefa');
                }
                this.$emit('updateTask')

            })
            .catch(error => {
                console.error('Erro ao excluir a tarefa:', error);
            });
        },
        saveEdit(id) {
            console.log()
        }
    }
}
</script>

<style scoped>
.container_task {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 2rem;
    max-width: 1000px;
    width: 1000px;
    background-color: #D9D9D9;
    margin: 0 auto;
}

.icones {
    display: flex;
    align-items: center;
    justify-content: center;
}

.icone {
    margin: 1rem;
    color: #fff;
    cursor: pointer;
    padding: .5rem 1rem;
    transition: .2s ease-in-out;
}

.lixo {
    background-color: rgb(255, 66, 66);
}

.editar {
    background-color: rgb(38, 169, 38);
}

.icone:hover {
    transform: scale(1.1);
}

.input{
    font-size: 1.5rem;
    width: 100%;
    padding: 1rem;
    border: none;
    background-color: #898989;
}
.input:focus{
    outline: none;
}

@media (max-width: 768px) {
    /* Estilos específicos para dispositivos com largura máxima de 768px */
    .container_task {
        flex-direction: column; /* Altera a direção do flexbox para coluna */
        padding: 1rem;
    }

    .icone {
        margin: 0.5rem; /* Diminui a margem entre os ícones */
    }
}

@media (max-width: 1000px) {
    /* Estilos específicos para dispositivos com largura máxima de 768px */
    .container_task {
        width: 650px;

        flex-direction: column; /* Altera a direção do flexbox para coluna */
        padding: 1rem;
    }

    .icone {
        margin: 0.5rem; /* Diminui a margem entre os ícones */
    }
}

@media (max-width: 650px) {
    /* Estilos específicos para dispositivos com largura máxima de 768px */
    .container_task {
        width: 400px;
        flex-wrap: wrap;
    }
}
</style>