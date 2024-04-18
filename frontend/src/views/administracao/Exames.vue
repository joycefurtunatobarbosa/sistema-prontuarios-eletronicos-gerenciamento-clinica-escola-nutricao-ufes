<template>

  <div class="container-fluid text-center">
    <h2 class="text-center"><b>Exames: </b>{{ aluno.pacientes.nome }}</h2>
    <h5 class="text-end" style="margin-top: -30px;"><b>Status: </b>Em atendimento</h5>

    <div class="d-flex justify-content-center flex-column">

      <div class="d-flex justify-content-center flex-wrap">
        <div class="m-1">
          <h6 id="subtitulo" class="mt-4 mb-3">Arquivos</h6>

          <div class="d-flex flex-wrap gap-2">
            <input type="file" class="custom-file-input" id="fileInput" accept="application/pdf">
          </div>

          <div class="d-flex flex-wrap gap-2 mt-3">
            <button class="btn btn-success" @click="salvarArquivo()">Salvar</button>
            <button class="btn btn-alert" @click="exibirExame()">Exibir</button>
          </div>

        </div>
      </div>

      <div class="d-flex justify-content-center flex-wrap">
        <div class="m-1">
          <h6 id="subtitulo" class="mt-4 mb-3">Planos alimentares</h6>
          <div class="d-flex flex-wrap gap-2">
            <router-link class="btn btn-outline-primary botao-navegacao" to="/paciente">
              <IconFileFilled class="icon-user me-2" /> Plano alimentar
            </router-link>

            <router-link class="btn btn-outline-primary botao-navegacao" to="/paciente">
              <IconFileFilled class="icon-user me-2" /> Ajuste do Plano alimentar
            </router-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// import { IconFilePlus } from '@tabler/icons-vue';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { IconFileFilled } from '@tabler/icons-vue';
export default {
  name: "Exames",
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
  methods: {
    salvarExame() {
      // Envia o arquivo para o servidor
      fetch('http://localhost:3000/salvarExame', {
        method: 'POST',
        body: '',
        mode: 'cors',
      })
    },
    salvarArquivo() {
      // Obtém o arquivo selecionado pelo usuário
      const fileInput = document.getElementById('fileInput');
      const arquivo = fileInput.files[0];

      if (!arquivo) {
        console.error('Nenhum arquivo selecionado');
        return;
      }

      // Cria um objeto FormData para enviar o arquivo
      const formData = new FormData();
      formData.append('arquivo', arquivo);

      // Envia o arquivo para o servidor
      fetch('http://localhost:3000/salvarArquivo', {
        method: 'POST',
        body: formData,
        mode: 'cors',
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao salvar o arquivo');
          }
          return response.json();
        })
        .then(data => {
          console.log('Arquivo salvo com sucesso:', data);
        })
        .catch(error => {
          console.error('Erro ao salvar o arquivo:', error);
        });
    },

    exibirExame() {
      // Fazer uma solicitação GET para o servidor para obter o PDF
      fetch('http://localhost:3000/exibirPDF')
        .then(response => response.blob())
        .then(blob => {
          // Criar uma URL temporária para o blob do PDF
          const url = URL.createObjectURL(blob);

          // Abrir o PDF em uma nova janela do navegador
          window.open(url);
        })
        .catch(error => {
          console.error('Erro ao obter o PDF:', error);
        });

    }

  },
};

</script>

<style>
#subtitulo {
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