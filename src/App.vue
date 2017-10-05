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
      'getUser',
      'getUsers'
    ])
  },
  async mounted () {
    // var res = await axios.get('/api/users')
    // var res = await this.getUser({ id: 1 })
    var res = await this.getUsers({ id: 1 })
    console.log(res)
  }
}
</script>

<style>

</style>
