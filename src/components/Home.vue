<template lang="pug">
  v-app(dark)#home
    v-progress-linear(:indeterminate="true" v-if="loading" primary).progress-top
    countdown(:date="theDay", @septemberEnds="septemberEnded")
    v-layout(column align-center)
      v-flex(p)
        p.subheading Before we wake up 
          a(href="https://twitter.com/billiejoe" target="_blank") Billie Joe Armstrong
      v-flex(p)
        v-card(v-if="isLoggedIn" hover)
          v-card-text
            v-layout(row align-center)
              v-flex(p)
                img(width="50" :src="user.photoURL").mr-2
              v-flex(p)
                small Logged in as 
                br
                strong.mr-2 {{ user.displayName }}
              v-flex(p)
                a(@click="signOut") Sign out
        v-btn(
          @click.native="wakeMeUp" 
          v-if="!isLoggedIn"
          v-tooltip:bottom="{html:'Be notified when September ends!'}"
        ).primary 
          strong Wake me up when september ends
    v-layout(column).mt-3.pa-1
      v-flex(xs12 md6 offset-md3)
        small WAKE UP LIST
    v-layout(row).pa-1
      v-flex(xs12 md6 offset-md3)
        v-btn(
          icon
          v-for="(user, index) in wakeUpList" 
          :key="index"
          width="20" 
          :style="{ 'background-image': 'url(' + (user.photoURL || '') + ')' }"
          v-tooltip:bottom="{'html': user.displayName + ' - Joined ' + user.createdFormatted }"
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
      ).share-fab.primary
        v-icon share
      v-card
        v-card-title Let the world know!&nbsp
          small (or at least your frieds)
        v-card-text
          social-sharing(url="https://wakeupbilliejoe.com" inline-template)
            div
              network(network="facebook")
                v-btn(block dark style="background-color:#3b5998") Facebook
              network(network="googleplus")
                v-btn(block dark style="background-color:#d34836") Google +
              network(network="twitter")
                v-btn(block dark style="background-color:#00aced") Twitter
              network(network="pinterest")
                v-btn(block dark style="background-color:rgb(189, 8, 28)") Pinterest
              network(network="linkedin")
                v-btn(block dark style="background-color:#0077b5") LinkedIn
              network(network="reddit")
                v-btn(block dark style="background-color:orangered") Reddit
              network(network="vk")
                v-btn(block dark style="background-color:#507299") VKontakte
              network(network="whatsapp")
                v-btn(block dark style="background-color:#1ebea5") Whatsapp
    v-footer(absolute fixed).white--text.hidden-sm-and-down
      v-layout(column)
        v-flex(xs12)
          div 
            | Made with 
            v-icon.primary--text favorite&nbsp
            | by 
            a(href="https://twitter.com/jrtiquez" target="_blank") @jrtiquez&nbsp
            |  © {{ new Date().getFullYear() }}
            router-link(to="/privacy").right Privacy Policy 
            span.right &nbsp|&nbsp 
            router-link(to="/terms").right  Terms
            span.right &nbsp|&nbsp 
            router-link(to="/about").right  About
    v-footer(absolute fixed).white--text.hidden-md-and-up
      v-layout(column)
        v-flex(xs12)
          small 
            | Made with 
            v-icon.primary--text favorite&nbsp
            | by 
            a(href="https://twitter.com/jrtiquez" target="_blank") @jrtiquez&nbsp
            |  © {{ new Date().getFullYear() }}
            router-link(to="/privacy").right Privacy Policy 
            span.right &nbsp|&nbsp 
            router-link(to="/terms").right  Terms
            span.right &nbsp|&nbsp 
            router-link(to="/about").right  About

    //- terms-dialog(dialog="termsDialog" @close="(val) => termsDialog = val.dialog")
</template>

<script>
import firebase from 'firebase';
import TermsDialog from './TermsDialog'

import {
  FB, AUTH, DB, REF
} from '../firebase'

import moment from 'moment';
import countdown from './Countdown';

export default {
  components: {
    countdown,
    TermsDialog
  },
  async created() {
    this.$store.dispatch('wakeupList/streamWakeupList');
    this.$store.dispatch('user/streamLoginStatus');
  },
  data () {
    return {
      loading: false,
      alert: true,
      termsDialog: false,
      theDay: new Date(`10/1/2018`).toISOString()
    }
  },
  computed: {
    wakeUpList: {
      get() {
        return this.$store.getters['wakeupList/wakeupList'];
      }
    },
    isLoggedIn: {
      get() {
        const x = this.$store.getters['user/isLoggedIn'];
        return this.$store.getters['user/isLoggedIn'];
      }
    },
    user: {
      get() {
        return this.$store.getters['user/user'];
      }
    }
  },
  methods: {
	  septemberEnded() {
      // TODO: 
      // send email
	  },
    async wakeMeUp() {
      try {
        this.loading = true;
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

        const result = await AUTH.signInWithPopup(provider);

        const token = result.credential.accessToken;
        const user = result.user;

        await this.$store.dispatch('wakeupList/addToWakeupList', user);

        this.loading = false;
      } catch(e) {
        this.loading = false;
        console.log(e);
      }
    },
    async signOut() {
      this.loading = true;
      await AUTH.signOut()
      this.loading = false;
    }
  }
}
</script>

<style scoped>
/*http://time.com/4147920/rare-green-day-photos/*/

#home {
  /*padding-top: 60px;*/
  background-image: url('../assets/green-day-1.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed !important;
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
  text-decoration: none;
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
}

.wakeup-item {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.progress-top {
  margin: 0;
  padding: 0;
}

#alert {
  margin: 0;
  /*padding: 0; */
}

</style>
