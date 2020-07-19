export class Carta {
    constructor(naipe, valor, simbolo) {
        this.naipe = naipe,
        this.valor = valor,
        this.simbolo = simbolo
    }
}

export class Mao {
    constructor(...cartas){
        this.cartas = cartas
    }
}




