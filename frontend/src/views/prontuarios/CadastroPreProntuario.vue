<template>
    <h2 class="text-center"><b>Pré-prontuário para Alunos e Funcionários</b></h2>
    <div class="row">
      <div class="col d-flex justify-content-end me-5">
        <button class="btn btn-success" @click="enviar()">Enviar</button>
      </div>
    </div>

    <div class="container-fluid col-8">

    <!-- Abas -->
    <div class="nav nav-tabs mt-3 text-center d-flex justify-content-center">
      <a class="nav-link" :class="{ 'active': tabs[0].active }" @click="changeTab(0)" data-bs-toggle="tab"
        href="#dadosPessoais">Dados Pessoais</a>
      <a class="nav-link" :class="{ 'active': tabs[1].active }" @click="changeTab(1)" data-bs-toggle="tab"
        href="#historicoPessoal">História Pessoal</a>
      <a class="nav-link" :class="{ 'active': tabs[2].active }" @click="changeTab(2)" data-bs-toggle="tab"
        href="#historicoFamiliar">História Familiar</a>
      <a class="nav-link" :class="{ 'active': tabs[3].active }" @click="changeTab(3)" data-bs-toggle="tab"
        href="#medicamentos">Medicamentos</a>
      <a class="nav-link" :class="{ 'active': tabs[4].active }" @click="changeTab(4)" data-bs-toggle="tab"
        href="#anamnese">Anamnese</a>
      <a class="nav-link" :class="{ 'active': tabs[5].active }" @click="changeTab(5)" data-bs-toggle="tab"
        href="#refeicoes">Refeições</a>
    </div>

  </div>

  <!-- Conteúdo das abas -->
  <div class="tab-content container-fluid col-8">

    <!-- Aba de Dados Pessoais -->
    <!-- <div class="tab-pane fade show active" id="dadosPessoais"> -->
    <div class="tab-pane fade" :class="{ 'show active': tabs[0].active }" id="dadosPessoais">
      <h5 class="text mt-5 text-primary"><b>1. PACIENTE</b></h5>
      <form>
        <div class="form-group row">
          <div class="col">
            <label for="nome" class="col-form-label">Nome completo:</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group mt-3 row">
          <div class="col">
            <label for="dataNascimento" class="col-form-label">Data de nascimento:</label>
            <input type="text" class="form-control" />
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
            <label for="dataNascimento" class="col-form-label">Estado civil:</label>
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

    <!-- Aba de Histórico -->
    <!-- <div class="tab-pane fade" id="historicoPessoal"> -->
    <div class="tab-pane fade" :class="{ 'show active': tabs[1].active }" id="historicoPessoal">
      <h5 class="text mt-5 text-primary"><b>3. HISTÓRIA ATUAL</b></h5>
      <form>
        <!-- História Atual -->
        <div class="form-group mt-3 row">
          <div class="col">
            <label for="observacoes" class="col-3 col-form-label">Motivo da Consulta:</label>
            <textarea class="form-control" id="" name="" rows="4"></textarea>
          </div>
        </div>

        <!-- História Pregressa - Doenças -->
        <h5 class="text mt-5 text-primary"><b>4. HISTÓRIA PREGRESSA</b></h5>
        <div class="form-group mt-3">
          <label for="doencaNome" class="col-form-label">Doenças:</label>
          <textarea class="form-control" id="" name="" rows="3"></textarea>
        </div>

        <div class="form-group mt-3">
          <label for="doencaNome" class="col-form-label">Internações:</label>
          <textarea class="form-control" id="" name="" rows="3"></textarea>
        </div>

        <div class="form-group mt-3">
          <label for="doencaNome" class="col-form-label">Cirugias:</label>
          <textarea class="form-control" id="" name="" rows="3"></textarea>
        </div>
      </form>
    </div>

    <!-- Aba de Histórico -->
    <!-- <div class="tab-pane fade" id="historicoFamiliar"> -->
    <div class="tab-pane fade" :class="{ 'show active': tabs[2].active }" id="historicoFamiliar">
      <h5 class="mt-5 text-primary"><b>5. HISTÓRIA FAMILIAR</b></h5>
      <form>
        <!-- Doenças Cardiovasculares -->
        <h6 class="mt-4 mb-3"><b>● Doenças Cardiovasculares</b></h6>

        <div class="form-group d-flex">
          <div class="row">
            <div class="col d-flex align-items-center">
              <label class="col-form-label">Cardiopatia:</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="">
              <label class="form-check-label ms-2" for="">Irmãos</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="">
              <label class="form-check-label ms-2" for="">Pais</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="">
              <label class="form-check-label ms-2" for="">Avós</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="">
              <label class="form-check-label ms-2" for="">Tios</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="">
              <label class="form-check-label ms-2" for="">Primos</label>
            </div>
          </div>
        </div>

        <div class="form-group d-flex">
          <div class="row">
            <div class="col d-flex align-items-center">
              <label class="col-form-label">Hipertenção:</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="">
              <label class="form-check-label ms-2" for="">Irmãos</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="">
              <label class="form-check-label ms-2" for="">Pais</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="">
              <label class="form-check-label ms-2" for="">Avós</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="">
              <label class="form-check-label ms-2" for="">Tios</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="">
              <label class="form-check-label ms-2" for="">Primos</label>
            </div>
          </div>
        </div>

        <div class="form-group d-flex">
          <div class="row">
            <div class="col d-flex align-items-center">
              <label class="col-form-label">AVC:</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="">
              <label class="form-check-label ms-2" for="">Irmãos</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="">
              <label class="form-check-label ms-2" for="">Pais</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="">
              <label class="form-check-label ms-2" for="">Avós</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="">
              <label class="form-check-label ms-2" for="">Tios</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="">
              <label class="form-check-label ms-2" for="">Primos</label>
            </div>
          </div>
        </div>

        <div class="form-group d-flex">
          <div class="row">
            <div class="col d-flex align-items-center">
              <label class="col-form-label">Infarto:</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="">
              <label class="form-check-label ms-2" for="">Irmãos</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="">
              <label class="form-check-label ms-2" for="">Pais</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="">
              <label class="form-check-label ms-2" for="">Avós</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="">
              <label class="form-check-label ms-2" for="">Tios</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="">
              <label class="form-check-label ms-2" for="">Primos</label>
            </div>
          </div>
        </div>

        <!-- Doenças Dislipidêmicas -->
        <h6 class="mt-5 mb-3"><b>● Doenças Dislipidêmicas</b></h6>

        <div class="form-group d-flex">
          <div class="row">
            <div class="col d-flex align-items-center">
              <label class="col-form-label">Hipercolesterolemia (colesterol alto):</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="">
              <label class="form-check-label ms-2" for="">Irmãos</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="">
              <label class="form-check-label ms-2" for="">Pais</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="">
              <label class="form-check-label ms-2" for="">Avós</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="">
              <label class="form-check-label ms-2" for="">Tios</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="">
              <label class="form-check-label ms-2" for="">Primos</label>
            </div>
          </div>
        </div>

        <div class="form-group d-flex">
          <div class="row">
            <div class="col d-flex align-items-center">
              <label class="col-form-label">Hipocolesterolemia (triglicerídeos alto):</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="">
              <label class="form-check-label ms-2" for="">Irmãos</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="">
              <label class="form-check-label ms-2" for="">Pais</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="">
              <label class="form-check-label ms-2" for="">Avós</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="">
              <label class="form-check-label ms-2" for="">Tios</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="">
              <label class="form-check-label ms-2" for="">Primos</label>
            </div>
          </div>
        </div>

        <!-- Doenças Endócrinas -->
        <h6 class="mt-5 mb-3"><b>● Doenças Endócrinas</b></h6>

        <div class="form-group d-flex">
          <div class="row">
            <div class="col d-flex align-items-center">
              <label class="col-form-label">Hipertireoidismo:</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="">
              <label class="form-check-label ms-2" for="">Irmãos</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="">
              <label class="form-check-label ms-2" for="">Pais</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="">
              <label class="form-check-label ms-2" for="">Avós</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="">
              <label class="form-check-label ms-2" for="">Tios</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="">
              <label class="form-check-label ms-2" for="">Primos</label>
            </div>
          </div>
        </div>

        <div class="form-group d-flex">
          <div class="row">
            <div class="col d-flex align-items-center">
              <label class="col-form-label">Hipotireoidismo:</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="">
              <label class="form-check-label ms-2" for="">Irmãos</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="">
              <label class="form-check-label ms-2" for="">Pais</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="">
              <label class="form-check-label ms-2" for="">Avós</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="">
              <label class="form-check-label ms-2" for="">Tios</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="">
              <label class="form-check-label ms-2" for="">Primos</label>
            </div>
          </div>
        </div>

        <div class="form-group d-flex">
          <div class="row">
            <div class="col d-flex align-items-center">
              <label class="col-form-label">Diabetes:</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="">
              <label class="form-check-label ms-2" for="">Irmãos</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="">
              <label class="form-check-label ms-2" for="">Pais</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="">
              <label class="form-check-label ms-2" for="">Avós</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="">
              <label class="form-check-label ms-2" for="">Tios</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="">
              <label class="form-check-label ms-2" for="">Primos</label>
            </div>
          </div>
        </div>

        <div class="form-group d-flex">
          <div class="row">
            <div class="col d-flex align-items-center">
              <label class="col-form-label">Obesidade:</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="">
              <label class="form-check-label ms-2" for="">Irmãos</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="">
              <label class="form-check-label ms-2" for="">Pais</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="">
              <label class="form-check-label ms-2" for="">Avós</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="">
              <label class="form-check-label ms-2" for="">Tios</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="">
              <label class="form-check-label ms-2" for="">Primos</label>
            </div>
          </div>
        </div>

        <div class="form-group d-flex">
          <div class="row">
            <div class="col d-flex align-items-center">
              <label class="col-form-label">Câncer:</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="">
              <label class="form-check-label ms-2" for="">Irmãos</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="">
              <label class="form-check-label ms-2" for="">Pais</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="">
              <label class="form-check-label ms-2" for="">Avós</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="">
              <label class="form-check-label ms-2" for="">Tios</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="">
              <label class="form-check-label ms-2" for="">Primos</label>
            </div>
          </div>
        </div>

        <div class="form-group d-flex">
          <div class="row">
            <div class="col d-flex align-items-center">
              <label class="col-form-label">Outras:</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Irmãos" id="">
              <label class="form-check-label ms-2" for="">Irmãos</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Pais" id="">
              <label class="form-check-label ms-2" for="">Pais</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Avos" id="">
              <label class="form-check-label ms-2" for="">Avós</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Tios" id="">
              <label class="form-check-label ms-2" for="">Tios</label>

              <input class="form-check-input my-auto ms-2" type="checkbox" value="Primos" id="">
              <label class="form-check-label ms-2" for="">Primos</label>
            </div>
          </div>
        </div>

      </form>
    </div>

    <!-- Aba de Medicamentos -->
    <!-- <div class="tab-pane fade" id="medicamentos"> -->
    <div class="tab-pane fade" :class="{ 'show active': tabs[3].active }" id="medicamentos">
      <h5 class="text mt-5 text-primary"><b>6. MEDICAMENTOS</b></h5>
      <form>

        <!-- Medicamento 1 -->
        <h6 class="mt-4 mb-3"><b>● Medicamento 1</b></h6>

        <div class="form-group row">
          <div class="col">
            <label for="nome" class="col-form-label">Nome comercial:</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group mt-3 row">
          <div class="col">
            <label for="" class="col col-form-label">Horário de consumo:</label>
            <textarea class="form-control" id="" name="" rows="3"></textarea>
          </div>

          <div class="col">
            <label for="" class="col-form-label">Dosagem:</label>
            <input type="text" class="form-control" />
          </div>

          <div class="col">
            <label for="" class="col-form-label">Frequência:</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <!-- Medicamento 2 -->
        <h6 class="mt-5 mb-3"><b>● Medicamento 2</b></h6>

        <div class="form-group row">
          <div class="col">
            <label for="" class="col-form-label">Nome comercial:</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group mt-3 row">
          <div class="col">
            <label for="" class="col col-form-label">Horário de consumo:</label>
            <textarea class="form-control" id="" name="" rows="3"></textarea>
          </div>

          <div class="col">
            <label for="" class="col-form-label">Dosagem:</label>
            <input type="text" class="form-control" />
          </div>

          <div class="col">
            <label for="" class="col-form-label">Frequência:</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <!-- Medicamento 3 -->
        <h6 class="mt-5 mb-3"><b>● Medicamento 3</b></h6>

        <div class="form-group row">
          <div class="col">
            <label for="" class="col-form-label">Nome comercial:</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group mt-3 row">
          <div class="col">
            <label for="" class="col col-form-label">Horário de consumo:</label>
            <textarea class="form-control" id="" name="" rows="3"></textarea>
          </div>

          <div class="col">
            <label for="" class="col-form-label">Dosagem:</label>
            <input type="text" class="form-control" />
          </div>

          <div class="col">
            <label for="" class="col-form-label">Frequência:</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <!-- Medicamento 4 -->
        <h6 class="mt-5 mb-3"><b>● Medicamento 4</b></h6>

        <div class="form-group row">
          <div class="col">
            <label for="nome" class="col-form-label">Nome comercial:</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group mt-3 row">
          <div class="col">
            <label for="" class="col col-form-label">Horário de consumo:</label>
            <textarea class="form-control" id="" name="" rows="3"></textarea>
          </div>

          <div class="col">
            <label for="" class="col-form-label">Dosagem:</label>
            <input type="text" class="form-control" />
          </div>

          <div class="col">
            <label for="" class="col-form-label">Frequência:</label>
            <input type="text" class="form-control" />
          </div>
        </div>

      </form>
    </div>

    <!-- Aba de Anamnese -->
    <!-- <div class="tab-pane fade" id="anamnese"> -->
    <div class="tab-pane fade" :class="{ 'show active': tabs[4].active }" id="anamnese">
      <h5 class="text mt-5 text-primary"><b>7. ANAMNESE</b></h5>
      <form>

        <!-- Sobre o paciente -->
        <h6 class="mt-4 mb-3"><b>● Sobre o paciente</b></h6>

        <div class="form-group mt-3 d-flex">
          <div class="row">
            <div class="col d-flex align-items-center">
              <label class="col-form-label">Tentativa anterior de dieta:</label>

              <div class="form-check form-check-inline ms-2">
                <input class="form-check-input " type="radio" name="" id="" value="">
                <label class="form-check-label " for="">Sim</label>
              </div>

              <div class="form-check form-check-inline">
                <input class="form-check-input " type="radio" name="" id="" value="">
                <label class="form-check-label " for="">Não</label>
              </div>
            </div>
          </div>
        </div>

        <div class="form-group d-flex">
          <div class="row">
            <div class="col d-flex align-items-center">
              <label class="col-form-label">Já usou medicamentos para emagrecer:</label>

              <div class="form-check form-check-inline ms-2">
                <input class="form-check-input " type="radio" name="" id="" value="">
                <label class="form-check-label " for="">Sim</label>
              </div>

              <div class="form-check form-check-inline">
                <input class="form-check-input " type="radio" name="" id="" value="">
                <label class="form-check-label " for="">Não</label>
              </div>
            </div>
          </div>
        </div>

        <div class="form-group d-flex">
          <div class="row">
            <div class="col d-flex align-items-center">
              <label class="col-form-label">Alterações corporais durante a vida (efeito sanfona):</label>

              <div class="form-check form-check-inline ms-2">
                <input class="form-check-input " type="radio" name="" id="" value="">
                <label class="form-check-label " for="">Sim</label>
              </div>

              <div class="form-check form-check-inline">
                <input class="form-check-input " type="radio" name="" id="" value="">
                <label class="form-check-label " for="">Não</label>
              </div>
            </div>
          </div>
        </div>

        <!-- Preferências alimentares -->
        <h6 class="mt-5 mb-3"><b>● Preferências alimentares</b></h6>
        <div class="form-group mt-3 row">
          <div class="col">
            <label for="celular" class="col-form-label">Período com mais fome:</label>
            <textarea class="form-control" id="" name="" rows="3"></textarea>
          </div>

          <div class="col">
            <label for="celular" class="col-form-label">Belisca algum alimento (durante o dia):</label>
            <textarea class="form-control" id="" name="" rows="3"></textarea>
          </div>
        </div>

        <div class="form-group mt-3 row">
          <div class="col">
            <label for="celular" class="col-form-label">Produtos light ou diet:</label>
            <textarea class="form-control" id="" name="" rows="3"></textarea>
          </div>

          <div class="col">
            <label for="celular" class="col-form-label">Doces e sobremesas:</label>
            <textarea class="form-control" id="" name="" rows="3"></textarea>
          </div>
        </div>

        <div class="form-group mt-3 row">
          <div class="col">
            <label for="celular" class="col-form-label">Intolerância ou alergia alimentar:</label>
            <textarea class="form-control" id="" name="" rows="3"></textarea>
          </div>

          <div class="col">
            <label for="celular" class="col-form-label">Aversão alimentar:</label>
            <textarea class="form-control" id="" name="" rows="3"></textarea>
          </div>
        </div>

        <!-- Hábitos gerais -->
        <h6 class="mt-5 mb-3"><b>● Hábitos gerais</b></h6>

        <div class="form-group row">
          <div class="col-6">
            <label for="celular" class="col-form-label">Tempo de tela para lazer (horas):</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <!-- Fumante -->
        <div class="form-group mt-3 d-flex">
          <div class="row">
            <div class="col d-flex align-items-center">
              <label class="col-form-label">Fuma:</label>

              <div class="form-check form-check-inline ms-2">
                <input class="form-check-input " type="radio" name="" id="" value="">
                <label class="form-check-label " for="">Sim</label>
              </div>

              <div class="form-check form-check-inline">
                <input class="form-check-input " type="radio" name="" id="" value="">
                <label class="form-check-label " for="">Não</label>
              </div>

            </div>
          </div>
        </div>

        <div class="form-group row">
          <div class="col">
            <label for="celular" class="col-form-label">Tipo:</label>
            <input type="text" class="form-control" />
          </div>

          <div class="col-3">
            <label for="email" class="col-form-label">Quantidade:</label>
            <input type="text" class="form-control" />
          </div>

          <div class="col">
            <label for="email" class="col-form-label">Frequência:</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <!-- Bebida -->
        <div class="form-group d-flex mt-4">
          <div class="row">
            <div class="col d-flex align-items-center">
              <label class="col-form-label">Bebe:</label>

              <div class="form-check form-check-inline ms-2">
                <input class="form-check-input " type="radio" name="" id="" value="">
                <label class="form-check-label " for="">Sim</label>
              </div>

              <div class="form-check form-check-inline">
                <input class="form-check-input " type="radio" name="" id="" value="">
                <label class="form-check-label " for="">Não</label>
              </div>

            </div>
          </div>
        </div>

        <div class="form-group row">
          <div class="col">
            <label for="celular" class="col-form-label">Tipo:</label>
            <input type="text" class="form-control" />
          </div>

          <div class="col-3">
            <label for="email" class="col-form-label">Quantidade:</label>
            <input type="text" class="form-control" />
          </div>

          <div class="col">
            <label for="email" class="col-form-label">Frequência:</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group d-flex mt-4">
          <div class="row">
            <div class="col d-flex align-items-center">
              <label class="col-form-label">Exercícios:</label>

              <div class="form-check form-check-inline ms-2">
                <input class="form-check-input " type="radio" name="" id="" value="">
                <label class="form-check-label " for="">Sim</label>
              </div>

              <div class="form-check form-check-inline">
                <input class="form-check-input " type="radio" name="" id="" value="">
                <label class="form-check-label " for="">Não</label>
              </div>

            </div>
          </div>
        </div>

        <div class="form-group row">
          <div class="col">
            <label for="" class="col-form-label">Tipo:</label>
            <input type="text" class="form-control" />
          </div>

          <div class="col">
            <label for="" class="col-form-label">Horário:</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <div class="col">
            <label for="" class="col-form-label">Duração:</label>
            <input type="text" class="form-control" />
          </div>

          <div class="col">
            <label for="" class="col-form-label">Frequência:</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <!-- Ingestão de Água -->
        <h6 class="mt-5 mb-3"><b>● Ingestão de Água</b></h6>
        <div class="form-group row mt-4">
          <div class="col">
            <label for="" class="col col-form-label">Meio de consumo:</label>
            <select class="form-select" id="">
              <option value="Copo">Copos, canecas ou xícaras</option>
              <option value="Garrafa">Garrafas ou garrafinhas</option>
            </select>
          </div>

          <div class="col">
            <label for="" class="col-form-label">Consumo total:</label>
            <textarea class="form-control" id="" name="" rows="3"></textarea>
          </div>
        </div>

        <!-- Sono -->
        <h6 class="mt-5 mb-3"><b>● Sono</b></h6>
        <div class="form-group row mt-4">
          <div class="col">
            <label for="celular" class="col-form-label">Horário que dorme:</label>
            <input type="text" class="form-control" />
          </div>

          <div class="col">
            <label for="celular" class="col-form-label">Horário que acorda:</label>
            <input type="text" class="form-control" />
          </div>

          <div class="col">
            <label for="celular" class="col-form-label">Horas de sono:</label>
            <input type="text" class="form-control" />
          </div>
        </div>
      </form>
    </div>

    <!-- Aba de Refeições -->
    <!-- <div class="tab-pane fade" id="refeicoes"> -->
    <div class="tab-pane fade" :class="{ 'show active': tabs[5].active }" id="refeicoes">
      <h5 class="text mt-5 text-primary"><b>8. REFEIÇÕES</b></h5>
      <form>
        <!-- Refeições -->
        <div class="form-group row">
          <div class="col-4">
            <label for="nome" class="col-form-label">Nº de refeições diárias:</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <!-- Café da manhã -->
        <h6 class="mt-5 mb-3"><b>● Café da Manhã</b></h6>
        <div class="form-group mt-3 row">
          <div class="col">
            <label for="celular" class="col-form-label">Local:</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col">
            <label for="celular" class="col-form-label">Quem prepara:</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col">
            <label for="celular" class="col-form-label">Qual o óleo/gordura:</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <!-- Lanche da Manhã -->
        <h6 class="mt-5 mb-3"><b>● Lanche da Manhã</b></h6>
        <div class="form-group mt-3 row">
          <div class="col">
            <label for="" class="col-form-label">Local:</label>
            <input type="text" class="form-control" id="" name="" />
          </div>
          <div class="col">
            <label for="" class="col-form-label">Quem prepara:</label>
            <input type="text" class="form-control" id="" name="" />
          </div>
          <div class="col">
            <label for="" class="col-form-label">Qual o óleo/gordura:</label>
            <input type="text" class="form-control" id="" name="" />
          </div>
        </div>

        <!-- Almoço -->
        <h6 class="mt-5 mb-3"><b>● Almoço</b></h6>
        <div class="form-group mt-3 row">
          <div class="col">
            <label for="" class="col-form-label">Local:</label>
            <input type="text" class="form-control" id="" name="" />
          </div>
          <div class="col">
            <label for="" class="col-form-label">Quem prepara:</label>
            <input type="text" class="form-control" id="" name="" />
          </div>
          <div class="col">
            <label for="" class="col-form-label">Qual o óleo/gordura:</label>
            <input type="text" class="form-control" id="" name="" />
          </div>
        </div>

        <!-- Lanche da Tarde -->
        <h6 class="mt-5 mb-3"><b>● Lanche da Tarde</b></h6>
        <div class="form-group mt-3 row">
          <div class="col">
            <label for="" class="col-form-label">Local:</label>
            <input type="text" class="form-control" id="" name="" />
          </div>
          <div class="col">
            <label for="" class="col-form-label">Quem prepara:</label>
            <input type="text" class="form-control" id="" name="" />
          </div>
          <div class="col">
            <label for="" class="col-form-label">Qual o óleo/gordura:</label>
            <input type="text" class="form-control" id="" name="" />
          </div>
        </div>

        <!-- Jantar -->
        <h6 class="mt-5 mb-3"><b>● Jantar</b></h6>
        <div class="form-group mt-3 row">
          <div class="col">
            <label for="" class="col-form-label">Local:</label>
            <input type="text" class="form-control" id="" name="" />
          </div>
          <div class="col">
            <label for="" class="col-form-label">Quem prepara:</label>
            <input type="text" class="form-control" id="" name="" />
          </div>
          <div class="col">
            <label for="" class="col-form-label">Qual o óleo/gordura:</label>
            <input type="text" class="form-control" id="" name="" />
          </div>
        </div>

        <!-- Ceia -->
        <h6 class="mt-5 mb-3"><b>● Ceia</b></h6>
        <div class="form-group mt-3 row">
          <div class="col">
            <label for="" class="col-form-label">Local:</label>
            <input type="text" class="form-control" id="" name="" />
          </div>
          <div class="col">
            <label for="" class="col-form-label">Quem prepara:</label>
            <input type="text" class="form-control" id="" name="" />
          </div>
          <div class="col">
            <label for="" class="col-form-label">Qual o óleo/gordura:</label>
            <input type="text" class="form-control" id="" name="" />
          </div>
        </div>

      </form>
    </div>

    <div class="form-group mt-3 " style="text-align: end;">
      <button type="button" class="btn btn-outline-secondary" @click="previousTab">Anterior</button>
      <button type="button" class="btn btn-primary ms-2" @click="nextTab">Próximo</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "CadastroPreProntuario",
  data() {
    return {
      tabs: [
        { label: 'Dados Pessoais', id: 'dadosPessoais', active: true },
        { label: 'História Pessoal', id: 'historicoPessoal', active: false },
        { label: 'História Familiar', id: 'historicoFamiliar', active: false },
        { label: 'Medicamentos', id: 'medicamentos', active: false },
        { label: 'Anamnese', id: 'anamnese', active: false },
        { label: 'Refeições', id: 'refeicoes', active: false },
      ],
    };
  },
  methods: {
    enviar(){
      alert('Enviado com sucesso!');
      this.$router.push("/alunos-funcionarios");
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    changeTab(index) {
      this.tabs.forEach((tab, tabIndex) => {
        tab.active = index === tabIndex;
      });
    },
    previousTab() {
      const currentIndex = this.tabs.findIndex((tab) => tab.active);
      const newIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
      this.changeTab(newIndex);
      this.scrollToTop();
    },
    nextTab() {
      const currentIndex = this.tabs.findIndex((tab) => tab.active);
      const newIndex = currentIndex < this.tabs.length - 1 ? currentIndex + 1 : currentIndex;
      this.changeTab(newIndex);
      this.scrollToTop();
    },
  },
};
</script>