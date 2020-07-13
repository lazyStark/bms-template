<!--
 * @Author: siwenfeng
 * @Date: 2020-07-03 16:39:17
 * @LastEditTime: 2020-07-13 10:06:03
 * @Description: this is ....t
-->
<template>
  <ul class="top-menu">
    <li
      v-for="(menu, index) in topMenu"
      :key="index"
      class="menu-item menu-horizontal animated shake"
      :class="[activeIndex === index ? 'menu-active' : '']"
      @mouseover="linkHover(index)"
      @mouseleave="linkLeave(index)"
      @click="openMenu(menu)"
    >
      <p class="link-title">{{ $t(`route.${menu.title}`) }}</p>
      <div class="menu-link">
        <svg-icon
          v-if="activeIndex === index "
          :icon-class="menu.icon + '-white'"
          class="link-icon"
        />
        <svg-icon v-else :icon-class="menu.icon" class="link-icon" />
      </div>
    </li>
  </ul>
</template>

<script>
import { topRoutes } from '@/api/user'

export default {
  name: 'MenuLink',
  data() {
    return {
      activeIndex: -1,
      topMenu: []
    }
  },
  created() {
    sessionStorage.removeItem('menuId')
    this.refreshTopMenu()
  },
  methods: {
    linkHover(index) {
      this.activeIndex = index
    },
    linkLeave(index) {
      this.activeIndex = -1
    },
    refreshTopMenu() {
      topRoutes().then(res => {
        this.topMenu = res.data
      })
    },
    openMenu(item) {
      sessionStorage.setItem('menuId', item.menuId)
      const path = this.redirectFisrtRoute(item.children[0])
      this.$store.dispatch('user/updateLoadMenus', true).then(res => {
        this.$router.push({ path })
      })
    },
    redirectFisrtRoute(route) {
      if (!route.children || !route.children.length) {
        return '/' + route.path
      }
      return '/' + route.path + this.redirectFisrtRoute(route.children[0])
    }
  }
}
</script>
<style lang="scss" scoped>
.top-menu {
  padding: 10px;
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  .menu-item {
    margin-bottom: 10px;
    padding: 16px;
    background-color: hsla(0, 0%, 100%, 0.4);
    border-radius: 15px;
    color: #1c1c1c;
    margin-right: 10px;
    .link-title {
      height: 30px;
      line-height: 30px;
      font-size: 18px;
      font-weight: bold;
    }
  }
  .menu-horizontal {
    height: 172px;
  }
  .menu-active {
    background: linear-gradient(22deg, #3de7ff, #217bf4);
    border-radius: 15px;
    color: #fff;
    cursor: pointer;
  }
}
.menu-link {
  width: 200px;
  height: calc(100% - 30px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.link-icon {
  font-size: 60px;
}
</style>

