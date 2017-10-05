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
                    <div class="icon-object border-slate-300 text-slate-300"><i class="glyphicon glyphicon-user"></i></div>
                    <h5 class="content-group">管理後台 <small class="display-block">請輸入帳號跟密碼</small></h5>
                  </div>

                  <div class="form-group has-feedback has-feedback-left">
                    <input type="text" class="form-control" placeholder="Username" v-model="account">
                    <div class="form-control-feedback">
                      <i class="icon-user text-muted"></i>
                    </div>
                  </div>

                  <div class="form-group has-feedback has-feedback-left">
                    <input type="password" class="form-control" placeholder="Password" v-model="pw">
                    <div class="form-control-feedback">
                      <i class="icon-lock2 text-muted"></i>
                    </div>
                  </div>

                  <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block" @click.prevent="handleLogin">登入 <i class="icon-circle-right2 position-right"></i></button>
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

  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      account: "",
      pw: ""
    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style>
.row {
  justify-content: inherit;
}

</style>

