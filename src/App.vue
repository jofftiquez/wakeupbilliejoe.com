<template lang="pug">
  v-app#app
    router-view
</template>

<script>
import Fingerprint2 from 'fingerprintjs2';
import {
  REF
} from './firebase'

new Fingerprint2().get(function(result, components){
  REF.child('visitors')
    .child(result)
    .set({
      lastVisit: new Date().getTime(),
      components: components
    })
});

export default {
  name: 'app'
}
</script>

<style lang="stylus">
  @import '~vuetify/src/stylus/settings/_colors';

  $theme := {
    primary: #c53738
    accent: $red.accent-2
    secondary: $grey.darken-1
    info: $blue.darken-1
    warning: $amber.darken-1
    error: $red.darken-1
    success: $green.darken-1
  }

  /* vuetify theme */
  @import '~vuetify/src/stylus/main';
</style>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: gray;
}
.titleh1 {
  font-size: 40px;
}

.titleh2 {
  font-size: 25px;
}
</style>
