<template>
  <div class="container-fluid text-center">
    <h2 class="text-center"><b>Nutricionista: </b>{{ nutricionista.nome }}</h2>

    <div class="container-fluid mt-5 col-10" id="container">
      <div class="m-1">
        <h6 id="subtitulo" class="mt-4 mb-3">Pacientes</h6>
        <div class="d-flex flex-wrap gap-2">
          <!-- Loop para exibir os botões dos pacientes -->
          <router-link v-for="(paciente, index) in nutricionista.pacientes" :key="index" :to="'/paciente/' + paciente.cod"
            class="btn btn-outline-secondary botao-navegacao">
            <IconUserFilled class="icon-user me-2" /> {{ paciente.nome }}
          </router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { IconUserFilled } from '@tabler/icons-vue';
export default {
  name: "PacientesDoNutricionista",
  components: {
    IconUserFilled,
  },
  props: ['cod'],
  data() {
    return {
      nutricionista: {}
    }
  },
  mounted() {
    this.carregarNutricionista(this.cod);
  },
  methods: {
    carregarNutricionista(cod) {
      fetch(`http://www.cenufes.kinghost.net/app/buscarNutricionista/${cod}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          this.nutricionista = data.nutricionista;
        })
        .catch((error) => {
          console.error("Erro ao carregar dados do nutricionista:", error);
        });
    },
  }
};
</script>

<style>
#subtitulo {
  text-align: left;
}

h5 {
  /*color: var(--dt-on-surface,#3c4043);*/
  /* color: #5A6A85; */
  color: #3e4449;
}

.botao-navegacao {
  /* color: var(--bs-heading-color, inherit); */
  /* color: var(--dt-on-surface,rgb(60,64,67)); */
  /* color: var(--bs-table-color); */
  /* color: #32373b; */
  color: #32373b;
  font-size: 14px;
  background-color: #F0F4F9;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-user {
  width: 18px;
  /* margin-right: 10px; */
}
</style>