<template>
  <h2 class="text-center"><b>Pré-prontuário para Alunos e Funcionários</b></h2>
  <div class="row">

  </div>

  <!-- Abas -->
  <div class="container-fluid col-8">
    <div class="nav nav-tabs mt-3 text-center d-flex justify-content-center">
      <a class="nav-link" :class="{ 'active': tabs[0].active }" @click="changeTab(0)" href="#">Dados Pessoais</a>
      <a class="nav-link" :class="{ 'active': tabs[1].active }" @click="changeTab(1)" href="#">História Pessoal</a>
      <a class="nav-link" :class="{ 'active': tabs[2].active }" @click="changeTab(2)" href="#">História Familiar</a>
      <a class="nav-link" :class="{ 'active': tabs[3].active }" @click="changeTab(3)" href="#">Medicamentos</a>
      <a class="nav-link" :class="{ 'active': tabs[4].active }" @click="changeTab(4)" href="#">Anamnese</a>
      <a class="nav-link" :class="{ 'active': tabs[5].active }" @click="changeTab(5)" href="#">Refeições</a>
    </div>
  </div>

  <!-- Conteúdo das abas -->
  <div class="tab-content container-fluid col-8">
    <form>
      <!-- Componente de Dados Pessoais -->
      <div v-if="tabs[0].active" class="show active">
        <DadosPessoaisProntuario ref="dadosPessoaisForm" />
      </div>
      <!-- Componente de História Pessoais -->
      <div v-if="tabs[1].active" class="show active">
        <HistoriaPessoalProntuario ref="historiaPessoalForm" />
      </div>
      <!-- Componente de História Familiar -->
      <div v-if="tabs[2].active" class="fade show active">
        <HistoriaFamiliarProntuario ref="historiaFamiliarForm" />
      </div>
      <!-- Componente de Medicamentos -->
      <div v-if="tabs[3].active" class="show active">
        <MedicamentosProntuario ref="medicamentosForm" />
      </div>
      <!-- Componente de Anamnese -->
      <div v-if="tabs[4].active" class="show active">
        <AnamneseProntuario ref="anamneseForm" />
      </div>
      <!-- Componente de Refeições -->
      <div v-if="tabs[5].active" class="show active">
        <RefeicoesProntuario ref="refeicoesForm" />
      </div>
    </form>

    <!-- Botões de navegação -->
    <div class="form-group mt-3 row">
      <div class="col d-flex justify-content-start">
        <button type="button" class="btn btn-outline-secondary" @click="previousTab">Anterior</button>
        <button type="button" class="btn btn-primary ms-2" @click="nextTab">Próximo</button>
      </div>
      <div class="col d-flex justify-content-end">
        <button class="btn btn-success" @click="enviar()">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
import DadosPessoaisProntuario from '@/components/prontuarios/DadosPessoaisProntuario.vue';
import HistoriaPessoalProntuario from '@/components/prontuarios/HistoriaPessoalProntuario.vue';
import HistoriaFamiliarProntuario from '@/components/prontuarios/HistoriaFamiliarProntuario.vue';
import MedicamentosProntuario from '@/components/prontuarios/MedicamentosProntuario.vue';
import AnamneseProntuario from '@/components/prontuarios/AnamneseProntuario.vue';
import RefeicoesProntuario from '@/components/prontuarios/RefeicoesProntuario.vue';

export default {
  name: "PreProntuario",
  components: {
    DadosPessoaisProntuario,
    HistoriaPessoalProntuario,
    HistoriaFamiliarProntuario,
    MedicamentosProntuario,
    AnamneseProntuario,
    RefeicoesProntuario
  },
  data() {
    return {
      tabs: [
        { label: 'Dados Pessoais', id: 'dadosPessoais', active: true },
        { label: 'História Pessoal', id: 'historiaPessoal', active: false },
        { label: 'História Familiar', id: 'historiaFamiliar', active: false },
        { label: 'Medicamentos', id: 'medicamentos', active: false },
        { label: 'Anamnese', id: 'anamnese', active: false },
        { label: 'Refeições', id: 'refeicoes', active: false },
      ],
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    changeTab(index) {
      this.tabs.forEach((tab, tabIndex) => {
        tab.active = index === tabIndex;
      });
    },
    previousTab() {
      console.log('Previous Tab Clicked');
      const currentIndex = this.tabs.findIndex((tab) => tab.active);
      const newIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
      this.changeTab(newIndex);
      this.scrollToTop();
    },
    nextTab() {
      console.log('Next Tab Clicked');
      const currentIndex = this.tabs.findIndex((tab) => tab.active);
      const newIndex = currentIndex < this.tabs.length - 1 ? currentIndex + 1 : currentIndex;
      this.changeTab(newIndex);
      this.scrollToTop();
    },
    enviar() {
      // Acessando diretamente o componente filho usando a ref
      const dadosPessoaisForm = this.$refs.dadosPessoaisForm;
      alert('Nome: ' + dadosPessoaisForm.nomeCompleto);
    }
  },
};
</script>