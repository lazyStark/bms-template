<template>
  <el-form
    ref="loginForm"
    class="login-form"
    status-icon
    :rules="loginRules"
    :model="loginForm"
    label-width="0"
  >
    <el-form-item v-if="tenantMode" prop="tenantId">
      <el-input
        v-model="loginForm.tenantId"
        size="small"
        auto-complete="off"
        :placeholder="$t('login.tenantId')"
        @keyup.enter.native="handleLogin"
      >
        <i slot="prefix" class="icon-quanxian" />
      </el-input>
    </el-form-item>
    <el-form-item prop="username">
      <el-input
        v-model="loginForm.username"
        size="small"
        auto-complete="off"
        :placeholder="$t('login.username')"
        @keyup.enter.native="handleLogin"
      >
        <i slot="prefix" class="el-icon-user" />
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        v-model="loginForm.password"
        size="small"
        :type="passwordType"
        auto-complete="off"
        :placeholder="$t('login.password')"
        @keyup.enter.native="handleLogin"
      >
        <i slot="suffix" class="el-icon-view el-input__icon" @click="showPassword" />
        <i slot="prefix" class="icon-mima" />
      </el-input>
    </el-form-item>
    <el-form-item v-if="captchaMode" prop="code">
      <el-row :span="24">
        <el-col :span="16">
          <el-input
            v-model="loginForm.code"
            size="small"
            auto-complete="off"
            :placeholder="$t('login.code')"
            @keyup.enter.native="handleLogin"
          >
            <i slot="prefix" class="icon-yanzhengma" />
          </el-input>
        </el-col>
        <el-col :span="8">
          <div class="login-code">
            <img :src="loginForm.image" class="login-code-img" @click="refreshCode">
          </div>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        size="small"
        class="login-submit"
        @click.native.prevent="handleLogin"
      >{{ $t('login.logIn') }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>

export default {
  name: 'Userlogin',
  data() {
    return {
      tenantMode: false,
      captchaMode: true,
      loginForm: {
        // 租户ID
        tenantId: '000000',
        // 用户名
        username: 'admin',
        // 密码
        password: '111111',
        // 验证码的值
        code: '',
        // 验证码的索引
        image:
          'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
      },
      loginRules: {
        tenantId: [
          { required: false, message: '请输入租户ID', trigger: 'blur' }
        ],
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 1, message: '密码长度最少为6位', trigger: 'blur' }
        ]
      },
      passwordType: 'password',
      redirect: '',
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created() {
    // this.refreshCode();
  },
  mounted() {},
  methods: {
    refreshCode() {
    },
    showPassword() {
      this.passwordType === ''
        ? (this.passwordType = 'password')
        : (this.passwordType = '')
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          const loading = this.$loading({
            lock: true,
            text: '登录中,请稍后。。。',
            spinner: 'el-icon-loading'
          })
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: '/welcome' })
              // this.$router.push({ path: '/pollution/gismap' })
              loading.close()
            })
            .catch(() => {
              loading.close()
            })
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style>
</style>
