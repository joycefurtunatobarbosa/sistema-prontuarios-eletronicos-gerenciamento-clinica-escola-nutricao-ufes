<template>
  <div class="container-fluid col-6 mx-auto">
    <h2 class="text-center mt-3 mb-5"><b>Cadastrar um novo nutricionista</b></h2>
    <form>
      <div class="form-group mt-3 row">
        <label for="nome" class="col-2 col-form-label">Nome:</label>
        <div class="col-10">
          <input type="text" class="form-control" name="nome" v-model="nutricionista.nome" />
        </div>
      </div>

      <div class="form-group mt-3 row">
        <label for="matricula" class="col-2 col-form-label">Matrícula:</label>
        <div class="col-10">
          <input type="text" class="form-control" name="matricula" v-model="nutricionista.matricula" />
        </div>
      </div>

      <div class="form-group mt-3 row">
        <label for="email" class="col-2 col-form-label">Email:</label>
        <div class="col-10">
          <input type="text" class="form-control" name="email" v-model="nutricionista.email" />
        </div>
      </div>

      <div class="form-group mt-3 row">
        <label for="celular" class="col-2 col-form-label">Celular:</label>
        <div class="col-10">
          <input type="text" class="form-control" name="celular" v-model="nutricionista.celular" />
        </div>
      </div>

      <div class="form-group mt-3 row">
        <label for="projeto" class="col-2 col-form-label">Projeto:</label>
        <div class="col-10">
          <select class="form-select" name="projeto" v-model="nutricionista.projeto" disabled>
            <option value="Alunos e Funcionários">Alunos e Funcionários</option>
            <option value="Cardiovascular">Cardiovascular</option>
            <option value="Materno Infantil">Materno Infantil</option>
            <option value="Obesidade">Obesidade</option>
          </select>
        </div>
      </div>

      <div class="form-group mt-3" style="text-align: end;">
        <button type="button" class="btn btn-primary me-1" @click="salvarNutricionista()"> Salvar </button>
        <router-link class="btn btn-outline-secondary" to="/nutricionistas">Cancelar</router-link>
      </div>
    </form>
  </div>
</template>


<script>
import { server_backend_url } from "../../server_url.js";

export default {
  name: "CadastroNutricionista",
  components: {},
  data() {
    return {
      server_backend: "http://localhost:3000",
      nutricionista: {
        cod: 0,
        nome: "",
        matricula: "",
        email: "",
        celular: "",
        projeto: "Alunos e Funcionários",
      }
    };
  },
  methods: {
    salvarNutricionista() {
      const nutri = this.nutricionista;
      fetch(`${server_backend_url}/salvarNutricionista`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nutri }),
        mode: 'cors',
      })
        .then(response => response.json())
        .then(response => {
          alert("Nutricionista criado com sucesso.");
          this.$router.push("/nutricionistas", response.data);
        })
        .catch(error => {
          console.error('Erro ao enviar dados para o servidor:', error);
        });
    }

  },
};

</script>

<style></style>
