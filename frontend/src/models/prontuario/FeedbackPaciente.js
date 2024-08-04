class FeedbackPaciente {
    constructor() {
        this.intercorrencia = "";
        this.adesao = {
            facil: false,
            maisMenos: false,
            dificil: false,
            observacao: ""
        };
        this.empenho = {
            baixo: false,
            normal: false,
            alto: false,
            observacao: ""
        };
        this.resultados = {
            nenhum: false,
            safistatorio: false,
            alemEsperado: false,
            observacao: ""
        };
    }
}

export default FeedbackPaciente;