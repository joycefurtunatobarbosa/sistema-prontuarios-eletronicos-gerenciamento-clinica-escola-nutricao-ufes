<template>
  <div class="container-fluid col-6 mx-auto">
    <h2 class="text-center mt-3 mb-5"><b>Editar um nutricionista</b></h2>
    <form>
      <div class="form-group mt-3 row">
        <label for="nome" class="col-2 col-form-label">Nome:</label>
        <div class="col-10">
          <input type="text" class="form-control" id="nome" v-model="nutricionista.nome" />
        </div>
      </div>

      <div class="form-group mt-3 row">
        <label for="matricula" class="col-2 col-form-label">Matrícula:</label>
        <div class="col-10">
          <input type="text" class="form-control" id="matricula" v-model="nutricionista.matricula" />
        </div>
      </div>

      <div class="form-group mt-3 row">
        <label for="email" class="col-2 col-form-label">Email:</label>
        <div class="col-10">
          <input type="text" class="form-control" id="email" v-model="nutricionista.email" />
        </div>
      </div>

      <div class="form-group mt-3 row">
        <label for="celular" class="col-2 col-form-label">Celular:</label>
        <div class="col-10">
          <input type="text" class="form-control" id="celular" v-model="nutricionista.celular" />
        </div>
      </div>

      <div class="form-group mt-3 row">
        <label for="projeto" class="col-2 col-form-label">Projeto:</label>
        <div class="col-10">
          <select class="form-select" id="projeto" v-model="nutricionista.projeto" disabled>
            <option value="Alunos e Funcionários">Alunos e Funcionários</option>
            <option value="Cardiovascular">Cardiovascular</option>
            <option value="Materno Infantil">Materno Infantil</option>
            <option value="Obesidade">Obesidade</option>
          </select>
        </div>
      </div>

      <div class="form-group mt-3" style="text-align: end;">
        <button type="button" class="btn btn-primary me-1" @click="atualizarNutricionista()"> Salvar </button>
        <router-link class="btn btn-outline-secondary" to="/nutricionistas">Cancelar</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { cloneDeep, isEqual } from "lodash";

export default {
  name: "EditarNutricionista",
  props: ["cod"],
  data() {
    return {
      nutricionista: {},
      nutricionistaOriginal: {},
    };
  },
  mounted() {
    this.carregaNutricionista(this.cod);
  },
  methods: {
    carregaNutricionista(cod) {
      fetch(`http://cenufes.kinghost.net/app/buscarNutricionista/${cod}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          this.nutricionista = data.nutricionista;
          this.nutricionistaOriginal = cloneDeep(this.nutricionista);
        })
        .catch((error) => {
          console.error("Erro ao carregar dados do paciente:", error);
        });
    },
    atualizarNutricionista() {
      const nutri = this.nutricionista;
      if (isEqual(this.nutricionista, this.nutricionistaOriginal)) {
        alert("Nenhuma alteração foi realizada.");
        return;
      }
      else {
        fetch("http://cenufes.kinghost.net/app/atualizarNutricionista", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nutri }),
          mode: "cors",
        })
          .then((response) => response.json())
          .then((response) => {
            alert("Nutricionista atualizado com sucesso.");
            this.$router.push("/nutricionistas", response.data);
          })
          .catch((error) => {
            console.error("Erro ao atualizar nutricionista:", error);
          });
      }
    }
  },
};
</script>