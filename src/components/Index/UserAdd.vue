<template>
  <div>
    <mu-sub-header>新增會員</mu-sub-header>
    <div style="padding: 0 20px;">
      <mu-text-field label="帳號*" labelFloat v-model="account"/><br/>
      <mu-text-field label="姓名*" labelFloat v-model="name"/><br/>
      <mu-text-field label="密碼" labelFloat v-model="password"/><br/>
      <mu-text-field label="加入日期" labelFloat v-model="join"/><br/>
      <mu-select-field v-model="introducer" label="介紹人">
        <mu-menu-item value="" title="無" />
        <mu-menu-item v-for="user,index in users" :value="user.account" :title="user.name" />
      </mu-select-field><br>

      <mu-raised-button label="送出" class="demo-raised-button" primary @click="onSubmit"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'add-user',
  data: () => ({
    users: [],
    account: '',
    name: '',
    password: '',
    join: new Date().Format('Y-m-d'),
    introducer: ''
  }),
  methods: {
    ...mapActions([
      'getUsers',
      'addUser'
    ]),
    async onSubmit () {
      const { account, name, password, introducer } = this
      var res = this.addUser({
        account, name, password, introducer
      })
      if (res.code === 0) {
        alert('新增成功')
        // this.$router.push({ name: 'user-list' })
      } else {
        alert('新增失敗')
      }
    }
  },
  async mounted () {
    var res = await this.getUsers()
    if (res.code === 0) {
      this.users = res.data
    }
  }
}
</script>
