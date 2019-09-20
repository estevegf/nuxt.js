<template>
  <div class="card">
    <div class="s-6 card-left ratio-container">
      <img
        :src="education.img.lqip"
        :data-src="education.img.x400"
        :data-srcset="`${education.img.x200} 200w, ${education.img.x400} 400w, ${education.img.x800} 800w`"
        data-sizes="(max-width: 350px) 200px, (min-width: 1200px) 800px, 400px"
        class="card-image lazyload blur-up"
        :alt="education.school"
      />
      <!-- noscript pattern -->
      <noscript inline-template>
        <img :src="education.img.x400" class="card-image" width="100%" />
      </noscript>
    </div>
    <div class="s-6 card-right">
      <div class="information">
        <p>
          <strong>{{ education.school }}</strong>
        </p>
        <p>{{ education.description }}</p>
        <p>{{ education.age }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    education: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .card {
    display: inline-flex;
    width: 100%;
    align-items: center;
    margin: 0 0 2em 0;
    background-color: gainsboro;
    box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.16),
    0 2px 10px 0 rgba(0, 0, 0, 0.12);
    border-radius: 5px;
  }

  .card-left {
    display: block;
  }

  .information {
    margin: 0.6em;
  }

  .card-image {
    border-radius: 5px 0 0 5px;
  }

  @media (max-width: 500px) {
    .card {
      display: grid;
    }

    .card-image {
      border-radius: 5px 5px 0 0;
    }
  }

  .blur-up {
    -webkit-filter: blur(1px);
    filter: blur(1px);
    transition: filter 400ms, -webkit-filter 400ms;
  }

  .blur-up.lazyloaded {
    -webkit-filter: blur(0);
    filter: blur(0);
  }

  .ratio-container {
    position: relative;
  }
  .ratio-container:after {
    content: '';
    display: block;
    height: 0;
    width: 100%;
    /* 3:2 = 66.66% = calc(2 / 3 * 100%) */
    padding-bottom: 66.66%;
  }
  .ratio-container > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
