<template>
    <!-- Aba de Anamnese -->
    <div class="tab-pane fade show active" id="anamnese">
        <h5 class="text mt-5 text-primary"><b>ANAMNESE</b></h5>
        <form>

            <!-- Sobre o paciente -->
            <h6 class="mt-4 mb-3"><b>● Sobre o paciente</b></h6>

            <div class="form-group mt-3 row">
                <div class="col-8">
                    <label for="resumoRotina" class="col-form-label">Resumo da rotina:</label>
                    <textarea class="form-control" id="resumoRotina" rows="5" v-model="anamnese.sobrePaciente.resumoRotina"></textarea>
                </div>
            </div>

            <div class="form-group mt-5 d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Tentativa anterior de dieta:</label>

                        <div class="form-check form-check-inline ms-2">
                            <input class="form-check-input" type="radio" id="simDietaAnterior" value="Sim"
                                v-model="anamnese.sobrePaciente.tentativaDieta" />
                            <label class="form-check-label" for="simDietaAnterior">Sim</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="naoDietaAnterior" value="Não"
                                v-model="anamnese.sobrePaciente.tentativaDieta" />
                            <label class="form-check-label" for="naoDietaAnterior">Não</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Já usou medicamentos para emagrecer:</label>

                        <div class="form-check form-check-inline ms-2">
                            <input class="form-check-input" type="radio" id="simMedicamentos" value="Sim"
                                v-model="anamnese.sobrePaciente.usoMedicamentos" />
                            <label class="form-check-label" for="simMedicamentos">Sim</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="naoMedicamentos" value="Não"
                                v-model="anamnese.sobrePaciente.usoMedicamentos" />
                            <label class="form-check-label" for="naoMedicamentos">Não</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Alterações corporais durante a vida (efeito sanfona):</label>

                        <div class="form-check form-check-inline ms-2">
                            <input class="form-check-input" type="radio" id="simAlteracoesCorporais" value="Sim"
                                v-model="anamnese.sobrePaciente.alteracoesCorporais" />
                            <label class="form-check-label" for="simAlteracoesCorporais">Sim</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="naoAlteracoesCorporais" value="Não"
                                v-model="anamnese.sobrePaciente.alteracoesCorporais" />
                            <label class="form-check-label" for="naoAlteracoesCorporais">Não</label>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Aspecto emocional -->
            <h6 class="mt-5 mb-3"><b>● Aspecto emocional</b></h6>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Continua comendo a sua comida preferida, mesmo depois de cheio(a)?</label>
                        <div class="form-check form-check-inline ms-2">
                            <input class="form-check-input" type="radio" id="simDescontroleSaciedade" value="Sim"
                                v-model="anamnese.aspectoEmocional.descontroleSaciedade" />
                            <label class="form-check-label" for="simDescontroleSaciedade">Sim</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="naoDescontroleSaciedade" value="Não"
                                v-model="anamnese.sobrePaciente.descontroleSaciedade" />
                            <label class="form-check-label" for="naoDescontroleSaciedade">Não</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group row">
                <div class="col-4">
                        <label for="compulsaoRecusaAlimentar" class="col-form-label">Compulsão ou recusa alimentar:</label>
                        <input type="text" class="form-control" id="compulsaoRecusaAlimentar" placeholder="Nome do alimento" v-model="anamnese.aspectoEmocional.compulsaoRecusaAlimentar" />
                    </div>
            </div>
            

            <!-- Ciclo menstrual -->
            <h6 class="mt-5 mb-3"><b>● Ciclo menstrual</b></h6>

            <div class="form-group mt-3 row">
                <div class="col-4">
                    <label for="dataUltimaMenstruacao" class="col-form-label">Início da última menstruação:</label>
                    <input type="date" class="form-control" id="date" name="dataUltimaMenstruacao" v-model="anamnese.cicloMenstrual.dataUltimaMenstruacao">
                </div>

                <div class="col">
                    <label for="diasMenstruacao" class="col-form-label">Dias:</label>
                    <input type="text" class="form-control" id="diasUltimaMenstruacao" v-model="anamnese.cicloMenstrual.diasUltimaMenstruacao" />
                </div>

                <div class="col">
                    <label for="fluxoMenstruacao" class="col-form-label">Fluxo:</label>
                    <select class="form-select" name="fluxoUltimaMenstruacao" v-model="anamnese.cicloMenstrual.fluxoUltimaMenstruacao">
                        <option value="Pouco">Pouco </option>
                        <option value="Médio">Médio </option>
                        <option value="Intenso">Intenso </option>
                    </select>
                </div>
            </div>

            <!-- Preferências alimentares -->
            <h6 class="mt-5 mb-3"><b>● Preferências alimentares</b></h6>
            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="periodoComFome" class="col-form-label">Período com mais fome:</label>
                    <textarea class="form-control" id="periodoComFome" rows="3"
                        v-model="anamnese.preferenciasAlimentares.periodoComFome"></textarea>
                </div>

                <div class="col">
                    <label for="beliscaAlimento" class="col-form-label">Belisca algum alimento (durante o dia):</label>
                    <textarea class="form-control" id="beliscaAlimento" rows="3"
                        v-model="anamnese.preferenciasAlimentares.beliscaAlimento"></textarea>
                </div>
            </div>

            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="produtosLightDiet" class="col-form-label">Produtos light ou diet:</label>
                    <textarea class="form-control" id="produtosLightDiet" rows="3"
                        v-model="anamnese.preferenciasAlimentares.produtosLightDiet"></textarea>
                </div>

                <div class="col">
                    <label for="docesSobremesas" class="col-form-label">Doces e sobremesas:</label>
                    <textarea class="form-control" id="docesSobremesas" rows="3"
                        v-model="anamnese.preferenciasAlimentares.docesSobremesas"></textarea>
                </div>
            </div>

            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="intoleranciaAlergia" class="col-form-label">Intolerância ou alergia alimentar:</label>
                    <textarea class="form-control" id="intoleranciaAlergia" rows="3"
                        v-model="anamnese.preferenciasAlimentares.intoleranciaAlergia"></textarea>
                </div>

                <div class="col">
                    <label for="aversaoAlimentar" class="col-form-label">Aversão alimentar:</label>
                    <textarea class="form-control" id="aversaoAlimentar" rows="3"
                        v-model="anamnese.preferenciasAlimentares.aversaoAlimentar"></textarea>
                </div>
            </div>

            <!-- Hábitos gerais -->
            <h6 class="mt-5 mb-3"><b>● Hábitos gerais</b></h6>

            <div class="form-group row">
                <div class="col-6">
                    <label for="tempoTela" class="col-form-label">Tempo de tela para lazer (horas):</label>
                    <input type="text" class="form-control" id="tempoTela" v-model="anamnese.habitosGerais.tempoTela" />
                </div>
            </div>

            <!-- Fumante -->
            <div class="form-group mt-3 d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Fuma:</label>

                        <div class="form-check form-check-inline ms-2">
                            <input class="form-check-input" type="radio" id="fumaSim" v-model="anamnese.habitosGerais.fuma"
                                value="Sim" />
                            <label class="form-check-label" for="fumaSim">Sim</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="fumaNao" v-model="anamnese.habitosGerais.fuma"
                                value="Não" />
                            <label class="form-check-label" for="fumaNao">Não</label>
                        </div>

                    </div>
                </div>
            </div>

            <div class="form-group row">
                <div class="col">
                    <label for="tipoFumo" class="col-form-label">Tipo:</label>
                    <input type="text" class="form-control" id="tipoFumo" v-model="anamnese.habitosGerais.tipoFumo" />
                </div>

                <div class="col-3">
                    <label for="quantidadeFumo" class="col-form-label">Quantidade:</label>
                    <input type="text" class="form-control" id="quantidadeFumo"
                        v-model="anamnese.habitosGerais.quantidadeFumo" />
                </div>

                <div class="col">
                    <label for="frequenciaFumo" class="col-form-label">Frequência:</label>
                    <input type="text" class="form-control" id="frequenciaFumo"
                        v-model="anamnese.habitosGerais.frequenciaFumo" />
                </div>
            </div>

            <!-- Bebida -->
            <div class="form-group d-flex mt-4">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Bebe:</label>

                        <div class="form-check form-check-inline ms-2">
                            <input class="form-check-input" type="radio" id="bebeSim" v-model="anamnese.habitosGerais.bebe"
                                value="Sim" />
                            <label class="form-check-label" for="bebeSim">Sim</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="bebeNao" v-model="anamnese.habitosGerais.bebe"
                                value="Não" />
                            <label class="form-check-label" for="bebeNao">Não</label>
                        </div>

                    </div>
                </div>
            </div>

            <div class="form-group row">
                <div class="col">
                    <label for="tipoBebida" class="col-form-label">Tipo:</label>
                    <input type="text" class="form-control" id="tipoBebida" v-model="anamnese.habitosGerais.tipoBebida" />
                </div>

                <div class="col-3">
                    <label for="quantidadeBebida" class="col-form-label">Quantidade:</label>
                    <input type="text" class="form-control" id="quantidadeBebida"
                        v-model="anamnese.habitosGerais.quantidadeBebida" />
                </div>

                <div class="col">
                    <label for="frequenciaBebida" class="col-form-label">Frequência:</label>
                    <input type="text" class="form-control" id="frequenciaBebida"
                        v-model="anamnese.habitosGerais.frequenciaBebida" />
                </div>
            </div>

            <div class="form-group d-flex mt-4">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Exercícios:</label>

                        <div class="form-check form-check-inline ms-2">
                            <input class="form-check-input" type="radio" id="exerciciosSim"
                                v-model="anamnese.habitosGerais.exercicios" value="Sim" />
                            <label class="form-check-label" for="exerciciosSim">Sim</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="exerciciosNao"
                                v-model="anamnese.habitosGerais.exercicios" value="Não" />
                            <label class="form-check-label" for="exerciciosNao">Não</label>
                        </div>

                    </div>
                </div>
            </div>

            <div class="form-group row">
                <div class="col">
                    <label for="tipoExercicio" class="col-form-label">Tipo:</label>
                    <input type="text" class="form-control" id="tipoExercicio"
                        v-model="anamnese.habitosGerais.tipoExercicio" />
                </div>

                <div class="col">
                    <label for="horarioExercicio" class="col-form-label">Horário:</label>
                    <input type="text" class="form-control" id="horarioExercicio"
                        v-model="anamnese.habitosGerais.horarioExercicio" />
                </div>
            </div>

            <div class="form-group row">
                <div class="col">
                    <label for="duracaoExercicio" class="col-form-label">Duração:</label>
                    <input type="text" class="form-control" id="duracaoExercicio"
                        v-model="anamnese.habitosGerais.duracaoExercicio" />
                </div>

                <div class="col">
                    <label for="frequenciaExercicio" class="col-form-label">Frequência:</label>
                    <input type="text" class="form-control" id="frequenciaExercicio"
                        v-model="anamnese.habitosGerais.frequenciaExercicio" />
                </div>
            </div>

            <!-- Ingestão de Água -->
            <h6 class="mt-5 mb-3"><b>● Ingestão de Água</b></h6>
            <div class="form-group row mt-4">
                <div class="col">
                    <label for="recipienteAgua" class="col col-form-label">Meio de consumo:</label>
                    <select class="form-select" id="recipienteAgua" v-model="anamnese.habitosGerais.recipienteAgua">
                        <option value="Copo">Copos, canecas ou xícaras</option>
                        <option value="Garrafa">Garrafas ou garrafinhas</option>
                    </select>
                </div>

                <div class="col">
                    <label for="capacidadeRecipienteAgua" class="col-form-label">Capacidade (ml):</label>
                    <input type=text class="form-control" id="capacidadeRecipienteAgua"
                        v-model="anamnese.habitosGerais.capacidadeRecipienteAgua" />
                </div>

                <div class="col">
                    <label for="qtdRecipienteAgua" class="col-form-label">Quantidade:</label>
                    <input type=text class="form-control" id="qtdRecipienteAgua"
                        v-model="anamnese.habitosGerais.qtdRecipienteAgua" />
                </div>

                <div class="col">
                    <label for="consumoTotalAgua" class="col-form-label">Consumo total:</label>
                    <textarea class="form-control" id="consumoTotalAgua" rows="2"
                        v-model="anamnese.habitosGerais.consumoTotalAgua"></textarea>
                </div>
            </div>

            <!-- Sono -->
            <h6 class="mt-5 mb-3"><b>● Sono</b></h6>
            <div class="form-group row mt-4">
                <div class="col">
                    <label for="horarioDorme" class="col-form-label">Horário que dorme:</label>
                    <input type="text" class="form-control" id="horarioDorme"
                        v-model="anamnese.habitosGerais.horarioDorme" />
                </div>

                <div class="col">
                    <label for="horarioAcorda" class="col-form-label">Horário que acorda:</label>
                    <input type="text" class="form-control" id="horarioAcorda"
                        v-model="anamnese.habitosGerais.horarioAcorda" />
                </div>

                <div class="col">
                    <label for="horasSono" class="col-form-label">Horas de sono:</label>
                    <input type="text" class="form-control" id="horasSono" v-model="anamnese.habitosGerais.horasSono" />
                </div>
            </div>

            <div class="form-group row mt-4">
                <div class="col">
                    <label for="qualidadeSono" class="col-form-label">Qualidade do sono:</label>
                    <input type="text" class="form-control" id="qualidadeSono"
                        v-model="anamnese.habitosGerais.qualidadeSono" />
                </div>

                <div class="col">
                    <label for="observacaoSono" class="col-form-label">Observação:</label>
                    <textarea class="form-control" id="observacaoSono" rows="3"
                        v-model="anamnese.habitosGerais.observacaoSono"></textarea>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "AnamneseComponent",
    props: {
        anamneseProps: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            anamnese: this.anamneseProps,
        };
    },
}
</script>

<style></style>