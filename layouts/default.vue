<template>
  <div>
    <header>
      <Nav class="container" />
    </header>
    <div>
      <nuxt />
    </div>
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>

<style>
  body {
    margin: 0;
    font-family: "Montserrat", sans-serif;
  }

  .wide-screen {
    max-width: 1100px;
    margin: 0 auto;
  }

  .bar-margin {
    margin-top: 50px;
  }

  .container {
    padding: 0 1em;
    font-size: small;
  }

  @media (min-width: 600px) {
    .container {
      padding: 0 4em !important;
      font-size: medium;
    }
  }

  @media (min-width: 800px) {
    .container {
      padding: 0 8em !important;
    }
  }

  @media (min-width: 1500px) {
    .container {
      padding: 0 14em !important;
      font-size: large;
    }
  }

  @media (min-width: 1200px) {
    .l-6 {
      width: 49.65% !important;
    }
  }

  @media (min-width: 501px) {
    .s-6 {
      width: 50% !important;
    }
  }
  .center {
    text-align: center;
  }
</style>
