<template>
  <div class="container-fluid">
    <h2 class="text-center"><b>Todos os pacientes</b></h2>

    <div class="row my-4">
      <div class="col d-flex justify-content-start">
      <router-link class="btn btn-primary" to="/cadastrar-paciente">Novo paciente</router-link>
      </div>

      <!-- <div class="col-3 d-flex align-items-center">
        <label for="filtro" class="me-2">Exibir:</label>
        <select class="form-select" id="filtro" v-model="filtro">
          <option value="Todos os Projetos" selected>Todos os Projetos</option>
          <option value="Alunos e Funcionários">Alunos e Funcionários</option>
          <option value="Cardiovascular">Cardiovascular</option>
          <option value="Materno Infantil">Materno Infantil</option>
          <option value="Obesidade">Obesidade</option>
        </select>
      </div> -->
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>Nº</th>
          <th>Paciente</th>
          <th>Motivo</th>
          <th>Projeto</th>
          <th>Status</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>

        <tr v-for="paciente in pacientes" :key="paciente.cod">
          <td><b>{{ paciente.cod }}</b></td>
          <td>{{ paciente.dadosPessoais.nomeCompleto }}</td>
          <td>{{ paciente.motivo }}</td>
          <td>{{ paciente.projeto }}</td>
          <td>{{ paciente.status }}</td>
          <td>
            <router-link :to="'/editar-paciente/' + paciente.cod">
              <button class="btn btn-warning me-1" >Editar</button>
            </router-link>
            <!-- <button @click="editarPaciente(paciente.cod)" class="btn btn-warning me-1"> Editar </button> -->
            <button @click="excluirPaciente(paciente.cod)" class="btn btn-danger"> Excluir </button>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Pacientes",
  data() {
    return {
      pacientes: [],
      filtro: "Todos os Projetos",
      aluno: {}
    };
  },
  computed: {
    pacienteFiltro() {
      if (this.filtro === "Todos os Projetos") {
        return this.paciente;
      } 
      else {
        return this.alunos.filter(paciente => paciente.projeto === this.filtro);
      }
    },
  },
  mounted() {
    this.carregarPacientes();
  },
  methods: {
    carregarPacientes() {
      fetch("http://cenufes.kinghost.net:21200/app/listarPacientes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          this.pacientes = data.pacientes;
        })
        .catch((error) => {
          console.error("Erro ao carregar dados dos pacientes:", error);
        });
    },
    editarPaciente(cod) {
      fetch(`http://cenufes.kinghost.net:21200/app/buscarPaciente/${cod}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
        .then((response) => response.json())
        .catch((error) => {
          console.error("Erro ao carregar dados do paciente:", error);
        });
    },
    excluirPaciente(cod) {
      if (confirm("Deseja realmente excluir o nutricionista?")) {
        fetch(`http://cenufes.kinghost.net:21200/excluirPaciente/${cod}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Resposta do servidor:", data);
            
          })
          .catch((error) => {
            console.error("Erro ao enviar dados para o servidor:", error);
          });
      }
      this.excluirPacienteNoNutricionista();
      // window.location.reload();
    },
    excluirPacienteNoNutricionista(codNutricionista, codPaciente) {
      fetch(`http://cenufes.kinghost.net:21200/app/excluirPacienteNoNutricionista/${codNutricionista}/${codPaciente}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Resposta do servidor:", data);
          
        })
        .catch((error) => {
          console.error("Erro ao enviar dados para o servidor:", error);
        });
      window.location.reload();
    },
  },
};
</script>

<style>
.table tbody tr {
  vertical-align: middle;
}
</style>