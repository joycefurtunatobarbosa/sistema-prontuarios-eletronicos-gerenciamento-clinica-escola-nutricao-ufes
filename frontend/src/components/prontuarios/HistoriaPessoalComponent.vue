<template>
    <!-- Aba de Histórico -->
    <div class="tab-pane fade show active" id="historiaPessoal">
        <h5 class="text mt-5 text-primary"><b>3. HISTÓRIA ATUAL</b></h5>
        <form>
            <!-- História Atual -->
            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="motivoConsulta" class="col-3 col-form-label">Motivo da Consulta:</label>
                    <textarea class="form-control" rows="4" id="motivoConsulta"
                        v-model="historiaPessoal.motivoConsulta"></textarea>
                </div>
            </div>

            <!-- História Pregressa - Doenças -->
            <h5 class="text mt-5 text-primary"><b>4. HISTÓRIA PREGRESSA</b></h5>
            <div class="form-group mt-3">
                <label for="doencas" class="col-form-label">Doenças:</label>
                <textarea class="form-control" rows="3" id="doencas" v-model="historiaPessoal.doencas"></textarea>
            </div>

            <div class="form-group mt-3">
                <label for="internacoes" class="col-form-label">Internações:</label>
                <textarea class="form-control" rows="3" id="internacoes" v-model="historiaPessoal.internacoes"></textarea>
            </div>

            <div class="form-group mt-3">
                <label for="cirurgias" class="col-form-label">Cirurgias:</label>
                <textarea class="form-control" rows="3" id="cirurgias" v-model="historiaPessoal.cirurgias"></textarea>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "HistoriaPessoalComponent",
    props: {
        historiaPessoalProps: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            historiaPessoal: this.historiaPessoalProps,
        };
    },
}
</script>

<style></style>