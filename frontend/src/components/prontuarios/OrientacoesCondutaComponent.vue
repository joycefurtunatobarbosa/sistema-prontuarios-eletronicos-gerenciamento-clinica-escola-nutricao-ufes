<template>
    <!-- Aba de Planejamento Nutricional -->
    <div class="tab-pane fade show active" id="orientacoes">
        <h5 class="text mt-5 text-primary"><b>ORIENTAÇÕES</b></h5>
        <form>

            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="tmb" class="col-form-label">Descrição:</label>
                    <textarea class="form-control" rows="4" id="descricao" v-model="orientacoesConduta.descricao"></textarea>
                </div>
            </div>

            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="medicamentos" class="col-form-label">Medicamentos em uso:</label>
                    <textarea class="form-control" rows="4" id="medicamentos" v-model="orientacoesConduta.medicamentos"></textarea>
                </div>
                <div class="col">
                    <label for="anamnese" class="col-form-label">Anamnese:</label>
                    <textarea class="form-control" rows="4" id="anamnese" placeholder="Fazer um resumo das informações mais relevantes." v-model="orientacoesConduta.anamnese"></textarea>
                </div>
            </div>

            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="avaliacaoClinica" class="col-form-label">Avaliação Clínica:</label>
                    <textarea class="form-control" rows="4" id="avaliacaoClinica" placeholder="Mucosas, hábitos urinário e intestinal, edema, PA." v-model="orientacoesConduta.avaliacaoClinica"></textarea>
                </div>
                <div class="col">
                    <label for="avaliacaoBioquimica" class="col-form-label">Avaliação Bioquímica:</label>
                    <textarea class="form-control" rows="4" id="avaliacaoBioquimica" v-model="orientacoesConduta.avaliacaoBioquimica"></textarea>
                </div>
            </div>

            <div class="form-group mt-3 row" >
                
                <div class="col">
                    <label for="avaliacaoAntropometrica" class="col-form-label">Avaliação Antropométrica:</label>
                    <textarea class="form-control" rows="4" id="avaliacaoAntropometrica" placeholder="Exames realizados até 1 ano atrás." v-model="orientacoesConduta.avaliacaoAntropometrica"></textarea>
                </div>
            </div>

            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="registroAlimentar" class="col-form-label">Registro alimentar:</label>
                    <textarea class="form-control" rows="4" id="registroAlimentar" v-model="orientacoesConduta.registroAlimentar"></textarea>
                </div>
            </div>

            <!-- Doenças Cardiovasculares -->
            <h5 class="text mt-5 text-primary"><b>CONDUTA</b></h5>
            <!-- <h6 class="mt-4 mb-3"><b>● Conduta</b></h6> -->
            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="orientacoes" class="col-form-label">Novas orientações:</label>
                    <textarea class="form-control" rows="4" id="orientacoes" v-model="orientacoesConduta.orientacoes"></textarea>
                </div>
            </div>

            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="prescricaoDietetica" class="col-form-label">Prescrição Dietética:</label>
                    <textarea class="form-control" rows="4" id="prescricaoDietetica" v-model="orientacoesConduta.prescricaoDietetica"></textarea>
                </div>
                <div class="col">
                    <label for="objetivo" class="col-form-label">Objetivo:</label>
                    <textarea class="form-control" rows="4" id="objetivo" v-model="orientacoesConduta.objetivo"></textarea>
                </div>
            </div>

            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="dataEntregaPlano" class="col-form-label">Data da entrega do plano:</label>
                    <input type="date" class="form-control" id="dataEntregaPlano" v-model="orientacoesConduta.dataEntregaPlano"/>
                </div>
                <div class="col">
                    <label for="dataRetorno" class="col-form-label">Data do retorno:</label>
                    <input type="date" class="form-control" id="dataRetorno" v-model="orientacoesConduta.dataRetorno"/>
                </div>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    name: "OrientacoesCondutaComponent",
    props:{
        orientacoesCondutaProps: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            orientacoesConduta: this.orientacoesCondutaProps,
        };
    },
}
</script>

<style>
/* #assinatura{
    display: none;
} */
</style>
