<template>
    <!-- Assinaturas -->
    <div id="assinatura" ref="assinatura">
        <h5 class="text mt-5 text-primary exibirAssinatura" style="margin-top: 20px;"><b>TERMO DE AUTORIZAÇÃO DO PACIENTE</b></h5>
        <div class="form-group mt-4 row exibirAssinatura">
            <div class="col">
                <label for="aceiteTermoAutorizacao" class="mb-5">Eu confirmo todas as informações relatadas e comprometo-me a informar sobre qualquer mudança das mesmas. Estou ciente de que as informações contidas neste prontuário, assim como todas as informações sobre o tratamento e diagnóstico poderão ser utilizadas para fins didáticos e científicos, resguardando sempre o anonimato.</label>
                <hr>
                <h6 class="text-center">(Assinatura do paciente)</h6>
                
                <!-- <input class="mt-4 form-check-input my-auto" type="checkbox" id="aceiteTermoAutorizacao"
                    v-model="dadosPessoais.aceiteTermoAutorizacao">
                <label class="mt-4 form-check-label ms-2" for="aceiteTermoAutorizacao"><b>Eu aceito.</b></label> -->
            </div>
        </div>

        <!-- Assinatura da nutricionista -->
        <h5 class="text mt-5 text-primary exibirAssinatura"><b>ASSINATURA DO(A) NUTRICIONISTA</b></h5>
        <div class="form-group mt-4 row exibirAssinatura">
            <div class="col">
                <label for="assinatura" class="mb-5">Eu sou o(a) nutricionista responsável e afirmo que segui todas as normas e diretrizes profissionais no atendimento do paciente.</label>
                <hr>
                <h6 class="text-center">(Assinatura do(a) nutricionista)</h6>
                <!-- <br><input class="mt-4 form-check-input my-auto" type="checkbox" id="assinatura"
                    v-model="orientacoesConduta.assinatura">
                <label class="mt-4 form-check-label ms-2" for="assinatura"><b>Eu assino.</b></label> -->
            </div>
        </div>
    </div>
    <!-- </div> -->
</template>

<script>
export default {
    name: "AssinaturasComponent",
}
</script>

<style>

</style>
