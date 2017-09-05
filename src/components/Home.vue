<template lang="pug">
  v-app(dark)#home
    countdown(date="10-01-2017", @septemberEnds="septemberEnded")
    v-layout(column align-center)
      v-flex(p)
        p Before we wake up Billie Joe Armstrong
      v-flex(p)
        v-btn.wakemeup-btn Wake me up when september ends
    v-layout(column).mt-3
      v-flex(xs12 md6 offset-md3)
        small Wake up list
    v-layout(row)
      v-flex(xs12 md6 offset-md3)
        v-btn(
          icon
          v-for="x in [0,1,2,3,4,6]" 
          width="20" 
          style="background-image:url('https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg')"
          v-tooltip:bottom="{html:'Jofferson Tiquez'}"
        ).ma-1.wakeup-item
    v-dialog
      v-btn(
        dark
        fab
        fixed
        bottom
        right
        style="z-index: 9999999"
        slot="activator"
      ).share-fab
        v-icon share
      v-card
        v-card-text
          v-layout(column)
            v-flex(xs12)
              v-btn(block dark).fb-btn Facebook
              v-btn(block dark).tweet-btn Twitter
              v-btn(block dark).gplus-btn Google+
    v-footer(absolute).white--text
      div Made with 
        v-icon.red--text favorite&nbsp
        | favorite by 
        a(href="https://twitter.com/jrtiquez") @jrtiquez&nbsp
        | © {{ new Date().getFullYear() }}
</template>

<script>

import moment from 'moment';
import countdown from './Countdown';

export default {
  components: {countdown},
  data () {
    return {
      items: [
        { active: true, title: 'Jason Oner', avatar: '/static/doc-images/lists/1.jpg' },
        { active: true, title: 'Ranee Carlson', avatar: '/static/doc-images/lists/2.jpg' },
        { title: 'Cindy Baker', avatar: '/static/doc-images/lists/3.jpg' },
        { title: 'Ali Connors', avatar: '/static/doc-images/lists/4.jpg' },
      ],
    }
  },
  methods: {
	  septemberEnded() {
	  	// do stuff
	  }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home {
  padding-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.wakemeup-btn {
  background-color: #42b983 !important;
}

.tweet-btn {
  background-color: #00aced !important;
}

.fb-btn {
  background-color: #3b5998 !important;
}

.gplus-btn {
  background-color: #d34836 !important;
}

.share-fab {
  bottom: 50px;
  background-color: #42b983 !important;
}

.wakeup-item {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
