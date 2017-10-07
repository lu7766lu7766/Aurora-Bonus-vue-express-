<template>
  <section>
    <mu-sub-header>歡迎登入獎金計算系統</mu-sub-header>
    <mu-content-block>
      Hello {{ user.name }} !!
    </mu-content-block>
  </section>
</template>

<script>
export default {
  computed: {
    user () { return this.$store.state.Users.user}
  }
}
</script>
