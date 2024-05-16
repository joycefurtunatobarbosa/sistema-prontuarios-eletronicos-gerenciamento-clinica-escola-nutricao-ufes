<template>
  <div class="container-fluid">
    <h2 class="text-center"><b>Fila de espera</b></h2>

    <div class="row my-4">
      <!-- <div class="col d-flex justify-content-start">
        <router-link class="btn btn-primary" to="/cadastrar-paciente">Novo paciente</router-link>
      </div> -->

      <div class="col-3 d-flex align-items-center">
        <label for="filtro" class="me-2">Exibir:</label>
        <select class="form-select" id="filtro" v-model="filtro">
          <option value="Todos os Projetos" selected>Todos os Projetos</option>
          <option value="Alunos e Funcionários">Alunos e Funcionários</option>
          <option value="Cardiovascular">Cardiovascular</option>
          <option value="Materno Infantil">Materno Infantil</option>
          <option value="Obesidade">Obesidade</option>
        </select>
      </div>
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
          <td>{{ paciente.cod }}</td>
          <td>{{ paciente.dadosPessoais.nomeCompleto }}</td>
          <td>{{ paciente.motivo }}</td>
          <td>{{ paciente.projeto }}</td>
          <td>{{ paciente.status }}</td>
          <td>
            <!-- <button @click="editarAluno(aluno._id)" class="btn btn-warning me-1"> Editar </button>
            <button @click="excluirAluno(aluno._id)" class="btn btn-danger"> Excluir </button> -->
            <button @click="atenderPaciente(1, paciente.cod, paciente.nome)" class="btn btn-success me-1"> Atender </button>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "FilaPacientes",
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
      } else {
        return this.alunos.filter(paciente => paciente.projeto === this.filtro);
      }
    },
  },
  mounted() {
    this.carregarPacientes();
  },
  methods: {
    carregarAluno(cod) {
      fetch(`http://localhost:3000/buscarAluno/${cod}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          this.aluno = data.aluno;
        })
        .catch((error) => {
          console.error("Erro ao carregar dados do aluno:", error);
        });
    },
    carregarPacientes() {
      fetch("http://localhost:3000/listarPacientes", {
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
    atenderPaciente(codAluno, codPaciente, nomePaciente) {
        console.log("CodAluno:", codAluno);
        console.log("CodPaciente:", codPaciente);
        console.log("NomePaciente:", nomePaciente);
        fetch("http://localhost:3000/atenderPaciente", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                codAluno: codAluno,
                codPaciente: codPaciente,
                nomePaciente: nomePaciente
            }),
            mode: "cors",
        })
        .then((response) => response.json())
        .then((data) => {
            this.pacientes = data.pacientes;
            // Se atenderPaciente for bem-sucedido, chama a função alunoAtenderPaciente
            this.alunoAtenderPaciente(codAluno, codPaciente, nomePaciente);
        })
        .catch((error) => {
            console.error("Erro ao atender paciente:", error);
        });
    },
    alunoAtenderPaciente(codAluno, codPaciente, nomePaciente) {
        fetch("http://localhost:3000/alunoAtenderPaciente", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                codAluno: codAluno,
                codPaciente: codPaciente,
                nomePaciente: nomePaciente
            }),
            mode: "cors",
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.message);
            window.location.reload();
        })
        .catch((error) => {
            console.error("Erro ao atender paciente:", error);
        });
    },
    
  },
};
</script>

<style>
.table tbody tr {
  vertical-align: middle;
}
</style>