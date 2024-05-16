<template>
  <h2 class="text-center"><b>Paciente: </b>{{ dadosPessoais.nomeCompleto }}</h2>
  <h5 class="text-center"><b>Prontuário: </b>{{ prontuario.nome }}</h5>

  <!-- Abas -->
  <div class="container-fluid mt-5 col-8">
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
        <button type="button" class="btn btn-outline-secondary me-2" v-if="!abas[0].active" @click="anteriorAba">Anterior</button>
        <button type="button" class="btn btn-primary" v-if="!abas[5].active" @click="proximoAba">Próximo</button>
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
import DadosPessoais from '@/models/prontuario/DadosPessoais';
import HistoriaPessoal from '@/models/prontuario/HistoriaPessoal';
import HistoriaFamiliar from '@/models/prontuario/HistoriaFamiliar';
import Medicamentos from "@/models/prontuario/Medicamentos";
import Anamnese from "@/models/prontuario/Anamnese";
import Refeicoes from "@/models/prontuario/Refeicoes";

export default {
  name: "AlunosFuncionarios",
  components: {
    DadosPessoaisComponent,
    HistoriaPessoalComponent,
    HistoriaFamiliarComponent,
    MedicamentosComponent,
    AnamneseComponent,
    RefeicoesComponent
  },
  props:["cod"],
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
      prontuario: {},
      dadosPessoais: new DadosPessoais(),
      historiaPessoal: new HistoriaPessoal(),
      historiaFamiliar: new HistoriaFamiliar(),
      medicamentos: new Medicamentos(),
      anamnese: new Anamnese(),
      refeicoes: new Refeicoes(),
    };
  },
  mounted(){
    this.carregarProntuario(this.cod);
  },
  methods: {
    topoPagina() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
      this.topoPagina();
      this.trocarAba(newIndex);
    },
    proximoAba() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const abaAtual = this.abas.findIndex((aba) => aba.active);
      const newIndex = abaAtual < this.abas.length - 1 ? abaAtual + 1 : abaAtual;
      this.topoPagina();
      this.trocarAba(newIndex);
    },
    salvarPreProntuario() {
      let preProntuario = {
        cod: 1,
        codPaciente: 1,
        dadosPessoais: this.dadosPessoais,
        historiaPessoal: this.historiaPessoal,
        historiaFamiliar: this.historiaFamiliar,
        medicamentos: this.medicamentos,
        anamnese: this.anamnese,
        refeicoes: this.refeicoes,
      };
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
    carregarProntuario(cod) {
      fetch(`http://localhost:3000/buscarProntuario/${cod}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          // Copiar os campos do servidor para o objeto existente
          // console.log(data.prontuario.dadosPessoais);
          Object.assign(this.prontuario, data.prontuario);
          Object.assign(this.dadosPessoais, data.prontuario.dadosPessoais);
          Object.assign(this.historiaPessoal, data.prontuario.historiaPessoal);
          Object.assign(this.historiaFamiliar, data.prontuario.historiaFamiliar);
          Object.assign(this.medicamentos, data.prontuario.medicamentos);
          Object.assign(this.anamnese, data.prontuario.anamnese);
          Object.assign(this.refeicoes, data.prontuario.refeicoes);
        })
        .catch((error) => {
          console.error("Erro ao carregar dados dos prontuários:", error);
        });
    },

  },
};
</script>