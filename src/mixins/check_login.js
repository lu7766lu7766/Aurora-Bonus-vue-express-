import store from 'src/store'

var checkLogin = async (to, from, next) => {
  var user = store.state.Users.user
  if (!user.account) {
    var res = await store.dispatch('getUserDetail')
    if (res.code === 0) {
      user = res.data
      store.commit('setUser', user)
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
}

export default {
  beforeRouteEnter: checkLogin,
  beforeRouteUpdate: checkLogin
}
