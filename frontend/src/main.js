// Servidor Vue
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

/* Importar os meus componentes do Vue */
import Atendimentos from "./views/administracao/Atendimentos.vue";
import AlunoPacientes from "./views/administracao/AlunoPacientes.vue";
import Paciente from "./views/administracao/Paciente.vue";
import Exames from "./views/administracao/Exames.vue";
import AtendimentosDoPaciente from "./views/administracao/AtendimentosDoPaciente.vue";
import FilaPacientes from "./views/atendimentos/FilaPacientes.vue";
// import Prontuario from "./views/prontuarios/Prontuario.vue";


import CadastroAtendimento from "./views/atendimentos/CadastroAtendimento.vue";
import EditarAtendimento from "./views/atendimentos/EditarAtendimento.vue";
import ListarAlunos from "./views/alunos/ListarAlunos.vue";
import CadastroAluno from "./views/alunos/CadastroAluno.vue";
import EditarAluno from "./views/alunos/EditarAluno.vue";
import CadastroPaciente from "./views/pacientes/CadastroPaciente.vue";
import Pacientes from "./views/pacientes/Pacientes.vue";
import EditarPaciente from "./views/pacientes/EditarPaciente.vue";
import AlunosFuncionarios from "./views/preProntuarios/AlunosFuncionarios.vue";

// Roteamento das páginas
const router = createRouter({
    history: createWebHistory(),
    routes: [

        /* ADMINISTRAÇÃO */
        { path: "/", component: Atendimentos },

        /* CLÍNICA */
        // Atendimentos
        { path: "/cadastrar-atendimento", component: CadastroAtendimento },
        { path: "/editar-atendimento/:id", component: EditarAtendimento },
        { path: "/fila", component: FilaPacientes },

        // Alunos
        { path: "/alunos", component: ListarAlunos },
        { path: "/cadastrar-aluno", component: CadastroAluno },
        { path: "/editar-aluno/:id", component: EditarAluno },

        //Aluno -> Pacientes
        // { path: "/aluno-pacientes:cod", component: AlunoPacientes },
        {path: '/aluno-pacientes/:codAluno', component: AlunoPacientes, props: true},

        //Paciente
        { path: "/paciente/:codPaciente", component: Paciente, props: true },
        { path: "/exames", component: Exames },
        { path: "/paciente-atendimentos", component: AtendimentosDoPaciente },

        /* Prontuários */
        { path: "/prontuario/:cod", component: AlunosFuncionarios,  props: true},
        { path: "/alunos-funcionarios", component: AlunosFuncionarios},

        // Pacientes
        { path: "/pacientes", component: Pacientes },
        { path: "/cadastrar-paciente/:id", component: CadastroPaciente },
        { path: "/editar-paciente/:id", component: EditarPaciente },
    ]
});

// Servidor Vue
const app = createApp(App);
app.use(router);
app.mount("#app");