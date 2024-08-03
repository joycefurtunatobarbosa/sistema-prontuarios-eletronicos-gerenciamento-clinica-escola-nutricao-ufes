<template>
    <!-- Aba de Refeições -->
    <div class="tab-pane fade show active" id="refeicoes">
        <h5 class="text mt-5 text-primary"><b>REFEIÇÕES</b></h5>
        <form>
            <!-- Refeições -->
            <div class="form-group row">
                <div class="col-3">
                    <label for="numeroRefeicoes" class="col-form-label">Nº de refeições diárias:</label>
                    <input type="text" class="form-control" id="numeroRefeicoes" v-model="refeicoes.qtdRefeicoes" />
                </div>
            </div>

            <!-- Café da manhã -->
            <!-- <h6 class="mt-5 mb-3"><b>● Café da Manhã</b></h6> -->
            <div class="mt-4 mb-3 col d-flex align-items-center">
                <input class="form-check-input my-auto me-2" type="checkbox" value="true" id="realizaCafeManha" v-model="refeicoes.cafeManha.realiza">
                <label class="col-form-label" for="realizaCafeManha">Café da manhã:</label>
            </div>

            <div class="form-group mt-3 row" v-show="refeicoes.cafeManha.realiza">
                <div class="col">
                    <label for="localCafeManha" class="col-form-label">Local:</label>
                    <input type="text" class="form-control" id="localCafeManha" v-model="refeicoes.cafeManha.local"/>
                </div>
                <div class="col">
                    <label for="horarioCafeManha" class="col-form-label">Horário:</label>
                    <input type="text" class="form-control" id="horarioCafeManha" v-model="refeicoes.cafeManha.horario" />
                </div>
            </div>

            <div class="form-group mt-3 row" v-show="refeicoes.cafeManha.realiza">
                <div class="col">
                    <label for="preparadorCafeManha" class="col-form-label">Quem prepara:</label>
                    <input type="text" class="form-control" id="preparadorCafeManha"
                        v-model="refeicoes.cafeManha.preparador"/>
                </div>
                <div class="col">
                    <label for="oleoGorduraCafeManha" class="col-form-label">Qual o óleo/gordura:</label>
                    <input type="text" class="form-control" id="oleoGorduraCafeManha"
                        v-model="refeicoes.cafeManha.oleoGordura"/>
                </div>
            </div>

            <!-- Lanche da Manhã -->
            <!-- <h6 class="mt-5 mb-3"><b>● Lanche da Manhã</b></h6> -->
             <div class="mt-4 mb-3 col d-flex align-items-center">
                <input class="form-check-input my-auto me-2" type="checkbox" value="true" id="realizaLancheManha" v-model="refeicoes.lancheManha.realiza">
                <label class="col-form-label" for="realizaLancheManha">Lanche da Manhã:</label>
            </div>

            <div class="form-group mt-3 row" v-show="refeicoes.lancheManha.realiza">
                <div class="col">
                    <label for="localLancheManha" class="col-form-label">Local:</label>
                    <input type="text" class="form-control" id="localLancheManha" v-model="refeicoes.lancheManha.local"/>
                </div>
                <div class="col">
                    <label for="horarioLancheManha" class="col-form-label">Horário:</label>
                    <input type="text" class="form-control" id="horarioLancheManha" v-model="refeicoes.lancheManha.horario"/>
                </div>
            </div>

            <div class="form-group mt-3 row" v-show="refeicoes.lancheManha.realiza">
                <div class="col">
                    <label for="preparadorLancheManha" class="col-form-label">Quem prepara:</label>
                    <input type="text" class="form-control" id="preparadorLancheManha"
                        v-model="refeicoes.lancheManha.preparador"/>
                </div>
                <div class="col">
                    <label for="oleoGorduraLancheManha" class="col-form-label">Qual o óleo/gordura:</label>
                    <input type="text" class="form-control" id="oleoGorduraLancheManha"
                        v-model="refeicoes.lancheManha.oleoGordura"/>
                </div>
            </div>

            <!-- Almoço -->
            <!-- <h6 class="mt-5 mb-3"><b>● Almoço</b></h6> -->
             <div class="mt-4 mb-3 col d-flex align-items-center">
                <input class="form-check-input my-auto me-2" type="checkbox" value="true" id="realizaAmoco" v-model="refeicoes.almoco.realiza">
                <label class="col-form-label" for="realizaAmoco">Almoço:</label>
            </div>

            <div class="form-group mt-3 row" v-show="refeicoes.almoco.realiza">
                <div class="col">
                    <label for="localAlmoco" class="col-form-label">Local:</label>
                    <input type="text" class="form-control" id="localAlmoco" v-model="refeicoes.almoco.local"/>
                </div>
                <div class="col">
                    <label for="horarioAlmoco" class="col-form-label">Horário:</label>
                    <input type="text" class="form-control" id="horarioAlmoco" v-model="refeicoes.almoco.local"/>
                </div>
            </div>

            <div class="form-group mt-3 row" v-show="refeicoes.almoco.realiza">
                <div class="col">
                    <label for="preparadorAlmoco" class="col-form-label">Quem prepara:</label>
                    <input type="text" class="form-control" id="preparadorAlmoco" v-model="refeicoes.almoco.preparador"/>
                </div>
                <div class="col">
                    <label for="oleoGorduraAlmoco" class="col-form-label">Qual o óleo/gordura:</label>
                    <input type="text" class="form-control" id="oleoGorduraAlmoco" v-model="refeicoes.almoco.oleoGordura"/>
                </div>
            </div>

            <!-- Lanche da Tarde -->
            <!-- <h6 class="mt-5 mb-3"><b>● Lanche da Tarde</b></h6> -->
            <div class="mt-4 mb-3 col d-flex align-items-center">
                <input class="form-check-input my-auto me-2" type="checkbox" value="true" id="realizaLancheTarde" v-model="refeicoes.lancheTarde.realiza">
                <label class="col-form-label" for="realizaLancheTarde">Lanche da Tarde:</label>
            </div>

            <div class="form-group mt-3 row" v-show="refeicoes.lancheTarde.realiza">
                <div class="col">
                    <label for="localLancheTarde" class="col-form-label">Local:</label>
                    <input type="text" class="form-control" id="localLancheTarde" v-model="refeicoes.lancheTarde.local"/>
                </div>
                <div class="col">
                    <label for="horarioLancheTarde" class="col-form-label">Horário:</label>
                    <input type="text" class="form-control" id="horarioLancheTarde" v-model="refeicoes.lancheTarde.local"/>
                </div>
            </div>

            <div class="form-group mt-3 row" v-show="refeicoes.lancheTarde.realiza">
                <div class="col">
                    <label for="preparadorLancheTarde" class="col-form-label">Quem prepara:</label>
                    <input type="text" class="form-control" id="preparadorLancheTarde"
                        v-model="refeicoes.lancheTarde.preparador"/>
                </div>
                <div class="col">
                    <label for="oleoGorduraLancheTarde" class="col-form-label">Qual o óleo/gordura:</label>
                    <input type="text" class="form-control" id="oleoGorduraLancheTarde"
                        v-model="refeicoes.lancheTarde.oleoGordura"/>
                </div>
            </div>

            <!-- Jantar -->
            <!-- <h6 class="mt-5 mb-3"><b>● Jantar</b></h6> -->
            <div class="mt-4 mb-3 col d-flex align-items-center">
                <input class="form-check-input my-auto me-2" type="checkbox" value="true" id="realizaJantar" v-model="refeicoes.jantar.realiza">
                <label class="col-form-label" for="realizaJantar">Jantar:</label>
            </div>

            <div class="form-group mt-3 row" v-show="refeicoes.jantar.realiza">
                <div class="col">
                    <label for="localJantar" class="col-form-label">Local:</label>
                    <input type="text" class="form-control" id="localJantar" v-model="refeicoes.jantar.local"/>
                </div>
                <div class="col">
                    <label for="horarioJantar" class="col-form-label">Horário:</label>
                    <input type="text" class="form-control" id="horarioJantar" v-model="refeicoes.jantar.local"/>
                </div>
            </div>

            <div class="form-group mt-3 row" v-show="refeicoes.jantar.realiza">
                <div class="col">
                    <label for="preparadorJantar" class="col-form-label">Quem prepara:</label>
                    <input type="text" class="form-control" id="preparadorJantar" v-model="refeicoes.jantar.preparador"/>
                </div>
                <div class="col">
                    <label for="oleoGorduraJantar" class="col-form-label">Qual o óleo/gordura:</label>
                    <input type="text" class="form-control" id="oleoGorduraJantar" v-model="refeicoes.jantar.oleoGordura"/>
                </div>
            </div>

            <!-- Ceia -->
            <!-- <h6 class="mt-5 mb-3"><b>● Ceia</b></h6> -->
            <div class="mt-4 mb-3 col d-flex align-items-center">
                <input class="form-check-input my-auto me-2" type="checkbox" value="true" id="realizaCeia" v-model="refeicoes.ceia.realiza">
                <label class="col-form-label" for="realizaCeia">Ceia:</label>
            </div>

            <div class="form-group mt-3 row" v-show="refeicoes.ceia.realiza">
                <div class="col">
                    <label for="localCeia" class="col-form-label">Local:</label>
                    <input type="text" class="form-control" id="localCeia" v-model="refeicoes.ceia.local"/>
                </div>
                <div class="col">
                    <label for="horarioCeia" class="col-form-label">Horário:</label>
                    <input type="text" class="form-control" id="horarioCeia" v-model="refeicoes.ceia.local"/>
                </div>
            </div>

            <div class="form-group mt-3 row" v-show="refeicoes.ceia.realiza">
                <div class="col">
                    <label for="preparadorCeia" class="col-form-label">Quem prepara:</label>
                    <input type="text" class="form-control" id="preparadorCeia" v-model="refeicoes.ceia.preparador"/>
                </div>
                <div class="col">
                    <label for="oleoGorduraCeia" class="col-form-label">Qual o óleo/gordura:</label>
                    <input type="text" class="form-control" id="oleoGorduraCeia" v-model="refeicoes.ceia.oleoGordura" :disabled="!refeicoes.ceia.realiza"/>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "RefeicoesComponent",
    props:{
        refeicoesProps: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            refeicoes: this.refeicoesProps,
        };
    },
}
</script>

<style></style>
