<template>
  <div class="container-fluid">
    <h2 class="text-center"><b>Fila de espera</b></h2>

    <div class="row my-4">
      <!-- <div class="col-3 d-flex align-items-center">
        <label for="filtro" class="me-2">Exibir:</label>
        <select class="form-select" id="filtro" v-model="filtro">
          <option value="Todos os Projetos" selected>Todos os Projetos</option>
          <option value="Alunos e Funcionários">Alunos e Funcionários</option>
          <option value="Cardiovascular">Cardiovascular</option>
          <option value="Materno Infantil">Materno Infantil</option>
          <option value="Obesidade">Obesidade</option>
        </select>
      </div> -->
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>Nº</th>
          <th>Paciente</th>
          <th>Motivo</th>
          <th>Projeto</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>

        <tr v-for="paciente in pacientesNaFila" :key="paciente.cod">
          <td><b>{{ pacientesNaFila.indexOf(paciente) + 1 }}</b></td>
          <td>{{ paciente.dadosPessoais.nomeCompleto }}</td>
          <td>{{ paciente.motivo }}</td>
          <td>{{ paciente.projeto }}</td>
          <td>
            <button @click="atenderPaciente(nutricionista, paciente.cod, paciente.dadosPessoais.nomeCompleto)" class="btn btn-success me-1">Atender</button>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
import { server_backend_url } from "../../server_url.js";

export default {
  name: "FilaPacientes",
  data() {
    return {
      pacientes: [],
      filtro: "Todos os Projetos",
      nutricionista: {
        cod: 1,
        nome: "Joyce Furtunato Barbosa",
        email: "joycefurtunatobarbosa@gmail.com"
      },
      email: {
      to: '',
      subject: '',
      text: '',
      nutricionista: ''
      },
    };
  },
  computed: {
    pacienteFiltro() {
      if (this.filtro === "Todos os Projetos") {
        return this.paciente;
      } else {
        return this.nutricionista.filter(paciente => paciente.projeto === this.filtro);
      }
    },
    pacientesNaFila() {
      if (this.pacientes) {
        return this.pacientes.filter(paciente => paciente.status === 'Na fila');
      }
      return []; // Retornando um array vazio se this.pacientes for undefined ou null
    }
  },
  mounted() {
    this.carregarPacientes();
  },
  methods: {
    carregarPacientes() {
      fetch(`${server_backend_url}/listarPacientes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          this.pacientes = data.pacientes;
        })
        .catch((error) => {
          console.error("Erro ao carregar dados dos pacientes:", error);
        });
    },
    atenderPaciente(nutricionista, codPaciente, nomePaciente) {
      if (window.confirm('Tem certeza que deseja atender este paciente?')) {
          fetch(`${server_backend_url}/atenderPaciente`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({ 
                  codPaciente: codPaciente,
                  nutricionista: nutricionista,
                  // nomePaciente: nomePaciente
              }),
              mode: "cors",
          })
          .then((response) => response.json())
          .then((data) => {
              this.pacientes = data.pacientes;

              // Enviar email
              this.email.to = this.nutricionista.email;
              this.email.subject = "CEN - Novo atendimento";
              this.email.text = `O(a) paciente <strong>"${nomePaciente}"</strong> começou a ser atendido(a).`;
              this.email.nutricionista = nutricionista.nome;
              console.log(this.email)
              this.enviarEmail();

              this.nutricionistaAtenderPaciente(nutricionista.cod, codPaciente, nomePaciente);
              window.location.reload();
          })
          .catch((error) => {
              console.error("Erro ao atender paciente:", error);
          });
      } else {
          console.log('O usuário cancelou o atendimento do paciente.');
      }
    },
    nutricionistaAtenderPaciente(codNutricionista, codPaciente, nomePaciente) {
        fetch(`${server_backend_url}/nutricionistaAtenderPaciente`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
              codNutricionista: codNutricionista,
              codPaciente: codPaciente,
              nomePaciente: nomePaciente
            }),
            mode: "cors",
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.message);
            // window.location.reload(true);  
            // window.location.href = `/paciente/${codPaciente}`;
            window.open(`/paciente/${codPaciente}`);
        })
        .catch((error) => {
            console.error("Erro ao atender paciente:", error);
        });
        // window.location.reload(true);
        window.open(`/paciente/${codPaciente}`);
    },
    enviarEmail() {
      fetch(`${server_backend_url}/enviarEmail`, {
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
    }
    
  },
};
</script>

<style>
.table tbody tr {
  vertical-align: middle;
}
</style>