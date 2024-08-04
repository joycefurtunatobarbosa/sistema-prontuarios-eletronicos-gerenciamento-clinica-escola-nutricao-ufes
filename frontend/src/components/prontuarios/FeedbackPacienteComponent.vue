<template>
    <!-- Aba de Feedback do Paciente-->
    <div class="tab-pane fade show active" id="refeicoes">
        <h5 class="text mt-5 text-primary"><b>FEEDBACK DO PACIENTE</b></h5>
        <form>

            <div class="form-group mt-3 row">
                <div class="col-8">
                    <label for="intercorrencia" class="col-form-label">Alguma intercorrência desde a última consulta?</label>
                    <textarea class="form-control" rows="4" id="intercorrencia" v-model="feedbackPaciente.intercorrencia" placeholder="(Gripe, virose, cirurgias, etc)"></textarea>
                </div>
            </div>

            <div class="form-group d-flex mt-5">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">● Qual sua dificuldade em aderir a dieta?</label>

                        <input class="form-check-input my-auto ms-2" type="radio" value="Fácil" id="adesaoFacil" v-model="feedbackPaciente.adesao.dificuldade">
                        <label class="form-check-label ms-2" for="adesaoFacil">Fácil</label>

                        <input class="form-check-input my-auto ms-2" type="radio" value="Mais ou menos" id="adesaoMaisMenos" v-model="feedbackPaciente.adesao.dificuldade">
                        <label class="form-check-label ms-2" for="adesaoMaisMenos">Mais ou menos</label>

                        <input class="form-check-input my-auto ms-2" type="radio" value="Difícil" id="adesaoDificil" v-model="feedbackPaciente.adesao.dificuldade">
                        <label class="form-check-label ms-2" for="adesaoDificil">Difícil</label>
                    </div>
                </div>
            </div>

            <div class="form-group row">
                <div class="col-8">
                    <!-- <label for="adesaoDetalhes" class="col-form-label">Detalhes: </label> -->
                    Detalhes:
                    <textarea class="form-control" rows="4" id="adesaoDetalhes" v-model="feedbackPaciente.adesao.descricao"></textarea>
                </div>
            </div>

            <div class="form-group d-flex mt-5">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">● Como define o seu empenho?</label>

                        <input class="form-check-input my-auto ms-2" type="radio" value="Baixo" id="empenhoBaixo" v-model="feedbackPaciente.empenho.nivel">
                        <label class="form-check-label ms-2" for="empenhoBaixo">Baixo</label>

                        <input class="form-check-input my-auto ms-2" type="radio" value="Normal" id="empenhoNormal" v-model="feedbackPaciente.empenho.nivel">
                        <label class="form-check-label ms-2" for="empenhoNormal">Normal</label>

                        <input class="form-check-input my-auto ms-2" type="radio" value="Alto" id="empenhoAlto" v-model="feedbackPaciente.empenho.nivel">
                        <label class="form-check-label ms-2" for="empenhoAlto">Alto</label>
                    </div>
                </div>
            </div>

            <div class="form-group row">
                <div class="col-8">
                    <!-- <label for="empenhoDetalhes" class="col-form-label">Detalhes: </label> -->
                    Detalhes:
                    <textarea class="form-control" rows="4" id="empenhoDetalhes" v-model="feedbackPaciente.empenho.descricao"></textarea>
                </div>
            </div>

            <div class="form-group d-flex mt-5">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">● Como classifica seus resultados?</label>

                        <input class="form-check-input my-auto ms-2" type="radio" value="Nenhum" id="resultadosNenhum" v-model="feedbackPaciente.resultados.nivel">
                        <label class="form-check-label ms-2" for="resultadosNenhum">Nenhum</label>

                        <input class="form-check-input my-auto ms-2" type="radio" value="Satisfatório" id="resultadosSatisfatorio" v-model="feedbackPaciente.resultados.nivel">
                        <label class="form-check-label ms-2" for="resultadosSatisfatorio">Satisfatório</label>

                        <input class="form-check-input my-auto ms-2" type="radio" value="Além do esperado" id="resultadosAlemEsperado" v-model="feedbackPaciente.resultados.nivel">
                        <label class="form-check-label ms-2" for="resultadosAlemEsperado">Além do esperado</label>
                    </div>
                </div>
            </div>

            <div class="form-group row">
                <div class="col-8">
                    <!-- <label for="resultadosDetalhes" class="col-form-label">Detalhes: </label> -->
                    Detalhes:
                    <textarea class="form-control" rows="4" id="resultadosDetalhes" v-model="feedbackPaciente.resultados.descricao"></textarea>
                </div>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    name: "FeedbackPacienteComponent",
    props:{
        feedbackPacienteProps: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            feedbackPaciente: this.feedbackPacienteProps,
        };
    },
}
</script>

<style></style>
