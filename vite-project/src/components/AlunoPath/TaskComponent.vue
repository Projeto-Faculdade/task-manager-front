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
                    <div class="lixo icone">
                        <Icon icon="mdi:trash-outline" />
                    </div>
                    <div class="editar icone" @click="editTask">
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
        saveEdit() {

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
    width: 1000px;
    background-color: #D9D9D9;
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
</style>