<template>
    <!-- Aba de Dados Antropométricos -->
    <div class="tab-pane fade show active" id="refeicoes">
        <h5 class="text mt-5 text-primary"><b>DADOS ANTROPOMÉTRICOS</b></h5>
        <form>
            <!-- Refeições -->
            <div class="form-group row">
                <div class="col-3">
                    <label for="data" class="col-form-label">Data:</label>
                    <input type="date" class="form-control" id="data" v-model="dadosAntropometricos.data" />
                </div>
            </div>

            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="cmb" class="col-form-label">CMB:</label>
                    <input type="text" class="form-control" id="cmb" v-model="dadosAntropometricos.cmb"/>
                </div>
                <div class="col">
                    <label for="interpretacao1" class="col-form-label">Interpretação:</label>
                    <input type="text" class="form-control" id="interpretacao1" v-model="dadosAntropometricos.interpretacao1"/>
                </div>
                <div class="col">
                    <label for="classificacao1" class="col-form-label">Classificação:</label>
                    <input type="text" class="form-control" id="classificacao1" v-model="dadosAntropometricos.classificacao1" />
                </div>
            </div>

            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="gcBia" class="col-form-label">GC BIA (%):</label>
                    <input type="text" class="form-control" id="gcBia" v-model="dadosAntropometricos.gcBia" />
                </div>
                <div class="col">
                    <label for="dum" class="col-form-label">DUM:</label>
                    <input type="text" class="form-control" id="dum" v-model="dadosAntropometricos.dum" />
                </div>
                <div class="col">
                    <label for="peso" class="col-form-label">Peso (Kg):</label>
                    <input type="text" class="form-control" id="peso" v-model="dadosAntropometricos.peso" />
                </div>
            </div>

            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="pct" class="col-form-label">PCT(mm):</label>
                    <input type="text" class="form-control" id="pct" v-model="dadosAntropometricos.pct"/>
                </div>
                <div class="col">
                    <label for="massaMagra" class="col-form-label">Massa magra (Kg):</label>
                    <input type="text" class="form-control" id="massaMagra" v-model="dadosAntropometricos.massaMagra" />
                </div>
                <div class="col">
                    <label for="altura" class="col-form-label">Altura (m):</label>
                    <input type="text" class="form-control" id="altura" v-model="dadosAntropometricos.altura" />
                </div>
            </div>

            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="imc" class="col-form-label">IMC (Kg/m2):</label>
                    <input type="text" class="form-control" id="imc" v-model="dadosAntropometricos.imc" />
                </div>
                <div class="col">
                    <label for="classificacao2" class="col-form-label">Classificação:</label>
                    <input type="text" class="form-control" id="classificacao2" v-model="dadosAntropometricos.classificacao2"/>
                </div>
                <div class="col">
                    <label for="pcb" class="col-form-label">PCB(mm):</label>
                    <input type="text" class="form-control" id="pcb" v-model="dadosAntropometricos.pcb"/>
                </div>
            </div>

            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="massaMuscularEsqueletica" class="col-form-label">Massa Muscular Esquelética (Kg):</label>
                    <input type="text" class="form-control" id="massaMuscularEsqueletica" v-model="dadosAntropometricos.massaMuscularEsqueletica" />
                </div>
                <div class="col">
                    <label for="pcse" class="col-form-label">PCSE(mm):</label>
                    <input type="text" class="form-control" id="vldl" v-model="dadosAntropometricos.pcse" />
                </div>
                <div class="col">
                    <label for="massaGordura" class="col-form-label">Massa de gordura (Kg):</label>
                    <input type="text" class="form-control" id="massaGordura" v-model="dadosAntropometricos.massaGordura" />
                </div>
                
            </div>

            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="pcsi" class="col-form-label">PCSi (mm):</label>
                    <input type="text" class="form-control" id="pcsi" v-model="dadosAntropometricos.pcsi" />
                </div>
                <div class="col">
                    <label for="agua" class="col-form-label">Água (L):</label>
                    <input type="text" class="form-control" id="agua" v-model="dadosAntropometricos.agua" />
                </div>
                <div class="col">
                    <label for="ccAparente" class="col-form-label">CC aparente (cm):</label>
                    <input type="text" class="form-control" id="ccAparente" v-model="dadosAntropometricos.ccAparente"/>
                </div>
            </div>

            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="somaPregas" class="col-form-label">Soma das pregas:</label>
                    <input type="text" class="form-control" id="somaPregas" v-model="dadosAntropometricos.somaPregas" />
                </div>
                <div class="col">
                    <label for="proteina" class="col-form-label">Proteína (Kg):</label>
                    <input type="text" class="form-control" id="proteina" v-model="dadosAntropometricos.proteina" />
                </div>
                <div class="col">
                    <label for="ccMedia" class="col-form-label">CC média (cm):</label>
                    <input type="text" class="form-control" id="ccMedia" v-model="dadosAntropometricos.ccMedia"/>
                </div>
            </div>

            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="gc" class="col-form-label">GC (%):</label>
                    <input type="text" class="form-control" id="gc" v-model="dadosAntropometricos.gc" />
                </div>
                <div class="col">
                    <label for="classificacao" class="col-form-label">Classificação:</label>
                    <input type="text" class="form-control" id="classificacao" v-model="dadosAntropometricos.classificacao" />
                </div>
                <div class="col">
                    <label for="mineral" class="col-form-label">Mineral (Kg):</label>
                    <input type="text" class="form-control" id="mineral" v-model="dadosAntropometricos.mineral" />
                </div>
            </div>

            <div class="form-group mt-3 row" >
                <div class="col">
                    <label for="ccMercedia" class="col-form-label">RCE:</label>
                    <input type="text" class="form-control" id="rce" v-model="dadosAntropometricos.rce"/>
                </div>
                <div class="col">
                    <label for="visceral" class="col-form-label">Visceral:</label>
                    <input type="text" class="form-control" id="visceral" v-model="dadosAntropometricos.visceral" />
                </div>
                <div class="col">
                    <label for="cb" class="col-form-label">CB:</label>
                    <input type="text" class="form-control" id="cb" v-model="dadosAntropometricos.cb"/>
                </div>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    name: "DadosAntropometricosComponent",
    props:{
        dadosAntropometricosProps: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            dadosAntropometricos: this.dadosAntropometricosProps,
        };
    },
}
</script>

<style></style>
