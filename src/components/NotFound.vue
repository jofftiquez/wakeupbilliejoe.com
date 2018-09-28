<template lang="pug">
  v-app(dark)#home
    v-toolbar(transparent fixed)
      v-btn(flat to="/" primary icon) 
        v-icon arrow_back
    v-layout(column)
      v-flex(xs12 md6 offset-md3).pb-5.pt-2
        h1(align="center").titleh1 Summer Not Found
</template>

<script>
  export default {
    metaInfo: {
      title: '"Wake me up when September ends" - Billie Joe Armstrong',
      titleTemplate: '%s - Page Not Found!',
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