class HistoriaFamiliar {
    constructor() {
        this.cardiopatia = {
            irmaosCardiopatia: false,
            paisCardiopatia: false,
            avosCardiopatia: false,
            tiosCardiopatia: false,
            primosCardiopatia: false,
        };

        this.hipertensao = {
            irmaosHipertensao: false,
            paisHipertensao: false,
            avosHipertensao: false,
            tiosHipertensao: false,
            primosHipertensao: false,
        };

        this.avc = {
            irmaosAVC: false,
            paisAVC: false,
            avosAVC: false,
            tiosAVC: false,
            primosAVC: false,
        };

        this.infarto = {
            irmaosInfarto: false,
            paisInfarto: false,
            avosInfarto: false,
            tiosInfarto: false,
            primosInfarto: false,
        };

        this.hipercolesterolemia = {
            irmaosHipercolesterolemia: false,
            paisHipercolesterolemia: false,
            avosHipercolesterolemia: false,
            tiosHipercolesterolemia: false,
            primosHipercolesterolemia: false,
        };

        this.hipocolesterolemia = {
            irmaosHipocolesterolemia: false,
            paisHipocolesterolemia: false,
            avosHipocolesterolemia: false,
            tiosHipocolesterolemia: false,
            primosHipocolesterolemia: false,
        };

        this.hipertireoidismo = {
            irmaosHipertireoidismo: false,
            paisHipertireoidismo: false,
            avosHipertireoidismo: false,
            tiosHipertireoidismo: false,
            primosHipertireoidismo: false,
        };

        this.hipotireoidismo = {
            irmaosHipotireoidismo: false,
            paisHipotireoidismo: false,
            avosHipotireoidismo: false,
            tiosHipotireoidismo: false,
            primosHipotireoidismo: false,
        };

        this.diabetes = {
            irmaosDiabetes: false,
            paisDiabetes: false,
            avosDiabetes: false,
            tiosDiabetes: false,
            primosDiabetes: false,
        };

        this.obesidade = {
            irmaosObesidade: false,
            paisObesidade: false,
            avosObesidade: false,
            tiosObesidade: false,
            primosObesidade: false,
        };

        this.cancer = {
            irmaosCancer: false,
            paisCancer: false,
            avosCancer: false,
            tiosCancer: false,
            primosCancer: false,
            doencaCancer: false,
        };

        this.outras = {
            doencaOutras: "",
            irmaosOutras: false,
            paisOutras: false,
            avosOutras: false,
            tiosOutras: false,
            primosOutras: false,
        };
    }
}

// module.exports = HistoriaFamiliar;
export default HistoriaFamiliar;