<template>
  <div class="container-fluid">
    <h2 class="text-center"><b>Em andamento</b></h2>

    <div class="row my-4">
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
          <th>Nutricionista</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>

        <tr v-for="paciente in pacientesEmAtendimento" :key="paciente.cod">
          <td><b>{{ pacientesEmAtendimento.indexOf(paciente) + 1 }}</b></td>
          <td>{{ paciente.dadosPessoais.nomeCompleto }}</td>
          <td>{{ paciente.motivo }}</td>
          <td>{{ paciente.projeto }}</td>
          <td v-if="paciente.nutricionista">{{ paciente.nutricionista.nome }}</td>

          <td>
            <a :href="`${server_frontend_url}/paciente/${paciente.cod}`" class="btn btn-success" target="_blank">Ver</a>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
import { server_frontend_url, server_backend_url } from "../../server_url.js";

export default {
  name: "EmAtendimento",
  data() {
    return {
      server_frontend_url: server_frontend_url,
      pacientes: [],
      nutricionista: {},
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
    pacientesEmAtendimento() {
      return this.pacientes.filter(paciente => paciente.status === 'Em atendimento');
    }
  },
  mounted() {
    this.carregarPacientes();
  },
  methods: {
    carregarAluno(cod) {
      fetch(`${server_backend_url}/buscarAluno/${cod}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          this.aluno = data.aluno;
          this.nutricionista = this.aluno.nutricionista;
        })
        .catch((error) => {
          console.error("Erro ao carregar dados do aluno:", error);
        });
    },
    carregarPacientes() {
      fetch(`${server_backend_url}/listarPacientes`, {
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
      if (window.confirm('Tem certeza que deseja atender este paciente?')) {
          fetch(`${server_backend_url}/atenderPaciente`, {
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
              this.alunoAtenderPaciente(codAluno, codPaciente, nomePaciente);
          })
          .catch((error) => {
              console.error("Erro ao atender paciente:", error);
          });
      } else {
          console.log('O usuário cancelou o atendimento do paciente.');
      }
    },
    alunoAtenderPaciente(codAluno, codPaciente, nomePaciente) {
        fetch(`${server_backend_url}/alunoAtenderPaciente`, {
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