<template>
  <div class="container-fluid text-center">

    <div class="row">
      <div class="col mt-2" id="status">
        <h6 class="text-end"><b>Status: </b>Em atendimento</h6>
      </div>

      <div class="col-12 mx-auto text-center">
        <h2><b>Paciente: </b>{{ aluno.pacientes.nome }}</h2>
      </div>
    </div>

    <div class="d-flex justify-content-center flex-column">

      <div class="d-flex justify-content-center flex-wrap">

        <div class="row col-8 mt-4">
          <h5 id="subtitulo" class="col-8 mt-2">CONSULTAS</h5>
          <h6 class="text-end col"><router-link class="btn btn-primary" to="/cadastrar-aluno">+ 1</router-link></h6>

          <div class="d-flex flex-wrap gap-2">
            <router-link class="btn btn-outline-primary botao-navegacao" to="/paciente">
              <IconFileFilled class="icon-user me-2" /> 1º atendimento
            </router-link>
          </div>
        </div>

        <div class="row col-8 mt-4">
          <h5 id="subtitulo" class="col-8 mt-2">ENTREGAS DE PLANOS</h5>
          <h6 class="text-end col"><router-link class="btn btn-primary" to="/cadastrar-aluno">+ 1</router-link></h6>

          <div class="d-flex flex-wrap gap-2">
            <router-link class="btn btn-outline-primary botao-navegacao" to="/paciente">
              <IconFileFilled class="icon-user me-2" /> Plano Alimentar 1
            </router-link>

            <router-link class="btn btn-outline-primary botao-navegacao" to="/paciente">
              <IconFileFilled class="icon-user me-2" /> Plano Alimentar 2
            </router-link>
          </div>
        </div>

        <div class="row col-8 mt-4">
          <h5 id="subtitulo" class="col-8 mt-2">RETORNOS</h5>
          <h6 class="text-end col"><router-link class="btn btn-primary" to="/cadastrar-aluno">+ 1</router-link></h6>

          <div class="d-flex flex-wrap gap-2">
            <router-link class="btn btn-outline-primary botao-navegacao" to="/paciente">
              <IconFileFilled class="icon-user me-2" /> Retorno 1
            </router-link>

            <router-link class="btn btn-outline-primary botao-navegacao" to="/paciente">
              <IconFileFilled class="icon-user me-2" /> Retorno 2
            </router-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// import { IconFilePlus } from '@tabler/icons-vue';
import { IconFileFilled } from '@tabler/icons-vue';
export default {
  name: "AtendimentosDoPaciente",
  components: {
    // IconFilePlus,
    IconFileFilled,
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
#status {
  margin-bottom: -50px;
}

#subtitulo {
  text-align: left;
  color: black;
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