<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'app',
  data(){
    return {
    }
  },
  methods: {
    ...mapActions([
      'getUsers'
    ])
  },
  async mounted () {
    // var res = await axios.get('/api/users')
    var res = await this.getUsers()
    console.log(res)
  }
}
</script>

<style>

</style>
