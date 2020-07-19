<template>
  <div class="randomHand">
    <div class="grid">
      
      <hand :mao="mao1" title="HAND ONE"></hand>

      <buttomGenerateRandomHand v-if="show"></buttomGenerateRandomHand>
      <div v-on:click="cli" class="button">RANDOM HAND</div>

      <hand :mao="mao2" title="HAND TWO"></hand>

      <Hand></Hand>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import { Carta } from '../components/mao.js'
  import { Mao } from '../components/mao.js'
  import hand from '@/components/Hand.vue'
  import buttomGenerateRandomHand from '@/components/ButtomGenerateRandomHand.vue'

  export default {
    name: 'randomHand',
    components: {
      hand,
      buttomGenerateRandomHand,
    },
    data() {
      return {
        show:false,
        message: 'Hello Vue!',
        cartas: [],
        cartas_selecionadas: [],
        mao1: [],
        mao2: [],
      }
    },
    created () {
      //gera cartas
      let ass = []
      let ouros = []
      let paus = []
      let espada = []
      for (let i = 0; i < 13; i++) {
        ass[i] = new Carta('A', i + 2, require('@/assets/heart.png'))
        ouros[i] = new Carta('O', i + 2, require('@/assets/diamont.png'))
        paus[i] = new Carta('P', i + 2, require('@/assets/spads.png'))
        espada[i] = new Carta('E', i + 2, require('@/assets/game.png'))
      }
      let ct = [...ass, ...espada, ...ouros, ...paus]
      this.cartas = ct
      //gera id unico
      this.cartas = ct.map((carta, index) => {
        carta.id = index + 1
        return carta
      })
      this.gera_mao_aleatoria()
      this.mao1 = this.gera_mao_aleatoria()

      this.mao2 = this.gera_mao_aleatoria()
    },
    methods: {
      cli: function() {
        this.mao1 = this.gera_mao_aleatoria()
        this.mao2 = this.gera_mao_aleatoria()
      },
      gera_mao_aleatoria: function() {
        let nuns = []
        let alt = null
        while (nuns.length < 5) {
          alt = Math.floor(Math.random() * (52 - 1)) + 1
          //gerando mãos unicas, sem cartas repetidas
          if (
            nuns.includes(this.cartas[alt]) === false &&
            this.cartas_selecionadas.includes(this.cartas[alt]) === false
          ) {
            nuns.push(this.cartas[alt])
            console.log(nuns)
          }
        }
        this.cartas_selecionadas = [...this.cartas_selecionadas, ...nuns]

        return new Mao(...nuns)
      },
    },
  }
</script>
<style>
  body {
    background-color: rgb(21, 32, 20);
    padding: 0px;
    margin: 0px;
    font-size: 0.7rem;
    font-family: 'Baloo Da 2', cursive;
 
  }

  .card {
    border: 1px grey solid;
    background: white;
    border-radius: 5px;
    width: 130px;
    padding: 5px;
    height: 29vh;
    text-align: center;
    font-size: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    box-shadow: 10px 5px 5px black;
    color: black;
  }

  .grid {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
    place-items: center;
    height: 100vh;
  }

  .button {
    background-color: brown;
    color: cornsilk;
    padding: 1em;
    font-size: 1.2em;
    border-radius: 10px;
    cursor: default;
    box-shadow: 0px 5px 5px black;
  }
  .hand {
    width: 100%;
    display: grid;
    place-items: center;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
  .img_deck {
    width: 90%;
  }

  .col-right {
    align-self: flex-end;
  }
  .col-center {
    align-self: center;
  }

  .colorred {
    color: red;
  }
  h2 {
    color: cornsilk;
  }

  
</style>
