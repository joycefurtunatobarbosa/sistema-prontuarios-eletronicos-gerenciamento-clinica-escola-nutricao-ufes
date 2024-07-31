class DadosPessoais {
    constructor() {
        this.nomeCompleto = "";
        this.estadoCivil = "";
        this.email = "";
        this.dataNascimento = "";
        this.idade = 0;
        this.sexo = "";
        this.endereco = {
            rua: "",
            numero: "",
            complemento: "",
            bairro: "",
            estado: "",
            cidade: "",
            cep: "",
        },
        this.aceiteTermoAutorizacao = false;
    }
}

export default DadosPessoais;
