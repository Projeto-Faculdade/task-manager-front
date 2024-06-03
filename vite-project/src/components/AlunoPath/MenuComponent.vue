<template>
    <div class="container">
        <div class="frase">
            <h1>{{ $t('salutation.Texto') }}</h1>
        </div>

        <div class="container_person">
            <div class="infos">
                <h1>{{ studant.name }}</h1>
                <h4>{{ $t('salutation.Language') }}</h4>
                <button class="button" @click="handleButtonClick">{{ $t('salutation.ChangeButton') }}</button>
            </div>

            <div class="buttons">
                <div @click="addNovaTask" class="mais">
                    <Icon icon="ph:plus-bold" />
                </div>
            </div>

            <div class="nova_task" v-if="novaTask">
                <NovaTaskComponentVue :newTask="studant" @updateTasks="fetchUpdatedTasks" @toggleNovaTask="addNovaTask" />
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import NovaTaskComponentVue from './NovaTaskComponent.vue';

export default {
    props: {
        studant: Object
    },
    components: {
        Icon,
        NovaTaskComponentVue
    },
    data() {
        return {
            novaTask: false,
            language: this.studant.preferredLanguage
        }
    },
    methods: {
        handleButtonClick() {
            this.changeLanguage();
            this.putStudant();
        },
        addNovaTask() {
            this.novaTask = !this.novaTask;
        },
        fetchUpdatedTasks() {
            this.$emit('updateTasks');
        },
        changeLanguage() {
            this.language = this.language === 'en' ? 'pt' : 'en';
            this.$i18n.locale = this.language;
        },
        putStudant() {
            const url = `http://localhost:5071/api/v1/students/${this.studant.id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    preferredLanguage: this.language,
                    name: this.studant.name,
                    email: this.studant.email
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao atualizar a tarefa');
                }
                return response.text(); // ou response.json();
            })
            .then(text => {
                console.log('Resposta do servidor:', text);
                if (text) {
                    const updatedStudant = JSON.parse(text);
                    this.$emit('updateChangeLanguage');
                } else {
                    console.warn('Resposta vazia recebida do servidor');
                }
            })
            .catch(error => {
                console.error('Erro ao atualizar a tarefa:', error);
            });
    }}
}
</script>

<style scoped>
.container_person {
    padding: 2rem 4rem;
    justify-content: space-between;
    align-items: center;
    display: flex;
    color: #36769A;
    background-color: #7AC9F5;
    width: 100vw;
}

.frase {
    padding: 1rem 0;
    color: #7AC9F5;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #36769A;
}

h4 {
    font-weight: 400;
}

.mais {
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

.mais:hover {
    color: #fff;
    background-color: #36769A;
}

.nova_task {
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.button {
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    color: #36769A;
    border: none;
    padding: .5rem;
    transition: .2s ease-in-out;
}

.button:hover {
    color: #fff;
    background-color: #36769A;
}
</style>
