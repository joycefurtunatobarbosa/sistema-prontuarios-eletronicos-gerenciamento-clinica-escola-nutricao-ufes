<template>
    <!-- Aba de Dados Pessoais -->
    <div class="tab-pane fade show active" id="dadosPessoais">
        <!-- <div class="tab-pane fade" :class="{ 'show active': tabs[0].active }" id="dadosPessoais"> -->
        <h5 class="text mt-5 text-primary"><b>1. PACIENTE</b></h5>
        <form>
            <div class="form-group row">
                <div class="col">
                    <label for="nome" class="col-form-label">Nome completo:</label>
                    <input type="text" class="form-control" v-model="nomeCompleto" />
                    <!-- @input="$emit('update:modelValue', nomeCompleto)" />  -->
                </div>
            </div>

            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="dataNascimento" class="col-form-label">Data de nascimento:</label>
                    <input type="text" class="form-control" v-model="dataNascimento">
                </div>

                <div class="col">
                    <label for="sexo" class="col col-form-label">Sexo:</label>
                    <select class="form-select" id="">
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="outro">Outro</option>
                    </select>
                </div>

                <div class="col">
                    <label for="" class="col-form-label">Estado civil:</label>
                    <input type="text" class="form-control" />
                </div>
            </div>

            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="celular" class="col-form-label">Profissão:</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="col">
                    <label for="email" class="col-form-label">Escolaridade:</label>
                    <input type="text" class="form-control" />
                </div>
            </div>

            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="celular" class="col-form-label">Celular:</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="col">
                    <label for="email" class="col-form-label">Email:</label>
                    <input type="text" class="form-control" />
                </div>
            </div>

            <!-- Dados de endereço -->
            <h5 class="text mt-5 text-primary"><b>2. ENDEREÇO</b></h5>

            <div class="form-group mt-4 row">
                <div class="col">
                    <label for="rua" class="col-form-label">Rua:</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="col-4">
                    <label for="numero" class="col-form-label">Número:</label>
                    <input type="text" class="form-control" />
                </div>
            </div>

            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="complemento" class="col-form-label">Complemento:</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="col">
                    <label for="bairro" class="col-form-label">Bairro:</label>
                    <input type="text" class="form-control" />
                </div>
            </div>

            <div class="form-group mt-3 row">
                <div class="col">
                    <label for="cidade" class="col-form-label">Cidade:</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="col">
                    <label for="estado" class="col-form-label">Estado:</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="col">
                    <label for="cep" class="col-form-label">CEP:</label>
                    <input type="text" class="form-control" />
                </div>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    name: "DadosPessoaisProntuario",
    data() {
        return {
            nomeCompleto: '',
            dataNascimento: '',
        };
    },
}
</script>

<style></style>