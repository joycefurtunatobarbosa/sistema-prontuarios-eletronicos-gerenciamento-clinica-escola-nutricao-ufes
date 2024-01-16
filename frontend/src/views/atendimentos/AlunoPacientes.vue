<template>
  <div class="container-fluid text-center">
    <h2 class="text-center"><b>{{ aluno.nome }}</b></h2>

    <div class="m-5">
      <h5 class="mt-4 mb-3"><b>Pacientes</b></h5>
      <div class="d-flex justify-content-center align-items-center flex-wrap gap-1">
        <router-link class="btn btn-outline-info" to="/paciente">
          <i class="ti ti-user"></i> {{ aluno.pacientes.nome }}
        </router-link>
        <router-link class="btn btn-outline-info" to="/paciente">
          <i class="ti ti-user"></i> {{ aluno.pacientes.nome }}
        </router-link>
        <router-link class="btn btn-outline-info" to="/paciente">
          <i class="ti ti-user"></i> {{ aluno.pacientes.nome }}
        </router-link>
        <router-link class="btn btn-outline-info" to="/paciente">
          <i class="ti ti-user"></i> {{ aluno.pacientes.nome }}
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Paciente",
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