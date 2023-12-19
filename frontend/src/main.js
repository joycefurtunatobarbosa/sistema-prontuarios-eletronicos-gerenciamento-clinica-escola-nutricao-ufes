// Servidor Vue
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

/* Importar os meus componentes do Vue */
import Atendimentos from "./views/atendimentos/Atendimentos.vue";
import AlunosFuncionarios from "./views/alunos/AlunosFuncionarios.vue";
import CadastroAluno from "./views/alunos/CadastroAluno.vue";
import EditarAluno from "./views/alunos/EditarAluno.vue";
import CadastroPaciente from "./views/pacientes/CadastroPaciente.vue";
import PreProntuario from "./views/prontuarios/PreProntuario.vue";

// Roteamento das páginas
const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Página inicial
        { path: "/", component: Atendimentos },
        // Alunos e Funcionários
        { path: "/alunos-funcionarios", component: AlunosFuncionarios },
        { path: "/cadastrar-aluno", component: CadastroAluno },
        { path: "/editar-aluno/:id", component: EditarAluno },
        // Pacientes
        { path: "/cadastrar-paciente", component: CadastroPaciente },
        // Prontuários
        { path: "/cadastrar-pre-prontuario", component: PreProntuario },
    ]
});

// Servidor Vue
const app = createApp(App);
app.use(router);
app.mount("#app");