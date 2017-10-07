<template>
  <div>
   <mu-table v-if="total"
    :enableSelectAll="true" :multiSelectable="true"
    :selectable="true" :showCheckbox="true" @rowSelection="selectProccess">
      <mu-thead slot="header">
        <mu-tr>
          <mu-th tooltip="帳號">帳號</mu-th>
          <mu-th tooltip="姓名">姓名</mu-th>
          <mu-th tooltip="介紹人">介紹人</mu-th>
        </mu-tr>
      </mu-thead>
      <mu-tbody>
        <mu-tr v-for="(user,index) in users" :selected="user.selected">
          <mu-td>{{ user.account }}</mu-td>
          <mu-td>{{ user.name }}</mu-td>
          <mu-td>{{ user.introducer_name }}</mu-td>
        </mu-tr>
      </mu-tbody>
      <mu-tfoot slot="footer">
        <mu-tr>
          <mu-td>帳號</mu-td>
          <mu-td>姓名</mu-td>
          <mu-td>介紹人</mu-td>
        </mu-tr>
      </mu-tfoot>
    </mu-table>

    <mu-pagination v-if="isShowPagenate" :total="total" :current="page" @pageChange="onPageChange">
    </mu-pagination>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'add-user',
  data: () => ({
    users: [],
    total: 0,
    limit: 50,
    page: 1,
  }),
  methods: {
    ...mapActions([
      'getUsers'
    ]),
    async onGetUsers () {
      var res = await this.getUsers({
        limit: this.limit,
        page: this.page
      })
      if (res.code === 0) {
        this.users = res.data.users
        _.forEach(this.users, user => {
          user.selected = true
        })
        this.total = res.data.total
      }
    },
    onPageChange (newPage) {
      this.page = newPage
      this.onGetUsers()
    },
    selectProccess (selector) {
      _.forEach(this.users, (user, index) => {
        user.selected = selector.indexOf(index) > -1
      })
    }
  },
  computed: {
    isShowPagenate () {
      return this.total > this.page * this.limit
    }
  },
  async mounted () {
    this.onGetUsers()
  }
}
</script>
