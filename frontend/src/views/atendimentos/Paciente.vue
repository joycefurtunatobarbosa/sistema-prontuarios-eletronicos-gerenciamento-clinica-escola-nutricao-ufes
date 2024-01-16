<template>
  <div class="container-fluid text-center">
    <h2 class="text-center"><b>{{ aluno.pacientes.nome }}</b></h2>

    <div class="m-5">
      <h5 class="mt-4 mb-3"><b>Prontuários</b></h5>
      <div class="d-flex justify-content-center align-items-center flex-wrap gap-1">
        <router-link class="btn btn-outline-info" to="/"><i class="ti ti-file"></i>Pré-prontuário</router-link>
        <router-link class="btn btn-outline-info" to="/"><i class="ti ti-file"></i>Prontuário</router-link>
      </div>
    </div>

    <div class="m-5">
      <h5 class="mt-4 mb-3"><b>Exames</b></h5>
      <div class="d-flex justify-content-center align-items-center flex-wrap gap-1">
        <router-link class="btn btn-outline-info" to="/"><i class="ti ti-file"></i>Exame 01</router-link>
        <router-link class="btn btn-outline-info" to="/"><i class="ti ti-file"></i>Exame 02</router-link>
        <router-link class="btn btn-outline-info" to="/"><i class="ti ti-file"></i>Exame 03</router-link>
        <router-link class="btn btn-outline-info" to="/"><i class="ti ti-file"></i>Exame 04</router-link>
      </div>
    </div>

    <div class="m-5">
      <h5 class="mt-4 mb-3"><b>Planos alimentares</b></h5>
      <div class="d-flex justify-content-center align-items-center flex-wrap gap-1">
        <router-link class="btn btn-outline-info" to="/"><i class="ti ti-file"></i>Plano alimentar 01</router-link>
        <router-link class="btn btn-outline-info" to="/"><i class="ti ti-file"></i>Plano alimentar 02</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "AlunoPacientes",
  data() {
    return {
      aluno: {
        nome: 'Joyce Barbosa',
        pacientes: {
          nome: 'Gabriel Namã',
        },
      },
    }
  },
};

</script>

<style></style>