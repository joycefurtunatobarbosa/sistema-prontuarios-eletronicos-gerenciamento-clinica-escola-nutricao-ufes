class Anamnese {
    constructor() {
        this.sobrePaciente = {
            resumoRotina: "",
            tentativaDieta: "",
            usoMedicamentos: "",
            alteracoesCorporais: "",
        };

        this.aspectoEmocional = {
            descontroleSaciedade: "",
            compulsaoRecusaAlimentar: "",
        };

        this.cicloMenstrual = {
            dataUltimaMenstruacao: "",
            diasUltimaMenstruacao: "",
            fluxoUltimaMenstruacao: "",
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