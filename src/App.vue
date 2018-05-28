<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
require('assets/lib')
require('bootstrap')
require('bootstrap/dist/css/bootstrap.min.css')
require('orgchart/dist/js/jquery.orgchart.min.js')
require('orgchart/dist/css/jquery.orgchart.min.css')


export default {
  name: 'app',
  data(){
    return {
    }
  },
  methods: {

  },
  async mounted () {
    // var res = await axios.get('/api/users')
    // var res = await this.getUser({ id: 1 })
    // var res = await this.getUsers({ id: 1 })
    // await this.doLogin({
    //   account: 'admin',
    //   password: 'Ab12345'
    // })
    // console.log(await this.getUserDetail())
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
