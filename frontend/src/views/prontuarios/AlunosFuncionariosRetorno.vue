<template>
  <div class="titulo mb-5">
    <h2 class="text-center"><b> {{ prontuario.nome }} </b></h2>
    <h5 class="text-center"><b>Paciente: </b>{{ dadosPessoais.nomeCompleto }}</h5>
    <!-- <h5 class="text-center"><b>Nutricionista: </b>{{ prontuario.nutricionista }}</h5> -->
  </div>

  <div class="informacoes">
    <h6 class="text-end" style="margin-top: "><b>Início: </b>{{ prontuario.dataCriacao }}</h6>
    <h6 class="text-end" style="margin-top: -5px"><b>Última atualização: </b>{{ prontuario.dataUltimaMovimentacao }}</h6>
    <h6 class="text-end" style="margin-top: -5px"><b>Nutricionista: </b>{{ prontuario.nutricionista }}</h6><br>
  </div> 
  
  <!-- Abas -->
  <div class="container-fluid col-9">
    <div class="nav nav-tabs mt-3 text-center d-flex justify-content-center">
      <a class="nav-link" :class="{ 'active': abas[0].active }" @click="trocarAba(0)" href="#"><b>1.</b> Dados Pessoais</a>
      <a class="nav-link" :class="{ 'active': abas[1].active }" @click="trocarAba(1)" href="#"><b>2.</b> Feedback do Paciente</a>
      <a class="nav-link" :class="{ 'active': abas[2].active }" @click="trocarAba(2)" href="#"><b>3.</b> Medicamentos</a>
      <a class="nav-link" :class="{ 'active': abas[3].active }" @click="trocarAba(3)" href="#"><b>4.</b> Exames Clínicos</a>
      <a class="nav-link" :class="{ 'active': abas[4].active }" @click="trocarAba(4)" href="#"><b>5.</b> Anamnese</a>
      <a class="nav-link" :class="{ 'active': abas[5].active }" @click="trocarAba(5)" href="#"><b>6.</b> Exames Bioquímicos</a>
      <a class="nav-link" :class="{ 'active': abas[6].active }" @click="trocarAba(6)" href="#"><b>7.</b> Dados Antropométricos</a>
      <a class="nav-link" :class="{ 'active': abas[7].active }" @click="trocarAba(7)" href="#"><b>8.</b> Planejamento Nutricional</a>
      <a class="nav-link" :class="{ 'active': abas[8].active }" @click="trocarAba(8)" href="#"><b>9.</b> Orientações e Conduta</a>
    </div>
  </div>

  <!-- Conteúdo das abas -->
  <div class="tab-content container-fluid col-10">
    <form>
      <!-- Componente de Dados Pessoais -->
      <div v-if="abas[0].active" class="show active">
        <DadosPessoaisComponent :dadosPessoaisProps="dadosPessoais" ref="dadosPessoaisForm" />
      </div>
      <!-- Componente do Feedback do Paciente -->
      <div v-if="abas[1].active" class="show active">
        <FeedbackPacienteComponent :feedbackPacienteProps="feedbackPaciente" ref="feedbackPacienteForm" />
      </div>
      <!-- Componente de Medicamentos -->
      <div v-if="abas[2].active" class="show active">
        <MedicamentosComponent :medicamentosProps="medicamentos" ref="medicamentosForm" />
      </div>
      <!-- Componente de Exames Clínicos -->
      <div v-if="abas[3].active" class="show active">
        <ExamesClinicosComponent :examesClinicosProps="examesClinicos" ref="examesClinicosForm"/>
      </div>
      <!-- Componente de Anamnese -->
      <div v-if="abas[4].active" class="show active">
        <AnamneseComponent :anamneseProps="anamnese" ref="anamneseForm" />
      </div>
      <!-- Componente de Exames Bioquímicos -->
      <div v-if="abas[5].active" class="show active">
        <ExamesBioquimicosComponent :examesBioquimicosProps="examesBioquimicos" ref="examesBioquimicosForm" />
      </div>
      <!-- Componente de Dados Antropométricos -->
      <div v-if="abas[6].active" class="show active">
        <DadosAntropometricosComponent :dadosAntropometricosProps="dadosAntropometricos" ref="dadosAntropometricosForm" />
      </div>
      <!-- Componente de Planejamento Nutricional -->
      <div v-if="abas[7].active" class="show active">
        <PlanejamentoNutricionalComponent :planejamentoNutricionalProps="planejamentoNutricional" ref="planejamentoNutricionalForm" />
      </div>
      <!-- Componente de Orientações e Conduta -->
      <div v-if="abas[8].active" class="show active">
        <OrientacoesCondutaComponent :orientacoesCondutaProps="orientacoesConduta" ref="orientacoesCondutaComponentForm" />
      </div>
    </form>

    <!-- Botões de navegação -->
    <div class="form-group mt-4 row">
      <div class="col d-flex justify-content-start">
      <!-- <div class="col d-flex justify-content-end" v-if="abas[5].active"> -->
        <button class="btn btn-success" @click="salvarProntuario()">Salvar</button>
      </div>
      <div class="col d-flex justify-content-end">
        <button type="button" class="btn btn-outline-secondary me-2" v-if="!abas[0].active" @click="anteriorAba">Anterior</button>
        <button type="button" class="btn btn-primary" v-if="!abas[8].active" @click="proximoAba">Próximo</button>
      </div>
    </div>
  </div>
</template>

<script>
// Componentes
import DadosPessoaisComponent from '@/components/prontuarios/DadosPessoaisComponent.vue';
import FeedbackPacienteComponent from '@/components/prontuarios/FeedbackPacienteComponent.vue';
import MedicamentosComponent from '@/components/prontuarios/MedicamentosComponent.vue';
import ExamesClinicosComponent from '@/components/prontuarios/ExamesClinicosComponent.vue';
import AnamneseComponent from '@/components/prontuarios/AnamneseComponent.vue';
import ExamesBioquimicosComponent from '@/components/prontuarios/ExamesBioquimicosComponent.vue';
import DadosAntropometricosComponent from '@/components/prontuarios/DadosAntropometricosComponent.vue';
import PlanejamentoNutricionalComponent from '@/components/prontuarios/PlanejamentoNutricionalComponent.vue';
import OrientacoesCondutaComponent from '@/components/prontuarios/OrientacoesCondutaComponent.vue';

// Classes
import DadosPessoais from '@/models/prontuario/DadosPessoais';
import FeedbackPaciente from '../../models/prontuario/FeedbackPaciente';
import Medicamentos from "@/models/prontuario/Medicamentos";
import ExamesClinicos from "@/models/prontuario/ExamesClinicos";
import Anamnese from "@/models/prontuario/Anamnese";
import ExamesBioquimicos from "@/models/prontuario/ExamesBioquimicos";
import DadosAntropometricos from "@/models/prontuario/DadosAntropometricos";
import PlanejamentoNutricional from "@/models/prontuario/PlanejamentoNutricional";
import OrientacoesConduta from "@/models/prontuario/OrientacoesConduta";
import { server_backend_url } from "../../server_url.js";

export default {
  name: "AlunosFuncionarios",
  components: {
    DadosPessoaisComponent,
    FeedbackPacienteComponent,
    MedicamentosComponent,
    ExamesClinicosComponent,
    AnamneseComponent,
    ExamesBioquimicosComponent,
    DadosAntropometricosComponent,
    PlanejamentoNutricionalComponent,
    OrientacoesCondutaComponent,
  },
  // props: ["codPaciente", "cod"],
  props: ["cod"],
  data() {
    return {
      abas: [
        { label: 'Dados Pessoais', id: 'dadosPessoais', active: true },
        { label: 'Feedback do Paciente', id: 'feedbackPaciente', active: false },
        { label: 'Medicamentos', id: 'medicamentos', active: false },
        { label: 'Exames Clínicos', id: 'examesClinicos', active: false },
        { label: 'Anamnese', id: 'anamnese', active: false },
        { label: 'ExamesBioquimicos', id: 'examesBioquimicos', active: false },
        { label: 'DadosAntropometricos', id: 'dadosAntropometricos', active: false },
        { label: 'PlanejamentoNutricional', id: 'planejamentoNutricional', active: false },
        { label: 'OrientacoesConduta', id: 'orientacoesConduta', active: false },
      ],
      prontuario: {},
      nutricionista: "",
      codPaciente: "",
      dadosPessoais: new DadosPessoais(),
      feedbackPaciente: new FeedbackPaciente(),
      medicamentos: new Medicamentos(),
      examesClinicos: new ExamesClinicos(),
      anamnese: new Anamnese(),
      examesBioquimicos: new ExamesBioquimicos(),
      dadosAntropometricos: new DadosAntropometricos(),
      planejamentoNutricional: new PlanejamentoNutricional(),
      orientacoesConduta: new OrientacoesConduta(),
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
    salvarProntuario() {
      let prontuario = {
        cod: parseInt(this.cod),
        codPaciente: parseInt(this.prontuario.codPaciente),
        nutricionista: this.prontuario.nutricionista,
        dadosPessoais: this.dadosPessoais,
        feedbackPaciente: this.feedbackPaciente,
        medicamentos: this.medicamentos,
        examesClinicos: this.examesClinicos,
        anamnese: this.anamnese,
        examesBioquimicos: this.examesBioquimicos,
        dadosAntropometricos: this.dadosAntropometricos,
        planejamentoNutricional: this.planejamentoNutricional,
        orientacoesConduta: this.orientacoesConduta,
      };

      fetch(`${server_backend_url}/salvarProntuario`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prontuario }),
        mode: 'cors',
      })
        .then(response => response.json())
        // .then(response => {
        //   alert("Prontuário salvo com sucesso!", response.data);
        //   alert('Arquivo enviado com sucesso.');
        // })
        .catch(error => {
          console.error('Erro ao enviar dados para o servidor:', error);
        });
        alert("Prontuário salvo com sucesso!");
        // window.location.reload();
        this.topoPagina();
        
    },
    carregarProntuario(cod) {
      fetch(`${server_backend_url}/buscarProntuario/${cod}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          // Copiar os campos do servidor para o objeto existente
          Object.assign(this.prontuario, data.prontuario);
          Object.assign(this.dadosPessoais, data.prontuario.dadosPessoais);
          Object.assign(this.feedbackPaciente, data.prontuario.feedbackPaciente);
          Object.assign(this.medicamentos, data.prontuario.medicamentos);
          Object.assign(this.examesClinicos, data.prontuario.examesClinicos);
          Object.assign(this.anamnese, data.prontuario.anamnese);
          Object.assign(this.examesBioquimicos, data.prontuario.examesBioquimicos);
          Object.assign(this.dadosAntropometricos, data.prontuario.dadosAntropometricos);
          Object.assign(this.planejamentoNutricional, data.prontuario.planejamentoNutricional);
          Object.assign(this.orientacoesConduta, data.prontuario.orientacoesConduta);

          this.prontuario.nutricionista = this.data.prontuario.nutricionista;
          this.nutricionista = this.data.prontuario.nutricionista;
          this.prontuario.codPaciente = this.data.prontuario.codPaciente;
          this.topoPagina();
        })
        .catch((error) => {
          console.error("Erro ao carregar dados dos prontuários:", error);
        });
    },

  },
};
</script>