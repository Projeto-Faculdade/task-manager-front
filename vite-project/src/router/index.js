import { createRouter, createWebHistory } from 'vue-router'

import CadastroEstudanteComponent from '../components/CrudStudent/CadastroEstudanteComponent.vue';
import LoginComponent from '../components/LoginComponent.vue';
import AlunoViews from '../views/AlunoViews.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      component: LoginComponent,
      
    },
    {
      path: "/cadastro",
      component: CadastroEstudanteComponent,
    },
    {
      path: "/aluno/:id",
      name: 'aluno',
      component: AlunoViews,
    },
  ],
});
  
export default router
