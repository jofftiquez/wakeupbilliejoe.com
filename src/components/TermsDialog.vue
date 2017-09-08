<template lang="pug">
  v-app(dark)
    v-dialog(v-model="dialog2")
      v-card
        v-card-row
          h1 Terms
</template>

<script>
  export default {
    props: ['dialog'],
    data() {
      return {
        dialog2: this.dialog
      }
    },
    methods: {
      acceptTerms() {
        this.$emit('acceptTerms', {dialog:false, termsAccepted: false})
      }
    },
    watch: {
      dialog(val) {
        this.dialog2 = val;
      },
      dialog2(val) {
        if (!val) {
          this.$emit('close', {dialog:false, termsAccepted: false});
        }
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