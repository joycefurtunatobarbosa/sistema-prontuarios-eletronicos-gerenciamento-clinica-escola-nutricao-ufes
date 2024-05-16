import DadosPessoais from "./prontuario/DadosPessoais";

class Paciente {
    constructor() {
        this._id = "";
        this.cod = "";
        this.nome = "";
        this.motivo = "";
        this.projeto = "";
        this.dadosPessoais = new DadosPessoais;
    }
}

export default Paciente;
