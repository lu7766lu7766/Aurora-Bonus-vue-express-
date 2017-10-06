<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
require('bootstrap')
require('bootstrap/dist/css/bootstrap.min.css')
import { mapActions } from 'vuex'

export default {
  name: 'app',
  data(){
    return {
    }
  },
  methods: {
    ...mapActions([
      'doLogin',
      'getSession',
    ])
  },
  async mounted () {
    // var res = await axios.get('/api/users')
    // var res = await this.getUser({ id: 1 })
    // var res = await this.getUsers({ id: 1 })
    await this.doLogin()
    console.log(await this.getSession())
    // console.log(res)
  }
}
</script>

<style>
@import url('/static/css/colors.css');
@import url('/static/css/core.min.css');
@import url('/static/css/components.min.css');
@import url('/static/css/media.css');

html body {
  background: #ccc;
}
</style>
