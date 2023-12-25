class DadosPessoais {
    constructor() {
        this.nomeCompleto = "";
        this.estadoCivil = "";
        this.email = "";
        this.dataNascimento = "";
        this.sexo = "";
        this.endereco = {
            rua: "",
            numero: "",
            complemento: "",
            bairro: "",
            estado: "",
            cidade: "",
            cep: "",
        }
    }
}

export default DadosPessoais;
