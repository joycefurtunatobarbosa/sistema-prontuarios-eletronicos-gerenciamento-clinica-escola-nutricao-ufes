<template>
    <!-- Aba de Histórico -->
    <div class="tab-pane fade show active" id="historiaPessoal">
        <h5 class="text mt-5 text-primary"><b>3. HISTÓRIA ATUAL</b></h5>
        <form>
            <!-- História Atual -->
            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="observacoes" class="col-3 col-form-label">Motivo da Consulta:</label>
                    <textarea class="form-control" id="" name="" rows="4"></textarea>
                </div>
            </div>

            <!-- História Pregressa - Doenças -->
            <h5 class="text mt-5 text-primary"><b>4. HISTÓRIA PREGRESSA</b></h5>
            <div class="form-group mt-3">
                <label for="doencaNome" class="col-form-label">Doenças:</label>
                <textarea class="form-control" id="" name="" rows="3"></textarea>
            </div>

            <div class="form-group mt-3">
                <label for="doencaNome" class="col-form-label">Internações:</label>
                <textarea class="form-control" id="" name="" rows="3"></textarea>
            </div>

            <div class="form-group mt-3">
                <label for="doencaNome" class="col-form-label">Cirugias:</label>
                <textarea class="form-control" id="" name="" rows="3"></textarea>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "HistoriaPessoalProntuario",
    data() {
        return {

        };
    },
}
</script>

<style></style>