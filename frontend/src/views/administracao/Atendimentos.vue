<template>
  <div class="container-fluid">
    <h2 class="text-center"><b>Todos os nutricionistas</b></h2>

    <div class="d-flex justify-content-center flex-wrap">
      <div class="m-1">
        <h6 class="mt-4 mb-3">Alunos e Funcionários</h6>
        <div class="d-flex flex-wrap gap-2">
          <router-link v-for="(aluno, index) in alunos" :key="index" class="btn btn-outline-primary botao-navegacao"
            :to="'/aluno-pacientes/' + aluno.cod">
            <IconUserFilled class="icon-user me-2" /> {{ aluno.nome }}
          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { IconUserFilled } from '@tabler/icons-vue';
export default {
  name: "Atendimentos",
  components: {
    IconUserFilled,
  },
  data() {
    return {
      alunos: [],
    };
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
  }
};
</script>

<style>
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