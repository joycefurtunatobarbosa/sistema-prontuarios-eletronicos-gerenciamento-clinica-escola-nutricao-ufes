<template>
    <!-- Aba de Histórico -->
    <div class="tab-pane fade show active" id="historiaFamiliar">
        <h5 class="mt-5 text-primary"><b>HISTÓRIA FAMILIAR</b></h5>
        <form>
            <!-- Doenças Cardiovasculares -->
            <h6 class="mt-5 mb-3"><b>● Doenças Cardiovasculares</b></h6>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Cardiopatia:</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="irmaosCardiopatia"
                            v-model="historiaFamiliar.cardiopatia.irmaosCardiopatia">
                        <label class="form-check-label ms-2" for="irmaosCardiopatia">Irmãos</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="paisCardiopatia"
                            v-model="historiaFamiliar.cardiopatia.paisCardiopatia">
                        <label class="form-check-label ms-2" for="paisCardiopatia">Pais</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="avosCardiopatia"
                            v-model="historiaFamiliar.cardiopatia.avosCardiopatia">
                        <label class="form-check-label ms-2" for="avosCardiopatia">Avós</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="tiosCardiopatia"
                            v-model="historiaFamiliar.cardiopatia.tiosCardiopatia">
                        <label class="form-check-label ms-2" for="tiosCardiopatia">Tios</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="primosCardiopatia"
                            v-model="historiaFamiliar.cardiopatia.primosCardiopatia">
                        <label class="form-check-label ms-2" for="primosCardiopatia">Primos</label>
                    </div>
                </div>
            </div>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Hipertensão Arterial:</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="irmaosHipertensao"
                            v-model="historiaFamiliar.hipertensao.irmaosHipertensao">
                        <label class="form-check-label ms-2" for="irmaosHipertensao">Irmãos</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="paisHipertensao"
                            v-model="historiaFamiliar.hipertensao.paisHipertensao">
                        <label class="form-check-label ms-2" for="paisHipertensao">Pais</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="avosHipertensao"
                            v-model="historiaFamiliar.hipertensao.avosHipertensao">
                        <label class="form-check-label ms-2" for="avosHipertensao">Avós</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="tiosHipertensao"
                            v-model="historiaFamiliar.hipertensao.tiosHipertensao">
                        <label class="form-check-label ms-2" for="tiosHipertensao">Tios</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="primosHipertensao"
                            v-model="historiaFamiliar.hipertensao.primosHipertensao">
                        <label class="form-check-label ms-2" for="primosHipertensao">Primos</label>
                    </div>
                </div>
            </div>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">AVC:</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="irmaosAVC"
                            v-model="historiaFamiliar.avc.irmaosAVC">
                        <label class="form-check-label ms-2" for="irmaosAVC">Irmãos</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="paisAVC"
                            v-model="historiaFamiliar.avc.paisAVC">
                        <label class="form-check-label ms-2" for="paisAVC">Pais</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="avosAVC"
                            v-model="historiaFamiliar.avc.avosAVC">
                        <label class="form-check-label ms-2" for="avosAVC">Avós</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="tiosAVC"
                            v-model="historiaFamiliar.avc.tiosAVC">
                        <label class="form-check-label ms-2" for="tiosAVC">Tios</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="primosAVC"
                            v-model="historiaFamiliar.avc.primosAVC">
                        <label class="form-check-label ms-2" for="primosAVC">Primos</label>
                    </div>
                </div>
            </div>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Infarto:</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="irmaosInfarto"
                            v-model="historiaFamiliar.infarto.irmaosInfarto">
                        <label class="form-check-label ms-2" for="irmaosInfarto">Irmãos</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="paisInfarto"
                            v-model="historiaFamiliar.infarto.paisInfarto">
                        <label class="form-check-label ms-2" for="paisInfarto">Pais</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="avosIfarto"
                            v-model="historiaFamiliar.infarto.avosInfarto">
                        <label class="form-check-label ms-2" for="avosInfarto">Avós</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="tiosInfarto"
                            v-model="historiaFamiliar.infarto.tiosInfarto">
                        <label class="form-check-label ms-2" for="tiosInfarto">Tios</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="primosInfarto"
                            v-model="historiaFamiliar.infarto.primosInfarto">
                        <label class="form-check-label ms-2" for="primosInfarto">Primos</label>
                    </div>
                </div>
            </div>

            <!-- Doenças Dislipidêmicas -->
            <h6 class="mt-5 mb-3"><b>● Doenças Dislipidêmicas</b></h6>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Hipercolesterolemia (colesterol alto):</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos"
                            id="irmaosHipercolesterolemia"
                            v-model="historiaFamiliar.hipercolesterolemia.irmaosHipercolesterolemia">
                        <label class="form-check-label ms-2" for="irmaosHipercolesterolemia">Irmãos</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais"
                            id="paisHipercolesterolemia"
                            v-model="historiaFamiliar.hipercolesterolemia.paisHipercolesterolemia">
                        <label class="form-check-label ms-2" for="paisHipercolesterolemia">Pais</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos"
                            id="avosHipercolesterolemia"
                            v-model="historiaFamiliar.hipercolesterolemia.avosHipercolesterolemia">
                        <label class="form-check-label ms-2" for="avosHipercolesterolemia">Avós</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios"
                            id="tiosHipercolesterolemia"
                            v-model="historiaFamiliar.hipercolesterolemia.tiosHipercolesterolemia">
                        <label class="form-check-label ms-2" for="tiosHipercolesterolemia">Tios</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos"
                            id="primosHipercolesterolemia"
                            v-model="historiaFamiliar.hipercolesterolemia.primosHipercolesterolemia">
                        <label class="form-check-label ms-2" for="primosHipercolesterolemia">Primos</label>
                    </div>
                </div>
            </div>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Hipertrigliceridemia (triglicerídeos alto):</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos"
                            id="irmaosHipocolesterolemia"
                            v-model="historiaFamiliar.hipocolesterolemia.irmaosHipocolesterolemia">
                        <label class="form-check-label ms-2" for="irmaosHipocolesterolemia">Irmãos</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais"
                            id="paisHipocolesterolemia"
                            v-model="historiaFamiliar.hipocolesterolemia.paisHipocolesterolemia">
                        <label class="form-check-label ms-2" for="paisHipocolesterolemia">Pais</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos"
                            id="avosHipocolesterolemia"
                            v-model="historiaFamiliar.hipocolesterolemia.avosHipocolesterolemia">
                        <label class="form-check-label ms-2" for="avosHipocolesterolemia">Avós</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios"
                            id="tiosHipocolesterolemia"
                            v-model="historiaFamiliar.hipocolesterolemia.tiosHipocolesterolemia">
                        <label class="form-check-label ms-2" for="tiosHipocolesterolemia">Tios</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos"
                            id="primosHipocolesterolemia"
                            v-model="historiaFamiliar.hipocolesterolemia.primosHipocolesterolemia">
                        <label class="form-check-label ms-2" for="primosHipocolesterolemia">Primos</label>
                    </div>
                </div>
            </div>

            <!-- Doenças Endócrinas -->
            <h6 class="mt-5 mb-3"><b>● Doenças Endócrinas</b></h6>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Hipertireoidismo:</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos"
                            id="irmaosHipertireoidismo" v-model="historiaFamiliar.hipertireoidismo.irmaosHipertireoidismo">
                        <label class="form-check-label ms-2" for="irmaosHipertireoidismo">Irmãos</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="paisHipertireoidismo"
                            v-model="historiaFamiliar.hipertireoidismo.paisHipertireoidismo">
                        <label class="form-check-label ms-2" for="paisHipertireoidismo">Pais</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="avosHipertireoidismo"
                            v-model="historiaFamiliar.hipertireoidismo.avosHipertireoidismo">
                        <label class="form-check-label ms-2" for="avosHipertireoidismo">Avós</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="tiosHipertireoidismo"
                            v-model="historiaFamiliar.hipertireoidismo.tiosHipertireoidismo">
                        <label class="form-check-label ms-2" for="tiosHipertireoidismo">Tios</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos"
                            id="primosHipertireoidismo" v-model="historiaFamiliar.hipertireoidismo.primosHipertireoidismo">
                        <label class="form-check-label ms-2" for="primosHipertireoidismo">Primos</label>
                    </div>
                </div>
            </div>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Hipotireoidismo:</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos"
                            id="irmaosHipotireoidismo" v-model="historiaFamiliar.hipotireoidismo.irmaosHipotireoidismo">
                        <label class="form-check-label ms-2" for="irmaosHipotireoidismo">Irmãos</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="paisHipotireoidismo"
                            v-model="historiaFamiliar.hipotireoidismo.paisHipotireoidismo">
                        <label class="form-check-label ms-2" for="paisHipotireoidismo">Pais</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="avosHipotireoidismo"
                            v-model="historiaFamiliar.hipotireoidismo.avosHipotireoidismo">
                        <label class="form-check-label ms-2" for="avosHipotireoidismo">Avós</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="tiosHipotireoidismo"
                            v-model="historiaFamiliar.hipotireoidismo.tiosHipotireoidismo">
                        <label class="form-check-label ms-2" for="tiosHipotireoidismo">Tios</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos"
                            id="primosHipotireoidismo" v-model="historiaFamiliar.hipotireoidismo.primosHipotireoidismo">
                        <label class="form-check-label ms-2" for="primosHipotireoidismo">Primos</label>
                    </div>
                </div>
            </div>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Diabetes:</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="irmaosDiabetes"
                            v-model="historiaFamiliar.diabetes.irmaosDiabetes">
                        <label class="form-check-label ms-2" for="irmaosDiabetes">Irmãos</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="paisDiabetes"
                            v-model="historiaFamiliar.diabetes.paisDiabetes">
                        <label class="form-check-label ms-2" for="paisDiabetes">Pais</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="avosDiabetes"
                            v-model="historiaFamiliar.diabetes.avosDiabetes">
                        <label class="form-check-label ms-2" for="avosDiabetes">Avós</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="tiosDiabetes"
                            v-model="historiaFamiliar.diabetes.tiosDiabetes">
                        <label class="form-check-label ms-2" for="tiosDiabetes">Tios</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="primosDiabetes"
                            v-model="historiaFamiliar.diabetes.primosDiabetes">
                        <label class="form-check-label ms-2" for="primosDiabetes">Primos</label>
                    </div>
                </div>
            </div>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Obesidade:</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="irmaosObesidade"
                            v-model="historiaFamiliar.obesidade.irmaosObesidade">
                        <label class="form-check-label ms-2" for="irmaosObesidade">Irmãos</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="paisObesidade"
                            v-model="historiaFamiliar.obesidade.paisObesidade">
                        <label class="form-check-label ms-2" for="paisObesidade">Pais</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="avosObesidade"
                            v-model="historiaFamiliar.obesidade.avosObesidade">
                        <label class="form-check-label ms-2" for="avosObesidade">Avós</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="tiosObesidade"
                            v-model="historiaFamiliar.obesidade.tiosObesidade">
                        <label class="form-check-label ms-2" for="tiosObesidade">Tios</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="primosObesidade"
                            v-model="historiaFamiliar.obesidade.primosObesidade">
                        <label class="form-check-label ms-2" for="primosObesidade">Primos</label>
                    </div>
                </div>
            </div>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Câncer:</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="irmaosCancer"
                            v-model="historiaFamiliar.cancer.irmaosCancer">
                        <label class="form-check-label ms-2" for="irmaosCancer">Irmãos</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="paisCancer"
                            v-model="historiaFamiliar.cancer.paisCancer">
                        <label class="form-check-label ms-2" for="paisCancer">Pais</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="avosCancer"
                            v-model="historiaFamiliar.cancer.avosCancer">
                        <label class="form-check-label ms-2" for="avosCancer">Avós</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="tiosCancer"
                            v-model="historiaFamiliar.cancer.tiosCancer">
                        <label class="form-check-label ms-2" for="tiosCancer">Tios</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="primosCancer"
                            v-model="historiaFamiliar.cancer.primosCancer">
                        <label class="form-check-label ms-2" for="primosCancer">Primos</label>
                    </div>
                </div>
            </div>

            <!-- Outras doenças -->
            <h6 class="mt-5 mb-3"><b>● Outras doenças</b></h6>
            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="form-label ms-2" for="doenca">Doença: </label>
                        <input class="form-control my-auto ms-2" type="text" value="doenca" id="doenca"
                            v-model="historiaFamiliar.outras.doencaOutras">
                    </div>
                </div>
            </div>

            <div class="form-group d-flex mt-2">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="irmaosOutras"
                            v-model="historiaFamiliar.outras.irmaosOutras">
                        <label class="form-check-label ms-2" for="irmaosOutras">Irmãos</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="paisOutras"
                            v-model="historiaFamiliar.outras.paisOutras">
                        <label class="form-check-label ms-2" for="paisOutras">Pais</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="avosOutras"
                            v-model="historiaFamiliar.outras.avosOutras">
                        <label class="form-check-label ms-2" for="avosOutras">Avós</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="tiosOutras"
                            v-model="historiaFamiliar.outras.tiosOutras">
                        <label class="form-check-label ms-2" for="tiosOutras">Tios</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="primosOutras"
                            v-model="historiaFamiliar.outras.primosOutras">
                        <label class="form-check-label ms-2" for="primosOutras">Primos</label>
                    </div>
                </div>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    name: "HistoriaFamiliarComponent",
    props: {
        historiaFamiliarProps: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            historiaFamiliar: this.historiaFamiliarProps,
        };
    },
}
</script>

<style></style>