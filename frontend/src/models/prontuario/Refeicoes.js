class Refeicoes{
    constructor(){
        this.qtdRefeicoes = "";
        this.cafeManha = { realiza: false, local: "", horario: "", preparador: "", oleoGordura: "" };
        this.lancheManha = { realiza: false, local: "", horario: "", preparador: "", oleoGordura: "" };
        this.almoco = { realiza: false, local: "", horario: "", preparador: "", oleoGordura: "" };
        this.lancheTarde = { realiza: false, local: "", horario: "", preparador: "", oleoGordura: "" };
        this.jantar = { realiza: false, local: "", horario: "", preparador: "", oleoGordura: "" };
        this.ceia = { realiza: false, local: "", horario: "", preparador: "", oleoGordura: "" };
    }
}

export default Refeicoes;