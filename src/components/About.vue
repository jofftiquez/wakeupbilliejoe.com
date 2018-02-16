<template lang="pug">
  v-app(dark)#home
    v-toolbar(transparent fixed)
      v-btn(flat to="/" primary icon) 
        v-icon arrow_back
    v-layout(column)
      v-flex(xs12 md6 offset-md3).pb-5.pt-2
        h1.titleh1 About
        p Inspired by Green Day's 
          em Wake me up when September ends.
        h2.titleh2.mt-5 Special thanks to
        ul 
          li 
            a(href="https://vuejs.org/" target="_blank") Vue 2
          li
            a(href="https://vuetifyjs.com/" target="_blank") Vuetify 0.15
          li 
            a(href="https://firebase.google.com/" target="_blank") Firebase by Google
          li 
            a(href="https://github.com/fareez-ahamed/countdown-vuejs" target="_blank") Countdown Vuejs
          li
            a(href="https://github.com/nicolasbeauvais/vue-social-sharing" target="_blank") Social Media Sharing
          li 
            a(href="http://time.com/4147920/rare-green-day-photos/" target="_blank") Background Image
          li 
            a(href="https://www.websitepolicies.com/" target="_blank") Website Policies
        h2.titleh2.mt-5 Contribute
        ul
          li 
            a(href="https://github.com/jofftiquez/wakeupbilliejoe.com" target="_blank") GitHub
        h2.titleh2.mt-5 Sponsors
        ul 
          li 
            a(href="https://www.mycure.md" target="_blank") MYCURE Inc.
</template>

<script>
  export default {
    metaInfo: {
      title: '"Wake me up when September ends" - Billie Joe Armstrong',
      titleTemplate: '%s - About',
      htmlAttrs: {
        lang: 'en',
        amp: undefined
      }
    }
  }
</script>

<style scoped>
	#home {
    padding-top: 80px;
    background-image: url('../assets/green-day-1.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed !important;
  }
</style>