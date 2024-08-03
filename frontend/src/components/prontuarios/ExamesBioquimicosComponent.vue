<template>
    <!-- Aba de Exames Bioquícos -->
    <div class="tab-pane fade show active" id="refeicoes">
        <h5 class="text mt-5 text-primary"><b>EXAMES BIOQUÍMICOS</b></h5>
        <form>
            <!-- Refeições -->
            <div class="form-group row">
                <div class="col-3">
                    <label for="data" class="col-form-label">Data:</label>
                    <input type="date" class="form-control" id="data" v-model="examesBioquimicos.data" />
                </div>
            </div>

            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="hematocrito" class="col-form-label">Hematócrito:</label>
                    <input type="text" class="form-control" id="hematocrito" v-model="examesBioquimicos.hematocrito"/>
                </div>
                <div class="col">
                    <label for="ct" class="col-form-label">CT:</label>
                    <input type="text" class="form-control" id="ct" v-model="examesBioquimicos.ct" />
                </div>
                <div class="col">
                    <label for="ureia" class="col-form-label">Ureia:</label>
                    <input type="text" class="form-control" id="ureia" v-model="examesBioquimicos.ureia" />
                </div>
            </div>

            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="hemacia" class="col-form-label">Hemácia:</label>
                    <input type="text" class="form-control" id="hemacia" v-model="examesBioquimicos.hemacia"/>
                </div>
                <div class="col">
                    <label for="ldl" class="col-form-label">LDL:</label>
                    <input type="text" class="form-control" id="ldl" v-model="examesBioquimicos.ldl" />
                </div>
                <div class="col">
                    <label for="tgo" class="col-form-label">TGO:</label>
                    <input type="text" class="form-control" id="tgo" v-model="examesBioquimicos.tgo" />
                </div>
            </div>

            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="hemoglobina" class="col-form-label">Hemoglobina:</label>
                    <input type="text" class="form-control" id="hemoglobina" v-model="examesBioquimicos.hemoglobina"/>
                </div>
                <div class="col">
                    <label for="hdl" class="col-form-label">HDL:</label>
                    <input type="text" class="form-control" id="hdl" v-model="examesBioquimicos.hdl" />
                </div>
                <div class="col">
                    <label for="tgp" class="col-form-label">TGP:</label>
                    <input type="text" class="form-control" id="tgp" v-model="examesBioquimicos.tgp" />
                </div>
            </div>

            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="glicemiaJejum" class="col-form-label">Glicemia (jejum):</label>
                    <input type="text" class="form-control" id="glicemiaJejum" v-model="examesBioquimicos.glicemiaJejum"/>
                </div>
                <div class="col">
                    <label for="vldl" class="col-form-label">VLDL:</label>
                    <input type="text" class="form-control" id="vldl" v-model="examesBioquimicos.vldl" />
                </div>
                <div class="col">
                    <label for="tsh" class="col-form-label">TSH:</label>
                    <input type="text" class="form-control" id="tsh" v-model="examesBioquimicos.tsh" />
                </div>
            </div>

            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="a1c" class="col-form-label">A1C:</label>
                    <input type="text" class="form-control" id="a1c" v-model="examesBioquimicos.a1c"/>
                </div>
                <div class="col">
                    <label for="creatina" class="col-form-label">Creatina:</label>
                    <input type="text" class="form-control" id="creatina" v-model="examesBioquimicos.creatina" />
                </div>
                <div class="col">
                    <label for="t4" class="col-form-label">T4:</label>
                    <input type="text" class="form-control" id="t4" v-model="examesBioquimicos.t4" />
                </div>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    name: "ExamesBioquimicosComponent",
    props:{
        examesBioquimicosProps: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            examesBioquimicos: this.examesBioquimicosProps,
        };
    },
}
</script>

<style></style>
