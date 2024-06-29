<template>
  <div class="container-fluid">
    <h2 class="text-center"><b>Todos os nutricionistas</b></h2>

    <div class="row my-4 col-12">
      <div class="col d-flex justify-content-start me-5">
        <router-link class="btn btn-primary" to="/cadastrar-nutricionista">Criar novo</router-link>
      </div>

      <!-- <div class="col-3 d-flex align-items-center">
        <label for="filtro" class="me-2">Exibir:</label>
        <select class="form-select" id="filtro" v-model="filtro">
          <option value="Todos os Projetos" selected>Todos os Projetos</option>
          <option value="Nutricionistas e Funcionários">Nutricionistas e Funcionários</option>
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
          <th>Nutricionista</th>
          <th>Matrícula</th>
          <th>Email</th>
          <th>Celular</th>
          <th>Projeto</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>

        <tr v-for="nutricionista in nutricionistasFiltro" :key="nutricionista._id">
          <td><b>{{ nutricionista.cod }}</b></td>
          <td>{{ nutricionista.nome }}</td>
          <td>{{ nutricionista.matricula }}</td>
          <td>{{ nutricionista.email }}</td>
          <td>{{ nutricionista.celular }}</td>
          <td>{{ nutricionista.projeto }}</td>
          <td>
            <router-link :to="'/editar-nutricionista/' + nutricionista.cod">
              <button class="btn btn-warning me-1" >Editar</button>
            </router-link>
            <button @click="excluirNutricionista(nutricionista.cod)" class="btn btn-danger"> Excluir </button>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ListarNutricionistas",
  data() {
    return {
      nutricionistas: [],
      filtro: "Todos os Projetos"
    };
  },
  computed: {
    nutricionistasFiltro() {
      if (this.filtro === "Todos os Projetos") {
        return this.nutricionistas;
      } else {
        return this.nutricionistas.filter(nutricionista => nutricionista.projeto === this.filtro);
      }
    },
  },
  mounted() {
    this.carregarNutricionistas();
  },
  methods: {
    carregarNutricionistas() {
      fetch("http://cenufes.kinghost.net/app/listarNutricionistas", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          this.nutricionistas = data.nutricionistas;
        })
        .catch((error) => {
          console.error("Erro ao carregar dados dos nutricionistas:", error);
        });
    },
    editarNutricionista(cod) {
      fetch(`http://cenufes.kinghost.net/buscarNutricionista/${cod}`, {
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
    excluirNutricionista(cod) {
      if (confirm("Deseja realmente excluir o nutricionista?")) {
        fetch(`http://cenufes.kinghost.net/excluirNutricionista/${cod}`, {
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