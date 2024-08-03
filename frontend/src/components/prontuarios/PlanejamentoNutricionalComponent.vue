<template>
    <!-- Aba de Planejamento Nutricional -->
    <div class="tab-pane fade show active" id="refeicoes">
        <h5 class="text mt-5 text-primary"><b>PLANEJAMENTO NUTRICIONAL</b></h5>
        <form>
            <!-- Refeições -->
            <div class="form-group row mt-3">
                <div class="col-6">
                    <label class="col-form-label me-2">Planilha com os cálculos:</label>
                    <br>
                    <a class="btn btn-info" href="https://docs.google.com/spreadsheets/d/1SOLtwXLCRQSOk_Bly0_L24BUk_5Yor0Z/edit?usp=sharing&ouid=113702697421348864022&rtpof=true&sd=true" target="_blank">Abrir</a>
                </div>
            </div>

            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="tmb" class="col-form-label">TMB:</label>
                    <input type="text" class="form-control" id="tmb" v-model="planejamentoNutricional.tmb"/>
                </div>
                <div class="col">
                    <label for="eer" class="col-form-label">EER:</label>
                    <input type="text" class="form-control" id="eer" v-model="planejamentoNutricional.eer" />
                </div>
                <div class="col">
                    <label for="fa" class="col-form-label">FA:</label>
                    <input type="text" class="form-control" id="fa" v-model="planejamentoNutricional.fa" />
                </div>
            </div>

            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="metSemanal" class="col-form-label">MET semanal (Kcal/dia):</label>
                    <input type="text" class="form-control" id="metSemanal" v-model="planejamentoNutricional.metSemanal"/>
                </div>
                <div class="col">
                    <label for="tipoPlanoPrescrito" class="col-form-label">Tipo de plano prescrito:</label>
                    <input type="text" class="form-control" id="tipoPlanoPrescrito" v-model="planejamentoNutricional.tipoPlanoPrescrito"/>
                </div>
                <div class="col">
                    <label for="meta" class="col-form-label">Meta:</label>
                    <input type="text" class="form-control" id="meta" v-model="planejamentoNutricional.meta"/>
                </div>
            </div>

            <!-- Doenças Cardiovasculares -->
            <h6 class="mt-4 mb-3"><b>● Plano alimentar</b></h6>
            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="metSemanal" class="col-form-label">Kcal:</label>
                    <input type="text" class="form-control" id="metSemanal" v-model="planejamentoNutricional.metSemanal"/>
                </div>
                <div class="col">
                    <label for="tipoPlanoPrescrito" class="col-form-label">CHO (%):</label>
                    <input type="text" class="form-control" id="tipoPlanoPrescrito" v-model="planejamentoNutricional.tipoPlanoPrescrito"/>
                </div>
                <div class="col">
                    <label for="meta" class="col-form-label">PNT (%):</label>
                    <input type="text" class="form-control" id="meta" v-model="planejamentoNutricional.meta"/>
                </div>
            </div>

            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="metSemanal" class="col-form-label">LIP (%):</label>
                    <input type="text" class="form-control" id="metSemanal" v-model="planejamentoNutricional.metSemanal"/>
                </div>
                <div class="col">
                    <label for="tipoPlanoPrescrito" class="col-form-label">Gordura saturada (%):</label>
                    <input type="text" class="form-control" id="tipoPlanoPrescrito" v-model="planejamentoNutricional.tipoPlanoPrescrito"/>
                </div>
                <div class="col">
                    <label for="meta" class="col-form-label">g/Kg peso PTN:</label>
                    <input type="text" class="form-control" id="meta" v-model="planejamentoNutricional.meta"/>
                </div>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    name: "PlanejamentoNutricionalComponent",
    props:{
        planejamentoNutricionalProps: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            planejamentoNutricional: this.planejamentoNutricionalProps,
        };
    },
}
</script>

<style></style>
