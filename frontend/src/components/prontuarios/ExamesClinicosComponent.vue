<template>
    <!-- Aba de Exames Clínicos -->
    <div class="tab-pane fade show active" id="medicamentos">
        <h5 class="text mt-5 text-primary"><b>EXAMES CLÍNICOS</b></h5>
        <form>

            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="mucosa" class="col-form-label">Mucosa:</label>
                    <select class="form-select" name="mucosa" v-model="examesClinicos.mucosa">
                        <option value="Hipocorada">Hipocorada </option>
                        <option value="Coroda">Corada </option>
                        <option value="Hipercorada">Hipercorada </option>
                    </select>
                </div>

                <div class="col">
                    <label for="habitosUrinarios" class="col col-form-label">Hábitos urinários:</label>
                    <select class="form-select" name="habitosUrinarios" v-model="examesClinicos.habitosUrinarios">
                        <option value="Preservado">Preservado </option>
                        <option value="Alterado">Alterado </option>
                    </select>
                </div>

                <div class="col">
                    <label for="edema" class="col-form-label">Edema:</label>
                    <select class="form-select" name="edema" v-model="examesClinicos.edema">
                        <option value="Sem edema">Sem edema </option>
                        <option value="1+ / 4+">1+ / 4+ </option>
                        <option value="2+ / 4+">2+ / 4+ </option>
                        <option value="3+ / 4+">3+ / 4+ </option>
                        <option value="4+ / 4+">4+ / 4+ </option>
                    </select>
                </div>
            </div>

            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="funcaoIntestinal" class="col-form-label">Função intestinal:</label>
                    <select class="form-select" name="funcaoIntestinal" v-model="examesClinicos.funcaoIntestinal">
                        <option value="Preservada">Preservada </option>
                        <option value="Alterada">Alterada </option>
                    </select>
                </div>

                <div class="col">
                    <label for="pa" class="col-form-label">Pressão arterial:</label>
                    <input type="text" class="form-control" id="pa" v-model="examesClinicos.pa"/>
                </div>

                <div class="col">
                    <label for="fc" class="col-form-label">Frequência cardíaca:</label>
                    <input type="text" class="form-control" id="fc" v-model="examesClinicos.fc"/>
                </div>
            </div>

            <div class="form-group mt-3 row">
                <div class="col-4">
                    <label for="bristol" class="col-form-label">Bristol:</label>
                    <input type="text" class="form-control" id="bristol" v-model="examesClinicos.bristol"/>
                </div>

                <div class="col-4">
                    <label for="frequenciaEvacuacao" class="col-form-label">Frequência de evacuação:</label>
                    <input type="text" class="form-control" id="frequenciaEvacuacao" v-model="examesClinicos.frequenciaEvacuacao"/>
                </div>
            </div>

            <div class="form-group mt-3 row">
                <label class="mt-5 mb-3"><b>● Escala de Bristol: </b></label>
                <div class="col d-flex justify-content-center">
                    <img src="../img/escala-de-bristol.png" width="600px" alt="Escala de bristol">
                </div>
            </div>

        </form>
    </div>
</template>

<script>

export default {
    name: "ExamesClinicosComponent",
    props: {
        examesClinicosProps: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            examesClinicos: this.examesClinicosProps,
        };
    },
}
</script>

<style></style>
