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
                            <input class="form-check-input " type="radio" name="" id="" value="">
                            <label class="form-check-label " for="">Sim</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input " type="radio" name="" id="" value="">
                            <label class="form-check-label " for="">Não</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Já usou medicamentos para emagrecer:</label>

                        <div class="form-check form-check-inline ms-2">
                            <input class="form-check-input " type="radio" name="" id="" value="">
                            <label class="form-check-label " for="">Sim</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input " type="radio" name="" id="" value="">
                            <label class="form-check-label " for="">Não</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Alterações corporais durante a vida (efeito sanfona):</label>

                        <div class="form-check form-check-inline ms-2">
                            <input class="form-check-input " type="radio" name="" id="" value="">
                            <label class="form-check-label " for="">Sim</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input " type="radio" name="" id="" value="">
                            <label class="form-check-label " for="">Não</label>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Preferências alimentares -->
            <h6 class="mt-5 mb-3"><b>● Preferências alimentares</b></h6>
            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="celular" class="col-form-label">Período com mais fome:</label>
                    <textarea class="form-control" id="" name="" rows="3"></textarea>
                </div>

                <div class="col">
                    <label for="celular" class="col-form-label">Belisca algum alimento (durante o dia):</label>
                    <textarea class="form-control" id="" name="" rows="3"></textarea>
                </div>
            </div>

            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="celular" class="col-form-label">Produtos light ou diet:</label>
                    <textarea class="form-control" id="" name="" rows="3"></textarea>
                </div>

                <div class="col">
                    <label for="celular" class="col-form-label">Doces e sobremesas:</label>
                    <textarea class="form-control" id="" name="" rows="3"></textarea>
                </div>
            </div>

            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="celular" class="col-form-label">Intolerância ou alergia alimentar:</label>
                    <textarea class="form-control" id="" name="" rows="3"></textarea>
                </div>

                <div class="col">
                    <label for="celular" class="col-form-label">Aversão alimentar:</label>
                    <textarea class="form-control" id="" name="" rows="3"></textarea>
                </div>
            </div>

            <!-- Hábitos gerais -->
            <h6 class="mt-5 mb-3"><b>● Hábitos gerais</b></h6>

            <div class="form-group row">
                <div class="col-6">
                    <label for="celular" class="col-form-label">Tempo de tela para lazer (horas):</label>
                    <input type="text" class="form-control" />
                </div>
            </div>

            <!-- Fumante -->
            <div class="form-group mt-3 d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Fuma:</label>

                        <div class="form-check form-check-inline ms-2">
                            <input class="form-check-input " type="radio" name="" id="" value="">
                            <label class="form-check-label " for="">Sim</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input " type="radio" name="" id="" value="">
                            <label class="form-check-label " for="">Não</label>
                        </div>

                    </div>
                </div>
            </div>

            <div class="form-group row">
                <div class="col">
                    <label for="celular" class="col-form-label">Tipo:</label>
                    <input type="text" class="form-control" />
                </div>

                <div class="col-3">
                    <label for="email" class="col-form-label">Quantidade:</label>
                    <input type="text" class="form-control" />
                </div>

                <div class="col">
                    <label for="email" class="col-form-label">Frequência:</label>
                    <input type="text" class="form-control" />
                </div>
            </div>

            <!-- Bebida -->
            <div class="form-group d-flex mt-4">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Bebe:</label>

                        <div class="form-check form-check-inline ms-2">
                            <input class="form-check-input " type="radio" name="" id="" value="">
                            <label class="form-check-label " for="">Sim</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input " type="radio" name="" id="" value="">
                            <label class="form-check-label " for="">Não</label>
                        </div>

                    </div>
                </div>
            </div>

            <div class="form-group row">
                <div class="col">
                    <label for="celular" class="col-form-label">Tipo:</label>
                    <input type="text" class="form-control" />
                </div>

                <div class="col-3">
                    <label for="email" class="col-form-label">Quantidade:</label>
                    <input type="text" class="form-control" />
                </div>

                <div class="col">
                    <label for="email" class="col-form-label">Frequência:</label>
                    <input type="text" class="form-control" />
                </div>
            </div>

            <div class="form-group d-flex mt-4">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Exercícios:</label>

                        <div class="form-check form-check-inline ms-2">
                            <input class="form-check-input " type="radio" name="" id="" value="">
                            <label class="form-check-label " for="">Sim</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input " type="radio" name="" id="" value="">
                            <label class="form-check-label " for="">Não</label>
                        </div>

                    </div>
                </div>
            </div>

            <div class="form-group row">
                <div class="col">
                    <label for="" class="col-form-label">Tipo:</label>
                    <input type="text" class="form-control" />
                </div>

                <div class="col">
                    <label for="" class="col-form-label">Horário:</label>
                    <input type="text" class="form-control" />
                </div>
            </div>

            <div class="form-group row">
                <div class="col">
                    <label for="" class="col-form-label">Duração:</label>
                    <input type="text" class="form-control" />
                </div>

                <div class="col">
                    <label for="" class="col-form-label">Frequência:</label>
                    <input type="text" class="form-control" />
                </div>
            </div>

            <!-- Ingestão de Água -->
            <h6 class="mt-5 mb-3"><b>● Ingestão de Água</b></h6>
            <div class="form-group row mt-4">
                <div class="col">
                    <label for="" class="col col-form-label">Meio de consumo:</label>
                    <select class="form-select" id="">
                        <option value="Copo">Copos, canecas ou xícaras</option>
                        <option value="Garrafa">Garrafas ou garrafinhas</option>
                    </select>
                </div>

                <div class="col">
                    <label for="" class="col-form-label">Consumo total:</label>
                    <textarea class="form-control" id="" name="" rows="3"></textarea>
                </div>
            </div>

            <!-- Sono -->
            <h6 class="mt-5 mb-3"><b>● Sono</b></h6>
            <div class="form-group row mt-4">
                <div class="col">
                    <label for="celular" class="col-form-label">Horário que dorme:</label>
                    <input type="text" class="form-control" />
                </div>

                <div class="col">
                    <label for="celular" class="col-form-label">Horário que acorda:</label>
                    <input type="text" class="form-control" />
                </div>

                <div class="col">
                    <label for="celular" class="col-form-label">Horas de sono:</label>
                    <input type="text" class="form-control" />
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

        };
    },
}
</script>

<style></style>