// Servidor Vue
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

/* Importar os meus componentes do Vue */

/* ADMINISTRAÇÃO */
import Geral from "./views/administracao/Geral.vue";
import PacientesDoNutricionista from "./views/administracao/PacientesDoNutricionista.vue";
import Paciente from "./views/administracao/Paciente.vue";

/* ATENDIMENTOS */
import EmAtendimento from "./views/atendimentos/EmAtendimento.vue";
import FilaPacientes from "./views/atendimentos/FilaPacientes.vue";
import Historico from "./views/atendimentos/Historico.vue";

/* CLÍNICA */
// Alunos
import ListarNutricionistas from "./views/nutricionistas/ListarNutricionistas.vue";
import CadastrarNutricionista from "./views/nutricionistas/CadastrarNutricionista.vue";
import EditarNutricionista from "./views/nutricionistas/EditarNutricionista.vue";

// Pacientes
import ListarPacientes from "./views/pacientes/ListarPacientes.vue";
import CadastrarPaciente from './views/pacientes/CadastrarPaciente.vue';
import EditarPaciente from './views/pacientes/EditarPaciente.vue';

/* PRONTUÁRIOS */
// Alunos e Funcionários
import AlunosFuncionarios from "./views/prontuarios/AlunosFuncionarios.vue";


// Roteamento das páginas
const router = createRouter({
    history: createWebHistory(),
    routes: [

        /* ADMINISTRAÇÃO */
        { path: "/", component: Geral },

        /* ATENDIMENTOS */
        { path: "/andamento", component: EmAtendimento },
        { path: "/fila", component: FilaPacientes },
        { path: "/historico", component: Historico },
        
        /* CLÍNICA */
        // Nutricionistas
        { path: "/nutricionistas", component: ListarNutricionistas },
        { path: "/cadastrar-nutricionista", component: CadastrarNutricionista },
        { path: "/editar-nutricionista/:cod", component: EditarNutricionista, props: true },
        { path: '/pacientes-nutriciosta/:cod', component: PacientesDoNutricionista, props: true },

        //Paciente
        { path: "/paciente/:cod", component: Paciente, props: true },
        { path: "/pacientes", component: ListarPacientes },
        { path: "/cadastrar-paciente", component: CadastrarPaciente },
        { path: "/editar-paciente/:cod", component: EditarPaciente, props: true },

        /* PRONTUÁRIOS */
        // Alunos e Funcionários
        { path: "/alunos-funcionarios", component: AlunosFuncionarios},
        { path: "/prontuario/:codPaciente/:cod", component: AlunosFuncionarios,  props: true},
    ]
});

// Servidor Vue
const app = createApp(App);
app.use(router);
app.mount("#app");