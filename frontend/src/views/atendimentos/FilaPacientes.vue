<template>
  <div class="container-fluid">
    <h2 class="text-center"><b>Fila de pacientes</b></h2>

    <div class="row my-4">
      <div class="col d-flex justify-content-start">
        <router-link class="btn btn-primary" to="/cadastrar-aluno">Novo aluno</router-link>
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
          <th>Nome</th>
          <th>Idade</th>
          <th>Motivo</th>
          <th>Prioridade</th>
        </tr>
      </thead>
      <tbody>

        <!-- <tr v-for="paciente in pacientes" :key="paciente._id"> -->
          <tr v-for="paciente in pacientes" :key="paciente.cod">
          <td>{{ paciente.cod }}</td>
          <td>{{ paciente.nome }}</td>
          <td>{{ paciente.idade }}</td>
          <td>{{ paciente.motivo }}</td>
          <td>{{ paciente.prioridade }}</td>
          <td>
            <button @click="stop" class="btn btn-warning me-1"> Atender </button>
            <button @click="stop" class="btn btn-danger"> Mudar prioridade </button>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: "FilaPacientes",
  components: {},
  data() {
    return {
      pacientes: [
        {
          cod: "001",
          nome: "João",
          idade: 20,
          motivo: "Emagrecer",
          prioridade: "Baixa",
          projeto: "Alunos e Funcionários",
        },
        {
          cod: "002",
          nome: "Maria",
          idade: 35,
          motivo: "Controlar diabetes",
          prioridade: "Média",
          projeto: "Alunos e Funcionários",
        },
        {
          cod: "003",
          nome: "Pedro",
          idade: 45,
          motivo: "Diminuir a pressão",
          prioridade: "Alta",
          projeto: "Alunos e Funcionários",
        }
      ]
    };
  },
  mounted() {

  },
  methods: {

  },
};

</script>

<style>

</style>
