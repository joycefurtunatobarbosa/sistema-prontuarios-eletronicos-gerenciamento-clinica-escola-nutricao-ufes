<template>
    <!-- Aba de Dados Pessoais -->
    <div class="tab-pane fade show active" id="dadosPessoais">
        <!-- <div class="tab-pane fade" :class="{ 'show active': tabs[0].active }" id="dadosPessoais"> -->
        <h5 class="text mt-5 text-primary"><b>1. PACIENTE</b></h5>
        <form>
            <div class="form-group row">
                <div class="col">
                    <label for="nome" class="col-form-label">Nome completo:</label>
                    <input type="text" class="form-control" id="nome" v-model="dadosPessoais.nomeCompleto" />
                    <!-- @input="$emit('update:modelValue', nomeCompleto)" />  -->
                </div>
            </div>

            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="dataNascimento" class="col-form-label">Data de nascimento:</label>
                    <input type="text" class="form-control" id="dataNascimento" v-model="dadosPessoais.dataNascimento">
                </div>

                <div class="col">
                    <label for="sexo" class="col col-form-label">Sexo:</label>
                    <select class="form-select" id="sexo" v-model="dadosPessoais.sexo">
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="outro">Outro</option>
                    </select>
                </div>

                <div class="col">
                    <label for="estacoCivil" class="col-form-label">Estado civil:</label>
                    <select class="form-select" id="estadoCivil" v-model="dadosPessoais.estadoCivil">
                        <option value="solteiro">Solteiro(a)</option>
                        <option value="casado">Casado(a)</option>
                        <option value="divorciado">Divorciado(a)</option>
                        <option value="viuvo">Viúvo(a)</option>
                        <option value="separado">Separado(a)</option>
                        <option value="uniaoEstavel">União Estável</option>
                    </select>
                </div>
            </div>

            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="profissao" class="col-form-label">Profissão:</label>
                    <input type="text" class="form-control" id="profissao" v-model="dadosPessoais.profissao" />
                </div>
                <div class="col">
                    <label for="escolaridade" class="col-form-label">Escolaridade:</label>
                    <input type="text" class="form-control" id="escolaridade" v-model="dadosPessoais.escolaridade" />
                </div>
            </div>

            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="celular" class="col-form-label">Celular:</label>
                    <input type="text" class="form-control" id="celular" v-model="dadosPessoais.celular" />
                </div>
                <div class="col">
                    <label for="email" class="col-form-label">Email:</label>
                    <input type="text" class="form-control" id="email" v-model="dadosPessoais.email" />
                </div>
            </div>

            <!-- Dados de endereço -->
            <h5 class="text mt-5 text-primary"><b>2. ENDEREÇO</b></h5>

            <div class="form-group mt-4 row">
                <div class="col">
                    <label for="rua" class="col-form-label">Rua:</label>
                    <input type="text" class="form-control" id="rua" v-model="dadosPessoais.endereco.rua" />
                </div>
                <div class="col-4">
                    <label for="numero" class="col-form-label">Número:</label>
                    <input type="text" class="form-control" id="numero" v-model="dadosPessoais.endereco.numero" />
                </div>
            </div>

            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="complemento" class="col-form-label">Complemento:</label>
                    <input type="text" class="form-control" id="complemento" v-model="dadosPessoais.endereco.complemento" />
                </div>
                <div class="col">
                    <label for="bairro" class="col-form-label">Bairro:</label>
                    <input type="text" class="form-control" id="bairro" v-model="dadosPessoais.endereco.bairro" />
                </div>
            </div>

            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="cidade" class="col-form-label">Cidade:</label>
                    <input type="text" class="form-control" id="cidade" v-model="dadosPessoais.endereco.cidade" />
                </div>
                <div class="col">
                    <label for="estado" class="col-form-label">Estado:</label>
                    <input type="text" class="form-control" id="estado" v-model="dadosPessoais.endereco.estado" />
                </div>
                <div class="col">
                    <label for="cep" class="col-form-label">CEP:</label>
                    <input type="text" class="form-control" id="cep" v-model="dadosPessoais.endereco.cep" />
                </div>
            </div>

            <!-- Termo de autorização -->
            <h5 class="text mt-5 text-primary"><b>3. TERMO DE AUTORIZAÇÃO</b></h5>
            <div class="form-group mt-4 row">
                <div class="col">
                    <label for="aceiteTermoAutorizacao" class="">Eu confirmo todas as informações relatadas e comprometo-me a informar sobre qualquer mudança das mesmas. Estou ciente de que as informações contidas neste prontuário, assim como todas as informações sobre o tratamento e diagnóstico poderão ser utilizadas para fins didáticos e científicos, resguardando sempre o anonimato.</label>
                    
                    <input class="mt-4 form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="aceiteTermoAutorizacao"
                        v-model="dadosPessoais.aceiteTermoAutorizacao">
                    <label class="mt-4 form-check-label ms-2" for="aceiteTermoAutorizacao"><b>Eu aceito.</b></label>
                </div>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    name: "DadosPessoaisComponent",
    props: {
        dadosPessoaisProps: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            dadosPessoais: this.dadosPessoaisProps,
        };
    },
};
</script>
