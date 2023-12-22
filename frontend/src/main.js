// Servidor Vue
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

/* Importar os meus componentes do Vue */
import Atendimentos from "./views/atendimentos/Atendimentos.vue";
import CadastroAtendimento from "./views/atendimentos/CadastroAtendimento.vue";
import EditarAtendimento from "./views/atendimentos/EditarAtendimento.vue";
import Alunos from "./views/alunos/Alunos.vue";
import CadastroAluno from "./views/alunos/CadastroAluno.vue";
import EditarAluno from "./views/alunos/EditarAluno.vue";
import CadastroPaciente from "./views/pacientes/CadastroPaciente.vue";
import Pacientes from "./views/pacientes/Pacientes.vue";
import EditarPaciente from "./views/pacientes/EditarPaciente.vue";
import AlunosFuncionarios from "./views/preProntuarios/AlunosFuncionarios.vue";
import Cardiovascular from "./views/preProntuarios/Cardiovascular.vue";
import MaternoInfantil from "./views/preProntuarios/MaternoInfantil.vue";
import Obesidade from "./views/preProntuarios/Obesidade.vue";

// Roteamento das páginas
const router = createRouter({
    history: createWebHistory(),
    routes: [
        /* CLÍNICA */
        // Atendimentos
        { path: "/", component: Atendimentos },
        { path: "/cadastrar-atendimento", component: CadastroAtendimento },
        { path: "/editar-atendimento/:id", component: EditarAtendimento },
        // Alunos
        { path: "/alunos", component: Alunos },
        { path: "/cadastrar-aluno", component: CadastroAluno },     
        { path: "/editar-aluno/:id", component: EditarAluno },
        // Pacientes
        { path: "/pacientes", component: Pacientes },
        { path: "/cadastrar-paciente/:id", component: CadastroPaciente },
        { path: "/editar-paciente/:id", component: EditarPaciente },

        /* PROJETOS */
        { path: "/alunos-funcionarios", component: AlunosFuncionarios },
        { path: "/cardiovascular", component: Cardiovascular },
        { path: "/materno-infantil", component: MaternoInfantil },
        { path: "/obesidade", component: Obesidade },
    ]
});

// Servidor Vue
const app = createApp(App);
app.use(router);
app.mount("#app");