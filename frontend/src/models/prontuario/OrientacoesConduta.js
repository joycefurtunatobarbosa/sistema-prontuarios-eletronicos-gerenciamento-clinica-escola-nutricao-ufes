class OrientacoesConduta {
    constructor() {
        // Orientações
        this.descricao = "Inicio do atendimento de [nome do paciente], [idade] anos, (sem patologias ou com história pregressa de ... ) , procurou acompanhamento na Clínica Escola de Nutrição,  devido a [motivo] , com o objetivo de [objetivo].";
        this.medicamentos = "";
        this.avaliacaoClinica = "";
        this.anamnese = "";
        this.registroAlimentar = "0 Kcal (Kcal/Kg), 0% LIP, 0% CHO e 0% PTN (g/Kg), 0% Saturada. (Colocar demais micronutrientes que estejam muito abaixo ou acima da RDA)";
        this.avaliacaoBioquimica = "";
        this.avaliacaoAntropometrica = `0% Gordura, classificado como [classificação], segundo  a tabela adaptada de Jacson e Pollock, 1978.  IMC = 0 Kg/m2  , classificado como [classificação]. (Colocar demais dados que estejam alterados, caso paciente tenha CC e RCE aumentada relatar risco cardiovascular aumentado)`;
        // Conduta
        this.orientacoes = "";
        this.prescricaoDietetica = "Dieta [Hiper ou hipocalórica] de [ ... Kcal ( - .... Kcal/dia ou + ... Kcal/dia)] , com [ ... % CHO, ... % LIP e ... % PTN (g/Kg peso)]";        
        this.objetivo = `Perda ou Ganho de ... gramas / semana ou mês. (Colocar objetivos de educação nutricional.)`;
        this.dataEntregaPlano = "";
        this.dataRetorno = "";
        this.assinatura = false;
    }
}

export default OrientacoesConduta;