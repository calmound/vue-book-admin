<script setup lang="ts">
import { MENU } from "@/constants/menus";
import { useRouter } from "vue-router";

const router = useRouter();

const handleMenuClick = (menu: (typeof MENU)[0]) => {
  router.push(menu.path);
};
</script>

<template>
  <el-container class="container">
    <el-aside width="200px">
      <div class="header">图书管理系统</div>
      <el-menu default-active="/borrow_book" class="el-menu">
        <el-menu-item
          :index="menu.path"
          v-for="menu in MENU"
          @click="handleMenuClick(menu)"
        >
          <el-icon><icon-menu /></el-icon>
          <span>{{ menu.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="container-header"></el-header>
      <el-main>
        <router-view> </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.container {
  height: 100%;
}
.header {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ececec;
}

.container-header {
  height: 61px;
  border-bottom: 1px solid #ececec;
}

.el-menu {
  height: 100%;
}
</style>
