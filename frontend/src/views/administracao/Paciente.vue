<template>
  <div class="titulo mb-5">
    <h2 class="text-center"><b>Paciente: </b>{{ aluno.pacientes.nome }}</h2>
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
        <h6 class="text-end col ">
          <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#uploadArquivoModal">Adicionar</button>
        </h6>
      </div>
      <div class="row">
        <div class="d-flex flex-wrap gap-2">
          <router-link class="btn btn-outline-secondary botao-navegacao" to="/exames">
            <IconFileFilled class="icon-user me-2" /> Plano alimentar
          </router-link>
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
            <form action="#" method="post" enctype="multipart/form-data">
              <div class="mb-3">
                <label for="fileNameInput" class="form-label">Nome do arquivo:</label>
                <input type="text" class="form-control" id="fileNameInput" name="fileName">
              </div>
              <div class="mb-3">
                <label for="fileInput" class="form-label">Selecione o arquivo:</label>
                <input type="file" class="form-control" id="fileInput" name="file">
              </div>
              <button type="submit" class="btn btn-primary">Enviar</button>
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