<template>
  <div id="header">
    <div>
      <div class="topnav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>

        <router-link to="/randomHand">
          Random Hand
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TheHeader',
    props: {},
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topnav {
    background-color: #333;
    overflow: hidden;
    /* position: absolute; */
    width: 100%;
    margin: 0;
    padding: 0;
    --border-radius-reverse: 4px;
    padding-top: 5px;
  }

  /* Style the links inside the navigation bar */
  .topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    position: relative;
    background-color: #333;
  }

  /* Change the color of links on hover */
  .topnav a:hover {
    /* background-color: #ddd; */
    color: orangered;
  }

  /* Add a color to the active/current link */
  .topnav .router-link-exact-active {


    -webkit-border-top-left-radius: 10px;
    -webkit-border-top-right-radius: 10px;
    -moz-border-radius-topleft: 10px;
    -moz-border-radius-topright: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: rgb(21, 32, 20);
    color: white;
  }

  .topnav .router-link-exact-active:before,
  .topnav .router-link-exact-active:after {
    content: '';
    position: absolute;
    height: 10px;
    width: 20px;

    bottom: 0;
  }

  .topnav .router-link-exact-active:after {
    right: -20px;

    border-radius: 0 0 0 10px;
    -moz-border-radius: 0 0 0 10px;
    -webkit-border-radius: 0 0 0 10px;

    -webkit-box-shadow: -10px 0 0 0 rgb(21, 32, 20);
    box-shadow: -10px 0 0 0 rgb(21, 32, 20);
  }

  .topnav .router-link-exact-active:before {
    left: -20px;

    border-radius: 0 0 10px 0;
    -moz-border-radius: 0 0 10px 0;
    -webkit-border-radius: 0 0 10px 0;

    -webkit-box-shadow: 10px 0 0 0 rgb(21, 32, 20);
    box-shadow: 10px 0 0 0 rgb(21, 32, 20);
  }
</style>
