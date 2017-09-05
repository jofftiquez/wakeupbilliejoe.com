<template lang="pug">
  v-layout(column)#countdown
    v-flex(xs12 md6 offset-md3)
      v-layout(row)
        v-flex(xs12 md3)
          h1(align="center").hidden-sm-and-down {{ days | two_digits }}
          h2(align="center").hidden-md-and-up {{ days | two_digits }}
          h4(align="center").hidden-sm-and-down Days
          h2(align="center").hidden-md-and-up D
        v-flex(xs12 md3)
          h1(align="center").hidden-sm-and-down {{ hours | two_digits }}
          h2(align="center").hidden-md-and-up {{ hours | two_digits }}
          h4(align="center").hidden-sm-and-down Hours
          h2(align="center").hidden-md-and-up H
        v-flex(xs12 md3)
          h1(align="center").hidden-sm-and-down {{ minutes | two_digits }}
          h2(align="center").hidden-md-and-up {{ minutes | two_digits }}
          h4(align="center").hidden-sm-and-down Minutes
          h2(align="center").hidden-md-and-up M
        v-flex(xs12 md3)
          h1(align="center").hidden-sm-and-down {{ seconds | two_digits }}
          h2(align="center").hidden-md-and-up {{ seconds | two_digits }}
          h4(align="center").hidden-sm-and-down Seconds
          h2(align="center").hidden-md-and-up S
</template>
<script>
export default {
  created() {
    setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000);
    },1000);
  },
  props : ['date'],
  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      deadline: Math.trunc((new Date(this.date)).getTime() / 1000)
    }
  },
  computed: {
    seconds() {
      return (this.deadline - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.deadline - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.deadline - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.deadline - this.now) / 60 / 60 / 24);
    }
  },
  watch: {
    now(val) {
      this.$emit('septemberEnds', true);
    }
  }
}
</script>

<style>
  #countdown {
    padding-top: 70px;
  }
</style>