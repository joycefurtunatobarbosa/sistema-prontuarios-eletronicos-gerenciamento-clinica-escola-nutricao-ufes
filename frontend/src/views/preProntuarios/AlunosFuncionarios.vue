<template>
  <h2 class="text-center"><b>Pré-prontuário para Alunos e Funcionários</b></h2>

  <!-- Abas -->
  <div class="container-fluid col-8">
    <div class="nav nav-tabs mt-3 text-center d-flex justify-content-center">
      <a class="nav-link" :class="{ 'active': abas[0].active }" @click="trocarAba(0)" href="#">Dados Pessoais</a>
      <a class="nav-link" :class="{ 'active': abas[1].active }" @click="trocarAba(1)" href="#">História Pessoal</a>
      <a class="nav-link" :class="{ 'active': abas[2].active }" @click="trocarAba(2)" href="#">História Familiar</a>
      <a class="nav-link" :class="{ 'active': abas[3].active }" @click="trocarAba(3)" href="#">Medicamentos</a>
      <a class="nav-link" :class="{ 'active': abas[4].active }" @click="trocarAba(4)" href="#">Anamnese</a>
      <a class="nav-link" :class="{ 'active': abas[5].active }" @click="trocarAba(5)" href="#">Refeições</a>
    </div>
  </div>

  <!-- Conteúdo das abas -->
  <div class="tab-content container-fluid col-8">
    <form>
      <!-- Componente de Dados Pessoais -->
      <div v-if="abas[0].active" class="show active">
        <DadosPessoaisComponent :dadosPessoaisProps="dadosPessoais" ref="dadosPessoaisForm" />
      </div>
      <!-- Componente de História Pessoais -->
      <div v-if="abas[1].active" class="show active">
        <HistoriaPessoalComponent :historiaPessoalProps="historiaPessoal" ref="historiaPessoalForm" />
      </div>
      <!-- Componente de História Familiar -->
      <div v-if="abas[2].active" class="fade show active">
        <HistoriaFamiliarComponent :historiaFamiliarProps="historiaFamiliar" ref="historiaFamiliarForm" />
      </div>
      <!-- Componente de Medicamentos -->
      <div v-if="abas[3].active" class="show active">
        <MedicamentosComponent :medicamentosProps="medicamentos" ref="medicamentosForm" />
      </div>
      <!-- Componente de Anamnese -->
      <div v-if="abas[4].active" class="show active">
        <AnamneseComponent :anamneseProps="anamnese" ref="anamneseForm" />
      </div>
      <!-- Componente de Refeições -->
      <div v-if="abas[5].active" class="show active">
        <RefeicoesComponent :refeicoesProps="refeicoes" ref="refeicoesForm" />
      </div>
    </form>

    <!-- Botões de navegação -->
    <div class="form-group mt-3 row">
      <div class="col d-flex justify-content-start">
        <button type="button" class="btn btn-outline-secondary" @click="anteriorAba">Anterior</button>
        <button type="button" class="btn btn-primary ms-2" @click="proximoAba">Próximo</button>
      </div>
      <div class="col d-flex justify-content-end" v-if="abas[5].active">
        <button class="btn btn-success" @click="salvarPreProntuario()">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
// Componentes
import DadosPessoaisComponent from '@/components/prontuarios/DadosPessoaisComponent.vue';
import HistoriaPessoalComponent from '@/components/prontuarios/HistoriaPessoalComponent.vue';
import HistoriaFamiliarComponent from '@/components/prontuarios/HistoriaFamiliarComponent.vue';
import MedicamentosComponent from '@/components/prontuarios/MedicamentosComponent.vue';
import AnamneseComponent from '@/components/prontuarios/AnamneseComponent.vue';
import RefeicoesComponent from '@/components/prontuarios/RefeicoesComponent.vue';

// Classes
import DadosPessoais from '@/models/DadosPessoais';
import HistoriaPessoal from '@/models/HistoriaPessoal';
import HistoriaFamiliar from '@/models/HistoriaFamiliar';
import Medicamentos from "@/models/Medicamentos";
import Anamnese from "@/models/Anamnese";
import Refeicoes from "@/models/Refeicoes";

export default {
  name: "PreProntuario",
  components: {
    DadosPessoaisComponent,
    HistoriaPessoalComponent,
    HistoriaFamiliarComponent,
    MedicamentosComponent,
    AnamneseComponent,
    RefeicoesComponent
  },
  data() {
    return {
      abas: [
        { label: 'Dados Pessoais', id: 'dadosPessoais', active: true },
        { label: 'História Pessoal', id: 'historiaPessoal', active: false },
        { label: 'História Familiar', id: 'historiaFamiliar', active: false },
        { label: 'Medicamentos', id: 'medicamentos', active: false },
        { label: 'Anamnese', id: 'anamnese', active: false },
        { label: 'Refeições', id: 'refeicoes', active: false },
      ],
      dadosPessoais: new DadosPessoais(),
      historiaPessoal: new HistoriaPessoal(),
      historiaFamiliar: new HistoriaFamiliar(),
      medicamentos: new Medicamentos(),
      anamnese: new Anamnese(),
      refeicoes: new Refeicoes(),
    };
  },
  created() {
    // this.carregarProntuarios();
  },
  methods: {
    topoPagina() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    trocarAba(index) {
      this.abas.forEach((aba, abaIndex) => {
        aba.active = index === abaIndex;
      });
    },
    anteriorAba() {
      const abaAtual = this.abas.findIndex((aba) => aba.active);
      const newIndex = abaAtual > 0 ? abaAtual - 1 : abaAtual;
      this.trocarAba(newIndex);
      this.topoPagina();
    },
    proximoAba() {
      const abaAtual = this.abas.findIndex((aba) => aba.active);
      const newIndex = abaAtual < this.abas.length - 1 ? abaAtual + 1 : abaAtual;
      this.trocarAba(newIndex);
      this.topoPagina();
    },
    salvarPreProntuario() {
      let preProntuario = {
        dadosPessoais: this.dadosPessoais,
        historiaPessoal: this.historiaPessoal,
        historiaFamiliar: this.historiaFamiliar,
        medicamentos: this.medicamentos,
        anamnese: this.anamnese,
        refeicoes: this.refeicoes,
      };
      console.log("Pré-prontuário:", preProntuario);
      fetch('http://localhost:3000/salvarProntuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ preProntuario }),
        mode: 'cors',
      })
        .then(response => response.json())
        .then(response => {
          alert("Prontuário salvo com sucesso!", response.data);
        })
        .catch(error => {
          console.error('Erro ao enviar dados para o servidor:', error);
        });
    },
    carregarProntuarios() {
      fetch("http://localhost:3000/listarProntuarios", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          this.dadosPessoais = Object.assign(new DadosPessoais(), data.prontuarios[0].dadosPessoais);
          this.historiaPessoal = Object.assign(new HistoriaPessoal(), data.prontuarios[0].historiaPessoal);
          this.historiaFamiliar = Object.assign(new HistoriaFamiliar(), data.prontuarios[0].historiaFamiliar);
          this.medicamentos = Object.assign(new Medicamentos(), data.prontuarios[0].medicamentos);
          this.anamnese = Object.assign(new Anamnese(), data.prontuarios[0].anamnese);
          this.refeicoes = Object.assign(new Refeicoes(), data.prontuarios[0].refeicoes);
        })
        .catch((error) => {
          console.error("Erro ao carregar dados dos prontuários:", error);
        });
    },

  },
};
</script>