// Servidor Vue
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

/* Importar os meus componentes do Vue */

/* ADMINISTRAÇÃO */
import Geral from "./views/administracao/Geral.vue";

/* ATENDIMENTOS */
import PacientesDoNutricionista from "./views/atendimentos/PacientesDoNutricionista.vue";
import Paciente from "./views/atendimentos/Paciente.vue";
import FilaPacientes from "./views/atendimentos/FilaPacientes.vue";

/* CLÍNICA */
// Alunos
import ListarNutricionistas from "./views/nutricionistas/ListarNutricionistas.vue";
import CadastroNutricionista from "./views/nutricionistas/CadastroNutricionista.vue";
import EditarNutricionista from "./views/nutricionistas/EditarNutricionista.vue";

// Pacientes
import Pacientes from "./views/pacientes/Pacientes.vue";

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
        { path: "/andamento", component: FilaPacientes },
        { path: "/fila", component: FilaPacientes },
        { path: "/historico", component: FilaPacientes },
        
        /* CLÍNICA */
        // Nutricionistas
        { path: "/nutricionistas", component: ListarNutricionistas },
        { path: "/cadastrar-nutricionista", component: CadastroNutricionista },
        { path: "/editar-nutricionista/:id", component: EditarNutricionista },
        { path: '/pacientes-nutriciosta/:cod', component: PacientesDoNutricionista, props: true },

        //Paciente
        { path: "/pacientes", component: Pacientes },
        { path: "/paciente/:cod", component: Paciente, props: true },

        /* PRONTUÁRIOS */
        // Alunos e Funcionários
        { path: "/alunos-funcionarios", component: AlunosFuncionarios},
        { path: "/prontuario/:cod", component: AlunosFuncionarios,  props: true},
    ]
});

// Servidor Vue
const app = createApp(App);
app.use(router);
app.mount("#app");