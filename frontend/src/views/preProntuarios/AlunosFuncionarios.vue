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
        <DadosPessoaisProntuario :dadosPessoaisProps="dadosPessoais" :enderecoProps="endereco" ref="dadosPessoaisForm" />
      </div>
      <!-- Componente de História Pessoais -->
      <div v-if="abas[1].active" class="show active">
        <HistoriaPessoalProntuario ref="historiaPessoalForm" />
      </div>
      <!-- Componente de História Familiar -->
      <div v-if="abas[2].active" class="fade show active">
        <HistoriaFamiliarProntuario ref="historiaFamiliarForm" />
      </div>
      <!-- Componente de Medicamentos -->
      <div v-if="abas[3].active" class="show active">
        <MedicamentosProntuario ref="medicamentosForm" />
      </div>
      <!-- Componente de Anamnese -->
      <div v-if="abas[4].active" class="show active">
        <AnamneseProntuario ref="anamneseForm" />
      </div>
      <!-- Componente de Refeições -->
      <div v-if="abas[5].active" class="show active">
        <RefeicoesProntuario ref="refeicoesForm" />
      </div>
    </form>

    <!-- Botões de navegação -->
    <div class="form-group mt-3 row">
      <div class="col d-flex justify-content-start">
        <button type="button" class="btn btn-outline-secondary" @click="anteriorAba">Anterior</button>
        <button type="button" class="btn btn-primary ms-2" @click="proximoAba">Próximo</button>
      </div>
      <div class="col d-flex justify-content-end">
        <button class="btn btn-success" @click="salvarPreProntuario()">Enviar</button>
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
      abas: [
        { label: 'Dados Pessoais', id: 'dadosPessoais', active: true },
        { label: 'História Pessoal', id: 'historiaPessoal', active: false },
        { label: 'História Familiar', id: 'historiaFamiliar', active: false },
        { label: 'Medicamentos', id: 'medicamentos', active: false },
        { label: 'Anamnese', id: 'anamnese', active: false },
        { label: 'Refeições', id: 'refeicoes', active: false },
      ],
      dadosPessoais: {},
      endereco: {},
      historiaPessoal: {},
      dadosFormulario: {},
      preProntuario: [],
      // Adicione propriedades para outras abas
    };
  },
  mounted() {
    this.carregarProntuarios();
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
      // this.salvarDadosLocais();
      const abaAtual = this.abas.findIndex((aba) => aba.active);
      const newIndex = abaAtual > 0 ? abaAtual - 1 : abaAtual;
      this.trocarAba(newIndex);
      this.topoPagina();
    },
    proximoAba() {
      // this.salvarDadosLocais();
      const abaAtual = this.abas.findIndex((aba) => aba.active);
      const newIndex = abaAtual < this.abas.length - 1 ? abaAtual + 1 : abaAtual;
      this.trocarAba(newIndex);
      this.topoPagina();
    },
    salvarPreProntuario() {
      let dadosPessoais = this.dadosPessoais;
      console.log("Dados pessoais: ", dadosPessoais);

      fetch('http://localhost:3000/salvarProntuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dadosPessoais }),
        mode: 'cors',
      })
        .then(response => response.json())
        .then(response => {
          // this.$router.push("/alunos-funcionarios", response.data);
          alert("Prontuário salvo com sucesso!", response.data);
        })
        .catch(error => {
          console.error('Erro ao enviar dados para o servidor:', error);
        });
    },
    salvarDadosLocais() {
      // console.log("Dados pessoais: ", this.dadosPessoais);
      // console.log("Endereço: ", this.endereco);
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
          console.log("Banco de dados:", data.prontuarios);
          this.dadosPessoais.nomeCompleto = data.prontuarios[0].nomeCompleto;
        })
        .catch((error) => {
          console.error("Erro ao carregar dados dos prontuários:", error);
        });
    },

  },
};
</script>