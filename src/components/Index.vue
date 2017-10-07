<template>
  <div class="layout">
    <div class="header">
      <!-- <div class="logo">
        <router-link :to="{ name: 'home' }">獎金計算後台</router-link>
      </div>
      <div class="nav">

      </div> -->
      <mu-appbar title="獎金計算後台">
        <mu-icon-button icon="exit_to_app" slot="right" @click="onLogout" />
      </mu-appbar>
    </div>
    <div class="content">
      <div class="content-left">
        <mu-list>
          <mu-list-item disabled title="會員管理" toggleNested>
            <mu-icon slot="left" value="account_balance"/>
            <mu-list-item title="新增會員" slot="nested" :to="{ name: 'user-add' }">
              <mu-icon slot="left" value="accessibility"/>
            </mu-list-item>
            <mu-list-item title="會員資料" slot="nested" :to="{ name: 'user-list' }">
              <mu-icon slot="left" value="account_box"/>
            </mu-list-item>
          </mu-list-item>
        </mu-list>

      </div>
      <div class="content-right">

        <div class="body">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div class="footer">
      Aurora Bonus ©2017 Created by Jac
    </div>
  </div>
</template>
<script>
import check_login from 'src/mixins/check_login'
import { mapActions } from 'vuex'
export default {
  mixins: [check_login],
  data () {
    return {
      isShowMenu:true
    }
  },
  methods: {
    ...mapActions([
      'doLogout'
    ]),
    async onLogout () {
      var res = await this.doLogout()
      if (res.code === 0) {
        this.$router.push({ name: 'login' })
      }
    }
  }
}
</script>
<style scoped>
.layout{
  background-color: rgb(236, 236, 236);
}

.header{
  background-color: #7e57c2;
}

.logo{
  font-size: 24px;
  color: white;
  display: inline-block;
  padding: 10px 20px;
}

.nav{
  display: inline-block;
  width: calc(100% - 150px);
  margin: 0 auto;
}

.tab{
  margin: 0 auto;
  width: 400px;
  background-color: rgba(0, 0, 0, 0);
}

.content{
  overflow: hidden;
  height: calc(100vh - 77px)
}

.content-left{
  width: 20%;
  float: left;
  background-color: white;
  margin-bottom: -4000px;
  padding-bottom: 4000px;
}

.content-right{
  width: 80%;
  display: inline-block;
  float: right;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0)
}

.breadcrumb{
  margin: 10px 0;
}

.body{
  background-color: white;
  border-radius: 5px;
  height: calc(100vh - 80px - 61px);
  overflow-y: auto;
}

.footer{
  padding: 20px 0;
  text-align: center;
  width: 100%;
  bottom: 0px;
}

a,a:link,a:visited{color:#222;text-decoration: none}
a:hover{color:#222;text-decoration: none;}
</style>
