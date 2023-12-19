<template>
  <div class="container-fluid col-6 mx-auto">
    <h2 class="text-center mt-3"><b>Cadastrar um novo aluno</b></h2>
    <form class="mt-5">
      <div class="form-group mt-3 row">
        <label for="nome" class="col-2 col-form-label">Nome:</label>
        <div class="col-10">
          <input type="text" class="form-control" id="nome" v-model="aluno.nome" />
        </div>
      </div>

      <div class="form-group mt-3 row">
        <label for="matricula" class="col-2 col-form-label">Matrícula:</label>
        <div class="col-10">
          <input type="text" class="form-control" id="matricula" v-model="aluno.matricula" />
        </div>
      </div>

      <div class="form-group mt-3 row">
        <label for="email" class="col-2 col-form-label">Email:</label>
        <div class="col-10">
          <input type="text" class="form-control" id="email" v-model="aluno.email" />
        </div>
      </div>

      <div class="form-group mt-3 row">
        <label for="celular" class="col-2 col-form-label">Celular:</label>
        <div class="col-10">
          <input type="text" class="form-control" id="celular" v-model="aluno.celular" />
        </div>
      </div>

      <div class="form-group mt-3 row">
        <label for="projeto" class="col-2 col-form-label">Projeto:</label>
        <div class="col-10">
          <select class="form-select" id="projeto" v-model="aluno.projeto">
            <option value="Alunos e Funcionários">Alunos e Funcionários</option>
            <option value="Cardiovascular">Cardiovascular</option>
            <option value="Materno Infantil">Materno Infantil</option>
            <option value="Obesidade">Obesidade</option>
          </select>
        </div>
      </div>

      <div class="form-group mt-3" style="text-align: end;">
        <router-link  class="btn btn-outline-secondary me-1" to="/alunos-funcionarios">Cancelar</router-link>
        <button type="button" class="btn btn-primary" @click="salvarAluno(aluno)"> Salvar </button>
      </div>
    </form>
  </div>
</template>


<script>

export default {
  name: "CadastroAlunos",
  components: {},
  data() {
    return {
      aluno: {
        cod: "",
        nome: "",
        matricula: "",
        email: "",
        celular: "",
        projeto: "Alunos e Funcionários",
      }
    };
  },
  mounted() {

  },
  methods: {
    salvarAluno(aluno) {
      fetch('http://localhost:3000/salvarAluno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ aluno }),
        mode: 'cors',
      })
        .then(response => response.json())
        .then(data => {
          this.$router.push("/alunos-funcionarios");
        })
        .catch(error => {
          console.error('Erro ao enviar dados para o servidor:', error);
        });
    }

  },
};

</script>

<style>

</style>
