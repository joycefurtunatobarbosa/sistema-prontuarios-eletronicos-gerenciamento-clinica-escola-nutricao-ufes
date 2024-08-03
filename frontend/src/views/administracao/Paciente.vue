<template>
  <div class="titulo mb-5">
    <h2 class="text-center" v-if="paciente && paciente.dadosPessoais.nomeCompleto"><b>Paciente:</b> {{ paciente.dadosPessoais.nomeCompleto }}</h2>
    <h5 class="text-center" v-if="paciente && paciente.situacao">
      <b>Situação: </b>{{ paciente.situacao }}
    </h5>
  </div>

  <div class="d-flex justify-content-center flex-column align-items-center" style="margin-top: -50px">
    <div class="btn-group mt-3" role="group" aria-label="Alterar Situação">
      <button v-if="paciente && paciente.status === 'Em atendimento'" class="btn btn-warning" @click="alterarSituacao()">Alterar situação</button>
      <button v-if="paciente && paciente.status === 'Em atendimento'" class="btn btn-danger" @click="finalizarAtendimento()">Finalizar atendimento</button>
    </div>
  </div>

  <div class="informacoes my-5">
    <h6 class="text-end" v-if="nutricionista && nutricionista.nome" style="margin-top: "><b>Nutricionista: </b>{{ nutricionista.nome }}</h6>
    <h6 class="text-end" v-if="paciente && paciente.dataInicio" style="margin-top: -5px"><b>Início do atendimento: </b>{{ paciente.dataInicio }}</h6>
    <h6 class="text-end" v-if="paciente && paciente.dataSituacao" style="margin-top: -5px;"><b>Última atualização: </b>{{ paciente.dataSituacao }}</h6>
    <!-- <h6 class="text-end" v-if="nutricionista && nutricionista.nome" style="margin-top: -5px"><b>Nutricionista: </b>{{ nutricionista.nome }}</h6> -->
  </div>

  <div class="container-fluid col-10" id="container">
    <div class="m-1">
      <div class="row align-items-center">
        <h6 id="subtitulo" class="col">Prontuários</h6>
        <h6 class="text-end col">
          <button class="btn btn-success" data-bs-toggle="modal"
            data-bs-target="#adicionarProntuarioModal" v-if="paciente && paciente.status == 'Em atendimento'">Adicionar
          </button>
        </h6>
      </div>
      <div class="row">
        <div class="d-flex flex-wrap gap-2">
          <!-- Iterar sobre os arquivos e gerar os links para abrir em uma nova guia -->
          <template v-for="prontuario in prontuarios" :key="prontuario">
            <a v-if="prontuario.tipo === 'prontuario'" :href="`/prontuario/${prontuario.cod}`" class="btn btn-outline-secondary botao-navegacao" target="_blank">
              <IconFileFilled class="icon-user me-2" /> {{ prontuario.nome }}
            </a>
            <a v-else-if="prontuario.tipo === 'retorno'" :href="`/retorno/${prontuario.cod}`" class="btn btn-outline-secondary botao-navegacao" target="_blank">
              <IconFileFilled class="icon-user me-2" /> {{ prontuario.nome }}
            </a>
          </template>
        </div>
      </div>
    </div>

    <div class="m-1 mt-4">
      <!-- <hr> -->
      <div class="row align-items-center">
        <h6 id="subtitulo" class="col">Arquivos</h6>
        <h6 class="text-end col">
          <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#uploadArquivoModal" v-if="paciente && paciente.status == 'Em atendimento'">Adicionar</button>
        </h6>
      </div>
      <div class="row">
        <div class="d-flex flex-wrap gap-2" v-if="paciente && paciente.arquivos">
          <!-- Iterar sobre os arquivos e gerar os links para abrir em uma nova guia -->
          <template v-for="arquivo in paciente.arquivos" :key="arquivo.localizacao">
            <a v-if="arquivo" :href="`http://localhost:3000/uploads/${arquivo.localizacao}`" class="btn btn-outline-secondary botao-navegacao"
                target="_blank">
                <IconFileFilled class="icon-user me-2" /> {{ arquivo.nome }}
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
              <div class="mb-3">
                <label for="selectOpcoes" class="form-label">Selecione um tipo de prontuário:</label>
                <select class="form-select" id="tipoProntuario">
                  <option value="prontuario">Prontuário</option>
                  <option value="retorno" v-if="retorno">Retorno</option>
                </select>
              </div>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="criarProntuario()">Criar</button>
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
            <form action="post" enctype="multipart/form-data">
              <div class="mb-3">
                <label for="fileNameInput" class="form-label">Nome do arquivo:</label>
                <input type="text" class="form-control" id="nomeArquivo" name="fileName" required>
              </div>
              <div class="mb-3">
                <label for="fileInput" class="form-label">Selecione o arquivo:</label>
                <input type="file" class="form-control" id="arquivo" name="file" required>
              </div>
              <button type="button" class="btn btn-primary" @click="enviarArquivo()">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { IconFileFilled } from '@tabler/icons-vue';
import DadosPessoais from '@/models/prontuario/DadosPessoais';
import HistoriaPessoal from '@/models/prontuario/HistoriaPessoal';
import HistoriaFamiliar from '@/models/prontuario/HistoriaFamiliar';
import Medicamentos from "@/models/prontuario/Medicamentos";
import Anamnese from "@/models/prontuario/Anamnese";
import Refeicoes from "@/models/prontuario/Refeicoes";
// import Prontuario from '@/models/Prontuario';
// import { getElement } from 'public/assets/libs/bootstrap/js/src/util';

export default {
  name: "Paciente",
  components: {
    IconFileFilled,
  },
  props: ["cod"],
  data() {
    return {
      // paciente: {},
      paciente: null,
      // nomeCompleto: "",
      // situacao: "",
      // status: "",
      nutricionista: null,
      retorno: false,
      prontuarios: [],
      email: {
        to: '',
        subject: '',
        text: '',
        nutricionista: '',
        paciente: {
          cod: 0
        }
      },
      //Criar um novo prontuáro
      dadosPessoais: new DadosPessoais(),
      historiaPessoal: new HistoriaPessoal(),
      historiaFamiliar: new HistoriaFamiliar(),
      medicamentos: new Medicamentos(),
      anamnese: new Anamnese(),
      refeicoes: new Refeicoes(),
      
      // prontuario: {},
      // prontuario: new Prontuario(),
    }
  },
  mounted() {
    this.carregarPaciente(this.cod);
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
          this.paciente = data.paciente;
          // this.nomeCompleto = this.paciente.dadosPessoais.nomeCompleto;
          // this.situacao = this.paciente.situacao;
          // this.status = this.paciente.status;
          this.nutricionista = this.paciente.nutricionista;
          if(this.paciente.prontuarios){
            this.prontuarios = this.paciente.prontuarios;
          }
          
          // Valida o prontuário de retorno
          if (this.prontuarios && this.prontuarios.length > 0) {
            this.retorno = true;
          }

          // Exibir os prontuários no console
          // for (let i = 0; i < this.prontuarios.length; i++) {
          //   console.log(this.prontuarios[i]);
          // }

        })
        .catch((error) => {
          console.error("Erro ao carregar dados do paciente:", error);
        });
        
    },
    alterarSituacao() {
      // Solicitar ao usuário que digite a nova situação
      const novaSituacao = prompt("Digite a nova situação:");

      // Verificar se o usuário inseriu algo e se clicou em "OK"
      if (novaSituacao && novaSituacao.length > 0) {
        fetch("http://localhost:3000/alterarSituacao", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            codPaciente: this.cod,
            novaSituacao: novaSituacao
          }),
        })
        .then(response => {
          if (response.ok) {
            // Enviar email
            this.email.to = this.paciente.nutricionista.email;
            this.email.subject = "CEN - Atualização de atendimento";
            this.email.text = `A situa&ccedil;&atilde;o do(a) paciente <strong>"${this.paciente.dadosPessoais.nomeCompleto}"</strong> foi alterada para <strong>"${novaSituacao}"</strong>.`;
            this.email.nutricionista = this.nutricionista.nome;
            this.email.paciente.cod = this.paciente.cod;

            this.enviarEmail();
            // window.location.reload();
          } else {
            console.error('Erro ao alterar situacao:', response.statusText);
          }
        })
        .catch(error => {
          console.error('Erro ao alterar situacao:', error);
        });
      } else {
        console.log('O usuário cancelou a alteração da situação ou não inseriu um valor válido.');
      }
    },
    finalizarAtendimento() {
      if (window.confirm('Tem certeza que deseja finalizar o atendimento?')) {
          fetch("http://localhost:3000/finalizarAtendimento", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ cod: this.cod })
          })
          .then(response => {
              if (response.ok) {
                  // Enviar email
                  this.email.to = this.paciente.nutricionista.email;
                  this.email.subject = "CEN - Finalização de atendimento";
                  this.email.text = `O atendimento do(a) paciente <strong>"${this.paciente.dadosPessoais.nomeCompleto}"</strong> foi finalizado.`;
                  this.email.nutricionista = this.nutricionista.nome;
                  this.email.paciente.cod = this.paciente.cod;

                  this.enviarEmail();
                  // window.location.reload();
              } else {
                  console.error('Erro ao finalizar o atendimento:', response.statusText);
              }
          })
          .catch(error => {
              console.error('Erro ao finalizar o atendimento:', error);
          });
      } else {
          console.log('O usuário cancelou o finalizar do atendimento.');
      }
    },
    enviarArquivo() {
      // Obtém o nome do arquivo do input de texto
      const nomeArquivo = document.getElementById('nomeArquivo').value;

      // Obtém o arquivo selecionado do input file
      const arquivoInput = document.getElementById('arquivo');
      const arquivo = arquivoInput.files[0];

      // Verifica se um arquivo foi selecionado
      if (!arquivo) {
        console.error('Nenhum arquivo selecionado.');
        return;
      }
      const formData = new FormData();
      formData.append('fileName', nomeArquivo);
      formData.append('file', arquivo);
      formData.append('cod', this.paciente.cod);

      fetch('http://localhost:3000/salvarArquivo', {
        method: 'POST',
        body: formData
      })
        .then(response => {

          if (response.ok) {
            alert('Arquivo enviado com sucesso.');
            // document.getElementById('codigoPaciente').value = '';

            this.email.to = this.paciente.nutricionista.email;
            this.email.subject = "CEN - Atualização de atendimento";
            this.email.text = `Um novo arquivo foi salvo para o(a) paciente <strong>"${this.paciente.dadosPessoais.nomeCompleto}".`;
            this.email.nutricionista = this.nutricionista.nome;
            this.email.paciente.cod = this.paciente.cod;

            this.enviarEmail();

            // Limpa os campos do formulário
            document.getElementById('nomeArquivo').value = '';
            document.getElementById('arquivo').value = '';

            window.location.reload();

          } else {
            console.error('Erro ao enviar arquivo:', response.statusText);
            window.location.reload();
            // Lógica adicional em caso de erro no envio
          }

        })
        .catch(error => {
          console.error('Erro ao enviar arquivo:', error);
          window.location.reload();
          // Lógica adicional em caso de erro de rede ou outro erro
        });
    },
    criarProntuario() {
      let tipoProntuario = document.getElementById('tipoProntuario').value;
      let prontuarioComum = {
          cod: 0,
          tipo: document.getElementById('tipoProntuario').value,
          // tipo: "prontuario",
          // nome: "",
          nutricionista: this.nutricionista.nome,
          codPaciente: this.paciente.cod,
          dadosPessoais: this.paciente.dadosPessoais,
          historiaPessoal: this.historiaPessoal,
          historiaFamiliar: this.historiaFamiliar,
          medicamentos: this.medicamentos,
          anamnese: this.anamnese,
          examesClinicos: this.examesClinicos,
          refeicoes: this.refeicoes,
          dadosAntropometricos: this.dadosAntropometricos,
          examesBioquimicos: this.examesBioquimicos,
          planejamentoNutricional: this.planejamentoNutricional,
          orientacoesConduta: this.orientacoesConduta
      };

      let prontuarioRetorno = {
          cod: 0,
          tipo: document.getElementById('tipoProntuario').value,
          // tipo: "retorno",
          // nome: "",
          nutricionista: this.nutricionista.nome,
          codPaciente: this.paciente.cod,
          dadosPessoais: this.paciente.dadosPessoais,
          feedbackPaciente: this.feedbackPaciente,
          medicamentos: this.medicamentos,
          anamnese: this.anamnese,
          dadosAntropometricos: this.dadosAntropometricos,
          examesBioquimicos: this.examesBioquimicos,
          planejamentoNutricional: this.planejamentoNutricional,
          orientacoesConduta: this.orientacoesConduta
      };

      if (tipoProntuario == "retorno") {
          // this.prontuario = retornoProntuario;
          // Object.assign(this.prontuario, prontuarioRetorno);
          fetch('http://localhost:3000/criarProntuarioRetorno', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ prontuarioRetorno }),
              mode: 'cors',
          })
          .then(response => response.json())
          .then((data) => {
              
            if (data.prontuarioRetorno.tipo == "retorno"){
              alert("Prontuário de retorno criado com sucesso.");
            }
            else{
              alert("Algo deu errado, tente novamente.");
            }

            this.email.to = this.paciente.nutricionista.email;
            this.email.subject = "CEN - Novo prontuário de retorno";
            this.email.text = `Um novo <b>prontuário de retorno</b> foi criado para o(a) paciente <strong>"${this.paciente.dadosPessoais.nomeCompleto}".`;
            this.email.nutricionista = this.nutricionista.nome;
            this.email.paciente.cod = this.paciente.cod;

            this.enviarEmail();
            // window.location.reload();
            
            // this.atualizarProntuariosNoPaciente(data.prontuarioRetorno);
          })
          .catch(error => {
              console.error('Erro ao enviar dados para o servidor:', error);
          });
      } else {
        console.log("Prontuário comum", prontuarioComum);
          fetch('http://localhost:3000/criarNovoProntuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prontuarioComum }),
            mode: 'cors',
          })
          .then(response => response.json())
          .then((data) => {

            if (data.prontuario.tipo == "prontuario"){
              alert("Prontuário criado com sucesso.");
            }
            else{
              alert("Algo deu errado, tente novamente.");
            }

            this.email.to = this.paciente.nutricionista.email;
            this.email.subject = "CEN - Novo prontuário";
            this.email.text = `Um novo <b>prontuário </b> foi criado para o(a) paciente <strong>"${this.paciente.dadosPessoais.nomeCompleto}".`;
            this.email.nutricionista = this.nutricionista.nome;
            this.email.paciente.cod = this.paciente.cod;

            this.enviarEmail();

            // window.location.reload();

            // this.atualizarProntuariosNoPaciente(data.prontuario);
          })
          .catch(error => {
              console.error('Erro ao enviar dados para o servidor:', error);
          });
      }
    },
    // atualizarProntuariosNoPaciente(prontuario){
    //   fetch('http://localhost:3000/atualizarProntuariosNoPaciente', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ prontuario }),
    //     mode: 'cors',
    //   })
    //     .then(response => response.json())
    //     .then(response => {
    //       console.log("Prontuários do paciente atualizos com sucesso.", response.data);
    //     })
    //     .catch(error => {
    //       console.error('Erro ao enviar dados para o servidor:', error);
    //     });
    //     // Atualiza a página
    //     window.location.reload();
    // },
    enviarEmail() {
      fetch('http://localhost:3000/enviarEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.email),
      })
        .then(response => response.text())
        // .then(data => {
        //   alert(data);
        // })
        .catch(error => {
          console.error('Erro:', error);
        });
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