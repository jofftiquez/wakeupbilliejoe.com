<template lang="pug">
  v-app#app
    router-view
</template>

<script>
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
</style>
