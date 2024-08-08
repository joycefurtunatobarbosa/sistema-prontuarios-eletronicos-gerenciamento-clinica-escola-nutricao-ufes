<template>
  <div class="container-fluid">
    <h2 class="text-center"><b>Administração da clínica</b></h2>

    <div class="container-fluid mt-5 col-10" id="container">
      <div class="m-1">
        <h6 class="mt-4 mb-3">Alunos e Funcionários</h6>
        <div class="d-flex flex-wrap gap-2">
          <router-link v-for="(nutricionista, index) in nutricionistas" :key="index" class="btn btn-outline-secondary botao-navegacao"
            :to="'/pacientes-nutriciosta/' + nutricionista.cod">
            <IconUserFilled class="icon-user me-2" /> {{ nutricionista.nome }}
          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { IconUserFilled } from '@tabler/icons-vue';
import { server_backend_url } from "../../server_url.js";

export default {
  name: "Atendimentos",
  components: {
    IconUserFilled,
  },
  data() {
    return {
      nutricionistas: [],
      email: {
        to: '',
        subject: '',
        text: ''
      }
    };
  },
  mounted() {
    this.carregarNutricionistas();
  },
  methods: {
    carregarNutricionistas() {
      fetch(`${server_backend_url}/listarNutricionistas`, {
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
    enviarEmail() {
      fetch(`${server_backend_url}/enviarEmail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.email)
      })
        .then(response => response.text())
        .then(data => {
          alert(data);
        })
        .catch(error => {
          console.error('Erro:', error);
        });
    }
  }
};
</script>

<style>
h5 {
  color: #3e4449;
}

.botao-navegacao {
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
}
</style>