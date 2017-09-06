<template lang="pug">
  v-app(dark)#home
    v-toolbar(transparent fixed)
      v-btn(flat to="/" primary icon) 
        v-icon arrow_back
    v-layout(column)
      v-flex(xs12 md6 offset-md3).pa-2
        h3 About
        p Inspired by Green Day's 
          em Wake me up when September ends.
        h5.mt-5 Special thanks to
        ul 
          li 
            a(href="https://vuejs.org/" target="_blank") Vue
          li 
            a(href="https://firebase.google.com/" target="_blank") Firebase by Google
          li 
            a(href="https://github.com/fareez-ahamed/countdown-vuejs" target="_blank") Countdown Vuejs
          li 
            a(href="http://time.com/4147920/rare-green-day-photos/" target="_blank") Background Image
          li 
            a(href="https://www.websitepolicies.com/" target="_blank") Website Policies
        h5.mt-5 Contribute
        ul
          li 
            a(href="https://github.com/jofftiquez/wakeupbilliejoe.com") GitHub
</template>

<style scoped>
	#home {
    padding-top: 80px;
    background-image: url('../assets/green-day-1.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
  }
</style>