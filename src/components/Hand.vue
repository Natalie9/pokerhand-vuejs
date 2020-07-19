<template>
  <div class="hand">
    <h2>{{title}}</h2>
    <div v-for="carta in mao.cartas" :key="carta.index">
      <div class="card">
        <div
          class="col-left"
          :class="{ colorred: carta.naipe == 'O' || carta.naipe == 'A' }"
        >
          {{ carta.valor }}<img :src="carta.simbolo" class="img_deck" />
        </div>
        <div class="col-center">
          <!-- <img src="../assets/game.png"> -->
          <img :src="carta.simbolo" class="img_deck" />
        </div>
        <div
          class="col-right"
          :class="{ colorred: carta.naipe == 'O' || carta.naipe == 'A' }"
        >
          <img :src="carta.simbolo" class="img_deck" />{{ carta.valor }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hand',
    props: ['mao', 'title']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hand{
  color: white;
}
</style>
