<!--
 * @Author: siwenfeng
 * @Date: 2020-07-02 14:49:59
 * @LastEditTime: 2020-07-11 23:05:01
 * @Description: this is ....
-->
<template>
  <div class="login-container">
    <!-- <top-color v-show="false" /> -->
    <div class="login-weaper animated bounceInDown">
      <div class="login-left">
        <div class="login-time">{{ time }}</div>
        <img class="img" src="../../assets/img/logo.png" alt>
        <p class="title">{{ $t('login.info') }}</p>
      </div>
      <div class="login-border">
        <div class="login-main">
          <h4 class="login-title">
            {{ $t('login.title') }}{{ '' }}
            <lang-select class="set-language" />
          </h4>
          <userLogin />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import userLogin from './userlogin'
import { parseTime } from '@/utils'
import LangSelect from '@/components/LangSelect'
export default {
  name: 'Login',
  components: {
    userLogin,
    LangSelect
  },
  data() {
    return {
      time: ''
    }
  },
  created() {
    this.getTime()
    setInterval(() => {
      this.getTime()
    }, 1000)
  },
  methods: {
    getTime() {
      this.time = parseTime(new Date())
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/login.scss";
</style>
