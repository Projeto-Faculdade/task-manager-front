<template>
    <div>
        <div class="card_list">
            <h3>NOME</h3>
            <h3>EMAIL</h3>
            <h3>IDIOMA</h3>
        </div>
        <div class="card_estudantes" v-for="studant in studants" :key="studant.id">
            <h4>{{ studant.name }}</h4>
            <h4>{{ studant.email }}</h4>
            <h4>{{ studant.preferredLanguage }}</h4>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            studants: []
        }
    },
    methods: {
        listarEstudantes() {
            this.abortController = new AbortController();
            const signal = this.abortController.signal;
            let url = "http://localhost:5071/"

            fetch(url + 'api/v1/students', {
                method: 'GET',  
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao obter os dados');
                    }
                    return response.text(); 
                })
                .then(text => {
                    
                    try {
                        const data = JSON.parse(text);
                        this.studants = data;
                        console.log("to aqui", data)

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
            this.abortController.abort(); 
        }
    }
}
</script>

<style scoped>
.card_list,
.card_estudantes {
    color: #36769A;
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    font-weight: 500;

}

.card_estudantes {
    font-size: 12px;
}

h3 {
    margin: .5rem;
    font-weight: 500;
    font-size: 18px;
}

h4 {
    margin: .5rem;
    font-weight: 500;
}
</style>