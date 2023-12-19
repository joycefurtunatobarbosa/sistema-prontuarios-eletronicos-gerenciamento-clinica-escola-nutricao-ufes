<template>
  <div class="container-fluid col-6 mx-auto">
    <h2 class="text-center mt-3 mb-5"><b>Cadastrar um novo aluno</b></h2>
    <form>
      <div class="form-group mt-3 row">
        <label for="nome" class="col-2 col-form-label">Nome:</label>
        <div class="col-10">
          <input type="text" class="form-control" name="nome" v-model="aluno.nome" />
        </div>
      </div>

      <div class="form-group mt-3 row">
        <label for="matricula" class="col-2 col-form-label">Matrícula:</label>
        <div class="col-10">
          <input type="text" class="form-control" name="matricula" v-model="aluno.matricula" />
        </div>
      </div>

      <div class="form-group mt-3 row">
        <label for="email" class="col-2 col-form-label">Email:</label>
        <div class="col-10">
          <input type="text" class="form-control" name="email" v-model="aluno.email" />
        </div>
      </div>

      <div class="form-group mt-3 row">
        <label for="celular" class="col-2 col-form-label">Celular:</label>
        <div class="col-10">
          <input type="text" class="form-control" name="celular" v-model="aluno.celular" />
        </div>
      </div>

      <div class="form-group mt-3 row">
        <label for="projeto" class="col-2 col-form-label">Projeto:</label>
        <div class="col-10">
          <select class="form-select" name="projeto" v-model="aluno.projeto">
            <option value="Alunos e Funcionários" selected>Alunos e Funcionários</option>
            <option value="Cardiovascular">Cardiovascular</option>
            <option value="Materno Infantil">Materno Infantil</option>
            <option value="Obesidade">Obesidade</option>
          </select>
        </div>
      </div>

      <div class="form-group mt-3" style="text-align: end;">
        <button type="button" class="btn btn-primary me-1" @click="salvarAluno(aluno)"> Salvar </button>
        <router-link class="btn btn-outline-secondary" to="/alunos-funcionarios">Cancelar</router-link>
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
        projeto: "",
      }
    };
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
        .then(response => {
          this.$router.push("/alunos-funcionarios", response.data);
        })
        .catch(error => {
          console.error('Erro ao enviar dados para o servidor:', error);
        });
    }

  },
};

</script>

<style></style>
