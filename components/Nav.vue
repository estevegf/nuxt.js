<template>
  <nav class="fixed-top">
    <div class="wide-screen flex-nav">
      <div>
        <nuxt-link class="nav-logo " :to="{ name: 'index' }">
          <img src="/img/esteve-logo.svg" height="40" alt="esteve_logo" />
        </nuxt-link>
      </div>
      <ul>
        <li>
          <nuxt-link class="link-hover" :to="{ name: 'education' }">
            <img
              class="icon-nav"
              src="/img/icono-education.svg"
              height="18"
              alt="education"
            />
            EDUCATION
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
  nav {
    padding: 0 1em;
    background: white;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }

  .flex-nav {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
  }

  .nav-logo {
    display: inline-block;
    margin-right: 1em;
    padding: 6px 0 2px 0;
  }

  ul {
    display: flex;
    width: auto;
    margin-left: auto;
    list-style: none;
  }

  li {
    margin: 0 1em;
  }

  li a {
    color: black;
    text-decoration: none;
  }

  .icon-nav {
    margin-right: 5px;
  }

  .link-hover {
    display: flex;
  }

  .link-hover:hover {
    opacity: 0.6;
  }
</style>
