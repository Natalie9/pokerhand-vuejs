<template>
  <div v-on:click="click" class="button">RANDOM HAND</div>
</template>
<script>
  import { Mao } from '../components/mao.js'
  export default {
    name: 'buttomGenerateRandomHand',
    components: {},
    methods: {
      click: function() {
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
