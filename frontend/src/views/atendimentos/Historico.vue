<template>
  <div class="container-fluid">
    <h2 class="text-center"><b>Histórico de atendimentos</b></h2>

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
          <th>Nutricionista</th>
          <th>Projeto</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>

        <tr v-for="paciente in pacientesHistorico" :key="paciente.cod">
          <td><b>{{ pacientesHistorico.indexOf(paciente) + 1 }}</b></td>
          <td>{{ paciente.dadosPessoais.nomeCompleto }}</td>
          <td>{{ paciente.motivo }}</td>
          <td v-if="paciente.nutricionista">{{ paciente.nutricionista.nome }}</td>
          <td>{{ paciente.projeto }}</td>
          <td>
            <a :href="`http://cenufes.kinghost.net:21200/paciente/${paciente.cod}`" class="btn btn-success" target="_blank">Ver</a>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Historico",
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
    pacientesHistorico() {
      return this.pacientes.filter(paciente => paciente.status === 'Finalizado');
    }
  },
  mounted() {
    this.carregarPacientes();
  },
  methods: {
    carregarAluno(cod) {
      fetch(`http://cenufes.kinghost.net:21200/app/buscarAluno/${cod}`, {
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
    atenderPaciente(codAluno, codPaciente, nomePaciente) {
      if (window.confirm('Tem certeza que deseja atender este paciente?')) {
          fetch("http://cenufes.kinghost.net:21200/app/atenderPaciente", {
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
        fetch("http://cenufes.kinghost.net:21200/app/alunoAtenderPaciente", {
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