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

            <!-- Dados Básicos -->
            <label class="mt-5 mb-3 text-primary"><b>● Dados Básicos:</b></label>
            <div class="form-group mt-3 row">
                <div class="col-3">
                    <label for="peso" class="col-form-label">Peso (Kg):</label>
                    <!-- <input type="text" class="form-control" id="peso" v-model="dadosAntropometricos.peso" /> -->
                    <!-- <input type="text" class="form-control" id="peso" onkeypress="return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 46 || event.charCode == 44" /> -->
                    <input type="text" class="form-control" id="peso" v-model="dadosAntropometricos.peso" @input="formatarValor($event, 'peso')"/>
                </div>
                <div class="col-3">
                    <label for="altura" class="col-form-label">Altura (m):</label>
                    <input type="text" class="form-control" id="altura" v-model="dadosAntropometricos.altura" @input="formatarValor($event, 'altura')" />
                </div>
            </div>

            <!-- Circunferências -->
            <label class="mt-5 mb-3 text-primary"><b>● Circunferências:</b></label>
            <div class="form-group mt-3 row">
                <div class="col-3">
                    <label for="ccAparente" class="col-form-label">CC aparente (cm):</label>
                    <input type="text" class="form-control" id="ccAparente" v-model="dadosAntropometricos.ccAparente" @input="formatarValor($event, 'ccAparente')" />
                </div>
                <div class="col-3">
                    <label for="ccMedia" class="col-form-label">CC média (cm):</label>
                    <input type="text" class="form-control" id="ccMedia" v-model="dadosAntropometricos.ccMedia" @input="formatarValor($event, 'ccMedia')" />
                </div>
                <div class="col-3">
                    <label for="cb" class="col-form-label">CB (cm):</label>
                    <input type="text" class="form-control" id="cb" v-model="dadosAntropometricos.cb" @input="formatarValor($event, 'cb')" />
                </div>
            </div>

            <!-- Análise músculo-gordura -->
            <label class="mt-5 mb-3 text-primary"><b>● Análise músculo-gordura:</b></label>
            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="massaMagra" class="col-form-label">Massa magra (Kg):</label>
                    <input type="text" class="form-control" id="massaMagra" v-model="dadosAntropometricos.massaMagra" @input="formatarValor($event, 'massaMagra')" />
                </div>
                <div class="col">
                    <label for="massaMuscularEsqueletica" class="col-form-label">Massa Muscular Esquelética (Kg):</label>
                    <input type="text" class="form-control" id="massaMuscularEsqueletica" v-model="dadosAntropometricos.massaMuscularEsqueletica" @input="formatarValor($event, 'massaMuscularEsqueletica')" />
                </div>
                <div class="col">
                    <label for="massaGordura" class="col-form-label">Massa de gordura (Kg):</label>
                    <input type="text" class="form-control" id="massaGordura" v-model="dadosAntropometricos.massaGordura" @input="formatarValor($event, 'massaGordura')" />
                </div>
                <div class="col">
                    <label for="pcb" class="col-form-label">PCB (mm):</label>
                    <input type="text" class="form-control" id="pcb" v-model="dadosAntropometricos.pcb" @input="formatarValor($event, 'pcb')" />
                </div>                
            </div>

            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="pcsi" class="col-form-label">PCSi (mm):</label>
                    <input type="text" class="form-control" id="pcsi" v-model="dadosAntropometricos.pcsi" @input="formatarValor($event, 'pcsi')" />
                </div>
                <div class="col">
                    <label for="pcse" class="col-form-label">PCSE (mm):</label>
                    <input type="text" class="form-control" id="pcse" v-model="dadosAntropometricos.pcse" @input="formatarValor($event, 'pcse')" />
                </div>
                <div class="col">
                    <label for="pct" class="col-form-label">PCT (mm):</label>
                    <input type="text" class="form-control" id="pct" v-model="dadosAntropometricos.pct" @input="formatarValor($event, 'pct')" />
                </div> 
                <div class="col">
                    <label for="gcBia" class="col-form-label">GC BIA (%):</label>
                    <input type="text" class="form-control" id="gcBia" v-model="dadosAntropometricos.gcBia" @input="formatarValor($event, 'gcBia')" />
                </div>      
            </div>

            <!-- Composição corporal -->
            <label class="mt-5 mb-3 text-primary"><b>● Composição corporal:</b></label>
            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="proteina" class="col-form-label">Proteína (Kg):</label>
                    <input type="text" class="form-control" id="proteina" v-model="dadosAntropometricos.proteina" @input="formatarValor($event, 'proteina')" />
                </div>
                <div class="col">
                    <label for="mineral" class="col-form-label">Mineral (Kg):</label>
                    <input type="text" class="form-control" id="mineral" v-model="dadosAntropometricos.mineral" @input="formatarValor($event, 'mineral')" />
                </div>
                <div class="col">
                    <label for="agua" class="col-form-label">Água (L):</label>
                    <input type="text" class="form-control" id="agua" v-model="dadosAntropometricos.agua" @input="formatarValor($event, 'agua')" />
                </div>
                <div class="col">
                    <label for="visceral" class="col-form-label">Visceral:</label>
                    <input type="text" class="form-control" id="visceral" v-model="dadosAntropometricos.visceral" @input="formatarValor($event, 'visceral')" />
                </div>
            </div>

            <!-- Cálculos -->
            <h5 class="text mt-5 text-primary"><b>CÁLCULOS</b></h5>
            <div class="form-group mt-3 row col-8" >
                <div class="col">
                    <label for="imcValor" class="col-form-label">IMC (Kg/m2):</label>
                    <input type="text" class="form-control" id="imcValor" v-model="dadosAntropometricos.imc.valor" @input="formatarValor($event, 'imcValor')" />
                </div>
                <div class="col">
                    <label for="imcClassificacao" class="col-form-label">Classificação:</label>
                    <input type="text" class="form-control" id="imcClassificacao" v-model="dadosAntropometricos.imc.classificacao" />
                </div>
            </div>

            <div class="form-group mt-3 row col-8" >
                <div class="col">
                    <label for="rceValor" class="col-form-label">RCE:</label>
                    <input type="text" class="form-control" id="rceValor" v-model="dadosAntropometricos.rce.valor" @input="formatarValor($event, 'rceValor')" />
                </div>
                <div class="col">
                    <label for="rceClassificacao" class="col-form-label">Classificação:</label>
                    <input type="text" class="form-control" id="rceClassificacao" v-model="dadosAntropometricos.rce.classificacao" />
                </div>
            </div>

            <div class="form-group mt-3 row col-8" >
                <div class="col">
                    <label for="cmbValor" class="col-form-label">CMB:</label>
                    <input type="text" class="form-control" id="cmbValor" v-model="dadosAntropometricos.cmb.valor" @input="formatarValor($event, 'cmbValor')" />
                </div>
                <div class="col">
                    <label for="cmbClassificacao" class="col-form-label">Classificação:</label>
                    <input type="text" class="form-control" id="cmbClassificacao" v-model="dadosAntropometricos.cmb.classificacao" />
                </div>
            </div>

            <div class="form-group mt-3 row col-8" >
                <div class="col">
                    <label for="somaPregasValor" class="col-form-label">Soma das pregas:</label>
                    <input type="text" class="form-control" id="somaPregasValor" v-model="dadosAntropometricos.somaPregas.valor" @input="formatarValor($event, 'somaPregasValor')" />
                </div>
                <div class="col">
                    <label for="somaPregasClassificacao" class="col-form-label">Classificação:</label>
                    <input type="text" class="form-control" id="somaPregasClassificacao" v-model="dadosAntropometricos.somaPregas.classificacao" />
                </div>
            </div>

            <div class="form-group mt-3 row col-8" >
                <div class="col">
                    <label for="gcValor" class="col-form-label">GC (%):</label>
                    <input type="text" class="form-control" id="gcValor" v-model="dadosAntropometricos.gc.valor" @input="formatarValor($event, 'gcValor')" />
                </div>
                <div class="col">
                    <label for="gcClassificacao" class="col-form-label">Classificação:</label>
                    <input type="text" class="form-control" id="gcClassificacao" v-model="dadosAntropometricos.gc.classificacao" />
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
    updated() {
        this.atualizarDadosAntropometricos();
    },
    methods: {

        formatarValor(event, campo) {
            let valor = event.target.value;
            valor = valor.replace(/[^0-9,.]/g, '');
            valor = valor.replace(",", ".");
            this.dadosAntropometricos[campo] = valor;
        },

        // Método para atualizar os dados antropométricos
        atualizarDadosAntropometricos() {
            this.calcularIMC();
            this.calcularRCE();
            this.calcularCMB();
            this.calcularSomaPregas();
            this.calcularGC();
            this.$emit('atualizarDadosAntropometricos', this.dadosAntropometricos);
        },
        
        calcularIMC() {
            const peso = parseFloat(this.dadosAntropometricos.peso);
            const altura = parseFloat(this.dadosAntropometricos.altura);
            if (peso && altura) {
                const imc = peso / (altura * altura);
                this.dadosAntropometricos.imc.valor = imc.toFixed(2);
                this.dadosAntropometricos.imc.classificacao = this.classificarIMC(imc);
            }
        },
        classificarIMC(imc) {
            if (imc < 18.5) return "Abaixo do peso";
            if (imc >= 18.5 && imc < 24.9) return "Peso normal";
            if (imc >= 25 && imc < 29.9) return "Sobrepeso";
            return "Obesidade";
        },

        calcularRCE() {
            const ccAparente = parseFloat(this.dadosAntropometricos.ccAparente);
            const altura = parseFloat(this.dadosAntropometricos.altura);
            if (ccAparente && altura) {
                const rce = ccAparente / altura;
                this.dadosAntropometricos.rce.valor = rce.toFixed(2);
                this.dadosAntropometricos.rce.classificacao = this.classificarRCE(rce);
            }
        },
        classificarRCE(rce) {
            if (rce < 0.5) return "Baixo";
            if (rce >= 0.5 && rce < 0.6) return "Moderado";
            return "Alto";
        },

        calcularCMB() {
            const massaMuscularEsqueletica = parseFloat(this.dadosAntropometricos.massaMuscularEsqueletica);
            const altura = parseFloat(this.dadosAntropometricos.altura);
            if (massaMuscularEsqueletica && altura) {
                const cmb = massaMuscularEsqueletica / (altura * altura);
                this.dadosAntropometricos.cmb.valor = cmb.toFixed(2);
                this.dadosAntropometricos.cmb.classificacao = this.classificarCMB(cmb);
            }
        },
        classificarCMB(cmb) {
            if (cmb < 18.5) return "Abaixo do normal";
            if (cmb >= 18.5 && cmb < 24.9) return "Normal";
            if (cmb >= 25 && cmb < 29.9) return "Acima do normal";
                return "Elevado";
        },

        calcularSomaPregas() {
            const pcb = parseFloat(this.dadosAntropometricos.pcb);
            const pcse = parseFloat(this.dadosAntropometricos.pcse);
            const pcsi = parseFloat(this.dadosAntropometricos.pcsi);
            if (pcb && pcse && pcsi) {
                const somaPregas = pcb + pcse + pcsi;
                this.dadosAntropometricos.somaPregas.valor = somaPregas.toFixed(2);
                this.dadosAntropometricos.somaPregas.classificacao = this.classificarSomaPregas(somaPregas);
            }
        },
        classificarSomaPregas(somaPregas) {
            if (somaPregas < 40) return "Baixo";
            if (somaPregas >= 40 && somaPregas < 60) return "Moderado";
                return "Alto";
        },

        calcularGC() {
            const massaGordura = parseFloat(this.dadosAntropometricos.massaGordura);
            const peso = parseFloat(this.dadosAntropometricos.peso);
            if (massaGordura && peso) {
                const gc = (massaGordura / peso) * 100;
                this.dadosAntropometricos.gc.valor = gc.toFixed(2);
                this.dadosAntropometricos.gc.classificacao = this.classificarGC(gc);
            }
        },
        classificarGC(gc) {
            if (gc < 18) return "Baixo";
            if (gc >= 18 && gc < 24) return "Moderado";
            return "Alto";
        },

    },
}
</script>

<style></style>
