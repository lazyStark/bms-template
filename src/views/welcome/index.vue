<!--
 * @Author: siwenfeng
 * @Date: 2020-07-02 11:53:53
 * @LastEditTime: 2020-07-13 10:13:49
 * @Description: this is ....
-->
<template>
  <div class="lazy-nav animated rotateInDownLeft">
    <basic-container>
      <ul class="lazy-setting">
        <li class="setting-item">
          <lang-select class="set-language" />
        </li>
        <li class="setting-item" @click="logout">
          <svg-icon icon-class="logout" />
        </li>
        <li class="setting-item">
          <i class="icon-yonghu" />
          <span class="setting-name">3clear</span>
        </li>
      </ul>
      <p class="lazy-title">{{ $t('welcome.title') }}</p>
      <MenuLink />
    </basic-container>
  </div>
</template>

<script>
import BasicContainer from '@/components/BasicContainer'
import MenuLink from '@/components/Welcome'
import LangSelect from '@/components/LangSelect'
export default {
  name: 'Welcome',
  components: { BasicContainer, MenuLink, LangSelect },
  methods: {
    logout() {
      this.$store.dispatch('user/logout').then(res => {
        this.$router.push(`/login`)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.lazy-nav {
  background: url('../../assets/img/wel-bg.png') no-repeat center center;
  height: 100%;
  width: 100%;
  background-color: #293c91;
}
.lazy-title {
  color: #fff;
  font-weight: bold;
  padding: 10px;
  font-size: 34px;
}
.lazy-setting {
  display: flex;
  padding: 8px 16px;
  align-items: center;
  flex-direction: row-reverse;
  .setting-name {
    margin-left: 10px;
    color: #000;
  }
  .setting-item {
    &:nth-child(3) {
      border-radius: 20px;
    }
    &:nth-child(2) {
      border-radius: 50%;
    }
    cursor: pointer;
    height: 45px;
    padding: 0px 14px;
    line-height: 45px;
    background: rgba(255, 255, 255, 0.13);
    margin-left: 20px;
    &:hover {
      color: #000;
      background-color: rgba(255, 255, 255, 0.8);
    }
    &:nth-child(1) {
      background: #fff;
      border-radius: 5px;
      padding: 0 2px;
      height: 20px;
      line-height: 20px;
    }
  }
}
</style>
