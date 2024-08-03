<template>
    <!-- Aba de Medicamentos -->
    <div class="tab-pane fade show active" id="medicamentos">
        <h5 class="text mt-5 text-primary"><b>MEDICAMENTOS</b></h5>
        <form>

            <!-- Medicamento 1 -->
            <h6 class="mt-4 mb-3"><b>● Medicamento 1</b></h6>

            <div class="form-group row">
                <div class="col">
                    <label for="nome" class="col-form-label">Nome comercial:</label>
                    <input type="text" class="form-control" id="nome1" v-model="medicamentos.medicamento1.nomeMedicamento1" />
                </div>
            </div>

            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="horarioConsumo1" class="col col-form-label">Horário de consumo:</label>
                    <textarea class="form-control" id="horarioConsumo1" name="horarioConsumo1" rows="3"
                        v-model="medicamentos.medicamento1.horarioConsumoMedicamento1"></textarea>
                </div>

                <div class="col">
                    <label for="dosagem1" class="col-form-label">Dosagem:</label>
                    <input type="text" class="form-control" id="dosagem1" v-model="medicamentos.medicamento1.dosagemMedicamento1" />
                </div>

                <div class="col">
                    <label for="frequencia1" class="col-form-label">Frequência:</label>
                    <input type="text" class="form-control" id="frequencia1" v-model="medicamentos.medicamento1.frequenciaMedicamento1" />
                </div>
            </div>

            <!-- Medicamento 2 -->
            <h6 class="mt-5 mb-3"><b>● Medicamento 2</b></h6>

            <div class="form-group row">
                <div class="col">
                    <label for="nome2" class="col-form-label">Nome comercial:</label>
                    <input type="text" class="form-control" id="nome2" v-model="medicamentos.medicamento2.nomeMedicamento2" />
                </div>
            </div>

            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="horarioConsumo2" class="col col-form-label">Horário de consumo:</label>
                    <textarea class="form-control" id="horarioConsumo2" name="horarioConsumo2" rows="3"
                        v-model="medicamentos.medicamento2.horarioConsumoMedicamento2"></textarea>
                </div>

                <div class="col">
                    <label for="dosagem2" class="col-form-label">Dosagem:</label>
                    <input type="text" class="form-control" id="dosagem2" v-model="medicamentos.medicamento2.dosagemMedicamento2" />
                </div>

                <div class="col">
                    <label for="frequencia2" class="col-form-label">Frequência:</label>
                    <input type="text" class="form-control" id="frequencia2" v-model="medicamentos.medicamento2.frequenciaMedicamento2" />
                </div>
            </div>

            <!-- Medicamento 3 -->
            <h6 class="mt-5 mb-3"><b>● Medicamento 3</b></h6>

            <div class="form-group row">
                <div class="col">
                    <label for="nome3" class="col-form-label">Nome comercial:</label>
                    <input type="text" class="form-control" id="nome3" v-model="medicamentos.medicamento3.nomeMedicamento3" />
                </div>
            </div>

            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="horarioConsumo3" class="col col-form-label">Horário de consumo:</label>
                    <textarea class="form-control" id="horarioConsumo3" name="horarioConsumo3" rows="3"
                        v-model="medicamentos.medicamento3.horarioConsumoMedicamento3"></textarea>
                </div>

                <div class="col">
                    <label for="dosagem3" class="col-form-label">Dosagem:</label>
                    <input type="text" class="form-control" id="dosagem3" v-model="medicamentos.medicamento3.dosagemMedicamento3" />
                </div>

                <div class="col">
                    <label for="frequencia3" class="col-form-label">Frequência:</label>
                    <input type="text" class="form-control" id="frequencia3" v-model="medicamentos.medicamento3.frequenciaMedicamento3" />
                </div>
            </div>

            <!-- Medicamento 4 -->
            <h6 class="mt-5 mb-3"><b>● Medicamento 4</b></h6>

            <div class="form-group row">
                <div class="col">
                    <label for="nome4" class="col-form-label">Nome comercial:</label>
                    <input type="text" class="form-control" id="nome4" v-model="medicamentos.medicamento4.nomeMedicamento4" />
                </div>
            </div>

            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="horarioConsumo4" class="col col-form-label">Horário de consumo:</label>
                    <textarea class="form-control" id="horarioConsumo4" name="horarioConsumo4" rows="3"
                        v-model="medicamentos.medicamento4.horarioConsumoMedicamento4"></textarea>
                </div>

                <div class="col">
                    <label for="dosagem4" class="col-form-label">Dosagem:</label>
                    <input type="text" class="form-control" id="dosagem4" v-model="medicamentos.medicamento4.dosagemMedicamento4" />
                </div>

                <div class="col">
                    <label for="frequencia4" class="col-form-label">Frequência:</label>
                    <input type="text" class="form-control" id="frequencia4" v-model="medicamentos.medicamento4.frequenciaMedicamento4" />
                </div>
            </div>

            <!-- Medicamento 4 -->
            <h6 class="mt-5 mb-3"><b>● Medicamento 5</b></h6>

            <div class="form-group row">
                <div class="col">
                    <label for="nome4" class="col-form-label">Nome comercial:</label>
                    <input type="text" class="form-control" id="nome4" v-model="medicamentos.medicamento5.nomeMedicamento5" />
                </div>
            </div>

            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="horarioConsumo4" class="col col-form-label">Horário de consumo:</label>
                    <textarea class="form-control" id="horarioConsumo4" name="horarioConsumo4" rows="3"
                        v-model="medicamentos.medicamento5.horarioConsumoMedicamento5"></textarea>
                </div>

                <div class="col">
                    <label for="dosagem4" class="col-form-label">Dosagem:</label>
                    <input type="text" class="form-control" id="dosagem4" v-model="medicamentos.medicamento5.dosagemMedicamento5" />
                </div>

                <div class="col">
                    <label for="frequencia4" class="col-form-label">Frequência:</label>
                    <input type="text" class="form-control" id="frequencia4" v-model="medicamentos.medicamento5.frequenciaMedicamento5" />
                </div>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    name: "MedicamentosComponent",
    props: {
        medicamentosProps: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            medicamentos: this.medicamentosProps,
        };
    },
}
</script>

<style></style>
