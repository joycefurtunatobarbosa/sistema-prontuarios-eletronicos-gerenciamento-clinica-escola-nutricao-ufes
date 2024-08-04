class DadosAntropometricos {
    constructor() {
        this.data = "";
        this.gcBia = "";
        this.dum = "";
        this.peso = "";
        this.pct = "";
        this.massaMagra = "";
        this.altura = "";
        this.pcb = "";
        this.massaMuscularEsqueletica = "";
        this.pcse = "";
        this.massaGordura = "";
        this.pcsi = "";
        this.agua = "";
        this.ccAparente = "";
        this.proteina = "";
        this.ccMedia = "";
        this.mineral = "";
        this.visceral = "";
        this.cb = "";

        this.imc = {
            valor: 0,
            classificacao: ""
        },
        this.rce = {
            valor: 0,
            classificacao: ""
        },
        this.cmb = {
            valor: 0,
            classificacao: ""
        },
        this.somaPregas = {
            valor: 0,
            classificacao: ""
        },
        this.gc = {
            valor: 0,
            classificacao: ""
        }
    }
}

export default DadosAntropometricos;