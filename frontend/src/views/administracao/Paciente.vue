<template>
  <div class="titulo mb-5">
    <h2 class="text-center"><b>Paciente: </b>{{ paciente.nome }}</h2>
    <h6 class="text-end" style="margin-top: -30px;"><b>Status: </b>Em atendimento</h6>
  </div>

  <div class="container-fluid col-10" id="container">

    <div class="m-1">
      <div class="row align-items-center">
        <h6 id="subtitulo" class="col">Prontuários</h6>
        <h6 class="text-end col ">
          <button class="btn btn-warning" data-bs-toggle="modal"
            data-bs-target="#adicionarProntuarioModal">Adicionar</button>
        </h6>
      </div>
      <div class="row">
        <div class="d-flex flex-wrap gap-2">
          <router-link class="btn btn-outline-primary botao-navegacao" to="/alunos-funcionarios">
            <IconFileFilled class="icon-user me-2" /> Pré-prontuário
          </router-link>
          <router-link class="btn btn-outline-primary botao-navegacao" to="/alunos-funcionarios">
            <IconFileFilled class="icon-user me-2" /> Prontuário completo
          </router-link>
        </div>
      </div>
    </div>

    <div class="m-1 mt-4">
      <div class="row align-items-center">
        <h6 id="subtitulo" class="col">Arquivos</h6>
        <h6 class="text-end col">
          <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#uploadArquivoModal">Adicionar</button>
        </h6>
      </div>
      <div class="row">
        <div class="d-flex flex-wrap gap-2">
          <!-- Iterar sobre os arquivos e gerar os links para abrir em uma nova guia -->
          <template v-for="arquivo in paciente.arquivos" :key="arquivo">
            <a :href="`http://localhost:3000/uploads/${arquivo}`" class="btn btn-outline-secondary botao-navegacao"
              target="_blank">
              <IconFileFilled class="icon-user me-2" /> {{ arquivo }}
            </a>
          </template>
        </div>
      </div>
    </div>

    <!-- Modal para adicionar prontuário -->
    <div class="modal fade" id="adicionarProntuarioModal" tabindex="-1" aria-labelledby="adicionarProntuarioModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="adicionarProntuarioModalLabel">Adicionar Prontuário</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
          </div>
          <div class="modal-body">
            <!-- Formulário para adicionar prontuário -->
            <form>
              <div class="mb-3">
                <label for="nomeProntuarioInput" class="form-label">Nome do Prontuário:</label>
                <input type="text" class="form-control" id="nomeProntuarioInput"
                  placeholder="Digite o nome do prontuário">
              </div>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Criar</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para os uploads -->
    <div class="modal fade" id="uploadArquivoModal" tabindex="-1" aria-labelledby="uploadModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="uploadModalLabel">Upload de Arquivos</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
          </div>
          <div class="modal-body">
            <!-- Formulário de upload de arquivos -->
            <form>
              <div class="mb-3">
                <label for="fileNameInput" class="form-label">Nome do arquivo:</label>
                <input type="text" class="form-control" id="nomeArquivo" name="fileName">
              </div>
              <div class="mb-3">
                <label for="fileInput" class="form-label">Selecione o arquivo:</label>
                <input type="file" class="form-control" id="arquivo" name="file">
              </div>
              <button type="button" class="btn btn-primary" @click="enviarArquivo()"
                data-bs-dismiss="modal">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { IconFileFilled } from '@tabler/icons-vue';

export default {
  name: "Paciente",
  components: {
    IconFileFilled,
  },
  props: ['codPaciente'],
  data() {
    return {
      paciente: {},
      // aluno: {
      //   nome: 'Joyce Barbosa',
      //   pacientes: {
      //     nome: 'Gabriel Namã',
      //     cod: '1'
      //   },
      // },
      // arquivos: [
      //   "Gabriel - 1715347732644.png",
      //   "OutroArquivo.txt",
      //   "DocumentoImportante.pdf"
      // ]
    }
  },
  mounted() {
    this.carregarPaciente(this.codPaciente);
  },
  methods: {
    carregarPaciente(cod) {
      fetch(`http://localhost:3000/buscarPaciente/${cod}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          this.paciente = data;
        })
        .catch((error) => {
          console.error("Erro ao carregar dados do paciente:", error);
        });
    },
    enviarArquivo() {
      // Obtém o nome do arquivo do input de texto
      const nomeArquivo = document.getElementById('nomeArquivo').value;

      // Obtém o arquivo selecionado do input file
      const arquivoInput = document.getElementById('arquivo');
      const arquivo = arquivoInput.files[0];

      // Obtém o código do paciente
      // const codigoPaciente = document.getElementById('codigoPaciente').value;

      // Verifica se um arquivo foi selecionado
      if (!arquivo) {
        console.error('Nenhum arquivo selecionado.');
        return;
      }
      const formData = new FormData();
      formData.append('fileName', nomeArquivo);
      formData.append('file', arquivo);
      formData.append('cod', 1); // Adiciona o código do paciente

      fetch('http://localhost:3000/salvarArquivo', {
        method: 'POST',
        body: formData
      })
        .then(response => {
          if (response.ok) {
            console.log('Arquivo enviado com sucesso.');
            // Limpa os campos do formulário
            document.getElementById('nomeArquivo').value = '';
            document.getElementById('arquivo').value = '';
            document.getElementById('codigoPaciente').value = '';
          } else {
            console.error('Erro ao enviar arquivo:', response.statusText);
            // Lógica adicional em caso de erro no envio
          }
        })
        .catch(error => {
          console.error('Erro ao enviar arquivo:', error);
          // Lógica adicional em caso de erro de rede ou outro erro
        });
        // Atualiza a página
        window.location.reload();
    }
  }
};

</script>

<style>
#container {
  min-width: 60%;
  max-width: 80%;
}

#subtitulo {
  text-align: left;
}

h5 {
  color: #3e4449;
}

.botao-navegacao {
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
}
</style>