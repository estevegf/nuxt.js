<template>
  <div>
    <Banner class="bar-margin" :image-url="educationBanner" />
    <div class="container">
      <h1>Education</h1>
      <section class="center">
        <Card
          v-for="(edu, index) in education"
          :key="index"
          :education="edu"
        />
      </section>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card'
import Banner from '~/components/Banner'
import ApiService from '~/services/ApiService'

export default {
  components: {
    Card,
    Banner
  },
  data () {
    return {
      educationBanner: '/img/banner_education-1920.webp'
    }
  },
  asyncData ({ params }) {
    return ApiService.getInfo()
      .then((res) => {
        return { education: res.data }
      })
  },
  head: {
    title: 'Education - Nuxt',
    meta: [
      { hid: 'description', name: 'description', content: 'Education page description' }
    ]
  }
}
</script>
