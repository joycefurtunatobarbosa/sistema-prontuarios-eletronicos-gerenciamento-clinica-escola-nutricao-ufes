<template>
    <!-- Aba de Histórico -->
    <div class="tab-pane fade show active" id="historiaFamiliar">
        <h5 class="mt-5 text-primary"><b>5. HISTÓRIA FAMILIAR</b></h5>
        <form>
            <!-- Doenças Cardiovasculares -->
            <h6 class="mt-4 mb-3"><b>● Doenças Cardiovasculares</b></h6>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Cardiopatia:</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="irmaosCardiopatia"
                            v-model="irmaosCardiopatia">
                        <label class="form-check-label ms-2" for="irmaosCardiopatia">Irmãos</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="paisCardiopatia"
                            v-model="paisCardiopatia">
                        <label class="form-check-label ms-2" for="paisCardiopatia">Pais</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="avosCardiopatia"
                            v-model="avosCardiopatia">
                        <label class="form-check-label ms-2" for="avosCardiopatia">Avós</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="tiosCardiopatia"
                            v-model="tiosCardiopatia">
                        <label class="form-check-label ms-2" for="tiosCardiopatia">Tios</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="primosCardiopatia"
                            v-model="primosCardiopatia">
                        <label class="form-check-label ms-2" for="primosCardiopatia">Primos</label>
                    </div>
                </div>
            </div>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Hipertensão Arterial:</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="irmaosHipertensao"
                            v-model="irmaosHipertensao">
                        <label class="form-check-label ms-2" for="irmaosHipertensao">Irmãos</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="paisHipertensao"
                            v-model="paisHipertensao">
                        <label class="form-check-label ms-2" for="paisHipertensao">Pais</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="avosHipertensao"
                            v-model="avosHipertensao">
                        <label class="form-check-label ms-2" for="avosHipertensao">Avós</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="tiosHipertensao"
                            v-model="tiosHipertensao">
                        <label class="form-check-label ms-2" for="tiosHipertensao">Tios</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="primosHipertensao"
                            v-model="primosHipertensao">
                        <label class="form-check-label ms-2" for="primosHipertensao">Primos</label>
                    </div>
                </div>
            </div>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">AVC:</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="irmaosAVC"
                            v-model="irmaosAVC">
                        <label class="form-check-label ms-2" for="irmaosAVC">Irmãos</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="paisAVC"
                            v-model="paisAVC">
                        <label class="form-check-label ms-2" for="paisAVC">Pais</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="avosAVC"
                            v-model="avosAVC">
                        <label class="form-check-label ms-2" for="avosAVC">Avós</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="tiosAVC"
                            v-model="tiosAVC">
                        <label class="form-check-label ms-2" for="tiosAVC">Tios</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="primosAVC"
                            v-model="primosAVC">
                        <label class="form-check-label ms-2" for="primosAVC">Primos</label>
                    </div>
                </div>
            </div>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Infarto:</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="irmaosInfarto"
                            v-model="irmaosInfarto">
                        <label class="form-check-label ms-2" for="irmaosInfarto">Irmãos</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="paisInfarto"
                            v-model="irmaosInfarto">
                        <label class="form-check-label ms-2" for="irmaosInfarto">Pais</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="avosIfarto"
                            v-model="irmaosInfarto">
                        <label class="form-check-label ms-2" for="irmaosInfarto">Avós</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="tiosInfarto"
                            v-model="irmaosInfarto">
                        <label class="form-check-label ms-2" for="irmaosInfarto">Tios</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="primosInfarto"
                            v-model="primosInfarto">
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
                            id="irmaosHipercolesterolemia" v-model="irmaosHipercolesterolemia">
                        <label class="form-check-label ms-2" for="irmaosHipercolesterolemia">Irmãos</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais"
                            id="paisHipercolesterolemia" v-model="paisHipercolesterolemia">
                        <label class="form-check-label ms-2" for="paisHipercolesterolemia">Pais</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos"
                            id="avosHipercolesterolemia" v-model="avosHipercolesterolemia">
                        <label class="form-check-label ms-2" for="avosHipercolesterolemia">Avós</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios"
                            id="tiosHipercolesterolemia" v-model="tiosHipercolesterolemia">
                        <label class="form-check-label ms-2" for="tiosHipercolesterolemia">Tios</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos"
                            id="primosHipercolesterolemia" v-model="primosHipercolesterolemia">
                        <label class="form-check-label ms-2" for="primosHipercolesterolemia">Primos</label>
                    </div>
                </div>
            </div>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Hipocolesterolemia (triglicerídeos alto):</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos"
                            id="irmaosHipocolesterolemia" v-model="irmaosHipocolesterolemia">
                        <label class="form-check-label ms-2" for="irmaosHipocolesterolemia">Irmãos</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais"
                            id="paisHipocolesterolemia" v-model="paisHipocolesterolemia">
                        <label class="form-check-label ms-2" for="paisHipocolesterolemia">Pais</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos"
                            id="avosHipocolesterolemia" v-model="avosHipocolesterolemia">
                        <label class="form-check-label ms-2" for="avosHipocolesterolemia">Avós</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios"
                            id="tiosHipocolesterolemia" v-model="tiosHipocolesterolemia">
                        <label class="form-check-label ms-2" for="tiosHipocolesterolemia">Tios</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos"
                            id="primosHipocolesterolemia" v-model="primosHipocolesterolemia">
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
                            id="irmaosHipertireoidismo" v-model="irmaosHipertireoidismo">
                        <label class="form-check-label ms-2" for="irmaosHipertireoidismo">Irmãos</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="paisHipertireoidismo"
                            v-model="paisHipertireoidismo">
                        <label class="form-check-label ms-2" for="paisHipertireoidismo">Pais</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="avosHipertireoidismo"
                            v-model="avosHipertireoidismo">
                        <label class="form-check-label ms-2" for="avosHipertireoidismo">Avós</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="tiosHipertireoidismo"
                            v-model="tiosHipertireoidismo">
                        <label class="form-check-label ms-2" for="tiosHipertireoidismo">Tios</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos"
                            id="primosHipertireoidismo" v-model="primosHipertireoidismo">
                        <label class="form-check-label ms-2" for="primosHipertireoidismo">Primos</label>
                    </div>
                </div>
            </div>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Hipotireoidismo:</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos"
                            id="irmaosHipotireoidismo" v-model="irmaosHipotireoidismo">
                        <label class="form-check-label ms-2" for="irmaosHipotireoidismo">Irmãos</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="paisHipotireoidismo"
                            v-model="paisHipotireoidismo">
                        <label class="form-check-label ms-2" for="paisHipotireoidismo">Pais</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="avosHipotireoidismo"
                            v-model="avosHipotireoidismo">
                        <label class="form-check-label ms-2" for="avosHipotireoidismo">Avós</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="tiosHipotireoidismo"
                            v-model="tiosHipotireoidismo">
                        <label class="form-check-label ms-2" for="tiosHipotireoidismo">Tios</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos"
                            id="primosHipotireoidismo" v-model="primosHipotireoidismo">
                        <label class="form-check-label ms-2" for="primosHipotireoidismo">Primos</label>
                    </div>
                </div>
            </div>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Diabetes:</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="irmaosDiabetes"
                            v-model="irmaosDiabetes">
                        <label class="form-check-label ms-2" for="irmaosDiabetes">Irmãos</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="paisDiabetes"
                            v-model="paisDiabetes">
                        <label class="form-check-label ms-2" for="paisDiabetes">Pais</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="avosDiabetes"
                            v-model="avosDiabetes">
                        <label class="form-check-label ms-2" for="avosDiabetes">Avós</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="tiosDiabetes"
                            v-model="tiosDiabetes">
                        <label class="form-check-label ms-2" for="tiosDiabetes">Tios</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="primosDiabetes"
                            v-model="primosDiabetes">
                        <label class="form-check-label ms-2" for="primosDiabetes">Primos</label>
                    </div>
                </div>
            </div>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Obesidade:</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="irmaosObesidade"
                            v-model="irmaosObesidade">
                        <label class="form-check-label ms-2" for="irmaosObesidade">Irmãos</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="paisObesidade"
                            v-model="paisObesidade">
                        <label class="form-check-label ms-2" for="paisObesidade">Pais</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="avosObesidade"
                            v-model="avosObesidade">
                        <label class="form-check-label ms-2" for="avosObesidade">Avós</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="tiosObesidade"
                            v-model="tiosObesidade">
                        <label class="form-check-label ms-2" for="tiosObesidade">Tios</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="primosObesidade"
                            v-model="primosObesidade">
                        <label class="form-check-label ms-2" for="primosObesidade">Primos</label>
                    </div>
                </div>
            </div>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Câncer:</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="irmaosCancer"
                            v-model="irmaosCancer">
                        <label class="form-check-label ms-2" for="irmaosCancer">Irmãos</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="paisCancer"
                            v-model="paisCancer">
                        <label class="form-check-label ms-2" for="paisCancer">Pais</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="avosCancer"
                            v-model="avosCancer">
                        <label class="form-check-label ms-2" for="avosCancer">Avós</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="tiosCancer"
                            v-model="tiosCancer">
                        <label class="form-check-label ms-2" for="tiosCancer">Tios</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="primosCancer"
                            v-model="primosCancer">
                        <label class="form-check-label ms-2" for="primosCancer">Primos</label>
                    </div>
                </div>
            </div>

            <div class="form-group d-flex">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <label class="col-form-label">Outras:</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="irmaosOutras"
                            v-model="irmaosOutras">
                        <label class="form-check-label ms-2" for="irmaosOutras">Irmãos</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="paisOutras"
                            v-model="paisOutras">
                        <label class="form-check-label ms-2" for="paisOutras">Pais</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="avosOutras"
                            v-model="avosOutras">
                        <label class="form-check-label ms-2" for="avosOutras">Avós</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="tiosOutras"
                            v-model="tiosOutras">
                        <label class="form-check-label ms-2" for="tiosOutras">Tios</label>

                        <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="primosOutras"
                            v-model="primosOutras">
                        <label class="form-check-label ms-2" for="primosOutras">Primos</label>
                    </div>
                </div>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    name: "HistoriaFamiliarProntuario",
    data() {
        return {
            historiaFamiliar: {
                cardiopatia: {
                    irmaosCardiopatia: false,
                    paisCardiopatia: false,
                    avosCardiopatia: false,
                    tiosCardiopatia: false,
                    primosCardiopatia: false,
                },

                hipertensao: {
                    irmaosHipertensao: false,
                    paisHipertensao: false,
                    avosHipertensao: false,
                    tiosHipertensao: false,
                    primosHipertensao: false,
                },

                avc: {
                    irmaosAVC: false,
                    paisAVC: false,
                    avosAVC: false,
                    tiosAVC: false,
                    primosAVC: false,
                },

                infarto: {
                    irmaosInfarto: false,
                    paisInfarto: false,
                    avosInfarto: false,
                    tiosInfarto: false,
                    primosInfarto: false,
                },

                hipercolesterolemia: {
                    irmaosHipercolesterolemia: false,
                    paisHipercolesterolemia: false,
                    avosHipercolesterolemia: false,
                    tiosHipercolesterolemia: false,
                    primosHipercolesterolemia: false,
                },

                hipocolesterolemia: {
                    irmaosHipocolesterolemia: false,
                    paisHipocolesterolemia: false,
                    avosHipocolesterolemia: false,
                    tiosHipocolesterolemia: false,
                    primosHipocolesterolemia: false,
                },

                hipertireoidismo: {
                    irmaosHipertireoidismo: false,
                    paisHipertireoidismo: false,
                    avosHipertireoidismo: false,
                    tiosHipertireoidismo: false,
                    primosHipertireoidismo: false,
                },

                hipotireoidismo: {
                    irmaosHipotireoidismo: false,
                    paisHipotireoidismo: false,
                    avosHipotireoidismo: false,
                    tiosHipotireoidismo: false,
                    primosHipotireoidismo: false,
                },

                diabetes: {
                    irmaosDiabetes: false,
                    paisDiabetes: false,
                    avosDiabetes: false,
                    tiosDiabetes: false,
                    primosDiabetes: false,
                },

                obesidade: {
                    irmaosObesidade: false,
                    paisObesidade: false,
                    avosObesidade: false,
                    tiosObesidade: false,
                    primosObesidade: false,
                }
            },
        };
    },
}
</script>

<style></style>