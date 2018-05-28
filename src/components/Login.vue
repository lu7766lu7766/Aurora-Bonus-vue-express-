<template>
  <div class="page-container">

    <!-- Page content -->
    <div class="page-content">

      <!-- Main content -->
      <div class="content-wrapper">

        <!-- Content area -->
        <div class="content">

          <!-- Simple login form -->
          <div class="row">
            <div class="col-sm-4 col-sm-offset-4">
              <form>
                <div class="panel panel-body login-form">
                  <div class="text-center">
                    <div class="icon-object border-slate-300 text-slate-300">
                      <i class="glyphicon glyphicon-user"></i>
                    </div>
                    <h5 class="content-group">管理後台
                      <small class="display-block">請輸入帳號跟密碼</small>
                    </h5>
                  </div>

                  <div class="form-group has-feedback has-feedback-left">
                    <input type="text" class="form-control" placeholder="Username" v-model="account" @keyup.13="onLogin">
                    <div class="form-control-feedback">
                      <i class="icon-user text-muted"></i>
                    </div>
                  </div>

                  <div class="form-group has-feedback has-feedback-left">
                    <input type="password" class="form-control" placeholder="Password" v-model="password" @keyup.13="onLogin">
                    <div class="form-control-feedback">
                      <i class="icon-lock2 text-muted"></i>
                    </div>
                  </div>

                  <div class="form-group">
                    <button type="button" class="btn btn-primary btn-block" @click="onLogin">登入
                      <i class="icon-circle-right2 position-right"></i>
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>
          <!-- /simple login form -->

        </div>
        <!-- /content area -->

      </div>
      <!-- /main content -->

    </div>
    <!-- /page content -->
    <div id="chart-container"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data() {
    return {
      account: 'admin',
      password: 'Ab12345'
    }
  },
  methods: {
    ...mapActions([
      'doLogin',
      'getUserDetail',
    ]),
    async onLogin() {
      const { account, password } = this
      var res = await this.doLogin({
        account, password
      })
      if (res.code === 0) {
        var user = await this.getUserDetail()
        if (user.code === 0) {
          this.$store.commit('setUser', user.data)
          // alert('login success')
          this.$router.push({ name: 'index' })
        }
      } else {
        alert('login error')
      }
    }
  },
  mounted() {
    var datascource = {
      'id': 0,
      'name': 'Lao Lao',
      'title': 'general manager',
      'children': [
        { 'id': 1, 'name': 'Bo Miao', 'title': 'department manager' },
        {
          'id': 2, 'name': 'Su Miao', 'title': 'department manager',
          'children': [
            { 'id': 3, 'name': 'Tie Hua', 'title': 'senior engineer' },
            { 'id': 4, 'name': 'Hei Hei', 'title': 'senior engineer' }
          ]
        },
        { 'id': 9, 'name': 'Bo Miao', 'title': 'department manager' }
      ]
    };
    $('#chart-container').orgchart({
      'data': datascource,
      // 'nodeContent': 'title',
      // 'verticalDepth': 3,
      // 'depth': 4,
      'createNode': function($node, data) {
        // console.log($node)
        $node.on('click', function() {
          // console.log(data)
        });
      }
    });
  }
}
</script>

<style>
.row {
  justify-content: inherit;
}
</style>

