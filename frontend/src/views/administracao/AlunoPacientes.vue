<template>
  <div class="container-fluid text-center">
    <h2 class="text-center"><b>Nutricionista: </b>{{ aluno.nome }}</h2>

    <div class="d-flex justify-content-center flex-wrap">
      <div class="m-1">
        <h6 id="subtitulo" class="mt-4 mb-3">Pacientes</h6>
        <div class="d-flex flex-wrap gap-2">
          <router-link class="btn btn-outline-primary botao-navegacao" to="/paciente-atendimentos">
            <IconUserFilled class="icon-user me-2" /> {{ aluno.pacientes.nome }}
          </router-link>

          <router-link class="btn btn-outline-primary botao-navegacao" to="/paciente-atendimentos">
            <IconUserFilled class="icon-user me-2" /> {{ aluno.pacientes.nome }}
          </router-link>

          <router-link class="btn btn-outline-primary botao-navegacao" to="/paciente-atendimentos">
            <IconUserFilled class="icon-user me-2" /> {{ aluno.pacientes.nome }}
          </router-link>

          <router-link class="btn btn-outline-primary botao-navegacao" to="/paciente-atendimentos">
            <IconUserFilled class="icon-user me-2" /> {{ aluno.pacientes.nome }}
          </router-link>
        </div>
      </div>
    </div>

    </div>
</template>

<script>
import { IconUserFilled } from '@tabler/icons-vue';
export default {
  name: "AlunoPacientes",
  components: {
    IconUserFilled,
  },
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

<style>
#subtitulo{
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