<template>
    <!-- Aba de Refeições -->
    <div class="tab-pane fade show active" id="refeicoes">
        <h5 class="text mt-5 text-primary"><b>8. REFEIÇÕES</b></h5>
        <form>
            <!-- Refeições -->
            <div class="form-group row">
                <div class="col-4">
                    <label for="numeroRefeicoes" class="col-form-label">Nº de refeições diárias:</label>
                    <input type="text" class="form-control" id="numeroRefeicoes" v-model="refeicoes.qtdRefeicoes" />
                </div>
            </div>

            <!-- Café da manhã -->
            <h6 class="mt-5 mb-3"><b>● Café da Manhã</b></h6>
            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="localCafeManha" class="col-form-label">Local:</label>
                    <input type="text" class="form-control" id="localCafeManha" v-model="refeicoes.cafeManha.local" />
                </div>
                <div class="col">
                    <label for="preparadorCafeManha" class="col-form-label">Quem prepara:</label>
                    <input type="text" class="form-control" id="preparadorCafeManha"
                        v-model="refeicoes.cafeManha.preparador" />
                </div>
                <div class="col">
                    <label for="oleoGorduraCafeManha" class="col-form-label">Qual o óleo/gordura:</label>
                    <input type="text" class="form-control" id="oleoGorduraCafeManha"
                        v-model="refeicoes.cafeManha.oleoGordura" />
                </div>
            </div>

            <!-- Lanche da Manhã -->
            <h6 class="mt-5 mb-3"><b>● Lanche da Manhã</b></h6>
            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="localLancheManha" class="col-form-label">Local:</label>
                    <input type="text" class="form-control" id="localLancheManha" v-model="refeicoes.lancheManha.local" />
                </div>
                <div class="col">
                    <label for="preparadorLancheManha" class="col-form-label">Quem prepara:</label>
                    <input type="text" class="form-control" id="preparadorLancheManha"
                        v-model="refeicoes.lancheManha.preparador" />
                </div>
                <div class="col">
                    <label for="oleoGorduraLancheManha" class="col-form-label">Qual o óleo/gordura:</label>
                    <input type="text" class="form-control" id="oleoGorduraLancheManha"
                        v-model="refeicoes.lancheManha.oleoGordura" />
                </div>
            </div>

            <!-- Almoço -->
            <h6 class="mt-5 mb-3"><b>● Almoço</b></h6>
            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="localAlmoco" class="col-form-label">Local:</label>
                    <input type="text" class="form-control" id="localAlmoco" v-model="refeicoes.almoco.local" />
                </div>
                <div class="col">
                    <label for="preparadorAlmoco" class="col-form-label">Quem prepara:</label>
                    <input type="text" class="form-control" id="preparadorAlmoco" v-model="refeicoes.almoco.preparador" />
                </div>
                <div class="col">
                    <label for="oleoGorduraAlmoco" class="col-form-label">Qual o óleo/gordura:</label>
                    <input type="text" class="form-control" id="oleoGorduraAlmoco" v-model="refeicoes.almoco.oleoGordura" />
                </div>
            </div>

            <!-- Lanche da Tarde -->
            <h6 class="mt-5 mb-3"><b>● Lanche da Tarde</b></h6>
            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="localLancheTarde" class="col-form-label">Local:</label>
                    <input type="text" class="form-control" id="localLancheTarde" v-model="refeicoes.lancheTarde.local" />
                </div>
                <div class="col">
                    <label for="preparadorLancheTarde" class="col-form-label">Quem prepara:</label>
                    <input type="text" class="form-control" id="preparadorLancheTarde"
                        v-model="refeicoes.lancheTarde.preparador" />
                </div>
                <div class="col">
                    <label for="oleoGorduraLancheTarde" class="col-form-label">Qual o óleo/gordura:</label>
                    <input type="text" class="form-control" id="oleoGorduraLancheTarde"
                        v-model="refeicoes.lancheTarde.oleoGordura" />
                </div>
            </div>

            <!-- Jantar -->
            <h6 class="mt-5 mb-3"><b>● Jantar</b></h6>
            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="localJantar" class="col-form-label">Local:</label>
                    <input type="text" class="form-control" id="localJantar" v-model="refeicoes.jantar.local" />
                </div>
                <div class="col">
                    <label for="preparadorJantar" class="col-form-label">Quem prepara:</label>
                    <input type="text" class="form-control" id="preparadorJantar" v-model="refeicoes.jantar.preparador" />
                </div>
                <div class="col">
                    <label for="oleoGorduraJantar" class="col-form-label">Qual o óleo/gordura:</label>
                    <input type="text" class="form-control" id="oleoGorduraJantar" v-model="refeicoes.jantar.oleoGordura" />
                </div>
            </div>

            <!-- Ceia -->
            <h6 class="mt-5 mb-3"><b>● Ceia</b></h6>
            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="localCeia" class="col-form-label">Local:</label>
                    <input type="text" class="form-control" id="localCeia" v-model="refeicoes.ceia.local" />
                </div>
                <div class="col">
                    <label for="preparadorCeia" class="col-form-label">Quem prepara:</label>
                    <input type="text" class="form-control" id="preparadorCeia" v-model="refeicoes.ceia.preparador" />
                </div>
                <div class="col">
                    <label for="oleoGorduraCeia" class="col-form-label">Qual o óleo/gordura:</label>
                    <input type="text" class="form-control" id="oleoGorduraCeia" v-model="refeicoes.ceia.oleoGordura" />
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
