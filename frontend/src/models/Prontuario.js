import Anamnese from "./prontuario/Anamnese";
import DadosPessoais from "./prontuario/DadosPessoais";
import HistoriaFamiliar from "./prontuario/HistoriaFamiliar";
import HistoriaPessoal from "./prontuario/HistoriaPessoal";
import Medicamentos from "./prontuario/Medicamentos";
import Refeicoes from "./prontuario/Refeicoes";

class Prontuario {
    constructor() {
        this._id = "";
        this.cod = "";
        this.codPaciente = "";
        this.anamnese = new Anamnese(),
        this.dadosPessoais = new DadosPessoais(),
        this.historiaFamiliar = new HistoriaFamiliar(),
        this.historiaPessoal = new HistoriaPessoal(),
        this.medicamentos = new Medicamentos(),
        this.refeicoes = new Refeicoes()
    }
}

export default Prontuario;
