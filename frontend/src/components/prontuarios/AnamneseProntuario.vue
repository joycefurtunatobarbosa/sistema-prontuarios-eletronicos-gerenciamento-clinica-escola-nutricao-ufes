<template>
    <!-- Aba de Anamnese -->
    <div class="tab-pane fade show active" id="anamnese">
        <h5 class="text mt-5 text-primary"><b>7. ANAMNESE</b></h5>
        <form>

            <!-- Sobre o paciente -->
            <h6 class="mt-4 mb-3"><b>● Sobre o paciente</b></h6>

            <div class="form-group mt-3 d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Tentativa anterior de dieta:</label>

                        <div class="form-check form-check-inline ms-2">
                            <input class="form-check-input" type="radio" id="simDietaAnterior"
                                v-model="anamnese.sobrePaciente.tentativaDieta" />
                            <label class="form-check-label" for="simDietaAnterior">Sim</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="naoDietaAnterior"
                                v-model="anamnese.sobrePaciente.tentativaDieta" value="Não" />
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
                            <input class="form-check-input" type="radio" id="simMedicamentos"
                                v-model="anamnese.sobrePaciente.usoMedicamentos" />
                            <label class="form-check-label" for="simMedicamentos">Sim</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="naoMedicamentos"
                                v-model="anamnese.sobrePaciente.usoMedicamentos" value="Não" />
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
                            <input class="form-check-input" type="radio" id="simAlteracoesCorporais"
                                v-model="anamnese.sobrePaciente.alteracoesCorporais" />
                            <label class="form-check-label" for="simAlteracoesCorporais">Sim</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="naoAlteracoesCorporais"
                                v-model="anamnese.sobrePaciente.alteracoesCorporais" value="Não" />
                            <label class="form-check-label" for="naoAlteracoesCorporais">Não</label>
                        </div>
                    </div>
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
                    <input type="text" class="form-control" id="quantidadeFumo" v-model="anamnese.habitosGerais.quantidadeFumo" />
                </div>

                <div class="col">
                    <label for="frequenciaFumo" class="col-form-label">Frequência:</label>
                    <input type="text" class="form-control" id="frequenciaFumo" v-model="anamnese.habitosGerais.frequenciaFumo" />
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
                    <input type="text" class="form-control" id="tipoExercicio" v-model="anamnese.habitosGerais.tipoExercicio" />
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
                    <label for="meioConsumoAgua" class="col col-form-label">Meio de consumo:</label>
                    <select class="form-select" id="meioConsumoAgua" v-model="anamnese.habitosGerais.meioConsumoAgua">
                        <option value="Copo">Copos, canecas ou xícaras</option>
                        <option value="Garrafa">Garrafas ou garrafinhas</option>
                    </select>
                </div>

                <div class="col">
                    <label for="consumoTotalAgua" class="col-form-label">Consumo total:</label>
                    <textarea class="form-control" id="consumoTotalAgua" rows="3"
                        v-model="anamnese.habitosGerais.consumoTotalAgua"></textarea>
                </div>
            </div>

            <!-- Sono -->
            <h6 class="mt-5 mb-3"><b>● Sono</b></h6>
            <div class="form-group row mt-4">
                <div class="col">
                    <label for="horarioDorme" class="col-form-label">Horário que dorme:</label>
                    <input type="text" class="form-control" id="horarioDorme" v-model="anamnese.habitosGerais.horarioDorme" />
                </div>

                <div class="col">
                    <label for="horarioAcorda" class="col-form-label">Horário que acorda:</label>
                    <input type="text" class="form-control" id="horarioAcorda" v-model="anamnese.habitosGerais.horarioAcorda" />
                </div>

                <div class="col">
                    <label for="horasSono" class="col-form-label">Horas de sono:</label>
                    <input type="text" class="form-control" id="horasSono" v-model="anamnese.habitosGerais.horasSono" />
                </div>
            </div>

            <div class="form-group row mt-4">
                <div class="col">
                    <label for="qualidadeSono" class="col-form-label">Qualidade do sono:</label>
                    <input type="text" class="form-control" id="qualidadeSono" v-model="anamnese.habitosGerais.qualidadeSono" />
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
    name: "AnamneseProntuario",
    data() {
        return {
            anamnese: {
                sobrePaciente: {
                    tentativaDieta: "",
                    usoMedicamentos: "",
                    alteracoesCorporais: "",
                },
                preferenciasAlimentares: {
                    periodoComFome: "",
                    beliscaAlimento: "",
                    produtosLightDiet: "",
                    docesSobremesas: "",
                    intoleranciaAlergia: "",
                    aversaoAlimentar: "",
                },
                habitosGerais: {
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
                    meioConsumoAgua: "",
                    consumoTotalAgua: "",
                    horarioDorme: "",
                    horarioAcorda: "",
                    horasSono: "",
                    qualidadeSono: "",
                    observacaoSono: "",
                }
            },
        };
    },
}
</script>

<style></style>