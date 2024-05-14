class Anamnese {
    constructor() {
        this.sobrePaciente = {
            tentativaDieta: "",
            usoMedicamentos: "",
            alteracoesCorporais: "",
        };

        this.preferenciasAlimentares = {
            periodoComFome: "",
            beliscaAlimento: "",
            produtosLightDiet: "",
            docesSobremesas: "",
            intoleranciaAlergia: "",
            aversaoAlimentar: "",
        };

        this.habitosGerais = {
            tempoTela: "",
            fuma: "",
            tipoFumo: "",
            quantidadeFumo: "",
            frequenciaFumo: "",
            bebe: "",
            tipoBebida: "",
            quantidadeBebida: "",
            frequenciaBebida: "",
            exercicios: "",
            tipoExercicio: "",
            horarioExercicio: "",
            duracaoExercicio: "",
            frequenciaExercicio: "",
            recipienteAgua: "",
            capacidadeRecipienteAgua: "",
            qtdRecipienteAgua: "",
            consumoTotalAgua: "",
            horarioDorme: "",
            horarioAcorda: "",
            horasSono: "",
            qualidadeSono: "",
            observacaoSono: "",
        };
    }
}

export default Anamnese;