<template>
  <div class="container-fluid">
    <h2 class="text-center"><b>Todos os pacientes</b></h2>

    <div class="row my-4">
      <div class="col d-flex justify-content-start">
        <router-link class="btn btn-primary" to="/cadastrar-aluno">Novo paciente</router-link>
      </div>

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
          <th>Aluno</th>
          <th>Matrícula</th>
          <th>Email</th>
          <th>Celular</th>
          <th>Projeto</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>

        <tr v-for="aluno in alunosFiltro" :key="aluno._id">
          <td>{{ aluno.cod }}</td>
          <td>{{ aluno.nome }}</td>
          <td>{{ aluno.matricula }}</td>
          <td>{{ aluno.email }}</td>
          <td>{{ aluno.celular }}</td>
          <td>{{ aluno.projeto }}</td>
          <td>
            <button @click="editarAluno(aluno._id)" class="btn btn-warning me-1"> Editar </button>
            <button @click="excluirAluno(aluno._id)" class="btn btn-danger"> Excluir </button>
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
      alunos: [],
      filtro: "Todos os Projetos"
    };
  },
  computed: {
    alunosFiltro() {
      if (this.filtro === "Todos os Projetos") {
        return this.alunos;
      } else {
        return this.alunos.filter(aluno => aluno.projeto === this.filtro);
      }
    },
  },
  mounted() {
    this.carregarAlunos();
  },
  methods: {
    carregarAlunos() {
      fetch("http://localhost:3000/listarAlunos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          this.alunos = data.alunos;
        })
        .catch((error) => {
          console.error("Erro ao carregar dados dos alunos:", error);
        });
    },
    excluirAluno(id) {
      console.log("Editar aluno com ID:", id);
      if (confirm("Deseja realmente excluir o aluno?")) {
        fetch("http://localhost:3000/excluirAluno", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
          mode: "cors",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Resposta do servidor:", data);
            this.carregarAlunos();
          })
          .catch((error) => {
            console.error("Erro ao enviar dados para o servidor:", error);
          });
      }
    },
    editarAluno(id) {
      this.$router.push({ path: `/editar-aluno/${id}` });
    },
  },
};
</script>

<style>
.table tbody tr {
  vertical-align: middle;
}
</style>